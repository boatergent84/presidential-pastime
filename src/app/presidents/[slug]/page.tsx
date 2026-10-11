import Link from "next/link";
import { notFound } from "next/navigation";
import { getPresident, presidents } from "../presidents-data";
import { presidentialHistory } from "../presidential-history";

export function generateStaticParams() {
  return presidents.map(({ slug }) => ({ slug }));
}

function yearOf(date: string): number {
  const match = date.match(/\b(18|19|20)\d{2}\b/);
  return match ? Number(match[0]) : 9999;
}

export default async function PresidentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const president = getPresident(slug);
  if (!president) notFound();

  const extra = presidentialHistory[slug];
  const events = [...(president.events ?? []), ...(extra?.events ?? [])]
    .sort((a, b) => yearOf(a.date) - yearOf(b.date));
  const sources = [...(president.sources ?? []), ...(extra?.sources ?? [])]
    .filter((source, index, all) => all.findIndex(s => s.url === source.url) === index);
  const photos = president.photos ?? [];
  const featured = events.find(e => e.image) ?? events[0];
  const mainPhoto = photos[0];
  const sorted = [...presidents].sort((a, b) => a.number - b.number);
  const position = sorted.findIndex(p => p.slug === slug);
  const previous = position > 0 ? sorted[position - 1] : null;
  const next = position < sorted.length - 1 ? sorted[position + 1] : null;

  return (
    <main className="min-h-screen bg-[#eee7d7] text-[#172b3d]">
      <header className="border-b-4 border-[#a4282d] bg-[#102c44] text-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5">
          <div>
            <Link href="/" className="font-serif text-2xl font-bold tracking-wide">PRESIDENTIAL PASTIME</Link>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#c9d4df]">America&apos;s Presidents. America&apos;s Pastime.</p>
          </div>
          <Link href="/presidents" className="border border-[#c9d4df] px-4 py-2 text-xs font-bold uppercase tracking-widest">← All Presidents</Link>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 py-10">
        <section className="grid gap-8 border-b-2 border-[#b8aa8e] pb-10 md:grid-cols-[260px_1fr] md:items-center">
          <div className="flex justify-center md:justify-start">
            <div className="h-[240px] w-[240px] shrink-0 overflow-hidden rounded-full border border-[#102c44] p-[2px]">
              <div className="h-full w-full overflow-hidden rounded-full border border-[#c9b98c] bg-[#e8dfca]">
                {president.portrait ? <img src={president.portrait} alt={`Portrait of ${president.name}`} className="h-full w-full object-cover object-top" /> : <div className="flex h-full items-center justify-center font-serif text-5xl">{president.slug === "donald-trump" ? "45 & 47" : president.number}</div>}
              </div>
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#a4282d]">Presidential Baseball Profile</p>
            <h1 className="mt-2 font-serif text-5xl font-bold leading-tight md:text-6xl">{president.name}</h1>
            <p className="mt-2 font-serif text-xl italic text-[#59636b]">President No. {president.slug === "donald-trump" ? "45 & 47" : president.number} • {president.years}</p>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#3f4b55]">{["grover-cleveland", "abraham-lincoln", "andrew-johnson", "ulysses-s-grant", "rutherford-b-hayes"].includes(president.slug) ? null : president.overview}</p>
            <div className="mt-7 grid max-w-3xl grid-cols-2 gap-3 md:grid-cols-4">
              {[["President", `No. ${president.slug === "donald-trump" ? "45 & 47" : president.number}`], ["Years", president.years], ["Baseball Era", president.baseballEra], ["Throwing Hand", ({
                "barack-obama": "Left-Handed",
                "george-w-bush": "Right-Handed",
                "george-h-w-bush": "Right-Handed",
              } as Record<string, string>)[president.slug] ?? "Undocumented"]].map(([label, value]) => (
                <div key={label} className="border border-[#b8aa8e] bg-[#f8f3e8] p-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#a4282d]">{label}</p>
                  <p className="mt-1 font-serif text-base font-bold">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-8 md:grid-cols-[1fr_320px]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a4282d]">The Baseball President</p>
            <h2 className="mt-1 font-serif text-3xl font-bold">{president.name} and America&apos;s Pastime</h2>
            <p className="mt-5 text-[17px] leading-8 text-[#3f4b55]">{president.overview}</p>
          </div>
          {president.slug === "rutherford-b-hayes" ? (
            <aside className="flex flex-col items-center justify-center border border-[#b8aa8e] bg-[#102c44] p-8 text-center text-white">
              <p className="font-serif text-3xl leading-relaxed italic text-[#fff5df]">
                &ldquo;He serves his party best who serves his country best.&rdquo;
              </p>
              <p className="mt-6 font-serif text-lg text-[#e3c6a5]">
                — Rutherford B. Hayes
              </p>
            </aside>
          ) : president.slug === "ulysses-s-grant" ? (
            <aside className="flex flex-col items-center justify-center border border-[#b8aa8e] bg-[#102c44] p-8 text-center text-white">
              <p className="font-serif text-3xl leading-relaxed italic text-[#fff5df]">
                &ldquo;Let us have peace.&rdquo;
              </p>
              <p className="mt-6 font-serif text-lg text-[#e3c6a5]">
                — Ulysses S. Grant
              </p>
            </aside>
          ) : president.slug === "andrew-johnson" ? (
            <aside className="flex flex-col items-center justify-center border border-[#b8aa8e] bg-[#102c44] p-8 text-center text-white">
              <p className="font-serif text-3xl leading-relaxed italic text-[#fff5df]">
                &ldquo;The Constitution of the United States is the rule of my life.&rdquo;
              </p>
              <p className="mt-6 font-serif text-lg text-[#e3c6a5]">
                — Andrew Johnson
              </p>
            </aside>
          ) : president.slug === "abraham-lincoln" ? (
            <aside className="flex flex-col items-center justify-center border border-[#b8aa8e] bg-[#102c44] p-8 text-center text-white">
              <p className="font-serif text-3xl leading-relaxed italic text-[#fff5df]">
                &ldquo;With malice toward none; with charity for all.&rdquo;
              </p>
              <p className="mt-6 font-serif text-lg text-[#e3c6a5]">
                — Abraham Lincoln
              </p>
            </aside>
          ) : president.slug === "grover-cleveland" ? (
            <aside className="flex flex-col items-center justify-center border border-[#b8aa8e] bg-[#102c44] p-8 text-center text-white">
              <p className="font-serif text-3xl leading-relaxed italic text-[#fff5df]">
                &ldquo;Officeholders are the agents of the people, not their masters.&rdquo;
              </p>
              <p className="mt-6 font-serif text-lg text-[#e3c6a5]">
                — Grover Cleveland
              </p>
            </aside>
          ) : (
            <aside className="border border-[#b8aa8e] bg-[#102c44] p-6 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#e3c6a5]">Archive Record</p>
              <h3 className="mt-2 font-serif text-2xl font-bold">{president.name}</h3>
              <div className="mt-5 space-y-4 text-sm leading-6 text-[#dbe2e8]">
                <div><p className="font-bold text-white">Presidency</p><p>{president.years}</p></div>
                <div><p className="font-bold text-white">Baseball Era</p><p>{president.baseballEra}</p></div>
                <div><p className="font-bold text-white">Documented Timeline Entries</p><p>{events.length}</p></div>
                <div><p className="font-bold text-white">Research Sources</p><p>{sources.length}</p></div>
              </div>
            </aside>
          )}
        </section>

        {featured && !["grover-cleveland", "abraham-lincoln", "andrew-johnson", "ulysses-s-grant", "rutherford-b-hayes"].includes(president.slug) && (
          <section className="mt-14">
            <div className="border-b-2 border-[#b8aa8e] pb-3">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a4282d]">Featured Moment</p>
              <h2 className="mt-1 font-serif text-3xl font-bold">{featured.title}</h2>
            </div>
            <article className={`mt-6 grid overflow-hidden border border-[#b8aa8e] bg-[#f8f3e8] ${featured.image ? "md:grid-cols-2" : ""}`}>
              {featured.image && <div className="flex items-center justify-center bg-[#102c44] p-3"><img src={featured.image} alt={featured.title} className="h-auto max-h-[480px] w-full object-contain" /></div>}
              <div className="p-7">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a4282d]">{featured.date}</p>
                <h3 className="mt-2 font-serif text-3xl font-bold">{featured.title}</h3>
                <p className="mt-4 leading-8 text-[#59636b]">{featured.description}</p>
                {featured.sourceUrl && <a href={featured.sourceUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm font-semibold text-[#a4282d] underline">Historical source ↗</a>}
              </div>
            </article>
          </section>
        )}

        <section className="mt-14">
          <div className="border-b-2 border-[#b8aa8e] pb-3">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a4282d]">Presidential Baseball Timeline</p>
            <h2 className="mt-1 font-serif text-3xl font-bold">{president.name}&apos;s Baseball History</h2>
          </div>
          <div className="mt-6 space-y-6">
            {events.length ? events.map((event, index) => (
              <article key={`${event.date}-${event.title}-${index}`} className="grid overflow-hidden border border-[#b8aa8e] bg-[#f8f3e8] md:grid-cols-[140px_1fr]">
                <div className="flex items-center justify-center bg-[#a4282d] p-6 text-center font-serif text-2xl font-bold text-white">{event.date}</div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-bold">{event.title}</h3>
                  <p className="mt-2 leading-7 text-[#59636b]">{event.description}</p>
                  {event.image && <div className="mt-5 flex justify-center bg-[#102c44] p-3"><img src={event.image} alt={`${event.title} — archival illustration`} className="h-auto max-h-[520px] w-full object-contain" /></div>}
                  {event.sourceUrl && <a href={event.sourceUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm font-semibold text-[#a4282d] underline">View source ↗</a>}
                </div>
              </article>
            )) : <p className="border border-[#b8aa8e] bg-[#f8f3e8] p-6 text-[#59636b]">Additional documented baseball events are being researched for this presidency.</p>}
          </div>
        </section>

        <section className="mt-14">
          <div className="border-b-2 border-[#b8aa8e] pb-3">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a4282d]">Games &amp; First Pitches</p>
            <h2 className="mt-1 font-serif text-3xl font-bold">{president.name} at the Ballpark</h2>
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {events.filter(event => /pitch|opening day|ballpark|stadium|world series|game/i.test(`${event.title} ${event.description}`)).slice(0, 6).map((event, index) => (
              <article key={`${event.title}-${index}`} className="border border-[#b8aa8e] bg-[#f8f3e8] p-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#a4282d]">{event.date}</p>
                <h3 className="mt-2 font-serif text-xl font-bold">{event.title}</h3>
                <p className="mt-2 leading-7 text-[#59636b]">{event.description}</p>
              </article>
            ))}
          </div>
          <Link href="/first-pitches" className="mt-5 inline-block font-bold text-[#a4282d] underline">Explore the First Pitch Archive →</Link>
        </section>

        {mainPhoto && <section className="mt-14">
          <div className="border-b-2 border-[#b8aa8e] pb-3">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a4282d]">Historic Photos</p>
            <h2 className="mt-1 font-serif text-3xl font-bold">{president.name} and America&apos;s Game</h2>
          </div>
          <article className="mt-6 overflow-hidden border border-[#b8aa8e] bg-[#f8f3e8]">
            <div className="bg-[#102c44] p-4"><img src={mainPhoto.image} alt={mainPhoto.caption} className="mx-auto h-auto max-h-[650px] w-full object-contain" /></div>
            <div className="p-7"><h3 className="font-serif text-2xl font-bold">{mainPhoto.caption}</h3>{mainPhoto.year && <p className="mt-2 text-[#59636b]">{mainPhoto.year}</p>}{mainPhoto.sourceUrl && <a href={mainPhoto.sourceUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm font-semibold text-[#a4282d] underline">Photo source ↗</a>}</div>
          </article>
        </section>}

        <section className="mt-14">
          <div className="border-b-2 border-[#b8aa8e] pb-3">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a4282d]">Heritage Collection</p>
            <h2 className="mt-1 font-serif text-3xl font-bold">Collecting the {president.name} Baseball Story</h2>
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {[["Historic Photographs", "Explore archival images and historical photographic records."], ["Tickets & Programs", "Discover game tickets, programs, scorecards, and related ephemera."], ["Presidential Baseballs", "Explore baseballs, autographs, and related historical artifacts."]].map(([title, description]) => (
              <article key={title} className="border border-[#b8aa8e] bg-[#f8f3e8] p-6"><div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#102c44] text-2xl text-white">⚾</div><h3 className="font-serif text-xl font-bold">{title}</h3><p className="mt-2 leading-7 text-[#59636b]">{description}</p></article>
            ))}
          </div>
          <Link href="/heritage-collection" className="mt-5 inline-block font-bold text-[#a4282d] underline">Visit the Heritage Collection →</Link>
        </section>

        <section className="mt-14 border-t-2 border-[#b8aa8e] pt-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a4282d]">Research &amp; Sources</p>
          <h2 className="mt-1 font-serif text-3xl font-bold">Building the Historical Record</h2>
          <p className="mt-4 max-w-4xl leading-8 text-[#59636b]">Presidential Pastime documents presidential baseball history through archival photographs, historical records, and published research.</p>
          <div className="mt-5 grid gap-3 text-sm md:grid-cols-2">
            {sources.length ? sources.map(source => <a key={source.url} href={source.url} target="_blank" rel="noopener noreferrer" className="border border-[#b8aa8e] bg-[#f8f3e8] p-4 font-semibold text-[#a4282d] hover:underline">{source.title} ↗</a>) : <div className="border border-[#b8aa8e] bg-[#f8f3e8] p-4">Additional sources are being collected.</div>}
          </div>
        </section>

        <div className="mt-14 flex flex-wrap justify-between gap-4 border-t border-[#b8aa8e] pt-6 text-sm font-bold text-[#a4282d]">
          {previous ? <Link href={`/presidents/${previous.slug}`}>← {previous.name}</Link> : <span />}
          <Link href="/presidents">All Presidents</Link>
          {next ? <Link href={`/presidents/${next.slug}`}>{next.name} →</Link> : <span />}
        </div>
      </div>
      <footer className="mt-16 border-t-4 border-[#a4282d] bg-[#102c44] text-white"><div className="mx-auto max-w-6xl px-6 py-8"><p className="font-serif text-xl font-bold">PRESIDENTIAL PASTIME</p><p className="mt-1 text-sm text-[#c9d4df]">Exploring the history of America&apos;s presidents and America&apos;s pastime.</p></div></footer>
    </main>
  );
}
