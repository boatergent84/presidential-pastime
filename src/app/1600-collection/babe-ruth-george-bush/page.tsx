import Link from "next/link";
import ArchiveShell from "../../components/archive-shell";

export const metadata = {
  title: "The Babe & the Future President | Presidential Pastime",
  description:
    "The remarkable 1948 meeting between Babe Ruth and future President George H. W. Bush at Yale Field.",
};

const photoAvailable = true;

const sources = [
  {
    title: "National Archives — Original Photograph, Record 186375",
    url: "https://catalog.archives.gov/id/186375",
  },
  {
    title: "Library of Congress — Photograph and Catalog Record",
    url: "https://www.loc.gov/item/2021669737/",
  },
  {
    title: "George H. W. Bush Presidential Library — Baseball Gallery",
    url: "https://www.bush41library.gov/galleries/baseball",
  },
  {
    title: "Yale News — George H. W. Bush at Yale",
    url: "https://news.yale.edu/2018/12/03/photos-george-hw-bush-yale",
  },
  {
    title: "MLB — George H. W. Bush Meets Babe Ruth",
    url: "https://www.mlb.com/cut4/george-h-w-bush-met-babe-ruth-in-1948-c301340278",
  },
];

export default function BabeRuthGeorgeBushExhibit() {
  return (
    <ArchiveShell
      eyebrow="THE 1600 COLLECTION · SPECIAL EXHIBIT 007"
      title="The Babe & the Future President"
      subtitle="One Meeting. Two American Legends."
    >
      <article className="mx-auto max-w-5xl">
        <div className="mb-8 border-b border-[#b89a61] pb-5 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a4282d]">
            June 5, 1948 · Yale Field · New Haven, Connecticut
          </p>
          <h2 className="mt-4 font-serif text-3xl font-bold md:text-4xl">
            A Moment Captured in Baseball History
          </h2>
        </div>

        <figure className="overflow-hidden border-2 border-[#b89a61] bg-[#102c44] p-4 md:p-7">
          {photoAvailable ? (
            <img
              src="/babe-ruth-george-bush/bush-ruth-1948.jpg"
              alt="Babe Ruth presents his autobiography manuscript to Yale baseball captain George H. W. Bush in 1948"
              className="mx-auto max-h-[650px] w-full object-contain"
            />
          ) : (
            <div className="py-20 text-center">
              <p className="font-serif text-2xl text-[#d7bb83]">
                The Historic 1948 Photograph
              </p>
              <a
                href="https://www.loc.gov/item/2021669737/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block underline text-white"
              >
                View the original photograph at the Library of Congress
              </a>
            </div>
          )}
          <figcaption className="mt-5 text-center text-sm leading-6 text-[#eee7d7]">
            Babe Ruth and George H. W. Bush at Yale, 1948.
            U.S. National Archives, Identifier 186375.
            Access and use restrictions: unrestricted.
          </figcaption>
        </figure>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            ["1948", "The historic meeting"],
            ["23", "Bush's age"],
            ["72 days", "Until Ruth's death"],
          ].map(([value, label]) => (
            <div
              key={value}
              className="border border-[#b89a61] bg-[#f8f3e8] p-6 text-center"
            >
              <p className="font-serif text-3xl font-bold text-[#a4282d]">
                {value}
              </p>
              <p className="mt-2 text-sm text-[#59636b]">{label}</p>
            </div>
          ))}
        </div>

        <section className="mt-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a4282d]">
            The Story
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold">
            The Sultan of Swat Meets a Future President
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-9 text-[#334657]">
            <p>
              On June 5, 1948, one of the most remarkable encounters
              in American baseball history unfolded at Yale Field.
              George Herbert Walker Bush, a 23-year-old student and
              captain of Yale's baseball team, stood beside the
              legendary Babe Ruth.
            </p>
            <p>
              Ruth had arrived to present Yale with the manuscript
              of his autobiography, <em>The Babe Ruth Story</em>.
              The occasion brought together a baseball icon whose
              career had already become part of American folklore
              and a young Navy veteran whose future lay far beyond
              the baseball diamond.
            </p>
            <p>
              Ruth was in the final months of his life. His appearance
              at Yale was among his last public baseball-related
              appearances. He died on August 16, 1948.
            </p>
            <p>
              Forty-one years after the ceremony, Bush would take
              the oath of office as the 41st president of the
              United States.
            </p>
          </div>
        </section>

        <section className="mt-14 border-l-4 border-[#a4282d] bg-[#f8f3e8] p-7 md:p-10">
          <h2 className="font-serif text-2xl font-bold">
            Before the White House: Bush the Ballplayer
          </h2>
          <p className="mt-5 leading-8 text-[#334657]">
            After serving as a naval aviator during World War II,
            Bush attended Yale University and played first base
            for its baseball team. He captained the 1948 squad,
            which reached the first College World Series.
            His passion for baseball continued throughout his
            public life, including his presidency.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="font-serif text-3xl font-bold">
            A Historic Meeting: The Timeline
          </h2>
          <div className="mt-7 space-y-4">
            {[
              [
                "1942–1945",
                "Bush serves in the U.S. Navy during World War II.",
              ],
              [
                "1948",
                "Bush captains Yale's baseball team.",
              ],
              [
                "June 5, 1948",
                "Babe Ruth presents his autobiography manuscript at Yale Field.",
              ],
              [
                "August 16, 1948",
                "Babe Ruth dies in New York at age 53.",
              ],
              [
                "January 20, 1989",
                "George H. W. Bush becomes the 41st U.S. president.",
              ],
            ].map(([date, event]) => (
              <div
                key={date}
                className="grid gap-3 border-b border-[#c9b98c] py-4 md:grid-cols-[180px_1fr]"
              >
                <p className="font-serif font-bold text-[#a4282d]">
                  {date}
                </p>
                <p className="leading-7 text-[#334657]">{event}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 bg-[#102c44] p-8 text-center text-white md:p-12">
          <p className="text-xs uppercase tracking-[0.2em] text-[#d7bb83]">
            The Historical Significance
          </p>
          <h2 className="mt-4 font-serif text-3xl">
            Two Lives. One Photograph.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl leading-8 text-[#eee7d7]">
            In 1948, Babe Ruth was already an American legend.
            George H. W. Bush was a college baseball captain.
            Neither the photograph nor the ceremony could have
            captured the full historical significance of the
            moment: the closing chapter of one extraordinary
            American life and the early years of another.
          </p>
        </section>

        <section className="mt-14 border-t-2 border-[#b89a61] pt-8">
          <h2 className="font-serif text-2xl font-bold">
            Historical Sources &amp; Photo Credit
          </h2>
          <p className="mt-3 leading-7 text-[#59636b]">
            Main photograph: U.S. National Archives, George H. W.
            Bush Presidential Library, National Archives Identifier
            186375. The archival record lists unrestricted use.
          </p>
          <ul className="mt-6 space-y-3">
            {sources.map((source) => (
              <li key={source.url}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#a4282d] underline"
                >
                  {source.title}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-12 text-center">
          <Link
            href="/heritage-collection"
            className="inline-block border-b-2 border-[#a4282d] pb-1 font-bold text-[#a4282d]"
          >
            Return to The 1600 Collection →
          </Link>
        </div>
      </article>
    
      {/* TWO PHOTOGRAPHS FROM YALE FIELD */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="mb-8 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a4282d]">
            The Photographic Record
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-[#102c44]">
            Photographs from Yale Field
          </h2>
          <p className="mt-3 text-sm text-[#526273]">
            June 5, 1948 · New Haven, Connecticut
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <article className="overflow-hidden rounded-lg border border-[#c9b98c] bg-[#f5efdf]">
            <img
              src="/babe-ruth-george-bush/bush-ruth-1948.jpg"
              alt="Babe Ruth and George H. W. Bush at Yale Field in 1948"
              className="h-80 w-full bg-[#e8e0ce] object-contain"
            />
            <div className="p-5">
              <p className="text-xs font-bold tracking-widest text-[#a4282d]">PHOTOGRAPH 01</p>
              <h3 className="mt-2 font-serif text-xl font-bold text-[#102c44]">
                The Historic Presentation
              </h3>
              <p className="mt-2 text-sm text-[#526273]">
                Archival photograph, June 5, 1948.
              </p>
            </div>
          </article>

          <article className="overflow-hidden rounded-lg border border-[#c9b98c] bg-[#f5efdf]">
            <div className="flex h-80 flex-col items-center justify-center bg-[#102c44] px-6 text-center">
              <span className="font-serif text-6xl text-[#c9b98c]">02</span>
              <p className="mt-4 font-serif text-xl text-[#eee7d7]">
                Yale University Archives
              </p>
              <p className="mt-2 text-sm text-[#d5c7a5]">
                Original historical photograph
              </p>
            </div>
            <div className="p-5">
              <p className="text-xs font-bold tracking-widest text-[#a4282d]">PHOTOGRAPH 02</p>
              <h3 className="mt-2 font-serif text-xl font-bold text-[#102c44]">
                The Yale Archival Photograph
              </h3>
              <p className="mt-2 text-sm text-[#526273]">
                Yale Manuscripts and Archives.
              </p>
              <a
                href="https://news.yale.edu/2018/12/03/photos-george-hw-bush-yale"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block border-b border-[#a4282d] pb-1 text-sm font-semibold text-[#a4282d]"
              >
                View Yale Photograph
              </a>
            </div>
          </article>
        </div>
      </section>

    </ArchiveShell>
  );
}
