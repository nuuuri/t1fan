import {
  Nanum_Gothic_Coding,
  Noto_Sans_KR,
  Roboto,
  Silkscreen,
} from 'next/font/google';

const cls = (...classnames: string[]) => classnames.join(' ');

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['100', '400', '700'],
  variable: '--noto_sans_kr',
  display: 'swap',
});

const nanumGothicCoding = Nanum_Gothic_Coding({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--nanum-gothic-coding',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '400', '700'],
  variable: '--roboto',
});

const silkScreen = Silkscreen({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--silk_screen',
});

export const FontClassNames = cls(
  notoSansKr.className,
  nanumGothicCoding.variable,
  roboto.variable,
  silkScreen.variable,
);
