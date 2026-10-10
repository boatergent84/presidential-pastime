#!/usr/bin/env bash
set -euo pipefail
cd "$(git rev-parse --show-toplevel)"
if [ ! -f src/app/presidents/presidents-data.ts ]; then echo 'Wrong project directory'; exit 1; fi
STAMP=$(date +%Y%m%d-%H%M%S)
mkdir -p ".site-backups/$STAMP"
cp src/app/layout.tsx ".site-backups/$STAMP/layout.tsx"
cp src/app/page.tsx ".site-backups/$STAMP/homepage.tsx"
mkdir -p src/app/components src/app/first-pitches src/app/heritage-collection src/app/photo-archive
cat > src/app/components/site-nav.tsx <<'EOF'
import Link from 'next/link';
const links = [
  ['Home','/'], ['Presidents','/presidents'], ['First Pitches','/first-pitches'],
  ['Heritage Collection','/heritage-collection'], ['Photo Archive','/photo-archive']
];
export default function SiteNav() {
 return <nav aria-label="Main navigation" className="border-b-4 border-[#a4282d] bg-[#102c44] text-white">
  <div className="mx-auto max-w-6xl px-5 py-4">
   <Link href="/" className="font-serif text-xl font-bold tracking-wide">PRESIDENTIAL PASTIME</Link>
   <p className="mt-1 text-xs tracking-widest text-[#c9b98c]">AMERICA'S PRESIDENTS. AMERICA'S PASTIME.</p>
   <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">{links.map(([label,href])=><Link key={href} href={href} className="hover:text-[#c9b98c]">{label}</Link>)}</div>
  </div>
 </nav>
}
EOF
cat > src/app/components/archive-search.tsx <<'EOF'
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
EOF
cat > src/app/components/archive-shell.tsx <<'EOF'
import type { ReactNode } from 'react';
import SiteNav from './site-nav';
export default function ArchiveShell({eyebrow,title,subtitle,children}:{eyebrow:string;title:string;subtitle:string;children:ReactNode}) {
 return <main className="min-h-screen bg-[#eee7d7] text-[#102c44]"><SiteNav/><header className="bg-[#102c44] px-6 py-14 text-center text-white"><p className="text-xs uppercase tracking-[.25em] text-[#c9b98c]">{eyebrow}</p><h1 className="mt-3 font-serif text-4xl font-bold md:text-6xl">{title}</h1><p className="mx-auto mt-4 max-w-3xl text-[#eee7d7]">{subtitle}</p></header><section className="mx-auto max-w-6xl px-6 py-12">{children}</section></main>;
}
EOF
cat > src/app/first-pitches/page.tsx <<'EOF'
import type { Metadata } from 'next';
import ArchiveShell from '../components/archive-shell';
import ArchiveSearch, {type ArchiveItem} from '../components/archive-search';
export const metadata:Metadata={title:'First Pitch Archive | Presidential Pastime',description:'Explore documented ceremonial first pitches by U.S. presidents.'};
const items:ArchiveItem[]=[
 {title:'William Howard Taft — Opening Day',category:'Opening Day',date:'April 14, 1910',description:'Taft began the tradition of the sitting president throwing a ceremonial Opening Day first pitch at Washington’s National Park.',image:'/taft-first-pitch-1910.jpg',href:'/presidents/william-howard-taft'},
 {title:'Calvin Coolidge — Opening Day',category:'Opening Day',date:'April 12, 1927',description:'Coolidge continued the presidential first-pitch tradition in Washington.',image:'/coolidge-first-pitch-1927.jpg',href:'/presidents/calvin-coolidge'},
 {title:'John F. Kennedy — Washington Senators',category:'Opening Day',date:'April 10, 1961',description:'Kennedy threw the ceremonial first pitch at the new Senators franchise’s first Opening Day.',image:'/jfk-first-pitch-1961.jpg',href:'/presidents/john-f-kennedy'},
 {title:'Ronald Reagan — Wrigley Field',category:'Ballpark Ceremony',date:'1988',description:'Reagan made a ceremonial first-pitch appearance at Wrigley Field.',image:'/reagan-first-pitch-1988.jpg',href:'/presidents/ronald-reagan'},
 {title:'George W. Bush — World Series Game 3',category:'World Series',date:'October 30, 2001',description:'Bush delivered a memorable ceremonial first pitch at Yankee Stadium after the September 11 attacks.',href:'/presidents/george-w-bush'},
 {title:'Barack Obama — All-Star Game',category:'All-Star Game',date:'July 14, 2009',description:'Obama threw the ceremonial first pitch before the MLB All-Star Game in St. Louis.',href:'/presidents/barack-obama'}
];
export default function Page(){return <ArchiveShell eyebrow="A Presidential Tradition" title="The First Pitch Archive" subtitle="Documented ceremonies, historical photographs, and the stories behind the opening toss."><p className="mb-8 max-w-3xl leading-7">This is a growing selection of presidential first-pitch appearances, not yet an exhaustive database. Dates and images will be reviewed against archival records as the collection expands.</p><ArchiveSearch items={items}/></ArchiveShell>}
EOF
cat > src/app/heritage-collection/page.tsx <<'EOF'
import type { Metadata } from 'next';
import ArchiveShell from '../components/archive-shell';
import ArchiveSearch,{type ArchiveItem} from '../components/archive-search';
export const metadata:Metadata={title:'Heritage Collection | Presidential Pastime',description:'A developing museum of presidential baseball artifacts, tickets, autographs, and programs.'};
const items:ArchiveItem[]=[
 {title:'1910 Opening Day — Taft',category:'Tickets & Programs',date:'1910',description:'An exhibit category for original admission tickets, programs, and scorecards associated with Taft’s first-pitch ceremony.',href:'/presidents/william-howard-taft',note:'Artifact sought — no specific original has been cataloged.'},
 {title:'1924 World Series — Washington',category:'Tickets & Programs',date:'1924',description:'A future display of tickets and programs from the Senators–Giants World Series, with links to Calvin Coolidge’s baseball history.',href:'/presidents/calvin-coolidge',note:'Artifact sought — illustrative historical topic only.'},
 {title:'Presidential Autographed Baseballs',category:'Signed Baseballs',date:'20th–21st centuries',description:'A planned catalog of baseballs signed by U.S. presidents, with close-up images, authentication, provenance, and collection credits.',note:'No signed baseball is currently authenticated or cataloged here.'},
 {title:'Presidential First-Pitch Baseballs',category:'Baseballs',date:'1910–present',description:'Baseballs associated with presidential first-pitch ceremonies, where ownership and event attribution can be documented.',note:'Future exhibit category.'},
 {title:'Presidential Baseball Scorecards',category:'Scorecards',date:'Various years',description:'Original scorecards from games attended by presidents, with front-and-back photography and historical context.',note:'Future exhibit category.'},
 {title:'Letters, Invitations & Ephemera',category:'Documents',date:'Various years',description:'Presidential baseball correspondence, invitations, passes, and related paper artifacts.',note:'Future exhibit category.'}
];
export default function Page(){return <ArchiveShell eyebrow="The Presidential Pastime Museum" title="The Heritage Collection" subtitle="Preserving the material history of America’s presidents and America’s pastime."><p className="mb-8 max-w-3xl leading-7">Explore planned artifact exhibits. We will add photographs of actual tickets, signed baseballs, programs, and documents as their sources, provenance, and reproduction rights are established. These placeholders are not claims of ownership.</p><ArchiveSearch items={items}/></ArchiveShell>}
EOF
cat > src/app/photo-archive/page.tsx <<'EOF'
import type { Metadata } from 'next';
import ArchiveShell from '../components/archive-shell';
import ArchiveSearch,{type ArchiveItem} from '../components/archive-search';
export const metadata:Metadata={title:'Photo Archive | Presidential Pastime',description:'Historic photographs of presidents and baseball.'};
const items:ArchiveItem[]=[
 {title:'Taft and the First-Pitch Tradition',category:'Taft',date:'1910',description:'Historical image associated with the start of the presidential Opening Day tradition.',image:'/taft-first-pitch-1910.jpg',href:'/presidents/william-howard-taft'},
 {title:'Woodrow Wilson and Baseball',category:'Wilson',date:'1916',description:'An archival baseball image from the Wilson administration.',image:'/wilson-opening-day-1916.jpg',href:'/presidents/woodrow-wilson'},
 {title:'Coolidge and Walter Johnson',category:'Coolidge',date:'1920s',description:'A historical photograph of Coolidge with baseball star Walter Johnson.',image:'/coolidge-opening-day.jpg',href:'/presidents/calvin-coolidge',note:'Date of photograph should not be assumed to match a particular game.'},
 {title:'Coolidge and the World Series',category:'Coolidge',date:'1924',description:'Coolidge-era photograph connected with Washington baseball.',image:'/coolidge-world-series-1924.jpg',href:'/presidents/calvin-coolidge'},
 {title:'Kennedy at Opening Day',category:'Kennedy',date:'1961',description:'Kennedy’s Washington baseball Opening Day appearance.',image:'/jfk-first-pitch-1961.jpg',href:'/presidents/john-f-kennedy'},
 {title:'George H. W. Bush and Babe Ruth',category:'Bush',date:'1948',description:'Historic Yale-era baseball photograph.',image:'/bush41-babe-ruth-1948.jpg',href:'/presidents/george-h-w-bush'}
];
export default function Page(){return <ArchiveShell eyebrow="Images of a Presidential Pastime" title="The Photo Archive" subtitle="A growing visual record of presidents, ballparks, and American baseball history."><p className="mb-8 max-w-3xl leading-7">Images are drawn from files already in this project. Full archival source credits and rights information should be reviewed before public launch.</p><ArchiveSearch items={items}/></ArchiveShell>}
EOF
python3 - <<'PY'
from pathlib import Path
p=Path('src/app/layout.tsx')
s=p.read_text()
s=s.replace('title: "Create Next App",','title: "Presidential Pastime | America’s Presidents. America’s Pastime.",').replace('description: "Generated by create next app",','description: "Explore presidential baseball history, ceremonial first pitches, archival photographs, and the Heritage Collection.",')
p.write_text(s)
# Preserve existing headers and page content; add a small common link bar at the end of the body.
s=p.read_text()
s=s.replace('import "./globals.css";', 'import "./globals.css";\nimport Link from "next/link";')
s=s.replace('{children}</body>', '''{children}<footer className="mt-auto border-t-4 border-[#a4282d] bg-[#102c44] px-6 py-8 text-center text-sm text-white"><p className="font-serif text-lg font-bold">PRESIDENTIAL PASTIME</p><div className="mt-3 flex flex-wrap justify-center gap-5"><Link href="/">Home</Link><Link href="/presidents">Presidents</Link><Link href="/first-pitches">First Pitches</Link><Link href="/heritage-collection">Heritage Collection</Link><Link href="/photo-archive">Photo Archive</Link></div></footer></body>''')
p.write_text(s)
PY
printf '\nCreated new archives and site-wide footer navigation. Running production build...\n'
npm run build
printf '\nSUCCESS. Review pages at /first-pitches, /heritage-collection, /photo-archive. Changes are not yet committed.\n'
