#!/usr/bin/env bash
set -euo pipefail
cd /workspaces/presidential-pastime
STAMP=$(date +%Y%m%d-%H%M%S)
mkdir -p "heritage-backups/$STAMP" src/app/heritage-collection/'[slug]'
if [ -f src/app/heritage-collection/page.tsx ]; then cp src/app/heritage-collection/page.tsx "heritage-backups/$STAMP/page.tsx"; fi
cat > src/app/heritage-collection/collection-data.ts <<'EOF'
export type Exhibit = {
  slug: string;
  title: string;
  category: string;
  year: string;
  president: string;
  presidentSlug: string;
  description: string;
  researchNote: string;
  image?: string;
};

// Research topics, not claims that Presidential Pastime owns or has authenticated artifacts.
// Replace with specific documented items and credited images after verifying provenance and rights.
export const exhibits: Exhibit[] = [
  {slug:'taft-1910-opening-day',title:'1910 Washington Opening Day Programs & Tickets',category:'Tickets & Programs',year:'1910',president:'William Howard Taft',presidentSlug:'william-howard-taft',description:'Explore surviving printed materials associated with the Opening Day game at which Taft inaugurated the presidential first-pitch tradition.',researchNote:'Locate a specific original ticket or program in a catalog or auction archive before describing or illustrating an individual object.'},
  {slug:'taft-first-pitch-photography',title:'Taft First-Pitch Photographs',category:'Photographs',year:'1910',president:'William Howard Taft',presidentSlug:'william-howard-taft',description:'Historic photographic records of Taft and Washington baseball.',researchNote:'Confirm the exact date and photographer of each image before assigning it to the 1910 ceremony.',image:'/taft-first-pitch-1910.jpg'},
  {slug:'wilson-1915-world-series',title:'1915 World Series Tickets & Programs',category:'Tickets & Programs',year:'1915',president:'Woodrow Wilson',presidentSlug:'woodrow-wilson',description:'Printed souvenirs and documentary material from the World Series attended by President Wilson.',researchNote:'Find a documented specimen and distinguish the specific game and venue.'},
  {slug:'coolidge-1924-world-series',title:'1924 World Series Admission Tickets',category:'Tickets & Programs',year:'1924',president:'Calvin Coolidge',presidentSlug:'calvin-coolidge',description:'Tickets associated with the Washington Senators’ championship series against the New York Giants.',researchNote:'A ticket from a particular game requires independent provenance and a verified photograph.'},
  {slug:'coolidge-1924-photographs',title:'Coolidge and the 1924 Senators',category:'Photographs',year:'1924',president:'Calvin Coolidge',presidentSlug:'calvin-coolidge',description:'Period photographs recording the White House connection with Washington’s championship season.',researchNote:'Check Library of Congress catalog records for image dates, captions and reproduction rights.',image:'/coolidge-world-series-1924.jpg'},
  {slug:'fdr-opening-day',title:'Franklin Roosevelt Opening Day Programs',category:'Programs & Scorecards',year:'1930s–1940s',president:'Franklin D. Roosevelt',presidentSlug:'franklin-d-roosevelt',description:'Programs and scorecards connected to baseball during the Roosevelt administration.',researchNote:'Identify a specific dated program and holding institution before presenting it as an exhibit object.'},
  {slug:'kennedy-1961-opening-day',title:'1961 Washington Opening Day Tickets',category:'Tickets & Programs',year:'1961',president:'John F. Kennedy',presidentSlug:'john-f-kennedy',description:'Ephemera relating to Kennedy’s first presidential Opening Day appearance.',researchNote:'Verify the original ticket, game date, and collection or auction attribution.'},
  {slug:'kennedy-first-pitch-photo',title:'Kennedy’s 1961 First-Pitch Photograph',category:'Photographs',year:'1961',president:'John F. Kennedy',presidentSlug:'john-f-kennedy',description:'A photographic record of the president at Washington baseball.',researchNote:'Confirm photo credit and exact event attribution using the source archive.',image:'/jfk-first-pitch-1961.jpg'},
  {slug:'presidential-signed-baseballs',title:'Baseballs Signed by U.S. Presidents',category:'Signed Baseballs',year:'20th–21st centuries',president:'Multiple presidents',presidentSlug:'',description:'A future gallery of authenticated presidential signatures on baseballs, including examples documented in museum and auction records.',researchNote:'Do not assign signatures, owners, values, or authentication status until an individual ball has been verified.'},
  {slug:'bush-2001-world-series',title:'2001 World Series Game 3 Tickets & Programs',category:'Tickets & Programs',year:'2001',president:'George W. Bush',presidentSlug:'george-w-bush',description:'Printed artifacts associated with the president’s ceremonial first pitch at Yankee Stadium.',researchNote:'Find a documented Game 3 specimen with image permission and a reliable provenance trail.'},
];
EOF
cat > src/app/heritage-collection/page.tsx <<'EOF'
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
  <section className="mx-auto max-w-6xl px-6 py-10"><div className="mb-6 border-l-4 border-[#a4282d] bg-[#f8f3e8] p-4 text-sm leading-6"><strong>Collection status:</strong> These are research exhibit topics, not authenticated objects held by Presidential Pastime. Individual artifacts and credits will be added after verification.</div>
   <div className="mb-8 flex flex-col gap-3 md:flex-row"><input aria-label="Search exhibits" className="w-full border border-[#b8aa8e] bg-white p-3 md:flex-1" placeholder="Search by president, year, or artifact..." value={search} onChange={e=>setSearch(e.target.value)}/><select aria-label="Filter by category" className="border border-[#b8aa8e] bg-white p-3" value={category} onChange={e=>setCategory(e.target.value)}>{categories.map(c=><option key={c}>{c}</option>)}</select></div>
   <p className="mb-4 text-sm text-[#59636b]">{filtered.length} research exhibits</p><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{filtered.map(e=><Link key={e.slug} href={`/heritage-collection/${e.slug}`} className="group overflow-hidden border border-[#b8aa8e] bg-[#f8f3e8] hover:border-[#a4282d]"><div className="flex h-44 items-center justify-center bg-[#102c44] p-3">{e.image?<img src={e.image} alt={e.title} className="h-full w-full object-contain"/>:<span className="px-5 text-center font-serif text-2xl text-[#c9b98c]">{e.category}</span>}</div><div className="p-5"><p className="text-xs font-bold uppercase tracking-widest text-[#a4282d]">{e.category} · {e.year}</p><h2 className="mt-2 font-serif text-xl font-bold">{e.title}</h2><p className="mt-2 text-sm text-[#59636b]">{e.president}</p><p className="mt-3 text-sm leading-6">{e.description}</p><p className="mt-4 text-sm font-bold text-[#a4282d]">Explore research exhibit →</p></div></Link>)}</div>{filtered.length===0&&<p>No exhibits match your search.</p>}
  </section></main>;
}
EOF
cat > 'src/app/heritage-collection/[slug]/page.tsx' <<'EOF'
import Link from "next/link";
import { notFound } from "next/navigation";
import { exhibits } from "../collection-data";
export function generateStaticParams(){return exhibits.map(e=>({slug:e.slug}));}
export default async function ExhibitPage({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;const e=exhibits.find(item=>item.slug===slug);if(!e)notFound();
 return <main className="min-h-screen bg-[#eee7d7] text-[#102c44]"><header className="border-b-4 border-[#a4282d] bg-[#102c44] px-6 py-5 text-white"><div className="mx-auto max-w-5xl"><Link href="/" className="font-serif text-2xl font-bold">PRESIDENTIAL PASTIME</Link></div></header><div className="mx-auto max-w-5xl px-6 py-10"><Link href="/heritage-collection" className="text-sm font-bold text-[#a4282d]">← Heritage Collection</Link><p className="mt-10 text-xs font-bold uppercase tracking-[0.25em] text-[#a4282d]">{e.category} · Research exhibit</p><h1 className="mt-2 font-serif text-4xl font-bold">{e.title}</h1><p className="mt-3 text-[#59636b]">{e.year} · {e.president}</p><section className="mt-8 grid gap-8 md:grid-cols-2"><div className="flex min-h-64 items-center justify-center bg-[#102c44] p-4">{e.image?<img src={e.image} alt={e.title} className="max-h-[500px] w-full object-contain"/>:<p className="text-center font-serif text-2xl text-[#c9b98c]">Artifact photograph pending verification</p>}</div><div className="border border-[#b8aa8e] bg-[#f8f3e8] p-6"><h2 className="font-serif text-2xl font-bold">Historical Context</h2><p className="mt-4 leading-8">{e.description}</p><h3 className="mt-7 font-serif text-xl font-bold">Research & Provenance</h3><p className="mt-3 leading-7">{e.researchNote}</p><p className="mt-5 text-sm italic text-[#59636b]">No physical artifact ownership or authentication is claimed by this research exhibit.</p>{e.presidentSlug&&<Link href={`/presidents/${e.presidentSlug}`} className="mt-6 inline-block border-b-2 border-[#a4282d] font-bold text-[#a4282d]">Explore {e.president}'s baseball history →</Link>}</div></section></div></main>;
}
EOF
npm run build
printf '\nSUCCESS: Heritage Collection pages built. Review before committing.\n'
