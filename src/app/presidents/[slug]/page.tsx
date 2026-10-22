import Link from "next/link";
import { notFound } from "next/navigation";
import { getPresident, presidents } from "../presidents-data";
import { presidentialHistory } from "../presidential-history";
import { presidentialQuotes } from "../presidential-quotes";

const remainingPresidentContext: Record<string, string> = {
  "herbert-hoover": "Four consecutive Washington Opening Day ceremonies, 1929–1932.",
  "franklin-d-roosevelt": "The 1942 Green Light Letter encouraged baseball to continue during wartime.",
  "harry-s-truman": "Truman resumed the presidential Opening Day tradition after World War II and famously threw ceremonial first pitches with both hands.",
  "dwight-d-eisenhower": "The Dodgers and Giants moved west during the Eisenhower administration.",
  "john-f-kennedy": "Kennedy opened the new Senators era at Griffith Stadium in 1961.",
  "lyndon-b-johnson": "Johnson participated in Washington Opening Day ceremonies in the 1960s.",
  "richard-nixon": "Divisional play began in 1969; Nixon later threw an Opening Day pitch in Anaheim.",
  "gerald-ford": "Ford threw the ceremonial first pitch at the 1976 Bicentennial All-Star Game.",
  "jimmy-carter": "Carter attended the decisive game of the 1979 World Series in Baltimore.",
  "ronald-reagan": "Before the White House, Reagan recreated Cubs broadcasts for radio listeners.",
  "george-h-w-bush": "A Yale first baseman and team captain, Bush played in the early College World Series.",
  "bill-clinton": "Expansion, a players’ strike, and the 1998 home-run race defined the decade.",
  "george-w-bush": "A former Rangers executive, Bush delivered the memorable 2001 Yankee Stadium pitch.",
  "barack-obama": "A White Sox fan, Obama threw the first pitch at the 2009 All-Star Game.",
  "donald-trump": "The 2020 MLB season was shortened during the COVID-19 pandemic.",
  "joe-biden": "The 2023 pitch timer and other rule changes reshaped the modern game."
};

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

  const selectedQuote = presidentialQuotes[slug];
  const extra = presidentialHistory[slug];
  const events = [...(president.events ?? []), ...(extra?.events ?? [])]
    .sort((a, b) => yearOf(a.date) - yearOf(b.date));
  const sources = [...(president.sources ?? []), ...(extra?.sources ?? [])]
    .filter((source, index, all) => all.findIndex(s => s.url === source.url) === index);
  const photos = president.photos ?? [];
  const featured =
    president.slug === "chester-a-arthur"
      ? events.find(e => e.image?.includes("arthur-providence-grays-1884"))
        ?? events.find(e => e.image)
        ?? events[0]
      : events.find(e => e.image) ?? events[0];
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
            <div className="relative h-[270px] w-[270px] shrink-0 flex items-center justify-center">
              {/* PRESIDENTIAL 50 WHITE STARS */}
              <svg
                className="pointer-events-none absolute inset-0 h-full w-full"
                viewBox="0 0 270 270"
                aria-hidden="true"
              >
                {Array.from({ length: 50 }, (_, i) => {
                  const angle = (i * 2 * Math.PI) / 50 - Math.PI / 2;
                  const x = 135 + 130 * Math.cos(angle);
                  const y = 135 + 130 * Math.sin(angle);

                  const points = Array.from({ length: 10 }, (_, j) => {
                    const a = (j * Math.PI) / 5 - Math.PI / 2;
                    const r = j % 2 === 0 ? 3.2 : 1.5;
                    return `${x + r * Math.cos(a)},${y + r * Math.sin(a)}`;
                  }).join(" ");

                  return (
                    <polygon
                      key={i}
                      points={points}
                      fill="#FFFFFF"
                      stroke="#102c44"
                      strokeWidth="0.35"
                    />
                  );
                })}
              </svg>
              <div className="h-[240px] w-[240px] shrink-0 overflow-hidden rounded-full border border-[#102c44] p-[2px]">
              <div className="h-full w-full overflow-hidden rounded-full border border-[#c9b98c] bg-[#e8dfca]">
                {president.portrait ? <img src={president.portrait} alt={`Portrait of ${president.name}`} className={`h-full w-full object-cover object-top ${president.slug === "calvin-coolidge" ? "scale-125" : president.slug === "benjamin-harrison" ? "scale-125 -translate-y-3" : president.slug === "theodore-roosevelt" ? "!object-center" : ""}`} /> : <div className="flex h-full items-center justify-center font-serif text-5xl">{president.slug === "donald-trump" ? "45 & 47" : president.number}</div>}
              </div>
            </div>
            </div>


            


          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#a4282d]">Presidential Baseball Profile</p>
            <h1 className="mt-2 font-serif text-5xl font-bold leading-tight md:text-6xl">{president.name}</h1>
            <p className="mt-2 font-serif text-xl italic text-[#59636b]">President No. {president.slug === "donald-trump" ? "45 & 47" : president.number} • {president.years}</p>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#3f4b55]">{["grover-cleveland", "abraham-lincoln", "andrew-johnson", "ulysses-s-grant", "rutherford-b-hayes", "james-a-garfield", "chester-a-arthur", "benjamin-harrison", "william-mckinley", "theodore-roosevelt", "woodrow-wilson", "warren-g-harding", "calvin-coolidge", "herbert-hoover", "franklin-d-roosevelt", "harry-s-truman", "dwight-d-eisenhower", "john-f-kennedy", "lyndon-b-johnson", "richard-nixon", "gerald-ford", "jimmy-carter", "ronald-reagan", "george-h-w-bush", "bill-clinton", "george-w-bush", "barack-obama", "donald-trump", "joe-biden"].includes(president.slug) ? null : president.overview}</p>
            <div className="mt-7 grid max-w-3xl grid-cols-2 gap-3 md:grid-cols-4">
              {[["President", `No. ${president.slug === "donald-trump" ? "45 & 47" : president.number}`], ["Years", president.years], ["Baseball Era", president.baseballEra], ["Throwing Hand", ({
    "joe-biden": "Right",
    "william-howard-taft": "Right",
    "donald-trump": "Right",
    "bill-clinton": "Left",
    "ronald-reagan": "Right",
    "jimmy-carter": "Right",
    "gerald-ford": "Both",
    "richard-nixon": "Right",
    "lyndon-b-johnson": "Right",
    "john-f-kennedy": "Right",
    "dwight-d-eisenhower": "Right",
    "harry-s-truman": "Left",
    "calvin-coolidge": "Right",
    "franklin-d-roosevelt": "Right",
    "herbert-hoover": "Right",
    "warren-g-harding": "Right",
                "woodrow-wilson": "Right",
                "barack-obama": "Left",
                "george-w-bush": "Right",
                "george-h-w-bush": "Left",
              } as Record<string, string>)[president.slug] ?? "Undocumented"]].map(([label, value]) => (
                <div key={label} className="border-[3px] border-[#C5A46D] bg-[#f8f3e8] p-4">
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
            <p className="mt-5 text-[17px] leading-8 text-[#3f4b55]">
              {president.slug === "warren-g-harding"
                ? "Warren G. Harding was one of the most enthusiastic baseball fans ever to occupy the White House. Growing up in Ohio, he played baseball and developed an enduring attachment to the game, later becoming involved in minor-league baseball ownership. Unlike presidents who attended games primarily for ceremony, Harding followed the action closely, kept score, and openly rooted for his favorite team, the Washington Senators. His presidency from 1921 to 1923 coincided with baseball's dramatic transformation into the Live-Ball Era, when Babe Ruth's extraordinary home-run hitting brought unprecedented attention to the New York Yankees. Harding continued the presidential first-pitch tradition at Griffith Stadium in 1921, 1922, and 1923, watching Washington compete against clubs led by some of the game's greatest stars. He admired the legendary Senators pitcher Walter Johnson and enjoyed personal relationships with prominent baseball figures, including Babe Ruth. On April 24, 1923, Harding made an unannounced visit to the newly opened Yankee Stadium, where he watched the Yankees defeat Washington 4\u20130 in the first shutout at the new ballpark. His appearance linked the American presidency with one of baseball's most famous stadiums during its inaugural season. When Harding died unexpectedly in August 1923, baseball joined the nation in mourning. His legacy in the sport is that of a president who genuinely loved the game, understood its intricacies, and viewed baseball as an important part of American life."
                : president.slug === "woodrow-wilson"
                ? "Woodrow Wilson occupied the White House during a remarkable period in American baseball history. His interest in the game reached back to his student years, when baseball was becoming an important part of American college life. As president from 1913 to 1921, Wilson witnessed the sport grow into a powerful national institution, even as the country confronted profound political and social changes. The Federal League challenged organized baseball during his administration, while legendary players such as Walter Johnson, Ty Cobb, Tris Speaker, and Babe Ruth helped define the era. Wilson attended major-league games in Washington, including Opening Day appearances, strengthening the developing relationship between the presidency and America's national pastime. In 1915, the Philadelphia Phillies and Boston Red Sox met in the World Series, reflecting the continuing popularity of professional baseball. When the United States entered World War I in 1917, baseball faced uncertainty as players entered military service and the nation mobilized for war. The 1918 major-league season was shortened, but the game endured. By the final years of Wilson's presidency, baseball was undergoing another transformation. Babe Ruth's extraordinary home-run hitting helped usher in the Live-Ball Era, changing the way Americans played and watched the sport. Wilson's presidency thus bridged two distinct periods of baseball history, from the strategic, pitching-dominated Deadball Era to the emergence of the modern power game."
                : president.overview}
            </p>
          </div>
          {selectedQuote ? (
            <aside className="flex flex-col items-center justify-center border border-[#b8aa8e] bg-[#102c44] p-8 text-center text-white">
              <p className="font-serif text-2xl leading-relaxed italic text-[#fff5df]">
                &ldquo;{selectedQuote.text}&rdquo;
              </p>
              <p className="mt-6 font-serif text-lg text-[#e3c6a5]">
                — {selectedQuote.attribution}
              </p>
            </aside>
          ) : (
            <>
          {president.slug === "calvin-coolidge" ? (
            <aside className="flex flex-col items-center justify-center border border-[#b8aa8e] bg-[#102c44] p-8 text-center text-white">
              <p className="font-serif text-2xl leading-relaxed italic text-[#fff5df]">
                &ldquo;While baseball remains our national game, our national tastes will be on a higher level and our ideals on a firmer foundation.&rdquo;
              </p>
              <p className="mt-6 font-serif text-lg text-[#e3c6a5]">
                — Calvin Coolidge, October 11, 1924
              </p>
            </aside>
          ) : president.slug === "warren-g-harding" ? (
            <aside className="flex flex-col items-center justify-center border border-[#b8aa8e] bg-[#102c44] p-8 text-center text-white">
              <p className="font-serif text-2xl leading-relaxed italic text-[#fff5df]">
                &ldquo;I never saw a game without taking sides and never want to see one. There is the soul of the game.&rdquo;
              </p>
              <p className="mt-6 font-serif text-lg text-[#e3c6a5]">
                — Warren G. Harding
              </p>
            </aside>
          ) : president.slug === "woodrow-wilson" ? (
            <aside className="flex flex-col items-center justify-center border border-[#b8aa8e] bg-[#102c44] p-8 text-center text-white">
              <p className="font-serif text-2xl leading-relaxed italic text-[#fff5df]">
                &ldquo;Woodrow Wilson was by far the best fan.&rdquo;
              </p>
              <p className="mt-6 font-serif text-lg text-[#e3c6a5]">
                — Joe Judge, Washington Senators first baseman
              </p>
            </aside>
          ) : president.slug === "theodore-roosevelt" ? (
            <aside className="flex flex-col items-center justify-center border border-[#b8aa8e] bg-[#102c44] p-8 text-center text-white">
              <p className="font-serif text-2xl leading-relaxed italic text-[#fff5df]">
                &ldquo;Far better it is to dare mighty things, to win glorious triumphs, even though checkered by failure.&rdquo;
              </p>
              <p className="mt-6 font-serif text-lg text-[#e3c6a5]">
                — Theodore Roosevelt, The Strenuous Life, 1899
              </p>
            </aside>
          ) : president.slug === "william-mckinley" ? (
            <aside className="flex flex-col items-center justify-center border border-[#b8aa8e] bg-[#102c44] p-8 text-center text-white">
              <p className="font-serif text-2xl leading-relaxed italic text-[#fff5df]">
                &ldquo;Our faith teaches that there is no safer reliance than upon the God of our fathers.&rdquo;
              </p>
              <p className="mt-6 font-serif text-lg text-[#e3c6a5]">
                — William McKinley, 1897
              </p>
            </aside>
          ) : president.slug === "benjamin-harrison" ? (
            <aside className="flex flex-col items-center justify-center border border-[#b8aa8e] bg-[#102c44] p-8 text-center text-white">
              <p className="font-serif text-2xl leading-relaxed italic text-[#fff5df]">
                &ldquo;I find a good deal of pleasure in watching a good game of ball.&rdquo;
              </p>
              <p className="mt-6 font-serif text-lg text-[#e3c6a5]">
                — Benjamin Harrison, 1889
              </p>
            </aside>
          ) : president.slug === "chester-a-arthur" ? (
            <aside className="flex flex-col items-center justify-center border border-[#b8aa8e] bg-[#102c44] p-8 text-center text-white">
              <p className="font-serif text-xl italic leading-relaxed">
                “I shall aim to follow the plain path of duty.”
              </p>
              <p className="mt-4 text-sm text-[#eee7d7]">
                — Chester A. Arthur, 1881
              </p>
            </aside>
          ) : president.slug === "james-a-garfield" ? (
            <aside className="flex flex-col items-center justify-center border border-[#b8aa8e] bg-[#102c44] p-8 text-center text-white">
              <p className="font-serif text-3xl leading-relaxed italic text-[#fff5df]">
                &ldquo;It is the high privilege and sacred duty of those now living to educate their successors.&rdquo;
              </p>
              <p className="mt-6 font-serif text-lg text-[#e3c6a5]">
                — James A. Garfield
              </p>
            </aside>
          ) : president.slug === "rutherford-b-hayes" ? (
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
          ) : remainingPresidentContext[president.slug] ? (
            <aside className="flex flex-col items-center justify-center border border-[#b8aa8e] bg-[#102c44] p-8 text-center text-white">
              
              <p className="mt-5 font-serif text-2xl leading-relaxed text-[#fff5df]">{remainingPresidentContext[president.slug]}</p>
              <p className="mt-6 font-serif text-lg text-[#e3c6a5]">— {president.name} era</p>
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
            </>
          )}
        </section>

        {featured && !["grover-cleveland", "abraham-lincoln", "andrew-johnson", "ulysses-s-grant", "rutherford-b-hayes", "james-a-garfield", "chester-a-arthur", "benjamin-harrison", "william-mckinley", "theodore-roosevelt", "woodrow-wilson", "warren-g-harding", "calvin-coolidge", "herbert-hoover", "franklin-d-roosevelt", "harry-s-truman", "dwight-d-eisenhower", "john-f-kennedy", "lyndon-b-johnson", "richard-nixon", "gerald-ford", "jimmy-carter", "ronald-reagan", "george-h-w-bush", "bill-clinton", "george-w-bush", "barack-obama", "donald-trump", "joe-biden"].includes(president.slug) && (
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
