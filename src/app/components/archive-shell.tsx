import type { ReactNode } from 'react';

export default function ArchiveShell({eyebrow,title,subtitle,children}:{eyebrow:string;title:string;subtitle:string;children:ReactNode}) {
 return <main className="min-h-screen bg-[#eee7d7] text-[#102c44]"><header className="bg-[#102c44] px-6 py-14 text-center text-white"><p className="text-xs uppercase tracking-[.25em] text-[#c9b98c]">{eyebrow}</p><h1 className="mt-3 font-serif text-4xl font-bold md:text-6xl">{title}</h1><p className="mx-auto mt-4 max-w-3xl text-[#eee7d7]">{subtitle}</p></header><section className="mx-auto max-w-6xl px-6 py-12">{children}</section></main>;
}
