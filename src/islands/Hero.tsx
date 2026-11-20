import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';

type Copy = {
  tagline: string;
  business: string; seekers: string;
  bizTitle: string; bizLead: string; bizPrimary: string; bizSecondary: string;
  seekTitle: string; seekLead: string; seekPrimary: string; seekSecondary: string;
};
type Props = { copy: Copy; contactHref: string; careersHref: string; email: string; yardImg: string; logoImg: string };

const WORDS = ['Delta', 'Facilities', 'Solutions'];
const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero({ copy, contactHref, careersHref, email, yardImg, logoImg }: Props) {
  const reduce = useReducedMotion();
  const [tab, setTab] = useState<'biz' | 'seek'>('biz');
  const d = (s: number) => (reduce ? 0 : s);

  const panel = tab === 'biz'
    ? { title: copy.bizTitle, lead: copy.bizLead, primary: [copy.bizPrimary, contactHref], secondary: [copy.bizSecondary, careersHref] }
    : { title: copy.seekTitle, lead: copy.seekLead, primary: [copy.seekPrimary, careersHref], secondary: [copy.seekSecondary, contactHref] };

  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      {/* Aerial truck yard from the DFS flyer */}
      <motion.div
        aria-hidden="true"
        className="h-20 w-full bg-cover bg-center sm:h-28"
        style={{ backgroundImage: `url(${yardImg})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.55 }}
        transition={{ duration: d(1.2) }}
      />

      <div className="container-x relative grid gap-12 pb-16 pt-10 md:pb-20 lg:grid-cols-[1.25fr_1fr] lg:items-end">
        <div className="relative">
          {/* The flyer's diagonal arrow, drawn once on load */}
          <svg aria-hidden="true" viewBox="0 0 100 100" className="absolute right-0 top-2 h-16 w-16 text-paper sm:h-28 sm:w-28 lg:right-6">
            <motion.path
              d="M14 86 L80 20 M34 20 H80 V66"
              fill="none" stroke="currentColor" strokeWidth="14" strokeLinecap="square"
              initial={{ pathLength: reduce ? 1 : 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: d(1.1), delay: d(0.6), ease }}
            />
          </svg>
          <h1 className="display text-[19vw] sm:text-[8.5rem] lg:text-[9.5rem]" aria-label="Delta Facilities Solutions">
            {WORDS.map((w, i) => (
              <span key={w} className="block overflow-hidden" aria-hidden="true">
                <motion.span
                  className={`block ${i === 1 ? 'text-paper' : 'text-paper/55'}`}
                  initial={{ y: reduce ? 0 : '105%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: d(0.9), delay: d(0.15 + i * 0.12), ease }}
                >
                  {w}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.p
            className="mt-5 text-xl font-semibold sm:text-2xl"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: d(0.7), duration: d(0.6) }}
          >
            {copy.tagline}
          </motion.p>
        </div>

        <motion.div
          className="relative rounded-[28px] bg-paper p-6 text-ink sm:p-8"
          initial={{ opacity: 0, y: reduce ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: d(0.8), duration: d(0.7), ease }}
        >
          <div role="tablist" aria-label="Audience" className="inline-flex rounded-2xl bg-concrete p-1 text-sm font-semibold">
            {(['biz', 'seek'] as const).map((k) => (
              <button
                key={k} role="tab" aria-selected={tab === k} onClick={() => setTab(k)}
                className="relative rounded-xl px-4 py-2"
              >
                {tab === k && (
                  <motion.span layoutId="aud-pill" className="absolute inset-0 rounded-xl bg-ink" transition={{ type: 'spring', stiffness: 500, damping: 40 }} />
                )}
                <span className={`relative ${tab === k ? 'text-paper' : 'text-ink'}`}>{k === 'biz' ? copy.business : copy.seekers}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={tab}
              role="tabpanel"
              initial={{ opacity: 0, x: reduce ? 0 : 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: reduce ? 0 : -16 }}
              transition={{ duration: 0.25 }}
              className="mt-6"
            >
              <h2 className="font-display text-3xl font-extrabold leading-[1.02] sm:text-4xl">{panel.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-steel">{panel.lead}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={panel.primary[1]} className="btn-dark">{panel.primary[0]}</a>
                <a href={panel.secondary[1]} className="btn-line-dark">{panel.secondary[0]}</a>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-7 flex items-center gap-4 border-t-2 border-ink/10 pt-5">
            <img src={logoImg} alt="" className="h-12 w-auto" width="60" height="49" />
            <a href={`mailto:${email}`} className="break-all text-sm font-semibold hover:underline">{email}</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
