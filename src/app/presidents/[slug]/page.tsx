
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

  // Combine original database records with additional history.
  const additionalHistory = presidentialHistory[slug];

  const events = [
    ...(president.events ?? []),
    ...(additionalHistory?.events ?? []),
  ];

  const sources = [
    ...(president.sources ?? []),
    ...(additionalHistory?.sources ?? []),
  ];

  const photos = president.photos ?? [];

  return (
    <main className="min-h-screen bg-[#eee7d7] text-[#172b3d]">
      {/* Header */}
      <header className="border-b-4 border-[#a4282d] bg-[#102c44] text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="font-serif text-2xl font-bold tracking-wide"
          >
            PRESIDENTIAL PASTIME
          </Link>

          <Link href="/presidents" className="text-sm hover:underline">
            Presidential Archive
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* Hero */}
        <section className="grid gap-8 border-b-2 border-[#b8aa8e] pb-10 md:grid-cols-[240px_1fr]">
          <div className="flex min-h-[290px] items-center justify-center bg-[#102c44] p-3">
            {president.portrait ? (
              <img
                src={president.portrait}
                alt={president.name}
                className="max-h-[340px] w-full object-contain"
              />
            ) : (
              <div className="text-center font-serif text-xl text-[#eee7d7]">
                Historical Portrait
              </div>
            )}
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a4282d]">
              Presidential Baseball Archive
            </p>

            <h1 className="mt-3 font-serif text-5xl font-bold">
              {president.name}
            </h1>

            <p className="mt-4 font-serif text-xl italic text-[#59636b]">
              {president.baseballEra}
            </p>

            <p className="mt-6 text-lg leading-8">
              {president.overview}
            </p>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            ["President No.", president.number.toString()],
            ["Years in Office", president.years],
            ["Baseball Era", president.baseballEra],
          ].map(([label, value]) => (
            <div
              key={label}
              className="border border-[#b8aa8e] bg-[#f8f3e8] p-5"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-[#a4282d]">
                {label}
              </p>
              <p className="mt-2 font-serif text-lg font-bold">
                {value}
              </p>
            </div>
          ))}
        </section>

        {/* Overview */}
        <section className="mt-14">
          <div className="border-b-2 border-[#b8aa8e] pb-3">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a4282d]">
              Baseball & the Presidency
            </p>

            <h2 className="mt-1 font-serif text-3xl font-bold">
              {president.name} and America&apos;s Pastime
            </h2>
          </div>

          <p className="mt-6 max-w-4xl text-lg leading-9">
            {president.overview}
          </p>
        </section>

        {/* Archive Record */}
        <section className="mt-14 border border-[#b8aa8e] bg-[#f8f3e8] p-7">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a4282d]">
            Presidential Archive Record
          </p>

          <h2 className="mt-2 font-serif text-3xl font-bold">
            Historical Profile
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <p className="font-bold">President</p>
              <p>{president.name}</p>
            </div>

            <div>
              <p className="font-bold">Presidential Term</p>
              <p>{president.years}</p>
            </div>

            <div>
              <p className="font-bold">Baseball Era</p>
              <p>{president.baseballEra}</p>
            </div>

            <div>
              <p className="font-bold">Archive Status</p>
              <p>
                {events.length > 0
                  ? "Historical events documented"
                  : "Historical research in progress"}
              </p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="mt-14">
          <div className="border-b-2 border-[#b8aa8e] pb-3">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a4282d]">
              Presidential Baseball Timeline
            </p>

            <h2 className="mt-1 font-serif text-3xl font-bold">
              {president.name}&apos;s Baseball History
            </h2>
          </div>

          {events.length > 0 ? (
            <div className="mt-6 space-y-6">
              {events.map((event, index) => (
                <article
                  key={`${event.date}-${index}`}
                  className="grid overflow-hidden border border-[#b8aa8e] bg-[#f8f3e8] md:grid-cols-[140px_1fr]"
                >
                  <div className="flex items-center justify-center bg-[#a4282d] p-6 text-center font-serif text-lg font-bold text-white">
                    {event.date}
                  </div>

                  <div className="p-6">
                    <h3 className="font-serif text-2xl font-bold">
                      {event.title}
                    </h3>

                    <p className="mt-2 leading-7 text-[#59636b]">
                      {event.description}
                    </p>

                    {event.image && (
                      <div className="mt-5 flex justify-center bg-[#102c44] p-3">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="h-auto max-h-[520px] w-full object-contain"
                        />
                      </div>
                    )}

                    {event.sourceUrl && (
                      <a
                        href={event.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block text-sm font-bold text-[#a4282d] hover:underline"
                      >
                        View Historical Source →
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-6 border border-[#b8aa8e] bg-[#f8f3e8] p-6">
              <h3 className="font-serif text-2xl font-bold">
                {president.baseballEra}
              </h3>

              <p className="mt-3 leading-7 text-[#59636b]">
                {president.overview}
              </p>

              <p className="mt-4 text-sm italic text-[#59636b]">
                Additional historical events are being researched.
              </p>
            </div>
          )}
        </section>

        {/* Historic Photos */}
        <section className="mt-14">
          <div className="border-b-2 border-[#b8aa8e] pb-3">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a4282d]">
              Photographic Archive
            </p>

            <h2 className="mt-1 font-serif text-3xl font-bold">
              Historic Photographs
            </h2>
          </div>

          {photos.length > 0 ? (
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {photos.map((photo, index) => (
                <figure
                  key={`${photo.image}-${index}`}
                  className="overflow-hidden border border-[#b8aa8e] bg-[#f8f3e8]"
                >
                  <div className="flex min-h-[240px] items-center justify-center bg-[#102c44] p-3">
                    <img
                      src={photo.image}
                      alt={photo.caption}
                      className="max-h-[480px] w-full object-contain"
                    />
                  </div>

                  <figcaption className="p-5">
                    {photo.year && (
                      <p className="text-xs font-bold uppercase tracking-widest text-[#a4282d]">
                        {photo.year}
                      </p>
                    )}

                    <p className="mt-2 leading-7">
                      {photo.caption}
                    </p>

                    {photo.sourceUrl && (
                      <a
                        href={photo.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-block text-sm font-bold text-[#a4282d] hover:underline"
                      >
                        Photo Source →
                      </a>
                    )}
                  </figcaption>
                </figure>
              ))}
            </div>
          ) : (
            <p className="mt-6 leading-8 text-[#59636b]">
              Verified historical photographs will be added to
              this presidential archive.
            </p>
          )}
        </section>

        {/* Memorabilia */}
        <section className="mt-14">
          <div className="border-b-2 border-[#b8aa8e] pb-3">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a4282d]">
              Collectors&apos; Archive
            </p>

            <h2 className="mt-1 font-serif text-3xl font-bold">
              Presidential Baseball Memorabilia
            </h2>
          </div>

          <p className="mt-6 leading-8 text-[#59636b]">
            Programs, tickets, photographs, baseballs, and other
            presidential baseball artifacts will be documented here
            as research is completed.
          </p>
        </section>

        {/* Sources */}
        <section className="mt-14 border-t-2 border-[#b8aa8e] pt-7">
          <h2 className="font-serif text-2xl font-bold">
            Historical Sources
          </h2>

          {sources.length > 0 ? (
            <ul className="mt-5 space-y-3">
              {sources.map((source, index) => (
                <li key={`${source.url}-${index}`}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#a4282d] hover:underline"
                  >
                    {source.title} →
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-4 leading-7 text-[#59636b]">
              Individual archival citations and historical references
              will be added as each presidential profile is researched.
            </p>
          )}
        </section>

        <div className="mt-12">
          <Link
            href="/presidents"
            className="font-bold text-[#a4282d] hover:underline"
          >
            ← Back to Presidential Archive
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 border-t-4 border-[#a4282d] bg-[#102c44] px-6 py-8 text-center text-sm text-white">
        PRESIDENTIAL PASTIME
        <p className="mt-2 text-[#c9b98c]">
          America&apos;s Presidents. America&apos;s Pastime.
        </p>
      </footer>
    </main>
  );
}
