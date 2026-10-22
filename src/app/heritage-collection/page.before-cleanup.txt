"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { exhibits } from "./collection-data";

// Archive gallery images: uses only files actually present in /public.
const availableArchiveImages: string[] = ["/andrew-johnson.jpg", "/arthur.jpg", "/benjamin-harrison.jpg", "/biden.jpg", "/bush41-babe-ruth-1948.jpg", "/bush41.jpg", "/carter.jpg", "/cleveland.jpg", "/clinton.jpg", "/coolidge-baseball-1924.jpg", "/coolidge-championship-1924.jpg", "/coolidge-first-pitch-1927.jpg", "/coolidge-grace-world-series-1924.jpg", "/coolidge-grandstand-1924.jpg", "/coolidge-opening-day.jpg", "/coolidge-senators-white-house.jpg", "/coolidge-walter-johnson-1924.jpg", "/coolidge-world-series-1924.jpg", "/coolidge.jpg", "/eisenhower.jpg", "/fdr.jpg", "/ford.jpg", "/garfield.jpg", "/george-w-bush.jpg", "/ghwb.jpg", "/grant.jpg", "/gwb.jpg", "/harding.jpg", "/hayes.jpg", "/heritage/walter-johnson-baseballs.jpg", "/hoover.jpg", "/jfk-first-pitch-1961.jpg", "/jfk-first-pitch-1962.webp", "/jfk-opening-day-1963.jpg", "/jfk-portrait.jpg", "/jfk-stan-musial-1962.jpg", "/lbj.jpg", "/lincoln.jpg", "/mckinley.jpg", "/nixon.jpg", "/obama.jpg", "/reagan-first-pitch-1988.jpg", "/reagan.jpg", "/taft-ballgame-1909.jpg", "/taft-baseball-1911.jpg", "/taft-baseball-1912.jpg", "/taft-first-pitch-1910.jpg", "/taft.jpg", "/theodore-roosevelt.jpg", "/truman.jpg", "/trump.jpg", "/wilson-baseball-1915.jpg", "/wilson-opening-day-1916.jpg", "/wilson.jpg"];
const imageName = (path: string) => path.split('/').pop()?.toLowerCase() ?? '';
function heritagePhotoForExhibit(e: (typeof exhibits)[number]): {src:string; reference:boolean} | null {
  if (e.image) return {src:e.image, reference:false};
  // Only match a specific president's name/slug; never imply the image is the artifact.
  const slug = String(e.presidentSlug || '').toLowerCase();
  if (!slug || slug === 'multiple' || slug === 'various') return null;
  const candidates = availableArchiveImages.filter(path => {
    const name = imageName(path);
    return name.startsWith(slug + '-') || name === slug + '.jpg' || name === slug + '.webp' || name === slug + '.png';
  });
  if (!candidates.length) return null;
  const preferred = candidates.find(path => /first-pitch|baseball|ballgame|opening-day|world-series|stadium/.test(imageName(path))) || candidates[0];
  return {src:preferred, reference:true};
}

const categories = ["All", ...Array.from(new Set(exhibits.map(e => e.category)))];
export default function HeritageCollectionPage() {
 const [category, setCategory] = useState("All");
 const [search, setSearch] = useState("");
 const filtered = useMemo(() => exhibits.filter(e => (category === "All" || e.category === category) && [e.title,e.president,e.year,e.description].join(" ").toLowerCase().includes(search.toLowerCase())), [category,search]);
 return <main className="min-h-screen bg-[#eee7d7] text-[#102c44]">
  <header className="border-b-4 border-[#a4282d] bg-[#102c44] px-6 py-5 text-white"><div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4"><Link href="/" className="font-serif text-2xl font-bold">PRESIDENTIAL PASTIME</Link><nav className="flex flex-wrap gap-4 text-sm"><Link href="/presidents">Presidents</Link><Link href="/first-pitches">First Pitches</Link><Link href="/photo-archive">Photo Archive</Link></nav></div></header>
  <section className="bg-[#102c44] px-6 py-16 text-center text-white"><p className="text-xs uppercase tracking-[0.3em] text-[#c9b98c]">Presidential Pastime</p><h1 className="mt-3 font-serif text-4xl font-bold md:text-6xl">The Heritage Collection</h1><p className="mx-auto mt-5 max-w-2xl text-[#eee7d7]">A developing research gallery of presidential baseball artifacts, photographs, tickets, and signed baseballs.</p></section>
  {/* HERITAGE FEATURED EXHIBIT */}
  <section className="mx-auto max-w-6xl px-6 pt-8">
    <Link href="/heritage-collection/presidential-signatures"
      className="group grid overflow-hidden border-2 border-[#b8aa8e] bg-[#f8f3e8] transition hover:border-[#a4282d] md:grid-cols-2">
      <div className="flex min-h-64 flex-col items-center justify-center bg-[#102c44] p-8 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d7bb83]">Special Museum Exhibit</p>
        <div className="my-6 flex h-[208px] w-[208px] items-center justify-center overflow-hidden rounded-full border-4 border-[#b89a61] bg-white shadow-xl">
          <img
            src="/heritage/presidential-signatures/george-h-w-bush.png"
            alt="Baseball signed by President George H. W. Bush"
            className="h-full w-full object-contain"
          />
        </div>
        <p className="font-serif text-lg italic text-[#d7bb83]">Presidential Autographs</p>
      </div>
      <div className="flex flex-col justify-center p-7 md:p-10">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a4282d]">The Heritage Collection · Special Exhibit</p>
        <h2 className="mt-3 font-serif text-3xl font-bold">The Presidential Signature Collection</h2>
        <p className="mt-2 font-serif text-lg italic text-[#987944]">A History of America, Written on Baseballs</p>
        <p className="mt-5 leading-7 text-[#59636b]">
          Explore the extraordinary tradition of presidential-autographed baseballs,
          from Theodore Roosevelt onward. Discover documented signatures,
          historical provenance, and the stories behind these presidential artifacts.
        </p>
        <span className="mt-6 inline-block self-start border-b-2 border-[#a4282d] pb-1 font-bold text-[#a4282d]">
          Explore the Signature Collection →
        </span>
      </div>
    </Link>
  </section>

<section className="mx-auto max-w-6xl px-6 pt-8">
    <Link
      href="/heritage-collection/the-ball-through-time"
      className="group grid overflow-hidden border-2 border-[#b8aa8e] bg-[#f8f3e8] transition hover:border-[#a4282d] md:grid-cols-2"
    >
      <div className="flex min-h-64 flex-col items-center justify-center bg-[#102c44] p-8 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d7bb83]">
          Special Museum Exhibit
        </p>
        <div className="my-6 flex w-full max-w-sm items-center justify-center border-4 border-[#b89a61] bg-[#eee7d7] p-3 shadow-xl">
          <img
            src="/heritage/1912-reach-american-league-baseball.jpg"
            alt="Original circa-1912 Reach Official American League baseball and period box from the Deadball Era"
            className="max-h-64 w-full object-contain"
          />
        </div>
        <p className="font-serif text-lg italic text-[#d7bb83]">
          1840s — Present
        </p>
      </div>

      <div className="flex flex-col justify-center p-7 md:p-10">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a4282d]">
          The Heritage Collection · Special Exhibit
        </p>
        <h2 className="mt-3 font-serif text-3xl font-bold">
          The Ball Through Time
        </h2>
        <p className="mt-2 font-serif text-lg italic text-[#987944]">
          The Evolution of America&apos;s Baseball
        </p>
        <p className="mt-5 leading-7 text-[#59636b]">
          Discover more than 175 years of baseball history, from
          hand-stitched lemon-peel baseballs to the modern Major
          League ball. Explore six historical eras, period
          construction, and interactive artifact galleries.
        </p>
        <p className="mt-4 text-xs text-[#59636b]">
          Historical research exhibit · Original artifact photographs
          are being added as their sources and permissions are verified.
        </p>
        <span className="mt-6 inline-block self-start border-b-2 border-[#a4282d] pb-1 font-bold text-[#a4282d] group-hover:border-[#102c44] group-hover:text-[#102c44]">
          Explore The Ball Through Time →
        </span>
      </div>
    </Link>
  </section>

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
   <p className="mb-4 text-sm text-[#59636b]">{filtered.length} research exhibits</p><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{filtered.map(e=><Link key={e.slug} href={`/heritage-collection/${e.slug}`} className="group overflow-hidden border border-[#b8aa8e] bg-[#f8f3e8] hover:border-[#a4282d]"><div className="flex h-44 items-center justify-center bg-[#102c44] p-3">{(() => { const photo = heritagePhotoForExhibit(e); return photo ? <div className="relative h-full w-full"><img src={photo.src} alt={photo.reference ? `Historical reference photograph associated with ${e.president}; not a photograph of the listed artifact` : e.title} className="h-full w-full object-contain"/>{photo.reference && <span className="absolute bottom-0 left-0 right-0 bg-[#102c44]/90 px-2 py-1 text-center text-[10px] text-white">Historical reference photo · not the artifact</span>}</div> : <span className="px-5 text-center font-serif text-2xl text-[#c9b98c]">{e.category}</span>; })()}</div><div className="p-5"><p className="text-xs font-bold uppercase tracking-widest text-[#a4282d]">{e.category} · {e.year}</p><h2 className="mt-2 font-serif text-xl font-bold">{e.title}</h2><p className="mt-2 text-sm text-[#59636b]">{e.president}</p><p className="mt-3 text-sm leading-6">{e.description}</p><p className="mt-4 text-sm font-bold text-[#a4282d]">Explore research exhibit →</p></div></Link>)}</div>{filtered.length===0&&<p>No exhibits match your search.</p>}
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
