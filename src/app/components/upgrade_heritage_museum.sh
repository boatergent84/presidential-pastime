#!/usr/bin/env bash
set -euo pipefail
cd "$(git rev-parse --show-toplevel)"
python3 - <<'PY'
from pathlib import Path
p=Path('src/app/heritage-collection/page.tsx')
if not p.exists(): raise SystemExit('Heritage gallery page not found; no changes made.')
s=p.read_text()
if 'HERITAGE FEATURED EXHIBIT' not in s:
    anchor='  <section className="mx-auto max-w-6xl px-6 py-10">'
    if anchor not in s: raise SystemExit('Expected gallery layout not found; no changes made.')
    featured='''  {/* HERITAGE FEATURED EXHIBIT */}
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
'''
    s=s.replace(anchor,featured+anchor,1)
if 'HERITAGE RESEARCH GUIDE' not in s:
    anchor='  </section></main>;'
    if anchor not in s: raise SystemExit('Expected gallery closing section not found; no changes made.')
    guide='''  </section>
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
  </section></main>;'''
    s=s.replace(anchor,guide,1)
p.write_text(s)
print('Heritage gallery upgraded without modifying collection data or presidential pages.')
PY
if [ ! -s public/heritage/walter-johnson-baseballs.jpg ]; then
 echo 'The archival image is missing; attempting to retrieve the existing Library of Congress file.'
 mkdir -p public/heritage
 curl -fLsS 'https://tile.loc.gov/storage-services/service/pnp/hec/26500/26574v.jpg' -o public/heritage/walter-johnson-baseballs.jpg
fi
npm run build
printf '\nSUCCESS: Museum upgrade built. Preview /heritage-collection then commit when satisfied.\n'
