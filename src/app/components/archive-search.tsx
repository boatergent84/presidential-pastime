'use client';
import { useState } from 'react';
import Link from 'next/link';
export type ArchiveItem = {title:string; category:string; date:string; description:string; image?:string; href?:string; note?:string};
export default function ArchiveSearch({items}:{items:ArchiveItem[]}) {
 const [query,setQuery]=useState(''); const [category,setCategory]=useState('All');
 const categories=['All',...Array.from(new Set(items.map(i=>i.category)))];
 const filtered=items.filter(i=>(category==='All'||i.category===category)&&[i.title,i.category,i.date,i.description].join(' ').toLowerCase().includes(query.toLowerCase()));
 return <div>
  <div className="mb-7 flex flex-wrap gap-3"><input aria-label="Search collection" placeholder="Search names, years, artifacts..." value={query} onChange={e=>setQuery(e.target.value)} className="min-w-56 flex-1 rounded border border-[#b8aa8e] bg-white px-4 py-3 text-[#102c44]"/>
  <select aria-label="Filter by category" value={category} onChange={e=>setCategory(e.target.value)} className="rounded border border-[#b8aa8e] bg-white px-4 py-3 text-[#102c44]">{categories.map(c=><option key={c}>{c}</option>)}</select></div>
  <p className="mb-5 text-sm text-[#5d6670]">{filtered.length} records</p>
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{filtered.map((item,i)=><article key={`${item.title}-${i}`} className="overflow-hidden border border-[#c7bba4] bg-[#f8f3e8] shadow-sm">
   {item.image?<img src={item.image} alt={item.title} className="h-48 w-full object-cover"/>:<div className="flex h-48 items-center justify-center bg-[#ddd2be] px-5 text-center font-serif text-xl text-[#655a4b]">Archival exhibit</div>}
   <div className="p-5"><p className="text-xs font-bold uppercase tracking-widest text-[#a4282d]">{item.category} · {item.date}</p><h2 className="mt-2 font-serif text-xl font-bold">{item.title}</h2><p className="mt-3 text-sm leading-6 text-[#394b5a]">{item.description}</p>{item.note&&<p className="mt-3 text-xs italic text-[#675f55]">{item.note}</p>}{item.href&&<Link href={item.href} className="mt-4 inline-block font-semibold text-[#a4282d] underline">Explore history →</Link>}</div>
  </article>)}</div>{filtered.length===0&&<p>No matching records. Try another search.</p>}
 </div>;
}
