import type { ReactNode } from 'react';

export default function ArchiveShell({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  const isFirstPitch = title === "The First Pitch";
  const isRuthExhibit = title === "Babe Ruth & Franklin D. Roosevelt";
  const isBushExhibit = title === "The Babe & the Future President";
  const isClintonExhibit = title === "The President Who Tried to Save Baseball";
  const isNixonExhibit = title === "Richard Nixon's Dream Team";

  return (
    <main className="min-h-screen bg-[#eee7d7] text-[#102c44]">
      {isFirstPitch || isRuthExhibit || isNixonExhibit || isBushExhibit || isClintonExhibit ? (
        <header
          className="border-b-4 border-[#b89a61] bg-[#102c44] px-6 py-9 text-center text-white"
          style={
            isRuthExhibit
              ? {
                  backgroundImage:
                    "linear-gradient(rgba(16,44,68,0.65), rgba(16,44,68,0.65)), url('/ruth-roosevelt/roosevelt-1932-first-pitch.jpeg')",
                  backgroundPosition: "center 22%",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }
              : undefined
          }
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d7bb83]">
            {eyebrow}
          </p>

          <div className="mx-auto mt-3 flex max-w-xs items-center gap-4 text-[#d7bb83]">
            <div className="h-px flex-1 bg-[#b89a61]" />
            <span>★</span>
            <div className="h-px flex-1 bg-[#b89a61]" />
          </div>

          <h1 className="mt-3 font-serif text-2xl font-bold md:text-4xl">
            {title}
          </h1>

          <p className="mt-2 font-serif text-xl text-[#d7bb83] md:text-2xl">
            {subtitle}
          </p>

          {isFirstPitch && (
            <p className="mx-auto mt-3 max-w-2xl leading-8 text-[#eee7d7]">
              Discover the historic moment President William Howard Taft
              inaugurated a tradition connecting the White House
              and America&apos;s national pastime.
            </p>
          )}
        </header>
      ) : (
        <header className="bg-[#102c44] px-6 py-14 text-center text-white">
          <p className="text-xs uppercase tracking-[.25em] text-[#c9b98c]">
            {eyebrow}
          </p>
          <h1 className="mt-3 font-serif text-4xl font-bold md:text-6xl">
            {title}
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-[#eee7d7]">
            {subtitle}
          </p>
        </header>
      )}

      <section className="mx-auto max-w-6xl px-6 py-12">
        {children}
      </section>
    </main>
  );
}
