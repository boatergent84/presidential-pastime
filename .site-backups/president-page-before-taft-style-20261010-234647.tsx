
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPresident, presidents } from "../presidents-data";
import { presidentialHistory } from "../presidential-history";

export function generateStaticParams() {
  return presidents.map((president) => ({
    slug: president.slug,
  }));
}

export default async function PresidentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const president = getPresident(slug);

  if (!president) {
    notFound();
  }

  // Preserve all existing historical records.
  const additionalHistory = presidentialHistory[slug];

  const events = [
    ...(president.events ?? []),
    ...(additionalHistory?.events ?? []),
  ].sort((a, b) => {
    const getYear = (date: string) => {
      const match = date.match(/\b(18|19|20)\d{2}\b/);
      return match ? Number(match[0]) : 9999;
    };

    return getYear(a.date) - getYear(b.date);
  });

  const sources = [
    ...(president.sources ?? []),
    ...(additionalHistory?.sources ?? []),
  ].filter(
    (source, index, all) =>
      all.findIndex((item) => item.url === source.url) === index
  );

  const photos = president.photos ?? [];

  // Previous and next presidential profiles.
  const sortedPresidents = [...presidents].sort(
    (a, b) => a.number - b.number
  );

  const currentIndex = sortedPresidents.findIndex(
    (item) => item.slug === president.slug
  );

  const previousPresident =
    currentIndex > 0 ? sortedPresidents[currentIndex - 1] : null;

  const nextPresident =
    currentIndex >= 0 && currentIndex < sortedPresidents.length - 1
      ? sortedPresidents[currentIndex + 1]
      : null;

  return (
    <main className="min-h-screen bg-[#eee7d7] text-[#172b3d]">
      {/* HEADER */}
      <header className="border-b-4 border-[#a4282d] bg-[#102c44] text-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#c9b98c] text-xl">
              ⚾
            </div>

            <div>
              <p className="font-serif text-xl font-bold tracking-wide md:text-2xl">
                PRESIDENTIAL PASTIME
              </p>

              <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-[#c9b98c]">
                America&apos;s Presidents. America&apos;s Pastime.
              </p>
            </div>
          </Link>

          <Link
            href="/presidents"
            className="border border-[#c9b98c] px-4 py-2 text-xs font-bold uppercase tracking-wider hover:bg-white/10"
          >
            Presidential Archive
          </Link>
        </div>

        <nav className="border-t border-[#40576b] bg-[#f8f3e8] text-[#102c44]">
          <div className="mx-auto flex max-w-6xl flex-wrap gap-6 px-6 py-4 text-sm font-semibold">
            <Link href="/" className="hover:text-[#a4282d]">
              Home
            </Link>

            <Link
              href="/presidents"
              className="hover:text-[#a4282d]"
            >
              Presidents
            </Link>

            <Link
              href="/#first-pitches"
              className="hover:text-[#a4282d]"
            >
              First Pitches
            </Link>

            <Link
              href="/#featured-archives"
              className="hover:text-[#a4282d]"
            >
              Historical Archives
            </Link>

            <Link
              href="/#about"
              className="hover:text-[#a4282d]"
            >
              About
            </Link>
          </div>
        </nav>
      </header>

      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* BREADCRUMB */}
        <div className="mb-8 text-xs font-bold uppercase tracking-[0.15em] text-[#59636b]">
          <Link href="/" className="hover:text-[#a4282d]">
            Home
          </Link>

          <span className="mx-3">/</span>

          <Link
            href="/presidents"
            className="hover:text-[#a4282d]"
          >
            Presidents
          </Link>

          <span className="mx-3">/</span>

          <span className="text-[#a4282d]">{president.name}</span>
        </div>

        {/* PRESIDENT HERO */}
        <section className="grid gap-8 border-b-2 border-[#b8aa8e] pb-12 md:grid-cols-[240px_1fr] md:items-center">
          <div className="flex justify-center md:justify-start">
            <div className="h-[230px] w-[230px] shrink-0 overflow-hidden rounded-full border border-[#102c44] p-[2px]">
              <div className="h-full w-full overflow-hidden rounded-full border border-[#c9b98c] bg-[#e8dfca]">
                {president.portrait ? (
                  <img
                    src={president.portrait}
                    alt={`Portrait of ${president.name}`}
                    className="h-full w-full object-cover object-top"
                  />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center px-5 text-center text-[#102c44]">
                    <p className="font-serif text-5xl font-bold opacity-40">
                      {president.number}
                    </p>

                    <p className="mt-3 font-serif text-base">
                      Historical Portrait
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a4282d]">
              Presidential Baseball Archive
            </p>

            <h1 className="mt-4 font-serif text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              {president.name}
            </h1>

            <div className="my-5 h-[2px] w-24 bg-[#a4282d]" />

            <p className="font-serif text-xl italic text-[#59636b]">
              {president.baseballEra}
            </p>

            <p className="mt-6 max-w-3xl text-lg leading-8">
              {president.overview}
            </p>
          </div>
        </section>

        {/* QUICK FACTS */}
        <section className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            ["President No.", president.number.toString()],
            ["Years in Office", president.years],
            ["Baseball Era", president.baseballEra],
          ].map(([label, value]) => (
            <div
              key={label}
              className="border-l-4 border-[#a4282d] bg-[#f8f3e8] p-5"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-[#a4282d]">
                {label}
              </p>

              <p className="mt-3 font-serif text-lg font-bold">
                {value}
              </p>
            </div>
          ))}
        </section>

        {/* OVERVIEW */}
        <section className="mt-16">
          <div className="border-b-2 border-[#b8aa8e] pb-4">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a4282d]">
              Baseball &amp; the Presidency
            </p>

            <h2 className="mt-2 font-serif text-3xl font-bold md:text-4xl">
              {president.name} and America&apos;s Pastime
            </h2>
          </div>

          <p className="mt-7 max-w-4xl text-lg leading-9 text-[#344656]">
            {president.overview}
          </p>
        </section>

        {/* ARCHIVE RECORD */}
        <section className="mt-16 border border-[#b8aa8e] bg-[#f8f3e8] p-6 md:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a4282d]">
            Presidential Archive Record
          </p>

          <h2 className="mt-3 font-serif text-3xl font-bold">
            Historical Profile
          </h2>

          <div className="mt-7 grid gap-7 md:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#a4282d]">
                President
              </p>

              <p className="mt-2 font-serif text-lg">
                {president.name}
              </p>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#a4282d]">
                Presidential Term
              </p>

              <p className="mt-2 font-serif text-lg">
                {president.years}
              </p>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#a4282d]">
                Baseball Era
              </p>

              <p className="mt-2 font-serif text-lg">
                {president.baseballEra}
              </p>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#a4282d]">
                Archive Status
              </p>

              <p className="mt-2 font-serif text-lg">
                {events.length > 0
                  ? `${events.length} historical event${
                      events.length === 1 ? "" : "s"
                    } documented`
                  : "Historical research in progress"}
              </p>
            </div>
          </div>
        </section>

        {/* HISTORICAL TIMELINE */}
        <section className="mt-16">
          <div className="border-b-2 border-[#b8aa8e] pb-4">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a4282d]">
              Presidential Baseball Timeline
            </p>

            <h2 className="mt-2 font-serif text-3xl font-bold md:text-4xl">
              {president.name}&apos;s Baseball History
            </h2>
          </div>

          {events.length > 0 ? (
            <div className="mt-8 space-y-6">
              {events.map((event, index) => (
                <article
                  key={`${event.date}-${event.title}-${index}`}
                  className="grid overflow-hidden border border-[#b8aa8e] bg-[#f8f3e8] md:grid-cols-[155px_1fr]"
                >
                  <div className="flex items-center justify-center bg-[#a4282d] p-5 text-center font-serif text-lg font-bold text-white">
                    {event.date}
                  </div>

                  <div className="p-6 md:p-8">
                    <h3 className="font-serif text-2xl font-bold">
                      {event.title}
                    </h3>

                    <p className="mt-4 leading-8 text-[#59636b]">
                      {event.description}
                    </p>

                    {event.image && (
                      <figure className="mt-6">
                        <div className="flex justify-center bg-[#102c44] p-3">
                          <img
                            src={event.image}
                            alt={event.title}
                            className="h-auto max-h-[520px] w-full object-contain"
                          />
                        </div>

                        <figcaption className="mt-2 text-xs italic text-[#59636b]">
                          Historical photograph: {event.title}
                        </figcaption>
                      </figure>
                    )}

                    {event.sourceUrl && (
                      <a
                        href={event.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-block text-sm font-bold text-[#a4282d] hover:underline"
                      >
                        View Historical Source →
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-8 border border-[#b8aa8e] bg-[#f8f3e8] p-7">
              <h3 className="font-serif text-2xl font-bold">
                {president.baseballEra}
              </h3>

              <p className="mt-4 leading-8 text-[#59636b]">
                {president.overview}
              </p>

              <p className="mt-5 text-sm italic text-[#59636b]">
                Additional historical events are being researched.
              </p>
            </div>
          )}
        </section>

        {/* HISTORIC PHOTOGRAPHS */}
        <section className="mt-16">
          <div className="border-b-2 border-[#b8aa8e] pb-4">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a4282d]">
              Photographic Archive
            </p>

            <h2 className="mt-2 font-serif text-3xl font-bold md:text-4xl">
              Historic Photographs
            </h2>
          </div>

          {photos.length > 0 ? (
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {photos.map((photo, index) => (
                <figure
                  key={`${photo.image}-${index}`}
                  className="overflow-hidden border border-[#b8aa8e] bg-[#f8f3e8]"
                >
                  <div className="flex min-h-[260px] items-center justify-center bg-[#102c44] p-3">
                    <img
                      src={photo.image}
                      alt={photo.caption}
                      className="max-h-[480px] w-full object-contain"
                    />
                  </div>

                  <figcaption className="p-6">
                    {photo.year && (
                      <p className="text-xs font-bold uppercase tracking-widest text-[#a4282d]">
                        {photo.year}
                      </p>
                    )}

                    <p className="mt-3 leading-7 text-[#344656]">
                      {photo.caption}
                    </p>

                    {photo.sourceUrl && (
                      <a
                        href={photo.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block text-sm font-bold text-[#a4282d] hover:underline"
                      >
                        View Photograph Source →
                      </a>
                    )}
                  </figcaption>
                </figure>
              ))}
            </div>
          ) : (
            <div className="mt-8 border border-[#b8aa8e] bg-[#f8f3e8] p-7">
              <p className="leading-8 text-[#59636b]">
                Additional verified historical photographs will be
                added as this presidential archive develops.
              </p>
            </div>
          )}
        </section>

        {/* MEMORABILIA */}
        <section className="mt-16">
          <div className="border-b-2 border-[#b8aa8e] pb-4">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a4282d]">
              Collectors&apos; Archive
            </p>

            <h2 className="mt-2 font-serif text-3xl font-bold md:text-4xl">
              Presidential Baseball Memorabilia
            </h2>
          </div>

          <div className="mt-7 border border-[#b8aa8e] bg-[#f8f3e8] p-7">
            <p className="leading-8 text-[#59636b]">
              Programs, tickets, photographs, baseballs, and other
              presidential baseball artifacts will be documented
              here as historical research continues.
            </p>
          </div>
        </section>

        {/* HISTORICAL SOURCES */}
        <section className="mt-16 border-t-2 border-[#b8aa8e] pt-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a4282d]">
            Research &amp; Documentation
          </p>

          <h2 className="mt-2 font-serif text-3xl font-bold">
            Historical Sources
          </h2>

          {sources.length > 0 ? (
            <ul className="mt-6 space-y-4">
              {sources.map((source) => (
                <li
                  key={source.url}
                  className="border-l-2 border-[#c9b98c] pl-4"
                >
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#a4282d] hover:underline"
                  >
                    {source.title} ↗
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-5 leading-8 text-[#59636b]">
              Individual archival citations and historical
              references will be added as this presidential
              profile is researched.
            </p>
          )}
        </section>

        {/* PREVIOUS / NEXT PRESIDENT */}
        <nav
          aria-label="Presidential profile navigation"
          className="mt-16 grid gap-4 border-t-2 border-[#b8aa8e] pt-8 sm:grid-cols-2"
        >
          {previousPresident ? (
            <Link
              href={`/presidents/${previousPresident.slug}`}
              className="border border-[#b8aa8e] bg-[#f8f3e8] p-5 transition hover:border-[#a4282d]"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-[#a4282d]">
                ← Previous President
              </p>

              <p className="mt-2 font-serif text-xl font-bold">
                {previousPresident.name}
              </p>
            </Link>
          ) : (
            <div />
          )}

          {nextPresident ? (
            <Link
              href={`/presidents/${nextPresident.slug}`}
              className="border border-[#b8aa8e] bg-[#f8f3e8] p-5 text-right transition hover:border-[#a4282d]"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-[#a4282d]">
                Next President →
              </p>

              <p className="mt-2 font-serif text-xl font-bold">
                {nextPresident.name}
              </p>
            </Link>
          ) : (
            <div />
          )}
        </nav>

        <div className="mt-10 text-center">
          <Link
            href="/presidents"
            className="inline-block bg-[#102c44] px-7 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-[#1b405e]"
          >
            ← Back to Presidential Archive
          </Link>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="mt-16 border-t-4 border-[#a4282d] bg-[#071d31] px-6 py-10 text-center text-white">
        <Link href="/" className="font-serif text-2xl font-bold">
          PRESIDENTIAL PASTIME
        </Link>

        <p className="mt-3 text-sm text-[#c9b98c]">
          America&apos;s Presidents. America&apos;s Pastime.
        </p>

        <div className="mt-6 flex justify-center gap-6 text-sm">
          <Link href="/" className="hover:text-[#c9b98c]">
            Home
          </Link>

          <Link
            href="/presidents"
            className="hover:text-[#c9b98c]"
          >
            Presidential Archive
          </Link>
        </div>

        <p className="mt-7 text-xs text-[#9baab6]">
          An independent historical research archive.
        </p>
      </footer>
    </main>
  );
}
