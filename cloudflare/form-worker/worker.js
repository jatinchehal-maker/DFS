// DFS website form handler (Cloudflare Worker).
// Route: deltafacilitiessolutions.com/api/form*
// Needs a "Send email" binding named MAILER whose destination is the business Gmail,
// and Email Routing turned on for the domain (the sender below must be on the domain).
import { EmailMessage } from "cloudflare:email";

const SITE = "https://deltafacilitiessolutions.com";
const FROM = "forms@deltafacilitiessolutions.com";
const TO = "deltafacilitiessolutions@gmail.com";
const SKIP = new Set(["_subject", "_next", "_honey", "_template"]);

const clean = (s, max = 4000) => String(s ?? "").replace(/\r/g, "").slice(0, max);
const header = (s) => clean(s, 200).replace(/[\n\r]/g, " ");
const b64 = (s) => {
  let bin = "";
  for (const b of new TextEncoder().encode(s)) bin += String.fromCharCode(b);
  return btoa(bin);
};
const encWord = (s) => `=?UTF-8?B?${b64(s)}?=`;

export default {
  async fetch(request, env) {
    if (request.method !== "POST") return new Response("Method not allowed", { status: 405 });

    const form = await request.formData();
    let next = String(form.get("_next") || SITE + "/thanks/");
    if (!next.startsWith(SITE + "/")) next = SITE + "/thanks/";

    // Bots fill the hidden honeypot field; pretend it worked.
    if (form.get("_honey")) return Response.redirect(next, 303);

    const fields = {};
    for (const [k, v] of form.entries()) {
      if (SKIP.has(k) || typeof v !== "string") continue;
      fields[k] = fields[k] ? `${fields[k]}, ${clean(v)}` : clean(v);
    }
    if (!fields.name || !fields.email) return new Response("Please fill in your name and email.", { status: 400 });

    const subject = header(form.get("_subject") || "New message from deltafacilitiessolutions.com");
    const body =
      Object.entries(fields).map(([k, v]) => `${k[0].toUpperCase() + k.slice(1)}: ${v}`).join("\n\n") +
      `\n\n---\nSent from ${header(request.headers.get("Referer") || SITE)}\n`;
    const replyTo = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(fields.email) ? header(fields.email) : "";

    const raw = [
      `From: ${encWord("DFS Website")} <${FROM}>`,
      `To: <${TO}>`,
      replyTo && `Reply-To: <${replyTo}>`,
      `Subject: ${encWord(subject)}`,
      `Date: ${new Date().toUTCString()}`,
      `Message-ID: <${crypto.randomUUID()}@deltafacilitiessolutions.com>`,
      "MIME-Version: 1.0",
      "Content-Type: text/plain; charset=UTF-8",
      "Content-Transfer-Encoding: base64",
      "",
      b64(body).replace(/.{76}/g, "$&\r\n"),
    ].filter(Boolean).join("\r\n");

    try {
      await env.MAILER.send(new EmailMessage(FROM, TO, raw));
    } catch (e) {
      console.error("send failed", e?.message || e);
      return new Response("Sorry, your message could not be sent. Please email " + TO, { status: 502 });
    }
    return Response.redirect(next, 303);
  },
};
