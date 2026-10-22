import Link from "next/link";

export default function FirstPitchPage() {
  return (
    <main className="min-h-screen bg-[#f4ecdb] text-[#102c44]">
      <header className="bg-[#102c44] px-6 py-6 text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" className="font-serif text-xl font-bold">
            PRESIDENTIAL PASTIME
          </Link>
          <Link href="/" className="text-sm text-[#d6b46f]">
            ← Back to Home
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a4282d]">
          Presidential Baseball History
        </p>

        <h1 className="mt-5 font-serif text-4xl font-bold md:text-5xl">
          The First Pitch
        </h1>

        <div className="mx-auto my-8 h-[2px] w-28 bg-[#a4282d]" />

        <p className="mx-auto max-w-2xl font-serif text-xl leading-9">
          In 1910, President William Howard Taft helped establish
          one of baseball&apos;s most enduring traditions when he
          threw the ceremonial first pitch at Washington&apos;s
          Opening Day game.
        </p>

        <p className="mx-auto mt-8 max-w-2xl leading-8 text-[#52606d]">
          From the early twentieth century to the modern era,
          presidential first pitches have brought together
          the White House, baseball, and generations of American fans.
          This section will explore the people, games, photographs,
          and stories behind that tradition.
        </p>

        <Link
          href="/presidents/william-howard-taft"
          className="mt-10 inline-block bg-[#102c44] px-7 py-4 text-sm font-bold uppercase tracking-wider text-white hover:bg-[#1b405e]"
        >
          Explore Presidential Profiles →
        </Link>
      </section>
    </main>
  );
}
