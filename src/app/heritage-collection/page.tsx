"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { exhibits } from "./collection-data";
const categories = ["All", ...Array.from(new Set(exhibits.map(e => e.category)))];
export default function HeritageCollectionPage() {
 const [category, setCategory] = useState("All");
 const [search, setSearch] = useState("");
 const filtered = useMemo(() => exhibits.filter(e => (category === "All" || e.category === category) && [e.title,e.president,e.year,e.description].join(" ").toLowerCase().includes(search.toLowerCase())), [category,search]);
 return <main className="min-h-screen bg-[#eee7d7] text-[#102c44]">
  <header className="border-b-4 border-[#a4282d] bg-[#102c44] px-6 py-5 text-white"><div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4"><Link href="/" className="font-serif text-2xl font-bold">PRESIDENTIAL PASTIME</Link><nav className="flex flex-wrap gap-4 text-sm"><Link href="/presidents">Presidents</Link><Link href="/first-pitches">First Pitches</Link><Link href="/photo-archive">Photo Archive</Link></nav></div></header>
  <section className="bg-[#102c44] px-6 py-16 text-center text-white"><p className="text-xs uppercase tracking-[0.3em] text-[#c9b98c]">Presidential Pastime</p><h1 className="mt-3 font-serif text-4xl font-bold md:text-6xl">The Heritage Collection</h1><p className="mx-auto mt-5 max-w-2xl text-[#eee7d7]">A developing research gallery of presidential baseball artifacts, photographs, tickets, and signed baseballs.</p></section>
  {/* HERITAGE FEATURED EXHIBIT */}
  <section className="mx-auto max-w-6xl px-6 pt-10">
    <div className="grid overflow-hidden border-2 border-[#b8aa8e] bg-[#f8f3e8] md:grid-cols-2">
      <div className="flex min-h-64 items-center justify-center bg-[#102c44] p-5">
        <img src="/heritage/walter-johnson-baseballs.jpg" alt="1937 archival photograph of Walter Johnson's six presidential-autographed baseballs" className="max-h-80 w-full object-contain" />
      </div>
      <div className="flex flex-col justify-center p-7 md:p-10">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a4282d]">Featured Archival Exhibit · 1937</p>
        <h2 className="mt-3 font-serif text-3xl font-bold">Walter Johnson's Six Presidential Baseballs</h2>
        <p className="mt-4 leading-7 text-[#59636b]">Explore the historic photograph documenting six presidential-autographed baseballs associated with Washington Senators legend Walter Johnson, with links to the presidents and the Library of Congress catalog.</p>
        <p className="mt-3 text-xs text-[#59636b]">Photograph: Harris &amp; Ewing Collection, Library of Congress. The original baseballs are not owned by Presidential Pastime.</p>
        <Link href="/heritage-collection/walter-johnson-presidential-baseballs" className="mt-6 inline-block self-start border-b-2 border-[#a4282d] pb-1 font-bold text-[#a4282d]">Explore the featured exhibit →</Link>
      </div>
    </div>
  </section>
  <section className="mx-auto max-w-6xl px-6 py-10"><div className="mb-6 border-l-4 border-[#a4282d] bg-[#f8f3e8] p-4 text-sm leading-6"><strong>Collection status:</strong> These are research exhibit topics, not authenticated objects held by Presidential Pastime. Individual artifacts and credits will be added after verification.</div>
   <div className="mb-8 flex flex-col gap-3 md:flex-row"><input aria-label="Search exhibits" className="w-full border border-[#b8aa8e] bg-white p-3 md:flex-1" placeholder="Search by president, year, or artifact..." value={search} onChange={e=>setSearch(e.target.value)}/><select aria-label="Filter by category" className="border border-[#b8aa8e] bg-white p-3" value={category} onChange={e=>setCategory(e.target.value)}>{categories.map(c=><option key={c}>{c}</option>)}</select></div>
   <p className="mb-4 text-sm text-[#59636b]">{filtered.length} research exhibits</p><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{filtered.map(e=><Link key={e.slug} href={`/heritage-collection/${e.slug}`} className="group overflow-hidden border border-[#b8aa8e] bg-[#f8f3e8] hover:border-[#a4282d]"><div className="flex h-44 items-center justify-center bg-[#102c44] p-3">{e.image?<img src={e.image} alt={e.title} className="h-full w-full object-contain"/>:<span className="px-5 text-center font-serif text-2xl text-[#c9b98c]">{e.category}</span>}</div><div className="p-5"><p className="text-xs font-bold uppercase tracking-widest text-[#a4282d]">{e.category} · {e.year}</p><h2 className="mt-2 font-serif text-xl font-bold">{e.title}</h2><p className="mt-2 text-sm text-[#59636b]">{e.president}</p><p className="mt-3 text-sm leading-6">{e.description}</p><p className="mt-4 text-sm font-bold text-[#a4282d]">Explore research exhibit →</p></div></Link>)}</div>{filtered.length===0&&<p>No exhibits match your search.</p>}
  </section>
  {/* HERITAGE RESEARCH GUIDE */}
  <section className="border-t-4 border-[#a4282d] bg-[#102c44] px-6 py-14 text-white">
    <div className="mx-auto max-w-6xl">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9b98c]">Inside the Archive</p>
      <h2 className="mt-3 font-serif text-3xl font-bold">How We Document History</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="border border-[#c9b98c] p-5"><h3 className="font-serif text-xl font-bold">Original Sources</h3><p className="mt-3 text-sm leading-7 text-[#eee7d7]">Whenever possible, exhibits link to original institutional catalogs, contemporary photographs, and historical records.</p></div>
        <div className="border border-[#c9b98c] p-5"><h3 className="font-serif text-xl font-bold">Artifact Provenance</h3><p className="mt-3 text-sm leading-7 text-[#eee7d7]">We distinguish a documented historical object from a research topic and never imply ownership of artifacts held elsewhere.</p></div>
        <div className="border border-[#c9b98c] p-5"><h3 className="font-serif text-xl font-bold">Photo Credits</h3><p className="mt-3 text-sm leading-7 text-[#eee7d7]">Images are credited to their source institutions; publication and reuse permissions must be checked independently.</p></div>
      </div>
      <a href="https://www.loc.gov/item/2016875530/" target="_blank" rel="noopener noreferrer" className="mt-8 inline-block border-b border-[#c9b98c] pb-1 font-semibold text-[#c9b98c]">Explore our first Library of Congress source ↗</a>
    </div>
  </section></main>;
}
