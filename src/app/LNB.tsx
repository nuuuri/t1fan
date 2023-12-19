'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
  menus: { text: string; path: string }[];
};

export default function LNB({ menus }: Props) {
  const pathname = usePathname();

  return (
    <div className="w-60 p-5 bg-zinc-100">
      <Link href="/">
        <div className="mb-5 text-2xl font-silk-screen font-bold tracking-tight">
          T1 Fan Page
        </div>
      </Link>
      {menus.map((menu) => (
        <Link key={menu.path} href={menu.path}>
          <div
            className={`my-2 font-nanum-gothic-coding font-bold  hover:text-zinc-800 ${
              menu.path === pathname ? 'text-zinc-800' : 'text-zinc-400'
            }`}>
            {menu.text}
          </div>
        </Link>
      ))}
    </div>
  );
}
