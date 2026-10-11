#!/usr/bin/env bash
set -euo pipefail
cd "$(git rev-parse --show-toplevel)"
python3 - <<'PY'
from pathlib import Path
p=Path('src/app/heritage-collection/page.tsx')
s=p.read_text()
if 'HERITAGE_GALLERY_V2' in s:
 print('Gallery upgrade already installed.'); raise SystemExit(0)
old='import { exhibits } from "./collection-data";'
if old not in s: raise SystemExit('Gallery imports changed; no changes made.')
s=s.replace(old, old+'''
// HERITAGE_GALLERY_V2 — curated, non-duplicating exhibit previews.
const archiveRecords: Record<string, {url: string; label: string}> = {
  "walter-johnson-presidential-baseballs": {url:"https://www.loc.gov/item/2016875530/",label:"Library of Congress photograph"},
  "taft-1910-opening-day": {url:"https://www.loc.gov/item/2014688010/",label:"1910 Taft baseball photograph (context only)"},
};
const archivalImageSlugs = new Set([
  "walter-johnson-presidential-baseballs",
  "taft-first-pitch-photography",
  "coolidge-1924-photographs",
  "kennedy-first-pitch-photo",
]);
const cardLabels: Record<string,string> = {
  "taft-1910-opening-day":"1910 · WASHINGTON",
  "wilson-1915-world-series":"1915 · WORLD SERIES",
  "coolidge-1924-world-series":"1924 · WORLD SERIES",
  "fdr-opening-day":"1930s–1940s · OPENING DAY",
  "kennedy-1961-opening-day":"1961 · WASHINGTON",
  "presidential-signed-baseballs":"PRESIDENTIAL AUTOGRAPHS",
  "bush-2001-world-series":"2001 · WORLD SERIES",
};
''')
old_img='<div className="flex h-44 items-center justify-center bg-[#102c44] p-3">{e.image?<img src={e.image} alt={e.title} className="h-full w-full object-contain"/>:<span className="px-5 text-center font-serif text-2xl text-[#c9b98c]">{e.category}</span>}</div>'
new_img='''<div className="relative flex h-52 items-center justify-center overflow-hidden bg-[#102c44] p-3">{e.image ? <img src={e.image} alt={e.title} className="h-full w-full object-contain"/> : <div className="flex h-full w-full flex-col items-center justify-center border border-[#c9b98c]/50 px-5 text-center"><span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#c9b98c]">Presidential Pastime · Archives</span><span className="mt-5 font-serif text-2xl text-[#eee7d7]">{cardLabels[e.slug] || e.year}</span><span className="mt-4 h-px w-16 bg-[#a4282d]"/><span className="mt-4 text-xs uppercase tracking-widest text-[#c9b98c]">Artifact image being researched</span></div>}<span className="absolute bottom-2 right-2 bg-[#102c44]/95 px-2 py-1 text-[10px] uppercase tracking-wide text-white">{e.image ? (archivalImageSlugs.has(e.slug) ? "Historical photograph" : "Context photograph") : "Research exhibit"}</span></div>'''
if old_img not in s: raise SystemExit('Gallery card image layout changed; no changes made.')
s=s.replace(old_img,new_img)
old_desc='<p className="mt-3 text-sm leading-6">{e.description}</p>'
new_desc='''<p className="mt-3 text-sm leading-6">{e.description}</p>{archiveRecords[e.slug] && <p className="mt-3 text-xs leading-5 text-[#59636b]">Source: {archiveRecords[e.slug].label}</p>}{e.image && !archivalImageSlugs.has(e.slug) && <p className="mt-2 text-xs italic text-[#59636b]">Context image; not a verified photograph of the described ticket or program.</p>}'''
if old_desc not in s: raise SystemExit('Gallery card description layout changed; no changes made.')
s=s.replace(old_desc,new_desc)
p.write_text(s)
print('Upgraded gallery: curated empty-image displays, photo labels, and verified source notes.')
PY
npm run build
printf '\nBuild succeeded. Preview /heritage-collection and commit after reviewing.\n'
