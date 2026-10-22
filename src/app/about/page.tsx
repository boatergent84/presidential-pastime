import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story | Presidential Pastime",
  description:
    "Discover the story and mission behind Presidential Pastime, a digital museum exploring the history of America's presidents and baseball.",
};

const collections = [
  {
    number: "01",
    label: "THE PRESIDENTS",
    title: "The Men Behind the Office",
    description:
      "Explore the baseball stories of American presidents, from their personal connections to the game to the moments they shared with the nation.",
    href: "/presidents",
    action: "Explore the Presidents",
  },
  {
    number: "02",
    label: "THE TRADITION",
    title: "A Pitch Through History",
    description:
      "Discover how a ceremonial baseball toss became one of the most enduring traditions connecting the White House and the ballpark.",
    href: "/first-pitches",
    action: "Discover First Pitches",
  },
  {
    number: "03",
    label: "THE COLLECTION",
    title: "Objects That Tell Stories",
    description:
      "Discover photographs, signed baseballs, programs, and surviving artifacts that preserve the relationship between the presidency and America's game.",
    href: "/heritage-collection",
    action: "Enter the Heritage Collection",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f4ecdb] text-[#172b3d]">
      <header className="border-b-4 border-[#a4282d] bg-[#102c44] text-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-5 px-6 py-6">
          <Link
            href="/"
            className="font-serif text-xl font-bold tracking-wide md:text-2xl"
          >
            PRESIDENTIAL PASTIME
          </Link>
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-bold uppercase tracking-wider text-[#e1d3b5]">
            <Link href="/" className="hover:text-white">Home</Link>
            <Link href="/presidents" className="hover:text-white">Presidents</Link>
            <Link href="/first-pitches" className="hover:text-white">First Pitch</Link>
            <Link href="/heritage-collection" className="hover:text-white">Heritage Collection</Link>
            <Link href="/about" className="text-white">About</Link>
            <Link href="/donate" className="hover:text-white">Donate</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#071d31] text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 grayscale"
          style={{
            backgroundImage: "url('/taft-first-pitch-1910.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071d31] via-[#071d31]/90 to-[#071d31]/50" />

        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-36">
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px w-12 bg-[#c9a65f]" />
            <span className="text-xs font-bold uppercase tracking-[0.35em] text-[#d8bb7e]">
              The Story Behind the Archive
            </span>
          </div>

          <h1 className="max-w-4xl font-serif text-5xl font-bold leading-[1.12] md:text-7xl">
            Two American
            <br />
            Institutions.
            <br />
            <span className="italic text-[#d6b46f]">
              One Remarkable History.
            </span>
          </h1>

          <p className="mt-9 max-w-2xl text-lg leading-8 text-[#e5dfd1] md:text-xl">
            One represents the nation&apos;s highest office. The other
            its most enduring game. Together, they tell a story
            that belongs to generations of Americans.
          </p>

          <div className="mt-12 flex items-center gap-3 text-[#d6b46f]">
            <span className="text-xl">★</span>
            <span className="h-px w-20 bg-[#a98a52]" />
            <span className="text-xs font-bold uppercase tracking-[0.25em]">
              America&apos;s Presidents. America&apos;s Pastime.
            </span>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="border-b border-[#d8c9a9]">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 py-20 md:grid-cols-[1.2fr_0.8fr] md:items-center md:py-28">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#9b712f]">
              Chapter I / Our Story
            </p>
            <h2 className="mt-5 font-serif text-4xl font-bold leading-tight md:text-5xl">
              History Is More Than
              <br />
              What Happens in Washington.
            </h2>

            <div className="mt-8 space-y-5 text-base leading-8 text-[#47505a]">
              <p>
                Presidential history is often told through elections,
                legislation, wars, and defining speeches. But some of
                its most revealing moments happened far from the
                halls of government.
              </p>
              <p>
                They happened in crowded grandstands, on dusty
                diamonds, and in ballparks where presidents became
                spectators alongside the people they served.
              </p>
              <p>
                Baseball offers a different perspective on the
                American presidency. It reveals presidents not only
                as national leaders, but as fans, participants,
                guests, and witnesses to the evolution of a game
                woven into American culture.
              </p>
              <p className="font-semibold text-[#172b3d]">
                Presidential Pastime exists to preserve those
                connections and bring their stories together
                in one carefully curated historical home.
              </p>
            </div>
          </div>

          <figure className="border border-[#c7b48d] bg-[#e9dec5] p-3 shadow-xl">
            <div className="overflow-hidden bg-[#d7cbb4]">
              <img
                src="/taft-first-pitch-1910.jpg"
                alt="Historical photograph of President William Howard Taft at the 1910 ceremonial first pitch"
                className="h-[420px] w-full object-cover grayscale"
              />
            </div>
            <figcaption className="px-3 py-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9a742e]">
                From the Historical Record
              </p>
              <p className="mt-2 font-serif text-lg font-bold">
                William Howard Taft · 1910
              </p>
              <p className="mt-1 text-sm leading-6 text-[#57606a]">
                A ceremonial first pitch that helped establish
                an enduring presidential tradition.
              </p>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="bg-[#102c44] px-6 py-20 text-center text-white md:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d6b46f]">
            Why This History Matters
          </p>
          <p className="mt-8 font-serif text-3xl leading-relaxed md:text-5xl">
            &quot;To understand a president, sometimes it helps
            to look beyond the White House
            <span className="text-[#d6b46f]"> and into the ballpark.</span>&quot;
          </p>
          <p className="mt-7 text-xs uppercase tracking-[0.25em] text-[#b5c3cb]">
            The Editorial Vision of Presidential Pastime
          </p>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#9b712f]">
            Chapter II / Explore the Archive
          </p>
          <h2 className="mt-5 font-serif text-4xl font-bold md:text-5xl">
            A Living Museum of
            <span className="italic text-[#9b712f]"> America&apos;s Game.</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#57606a]">
            Every presidential profile, historical photograph,
            and surviving artifact adds another piece to the
            larger story.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {collections.map((item) => (
            <Link
              key={item.number}
              href={item.href}
              className="group flex flex-col border border-[#cdbd9b] bg-[#fbf7ed] p-8 transition hover:-translate-y-1 hover:border-[#a98a52] hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <span className="font-serif text-4xl text-[#c3a66e]">
                  {item.number}
                </span>
                <span className="text-xl text-[#9b712f]">★</span>
              </div>
              <div className="mt-10 text-[10px] font-bold uppercase tracking-[0.25em] text-[#9b712f]">
                {item.label}
              </div>
              <h3 className="mt-3 font-serif text-2xl font-bold">
                {item.title}
              </h3>
              <p className="mt-5 flex-1 text-sm leading-7 text-[#57606a]">
                {item.description}
              </p>
              <div className="mt-9 border-t border-[#ded2b9] pt-5 text-xs font-bold uppercase tracking-wider text-[#8e6327] group-hover:text-[#a4282d]">
                {item.action} →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* AUTHENTICITY */}
      <section className="border-y border-[#d4c3a1] bg-[#eae0cb]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[0.75fr_1.25fr] md:items-center md:py-24">
          <div className="border-2 border-[#bca16b] p-8 text-center">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#a98a52] font-serif text-5xl text-[#8d6c32]">
              P
            </div>
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.25em] text-[#8d6c32]">
              Preservation
            </p>
            <p className="mt-3 font-serif text-2xl font-bold">
              History Deserves
              <br />
              the Real Thing.
            </p>
            <div className="mt-6 text-[#a98a52]">★ ★ ★</div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#9b712f]">
              Chapter III / Our Commitment
            </p>
            <h2 className="mt-5 font-serif text-4xl font-bold md:text-5xl">
              Authenticity Is at the
              Heart of the Collection.
            </h2>
            <p className="mt-7 text-base leading-8 text-[#47505a]">
              A century-old photograph, an original baseball,
              or a surviving presidential signature carries
              something a modern recreation cannot: a direct
              connection to the past.
            </p>
            <p className="mt-5 text-base leading-8 text-[#47505a]">
              Our aim is to distinguish documented historical
              evidence from legend, identify original objects
              whenever possible, and explain what is known,
              what remains uncertain, and why each piece matters.
            </p>
            <blockquote className="mt-8 border-l-4 border-[#b89a60] pl-6">
              <p className="font-serif text-xl font-semibold italic leading-9 text-[#172b3d]">
                “The presidency shaped a nation. Baseball captured its spirit.
                Together, they tell an American story.”
              </p>
              <footer className="mt-4 text-xs font-bold uppercase tracking-[0.15em] text-[#8d6c32]">
                — Brandon Wabeke, Founder of Presidential Pastime
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="relative overflow-hidden bg-[#071d31] px-6 py-24 text-center text-white md:py-32">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center font-serif text-[240px] font-bold text-white/[0.025] md:text-[400px]">
          ★
        </div>
        <div className="relative mx-auto max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d6b46f]">
            The Story Continues
          </p>
          <h2 className="mt-7 font-serif text-4xl font-bold leading-tight md:text-6xl">
            More Than Baseball.
            <br />
            <span className="italic text-[#d6b46f]">
              More Than Politics.
            </span>
            <br />
            American History.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#c8d1d5]">
            This is a place to discover forgotten moments,
            revisit familiar traditions, and see America&apos;s
            presidents through the shared experience of
            America&apos;s pastime.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link
              href="/presidents"
              className="bg-[#c3a063] px-8 py-4 text-xs font-bold uppercase tracking-widest text-[#102c44] transition hover:bg-[#e3c78d]"
            >
              Explore the Presidents →
            </Link>
            <Link
              href="/heritage-collection"
              className="border border-[#c3a063] px-8 py-4 text-xs font-bold uppercase tracking-widest text-[#f0e3c6] transition hover:bg-white/10"
            >
              Visit the Heritage Collection
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-[#061727] px-6 py-8 text-center text-xs text-[#aebcc6]">
        <p className="font-serif text-lg font-bold tracking-wider text-white">
          PRESIDENTIAL PASTIME
        </p>
        <p className="mt-2 uppercase tracking-[0.2em]">
          America&apos;s Presidents. America&apos;s Pastime.
        </p>
      </footer>
    </main>
  );
}
