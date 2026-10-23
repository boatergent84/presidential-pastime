
import Link from "next/link";

const presidents = [
  {
    image: "/abraham-lincoln-gardner.jpg",
    name: "Lincoln",
    fullName: "Abraham Lincoln",
    years: "1861–1865",
    slug: "abraham-lincoln",
  },
  {
    image: "/andrew-johnson-brady.jpg",
    name: "A. Johnson",
    fullName: "Andrew Johnson",
    years: "1865–1869",
    slug: "andrew-johnson",
  },
  {
    image: "/grant-new.jpg",
    name: "Grant",
    fullName: "Ulysses S. Grant",
    years: "1869–1877",
    slug: "ulysses-s-grant",
  },
  {
    image: "/hayes-whitehouse.jpg",
    name: "Hayes",
    fullName: "Rutherford B. Hayes",
    years: "1877–1881",
    slug: "rutherford-b-hayes",
  },
  {
    image: "/garfield-whitehouse.jpg",
    name: "Garfield",
    fullName: "James A. Garfield",
    years: "1881",
    slug: "james-a-garfield",
  },
  {
    image: "/arthur-whitehouse.jpg",
    name: "Arthur",
    fullName: "Chester A. Arthur",
    years: "1881–1885",
    slug: "chester-a-arthur",
  },
  {
    image: "/cleveland-new.png?v=1",
    name: "Cleveland",
    fullName: "Grover Cleveland",
    years: "1885–1889, 1893–1897",
    slug: "grover-cleveland",
  },
  {
    image: "/harrison-pach-1896.jpg?v=1",
    name: "B. Harrison",
    fullName: "Benjamin Harrison",
    years: "1889–1893",
    slug: "benjamin-harrison",
  },
  {
    image: "/mckinley-whitehouse.jpg?v=1",
    name: "McKinley",
    fullName: "William McKinley",
    years: "1897–1901",
    slug: "william-mckinley",
  },
  {
    image: "/roosevelt-formal.jpg?v=1",
    name: "T. Roosevelt",
    fullName: "Theodore Roosevelt",
    years: "1901–1909",
    slug: "theodore-roosevelt",
  },
  {
    image: "/taft-formal-portrait.jpg?v=1",
    name: "Taft",
    fullName: "William Howard Taft",
    years: "1909–1913",
    slug: "william-howard-taft",
  },
  {
    image: "/wilson-1914.jpg",
    name: "Wilson",
    fullName: "Woodrow Wilson",
    years: "1913–1921",
    slug: "woodrow-wilson",
  },
  {
    image: "/harding-front-1920.jpg",
    name: "Harding",
    fullName: "Warren G. Harding",
    years: "1921–1923",
    slug: "warren-g-harding",
  },
  {
    image: "/coolidge.jpg",
    name: "Coolidge",
    fullName: "Calvin Coolidge",
    years: "1923–1929",
    slug: "calvin-coolidge",
  },
  {
    image: "/hoover.jpg",
    name: "Hoover",
    fullName: "Herbert Hoover",
    years: "1929–1933",
    slug: "herbert-hoover",
  },
  {
    image: "/fdr.jpg",
    name: "F.D. Roosevelt",
    fullName: "Franklin D. Roosevelt",
    years: "1933–1945",
    slug: "franklin-d-roosevelt",
  },
  {
    image: "/truman.jpg",
    name: "Truman",
    fullName: "Harry S. Truman",
    years: "1945–1953",
    slug: "harry-s-truman",
  },
  {
    image: "/eisenhower.jpg",
    name: "Eisenhower",
    fullName: "Dwight D. Eisenhower",
    years: "1953–1961",
    slug: "dwight-d-eisenhower",
  },
  {
    image: "/jfk-color-portrait.jpg",
    name: "Kennedy",
    fullName: "John F. Kennedy",
    years: "1961–1963",
    slug: "john-f-kennedy",
  },
  {
    image: "/lbj.jpg",
    name: "L.B. Johnson",
    fullName: "Lyndon B. Johnson",
    years: "1963–1969",
    slug: "lyndon-b-johnson",
  },
  {
    image: "/nixon.jpg",
    name: "Nixon",
    fullName: "Richard Nixon",
    years: "1969–1974",
    slug: "richard-nixon",
  },
  {
    image: "/ford.jpg",
    name: "Ford",
    fullName: "Gerald Ford",
    years: "1974–1977",
    slug: "gerald-ford",
  },
  {
    image: "/carter.jpg",
    name: "Carter",
    fullName: "Jimmy Carter",
    years: "1977–1981",
    slug: "jimmy-carter",
  },
  {
    image: "/reagan.jpg",
    name: "Reagan",
    fullName: "Ronald Reagan",
    years: "1981–1989",
    slug: "ronald-reagan",
  },
  {
    image: "/bush41.jpg",
    name: "H.W. Bush",
    fullName: "George H. W. Bush",
    years: "1989–1993",
    slug: "george-h-w-bush",
  },
  {
    image: "/clinton.jpg",
    name: "Clinton",
    fullName: "Bill Clinton",
    years: "1993–2001",
    slug: "bill-clinton",
  },
  {
    image: "/george-w-bush.jpg",
    name: "W. Bush",
    fullName: "George W. Bush",
    years: "2001–2009",
    slug: "george-w-bush",
  },
  {
    image: "/obama.jpg",
    name: "Obama",
    fullName: "Barack Obama",
    years: "2009–2017",
    slug: "barack-obama",
  },
  {
    image: "/trump.jpg",
    name: "Trump",
    fullName: "Donald Trump",
    years: "2017–2021, 2025–present",
    slug: "donald-trump",
  },
  {
    image: "/biden.jpg",
    name: "Biden",
    fullName: "Joe Biden",
    years: "2021–2025",
    slug: "joe-biden",
  },
];

const featuredArchives = [
  {
    number: "01",
    title: "Roosevelt's Green Light to Baseball",
    date: "January 15, 1942",
    president: "Franklin D. Roosevelt",
    description:
      "During World War II, Roosevelt encouraged Major League Baseball to continue playing, preserving a cherished American tradition during wartime.",
    image: "/fdr-green-light-letter-1942.jpg",
    href: "/presidents/franklin-d-roosevelt",
  },
  {
    number: "02",
    title: "Baseball in the Kennedy Years",
    date: "1961–1963",
    president: "John F. Kennedy",
    description:
      "Discover presidential first pitches, Washington baseball, and photographs from the early 1960s.",
    image: "/jfk-first-pitch-1961.jpg",
    href: "/presidents/john-f-kennedy",
  },
  {
    number: "03",
    title: "The President and the World Series",
    date: "October 9, 1915",
    president: "Woodrow Wilson",
    description:
      "Explore Wilson's historic World Series appearance and his place in early presidential baseball history.",
    image: "/wilson-baseball-1915.jpg",
    href: "/presidents/woodrow-wilson",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#eee6d3] text-[#10243a]">
      {/* HEADER */}
      <header className="bg-[#071d31] text-[#f5edd8]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-5 sm:py-5 md:px-6">
          <Link
            href="/did-you-know"
            className="flex min-w-0 items-center gap-3 md:gap-4"
          >


            <div>
              <h1 className="font-serif text-xl font-bold tracking-[0.07em] sm:text-2xl md:text-3xl lg:text-4xl">Presidential Pastime</h1>

              <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-[#d9c79d] sm:tracking-[0.28em] md:text-xs">
                The Baseball History of the American Presidency
              </p>
            </div>
          </Link>


        </div>

        {/* MOBILE NAVIGATION */}
        <details className="group border-t border-[#31475b] bg-[#f8f2e4] text-[#10243a] md:hidden">
          <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-3 font-bold uppercase tracking-[0.14em] [&::-webkit-details-marker]:hidden">
            <span className="flex items-center gap-3">
              <span className="text-xl text-[#a71924]">☰</span>
              Menu
            </span>
            <span className="text-[#a71924] transition-transform group-open:rotate-180">⌄</span>
          </summary>
          <nav aria-label="Mobile navigation" className="grid border-t border-[#d1c2a2] px-5 py-2 text-sm font-semibold">
            <Link href="/" className="border-b border-[#e2d8c4] py-3">Home</Link>
            <Link href="/presidents" className="border-b border-[#e2d8c4] py-3">Presidents</Link>
            <Link href="/first-pitches" className="border-b border-[#e2d8c4] py-3">First Pitch</Link>
            <Link href="/heritage-collection" className="border-b border-[#e2d8c4] py-3">Heritage Collection</Link>
            <Link href="/about" className="border-b border-[#e2d8c4] py-3">About</Link>
            <Link href="/donate" className="border-b border-[#e2d8c4] py-3">Donate</Link>
            <Link href="/contact" className="py-3">Contact</Link>
          </nav>
        </details>

        {/* DESKTOP NAVIGATION */}
        <nav aria-label="Main navigation" className="hidden border-t border-[#31475b] bg-[#f8f2e4] text-[#10243a] md:block">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-7 gap-y-3 px-6 py-4 text-center text-sm font-semibold">
            <Link href="/" className="hover:text-[#a71924]">Home</Link>
            <Link href="/presidents" className="hover:text-[#a71924]">Presidents</Link>
            <Link href="/first-pitches" className="hover:text-[#a71924]">First Pitch</Link>
            <Link href="/heritage-collection" className="hover:text-[#a71924]">Heritage Collection</Link>
            <Link href="/about" className="hover:text-[#a71924]">About</Link>
            <Link href="/donate" className="hover:text-[#a71924]">Donate</Link>
            <Link href="/contact" className="hover:text-[#a71924]">Contact</Link>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="bg-[#0b2439]">
        <div className="mx-auto grid max-w-7xl md:grid-cols-2">
          <div className="order-2 flex items-center px-5 py-8 sm:px-7 sm:py-12 md:order-1 md:min-h-[510px] md:px-14 md:py-16">
            <div>
              



              <div className="my-7 h-[2px] w-32 bg-[#a91d28]" />

              <p className="max-w-xl font-serif text-xl italic leading-relaxed text-[#e6dac1]">
                The Baseball History of the American Presidency
              </p>

              <p className="mt-5 max-w-xl leading-7 text-[#c8d0d5]">
                Discover the presidents who loved the game, threw
                ceremonial first pitches, welcomed champions to the
                White House, and became part of America&apos;s baseball
                story.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-4">
                <Link
                  href="/presidents"
                  className="bg-[#a71924] px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-[#c12a35]"
                >
                  Explore Presidents →
                </Link>

                <Link
                  href="/first-pitches"
                  className="border border-[#d8c79e] px-6 py-3 text-sm font-bold uppercase tracking-wider text-[#f7eed9] transition hover:bg-white/10"
                >
                  Explore the First Pitch
                </Link>
              </div>
            </div>
          </div>

          {/* COOLIDGE HERO PHOTOGRAPH */}
          <div className="relative order-1 min-h-[390px] overflow-hidden bg-[#d8cfba] sm:min-h-[430px] md:order-2 md:min-h-[510px]">
            <img
              src="/coolidge-baseball-1924.jpg"
              alt="President Calvin Coolidge at a baseball event in 1924"
              className="absolute inset-0 h-full w-full object-cover grayscale"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#0b2439]/20 via-transparent to-transparent" />

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#071d31] via-[#071d31]/70 to-transparent px-5 pb-7 pt-32 text-white md:hidden">
              

              <p className="mt-3 text-sm text-[#e6dac1]">
                President Calvin Coolidge • 1924
              </p>
            </div>

            <div className="absolute inset-x-0 bottom-0 hidden bg-gradient-to-t from-[#071d31] via-[#071d31]/75 to-transparent px-8 pb-8 pt-28 text-white md:block">
              <p className="font-serif text-xl font-bold">
                President Calvin Coolidge • 1924
              </p>

              <p className="mt-2 text-xs uppercase tracking-[0.14em] text-[#e0c78e]">
                Historical Baseball Archive
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRESIDENT BROWSER */}
      <section className="bg-[#071d31] py-8 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d9bd80]">
                Explore the Presidential Archive
              </p>

              <h2 className="mt-2 font-serif text-xl font-bold text-[#f7eed9] md:text-2xl">
                Browse by President
              </h2>
            </div>

            <Link
              href="/presidents"
              className="text-xs font-bold uppercase tracking-wider text-[#d9bd80] hover:text-white"
            >
              View All Presidents →
            </Link>
          </div>

          <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain pb-4 touch-pan-x">
            {presidents.map((president) => (
              <Link
                href={`/presidents/${president.slug}`}
                key={president.slug}
                className="group min-w-[116px] snap-start border border-[#6d7d8b] bg-[#102c44] p-3 text-center transition hover:border-[#d5b46d] hover:bg-[#173a56]"
              >
                <div className="mx-auto mb-3 h-[66px] w-[66px] overflow-hidden rounded-full border border-[#d5b46d] p-[2px]">
                  <div className="h-full w-full overflow-hidden rounded-full bg-[#e8dfca]">
                    <img
                      src={president.image}
                      alt={`${president.fullName} portrait`}
                      className={`h-full w-full object-cover object-top grayscale ${
                         president.slug === "william-howard-taft"
                            ? "scale-[1.40]"
                            : president.slug === "calvin-coolidge"
                           ? "scale-125"
                           : president.slug === "benjamin-harrison"
                           ? "scale-125 -translate-y-3"
                           : president.slug === "theodore-roosevelt"
                           ? "!object-center"
                           : ""
                       }`}
                    />
                  </div>
                </div>

                <p className="font-serif text-sm font-bold group-hover:text-[#e0c78e]">
                  {president.name}
                </p>

                <p className="mt-1 text-[10px] leading-4 text-[#b9c4cc]">
                  {president.years}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section
        id="about"
        className="border-b border-[#d1c2a2] bg-[#f8f2e4]"
      >
        <div className="mx-auto max-w-4xl px-5 py-10 text-center md:px-6 md:py-20">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#a71924]">
            Preserving an American Tradition
          </p>

          <h2 className="mt-4 font-serif text-[1.75rem] font-bold leading-tight md:text-5xl">
            Two American Institutions.
            <br />
            One Remarkable History.
          </h2>

          <div className="mx-auto my-6 h-[2px] w-24 bg-[#b99b62]" />

          <p className="mx-auto max-w-3xl text-base leading-8 text-[#455363] md:text-lg">
            For generations, baseball and the American presidency have
            shared a place in the nation&apos;s cultural history. From
            nineteenth-century ballparks to presidential first pitches,
            World Series appearances, and White House celebrations,
            these stories connect the history of the game with the
            history of the nation.
          </p>

          <p className="mx-auto mt-5 hidden max-w-3xl leading-7 text-[#52606d] md:block">
            Presidential Pastime is an independent historical archive
            dedicated to researching, documenting, and preserving
            these connections through photographs, original sources,
            timelines, and presidential profiles.
          </p>
          <Link href="/about" className="mt-5 inline-block text-sm font-bold uppercase tracking-wider text-[#a71924] md:hidden">
            Read Our Story →
          </Link>
        </div>
      </section>

      {/* FEATURED ARCHIVES */}
      <section
        id="featured-archives"
        className="mx-auto max-w-7xl px-6 py-14 md:py-20"
      >
        <div className="mb-9 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a71924]">
              From the Historical Record
            </p>

            <h2 className="mt-3 font-serif text-3xl font-bold md:text-4xl">
              Featured Presidential Archives
            </h2>
          </div>

          <Link
            href="/presidents"
            className="text-xs font-bold uppercase tracking-wider text-[#a71924] hover:underline"
          >
            Explore the Archive →
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {featuredArchives.map((archive) => (
            <article
              key={archive.number}
              className="flex flex-col overflow-hidden border border-[#c9b994] bg-[#f8f1df] shadow-sm"
            >
              <div className="relative flex h-56 items-center justify-center overflow-hidden bg-[#102c44]">
                {archive.image ? (
                  <img
                    src={archive.image}
                    alt={archive.title}
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <div className="px-8 text-center">
                    <div className="mb-4 text-4xl text-[#d5b46d]">
                      ⚾
                    </div>

                    <p className="font-serif text-2xl font-bold text-[#f5edd8]">
                      Presidential Baseball History
                    </p>

                    <p className="mt-2 text-xs uppercase tracking-widest text-[#d9bd80]">
                      Historical Archive
                    </p>
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#a71924]">
                    Archive {archive.number}
                  </p>

                  <p className="text-xs text-[#765d43]">
                    {archive.date}
                  </p>
                </div>

                <h3 className="mt-4 font-serif text-2xl font-bold">
                  {archive.title}
                </h3>

                <p className="mt-2 text-sm font-semibold text-[#765d43]">
                  {archive.president}
                </p>

                <p className="mt-4 flex-1 leading-7 text-[#455363]">
                  {archive.description}
                </p>

                <Link
                  href={archive.href}
                  className="mt-7 inline-block self-start border-b border-[#a71924] pb-1 text-xs font-bold uppercase tracking-wider text-[#a71924]"
                >
                  Explore This Story →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FIRST PITCH FEATURE */}
      <section
        id="first-pitches"
        className="bg-[#102c44] text-[#f5edd8]"
      >
        <div className="mx-auto grid max-w-7xl md:grid-cols-2">
          <div className="relative min-h-[340px] overflow-hidden bg-[#071d31]">
            <img
              src="/taft-first-pitch-1910.jpg"
              alt="President William Howard Taft at a baseball game in 1910"
              className="absolute inset-0 h-full w-full object-contain"
            />
          </div>

          <div className="flex items-center px-8 py-14 md:px-14 md:py-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d9bd80]">
                An American Tradition Since 1910
              </p>

              <h2 className="mt-4 font-serif text-4xl font-bold leading-tight md:text-5xl">
                The Presidential
                <br />
                First Pitch
              </h2>

              <div className="my-6 h-[2px] w-24 bg-[#a71924]" />

              <p className="leading-8 text-[#d5dce0]">
                On April 14, 1910, President William Howard Taft
                helped establish a tradition that would connect
                generations of presidents to America&apos;s national
                pastime.
              </p>

              <p className="mt-4 leading-8 text-[#d5dce0]">
                Explore the presidents who took part in Opening Day
                ceremonies, All-Star Games, and World Series events
                throughout baseball history.
              </p>

              <Link
                href="/first-pitches"
                className="mt-8 inline-block bg-[#a71924] px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-[#c12a35]"
              >
                Discover the First Pitch →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PHOTOGRAPHS AND MEMORABILIA */}
      {/* DISCOVER THE COLLECTION */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a71924]">
            Discover the Collection
          </p>

          <h2 className="mt-3 font-serif text-3xl font-bold md:text-4xl">
            Explore Presidential Baseball History
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#52606d]">
            Discover the presidents, traditions, and surviving
            artifacts that connect America&apos;s highest office
            with its national pastime.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">

          <Link
            href="/presidents"
            className="group relative isolate flex min-h-[340px] flex-col overflow-hidden border border-[#b99b62] bg-[#071d31] p-6 text-[#f8f2e4] transition hover:border-[#e0c78e] hover:shadow-xl"
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat grayscale transition duration-500 group-hover:scale-105"
              style={{"backgroundImage": "url('/abraham-lincoln-gardner.jpg')" }}
            />

            <div
              aria-hidden="true"
              className="absolute inset-0 z-0 bg-[#071d31]/65"
            />

            <div className="relative z-10 mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#b99b62] bg-[#10243a]/80 text-xl text-[#e0c78e]">
              ★
            </div>

            <h3 className="relative z-10 font-serif text-2xl font-bold text-[#fff8e8]">
              Presidential Profiles
            </h3>

            <div className="relative z-10 my-4 h-[2px] w-16 bg-[#b99b62]" />

            <p className="relative z-10 leading-7 text-[#e2dfd5]">
              Explore the baseball histories of America&apos;s presidents, including ballpark visits, historic games, photographs, and their connections to the national pastime.
            </p>

            <p className="relative z-10 mt-auto pt-7 text-xs font-bold uppercase tracking-wider text-[#e0c78e] group-hover:underline">
              Explore the Presidents →
            </p>
          </Link>

          <Link
            href="/did-you-know"
            className="group relative isolate flex min-h-[340px] flex-col overflow-hidden border border-[#b99b62] bg-[#071d31] p-6 text-[#f8f2e4] transition hover:border-[#e0c78e] hover:shadow-xl"
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat grayscale transition duration-500 group-hover:scale-105"
              style={{"backgroundImage": "url('/taft-first-pitch-1910.jpg')" }}
            />

            <div
              aria-hidden="true"
              className="absolute inset-0 z-0 bg-[#071d31]/65"
            />

            <div className="relative z-10 mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#b99b62] bg-[#10243a]/80 text-xl text-[#e0c78e]">
              ?
            </div>

            <h3 className="relative z-10 font-serif text-2xl font-bold text-[#fff8e8]">
              Did You Know?
            </h3>

            <div className="relative z-10 my-4 h-[2px] w-16 bg-[#b99b62]" />

            <p className="relative z-10 leading-7 text-[#e2dfd5]">
              Discover fascinating facts, forgotten stories, remarkable moments, and surprising connections between America&apos;s presidents and baseball.
            </p>

            <p className="relative z-10 mt-auto pt-7 text-xs font-bold uppercase tracking-wider text-[#e0c78e] group-hover:underline">
              Explore Fascinating Facts →
            </p>
          </Link>

          <Link
            href="/heritage-collection"
            className="group relative isolate flex min-h-[340px] flex-col overflow-hidden border border-[#b99b62] bg-[#071d31] p-6 text-[#f8f2e4] transition hover:border-[#e0c78e] hover:shadow-xl"
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat grayscale transition duration-500 group-hover:scale-105"
              style={{"backgroundImage": "url('/heritage/roosevelt-signed-baseball-1918.jpg')" }}
            />

            <div
              aria-hidden="true"
              className="absolute inset-0 z-0 bg-[#071d31]/65"
            />

            <div className="relative z-10 mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#b99b62] bg-[#10243a]/80 text-xl text-[#e0c78e]">
              ◆
            </div>

            <h3 className="relative z-10 font-serif text-2xl font-bold text-[#fff8e8]">
              Heritage Collection
            </h3>

            <div className="relative z-10 my-4 h-[2px] w-16 bg-[#b99b62]" />

            <p className="relative z-10 leading-7 text-[#e2dfd5]">
              Explore historical baseball artifacts, including presidential-signed baseballs, authentic period baseballs, and Walter Johnson&apos;s remarkable presidential baseball collection.
            </p>

            <p className="relative z-10 mt-auto pt-7 text-xs font-bold uppercase tracking-wider text-[#e0c78e] group-hover:underline">
              View the Heritage Collection →
            </p>
          </Link>
        </div>
      </section>

      {/* ARCHIVE MISSION */}
      <section className="border-t border-[#c9b994] bg-[#f8f2e4]">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a71924]">
            The Presidential Pastime Project
          </p>

          <h2 className="mt-4 font-serif text-3xl font-bold md:text-4xl">
            Preserving the Stories Behind the Game
          </h2>

          <p className="mt-6 leading-8 text-[#455363]">
            Our mission is to bring together historical accounts,
            photographs, baseball records, and archival sources in
            one accessible collection. Each presidential profile
            helps document a unique chapter in the shared history
            of baseball and the American presidency.
          </p>

          <Link
            href="/presidents"
            className="mt-8 inline-block border border-[#10243a] bg-[#10243a] px-7 py-3 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-[#1b405e]"
          >
            Enter the Presidential Archive →
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t-4 border-[#a71924] bg-[#071d31] px-6 py-10 text-center text-[#eee2c7]">
        <div className="mx-auto max-w-5xl">
          <p className="font-serif text-2xl font-bold tracking-wide md:text-3xl">
            PRESIDENTIAL PASTIME
          </p>

          <p className="mt-2 text-xs tracking-[0.12em] text-[#c8b17b] md:text-sm">
            The Baseball History of the American Presidency
          </p>

          <div className="mx-auto my-6 h-px max-w-lg bg-[#405064]" />

          <nav aria-label="Footer navigation" className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium">
            <Link href="/" className="transition hover:text-[#d6b46f]">Home</Link>
            <Link href="/about" className="transition hover:text-[#d6b46f]">About</Link>
            <Link href="/contact" className="transition hover:text-[#d6b46f]">Contact</Link>
            <Link href="/donate" className="transition hover:text-[#d6b46f]">Donate</Link>
          </nav>

          <div className="mx-auto my-6 h-px max-w-lg bg-[#405064]" />

          <p className="mx-auto max-w-2xl text-xs leading-6 text-[#9baab6]">
            An independent historical research project. Not affiliated with
            the United States government, any presidential administration,
            or Major League Baseball.
          </p>

          <p className="mt-4 text-xs text-[#9baab6]">
            © {new Date().getFullYear()} Presidential Pastime. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
