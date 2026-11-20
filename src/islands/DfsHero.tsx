import SculptureHero from '@/components/ui/liquid-sculpture-hero';

type Props = {
  headline: string; body: string; hint: string; hintTouch: string;
  primary: { label: string; href: string }; secondary: { label: string; href: string };
  logoSrc: string;
};

/** DFS hero: the DFS logo rebuilt from particles (21st.dev "Sculpture Hero"). */
export default function DfsHero({ headline, body, hint, hintTouch, primary, secondary, logoSrc }: Props) {
  return (
    <SculptureHero
      src={logoSrc}
      darkSrc={logoSrc}
      mobileSrc={logoSrc}
      mobileDarkSrc={logoSrc}
      imageAlt="DFS logo, established 2022"
      showNav={false}
      eyebrow=""
      headline={headline}
      headlineAccent=""
      body={body}
      primaryCta={primary}
      secondaryCta={secondary}
      hint={hint}
      hintTouch={hintTouch}
      theme="dark"
      themeToggle={false}
      background="#000000"
      darkBackground="#000000"
      textColor="#ffffff"
      accentColor="#ffffff"
      headingFont="'Big Shoulders Display', 'Archivo Narrow', Impact, sans-serif"
      bodyFont="'Archivo', 'Helvetica Neue', Arial, sans-serif"
      accentFont="'Big Shoulders Display', Impact, sans-serif"
      loadFonts={false}
      intro
      backdropText=""
      sculptureScale={0.82}
      mobileSculptureScale={0.72}
      sculptureY={2}
      height="calc(100svh - 76px)"
      showCredit
    />
  );
}
