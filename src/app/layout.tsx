import type { Metadata } from 'next';

import './globals.css';
import { FontClassNames } from './font';
import LNB from './LNB';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={FontClassNames}>
      <body className="flex w-screen h-screen overflow-hidden tracking-wider cursor-default">
        <LNB
          menus={[
            {
              text: '영상 모아보기',
              path: '/videos',
            },
            {
              text: '기사 모아보기',
              path: '/articles',
            },
            {
              text: '캘린더',
              path: '/calendar',
            },
          ]}
        />
        <div className="w-[calc(100%-240px)] p-5">{children}</div>
      </body>
    </html>
  );
}
