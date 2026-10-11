#!/usr/bin/env bash
set -euo pipefail
cd "$(git rev-parse --show-toplevel)"
TARGET='src/app/heritage-collection/[slug]/page.tsx'
DATA='src/app/heritage-collection/collection-data.ts'
if [[ ! -f "$TARGET" || ! -f "$DATA" ]]; then
  echo 'Expected Heritage Collection files were not found; no changes made.' >&2
  exit 1
fi
if grep -q 'HERITAGE_EXHIBITS_V3' "$TARGET"; then
  echo 'This upgrade is already installed.'
  exit 0
fi
# Backups outside project TS compilation. Git also tracks previous committed versions.
mkdir -p /tmp/presidential-pastime-backups
cp "$TARGET" "/tmp/presidential-pastime-backups/heritage-exhibit-page-$(date +%Y%m%d-%H%M%S).txt"
cat > "$TARGET" <<'TSX'
// HERITAGE_EXHIBITS_V3 — research-first museum exhibits.
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { exhibits } from "../collection-data";

export function generateStaticParams() {
  return exhibits.map((exhibit) => ({ slug: exhibit.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const exhibit = exhibits.find((item) => item.slug === slug);
  if (!exhibit) return { title: "Exhibit not found | Presidential Pastime" };
  return {
    title: `${exhibit.title} | Heritage Collection | Presidential Pastime`,
    description: exhibit.description,
  };
}

const verifiedReferences: Record<string, { title: string; url: string; note: string }[]> = {
  "taft-first-pitch-photography": [
    { title: "Library of Congress collections", url: "https://www.loc.gov/photos/", note: "Search the original catalog for the specific photograph, photographer, and rights statement." },
  ],
  "coolidge-1924-photographs": [
    { title: "Library of Congress collections", url: "https://www.loc.gov/photos/", note: "Use catalog records to confirm the attribution and date of individual photographs." },
  ],
  "presidential-signed-baseballs": [
    { title: "Walter Johnson's Six Presidential Baseballs", url: "/heritage-collection/walter-johnson-presidential-baseballs", note: "A separate illustrated exhibit with a linked 1937 Library of Congress photographic record." },
  ],
};

export default async function ExhibitPage({ params }: Props) {
  const { slug } = await params;
  const exhibit = exhibits.find((item) => item.slug === slug);
  if (!exhibit) notFound();

  const photoIsArtifact = false; // Images in the shared research data are not verified artifact-object images.
  const related = exhibits
    .filter((item) => item.slug !== exhibit.slug && exhibit.presidentSlug && item.presidentSlug === exhibit.presidentSlug)
    .slice(0, 3);
  const references = verifiedReferences[exhibit.slug] ?? [];

  return (
    <main className="min-h-screen bg-[#eee7d7] text-[#102c44]">
      <header className="border-b-4 border-[#a4282d] bg-[#102c44] text-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5">
          <Link href="/" className="font-serif text-2xl font-bold tracking-wide">PRESIDENTIAL PASTIME</Link>
          <nav className="flex flex-wrap gap-4 text-sm">
            <Link href="/presidents" className="hover:underline">Presidents</Link>
            <Link href="/heritage-collection" className="hover:underline">Heritage Collection</Link>
            <Link href="/photo-archive" className="hover:underline">Photo Archive</Link>
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 py-12">
        <Link href="/heritage-collection" className="text-sm font-bold text-[#a4282d] hover:underline">← Back to the Heritage Collection</Link>
        <p className="mt-10 text-xs font-bold uppercase tracking-[0.25em] text-[#a4282d]">Heritage Collection · Research Exhibit</p>
        <h1 className="mt-3 max-w-4xl font-serif text-4xl font-bold leading-tight md:text-6xl">{exhibit.title}</h1>
        <p className="mt-4 text-lg text-[#59636b]">{exhibit.year} · {exhibit.president}</p>

        <div className="mt-9 grid gap-8 lg:grid-cols-[minmax(0,1fr)_310px]">
          <div>
            <figure className="overflow-hidden border border-[#b8aa8e] bg-[#f8f3e8]">
              <div className="flex min-h-72 items-center justify-center bg-[#102c44] p-6 md:min-h-[420px]">
                {exhibit.image ? (
                  <img src={exhibit.image} alt={`Historical reference image for ${exhibit.title}`} className="max-h-[520px] w-full object-contain" />
                ) : (
                  <div className="max-w-md border border-[#c9b98c]/60 p-10 text-center">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9b98c]">Presidential Pastime Archives</p>
                    <p className="mt-5 font-serif text-3xl text-[#eee7d7]">{exhibit.year}</p>
                    <div className="mx-auto mt-5 h-px w-20 bg-[#a4282d]" />
                    <p className="mt-5 text-sm leading-6 text-[#eee7d7]">Original artifact photograph pending identification and image-rights review</p>
                  </div>
                )}
              </div>
              <figcaption className="px-5 py-4 text-sm leading-6 text-[#59636b]">
                {exhibit.image ? (photoIsArtifact ? "Documented artifact photograph." : "Historical context photograph. This image is not verified as a photograph of the specific ticket, program, scorecard, or other object described in this research exhibit.") : "Research display; no specific artifact photograph has been verified for this exhibit."}
              </figcaption>
            </figure>
            <section className="mt-8 border border-[#b8aa8e] bg-[#f8f3e8] p-7">
              <p className="text-xs font-bold uppercase tracking-widest text-[#a4282d]">Historical Background</p>
              <h2 className="mt-2 font-serif text-3xl font-bold">The Story Behind the Exhibit</h2>
              <p className="mt-5 leading-8 text-[#364755]">{exhibit.description}</p>
            </section>
            <section className="mt-8 border border-[#b8aa8e] bg-[#f8f3e8] p-7">
              <p className="text-xs font-bold uppercase tracking-widest text-[#a4282d]">Museum Research Notes</p>
              <h2 className="mt-2 font-serif text-3xl font-bold">Documentation & Provenance</h2>
              <p className="mt-5 leading-8 text-[#364755]">{exhibit.researchNote}</p>
              <p className="mt-5 border-l-4 border-[#a4282d] pl-4 text-sm leading-7 text-[#59636b]">Presidential Pastime is a historical research website. This exhibit does not assert ownership, authentication, or custody of an original physical artifact.</p>
            </section>
          </div>

          <aside className="self-start bg-[#102c44] p-7 text-white lg:sticky lg:top-6">
            <p className="text-xs font-bold uppercase tracking-widest text-[#c9b98c]">Exhibit Record</p>
            <h2 className="mt-3 font-serif text-2xl font-bold">Archive Details</h2>
            <dl className="mt-7 space-y-5 text-sm">
              <div><dt className="font-bold text-[#c9b98c]">Category</dt><dd className="mt-1">{exhibit.category}</dd></div>
              <div><dt className="font-bold text-[#c9b98c]">Period</dt><dd className="mt-1">{exhibit.year}</dd></div>
              <div><dt className="font-bold text-[#c9b98c]">Associated President</dt><dd className="mt-1">{exhibit.president}</dd></div>
              <div><dt className="font-bold text-[#c9b98c]">Collection Status</dt><dd className="mt-1">Research exhibit; original artifact not held or authenticated by this website</dd></div>
            </dl>
            {exhibit.presidentSlug && (
              <Link href={`/presidents/${exhibit.presidentSlug}`} className="mt-8 block border border-[#c9b98c] px-4 py-3 text-center text-sm font-bold hover:bg-white/10">Explore Presidential Profile →</Link>
            )}
          </aside>
        </div>

        {references.length > 0 && (
          <section className="mt-14 border-t-2 border-[#b8aa8e] pt-8">
            <p className="text-xs font-bold uppercase tracking-widest text-[#a4282d]">Further Research</p>
            <h2 className="mt-2 font-serif text-3xl font-bold">Archive & Exhibit Links</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {references.map((ref) => (
                <a key={ref.url} href={ref.url} className="border border-[#b8aa8e] bg-[#f8f3e8] p-5 hover:border-[#a4282d]">
                  <p className="font-serif text-xl font-bold">{ref.title} ↗</p>
                  <p className="mt-2 text-sm leading-6 text-[#59636b]">{ref.note}</p>
                </a>
              ))}
            </div>
          </section>
        )}

        {related.length > 0 && (
          <section className="mt-14 border-t-2 border-[#b8aa8e] pt-8">
            <p className="text-xs font-bold uppercase tracking-widest text-[#a4282d]">Continue Exploring</p>
            <h2 className="mt-2 font-serif text-3xl font-bold">Related Heritage Exhibits</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {related.map((item) => (
                <Link key={item.slug} href={`/heritage-collection/${item.slug}`} className="border border-[#b8aa8e] bg-[#f8f3e8] p-5 hover:border-[#a4282d]">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#a4282d]">{item.year} · {item.category}</p>
                  <h3 className="mt-2 font-serif text-xl font-bold">{item.title}</h3>
                  <p className="mt-4 text-sm font-bold text-[#a4282d]">Explore exhibit →</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
      <footer className="mt-16 border-t-4 border-[#a4282d] bg-[#102c44] px-6 py-8 text-center text-sm text-white">PRESIDENTIAL PASTIME · THE HERITAGE COLLECTION</footer>
    </main>
  );
}
TSX
npm run build
printf '\nSUCCESS: Museum exhibit pages upgraded. The separate Walter Johnson page was not modified.\n'
