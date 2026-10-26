import Link from "next/link";

const stories = [
  {
    year: "1930",
    category: "Baseball's Most Famous Salary",
    title: "Babe Ruth Made More Than the President",
    fact: "Babe Ruth earned $80,000 in 1930, more than President Herbert Hoover's $75,000 salary.",
    story:
      "When reporters questioned why Ruth should earn more than the president, the legendary slugger reportedly replied that he had enjoyed a better year. The remark became one of baseball's most famous anecdotes, although accounts differ on his exact words.",
    source: "Herbert Hoover Presidential Library",
    sourceUrl:
      "https://hoover.blogs.archives.gov/2019/07/24/herbert-hoover-and-babe-ruth/",
    profile: "/presidents/herbert-hoover",
  },
  {
    year: "1970s",
    category: "Presidential Baseball Skills",
    title: "The President Who Played Against His Secret Service",
    fact: "Jimmy Carter organized competitive softball games with his Secret Service agents.",
    story:
      "While vacationing in Plains, Georgia, President Carter regularly organized softball games involving members of his Secret Service security detail. Unlike presidents who mainly watched baseball from the stands, Carter was an enthusiastic participant on the field.",
    source: "White House Historical Archives",
    sourceUrl:
      "https://georgewbush-whitehouse.archives.gov/baseball/photoessay/14.html",
    profile: "/presidents/jimmy-carter",
  },

  {
    year: "1892",
    category: "A Presidential First",
    title: "The First President at a Major League Game",
    fact: "Benjamin Harrison became the first sitting president to attend a Major League Baseball game.",
    story:
      "On June 6, 1892, Harrison watched Cincinnati defeat Washington, 7–4. The visit helped establish a relationship between the presidency and professional baseball that would grow throughout the next century.",
    source: "Major League Baseball",
    sourceUrl: "https://www.mlb.com/news/baseball-has-history-with-many-u-s-presidents-c164503968",
    profile: "/presidents/benjamin-harrison",
  },
  {
    year: "1915",
    category: "Presidential Romance",
    title: "A World Series Date with the President",
    fact: "Woodrow Wilson attended the World Series with his future wife shortly after announcing their engagement.",
    story:
      "Wilson and Edith Galt attended a World Series game in Philadelphia in October 1915. Their appearance drew attention beyond the baseball diamond, bringing a presidential romance into the national spotlight.",
    source: "White House Historical Archive",
    sourceUrl: "https://georgewbush-whitehouse.archives.gov/baseball/text/",
    profile: "/presidents/woodrow-wilson",
  },
  {
    year: "1924",
    category: "First Lady of Baseball",
    title: "Grace Coolidge Loved the Game",
    fact: "The First Lady became an enthusiastic supporter of the Washington Senators.",
    story:
      "Grace Coolidge and President Calvin Coolidge followed Washington baseball during the Senators' celebrated 1924 championship season. Photographs document their attendance at games and the president signing a baseball for Walter Johnson.",
    source: "White House Historical Association",
    sourceUrl: "https://www.whitehousehistory.org/galleries/president-coolidge-baseball",
    profile: "/presidents/calvin-coolidge",
  },
  {
    year: "1930s",
    category: "Before the White House",
    title: "Reagan Broadcast Games He Couldn't See",
    fact: "Ronald Reagan recreated Chicago Cubs games using telegraph reports.",
    story:
      "Before becoming an actor or president, Reagan worked in radio, describing Cubs games from incoming telegraph updates rather than watching the action. His baseball broadcasting experience helped launch his entertainment career.",
    source: "Major League Baseball",
    sourceUrl: "https://www.mlb.com/news/baseball-has-history-with-many-u-s-presidents-c164503968",
    profile: "/presidents/ronald-reagan",
  },
  {
    year: "1956",
    category: "A Surviving Artifact",
    title: "A President's Baseball Glove Survives",
    fact: "The National Baseball Hall of Fame preserves a glove used by Dwight Eisenhower.",
    story:
      "Among Cooperstown's presidential artifacts is a baseball glove Eisenhower used for a ceremonial first pitch in 1956. It is a tangible reminder of the connection between the White House and the national pastime.",
    source: "National Baseball Hall of Fame",
    sourceUrl: "https://baseballhall.org/discover/short-stops/presidential-history-part-of-hof-collection",
    profile: "/presidents/dwight-d-eisenhower",
  },
  {
    year: "1960s",
    category: "An Unexpected Career",
    title: "Baseball Wanted Nixon as Commissioner",
    fact: "Prominent Major League players tried to persuade Richard Nixon to become baseball commissioner.",
    story:
      "Nixon's knowledge and enthusiasm for baseball were widely recognized. During the 1960s, prominent players encouraged the idea of Nixon becoming commissioner, an extraordinary alternative career for a future president.",
    source: "Richard Nixon Foundation",
    sourceUrl: "https://www.nixonfoundation.org/2022/04/beyond-the-first-pitch/",
    profile: "/presidents/richard-nixon",
  },
  {
    year: "2001",
    category: "Baseball and the Nation",
    title: "A World Series Pitch After September 11",
    fact: "George W. Bush threw a ceremonial first pitch at Yankee Stadium weeks after the attacks.",
    story:
      "On October 30, 2001, President Bush took the field before Game 3 of the World Series in New York. His appearance became a memorable moment of national solidarity as the country responded to the September 11 attacks.",
    source: "George W. Bush Presidential Library",
    sourceUrl: "https://www.georgewbushlibrary.gov/artifacts/past-exhibits/baseball-americas-presidents-americas-pastime",
    profile: "/presidents/george-w-bush",
  },

  {
    year: "1910",
    category: "A Presidential First",
    title: "Taft Threw to a Baseball Legend",
    fact: "The first presidential Opening Day pitch went to Walter Johnson.",
    story:
      "On April 14, 1910, William Howard Taft tossed the ceremonial first pitch to Washington Senators ace Walter Johnson. Johnson then pitched a one-hit shutout against the Philadelphia Athletics in a 3–0 victory.",
    source: "Library of Congress",
    sourceUrl:
      "https://blogs.loc.gov/loc/2013/03/opening-day-redux-for-president-taft/",
    profile: "/presidents/william-howard-taft",
  },
  {
    year: "1942",
    category: "Baseball and World War II",
    title: "A President Helped Keep Baseball Alive",
    fact: "Franklin Roosevelt encouraged baseball to continue during wartime.",
    story:
      "After the United States entered World War II, Commissioner Kenesaw Mountain Landis asked Roosevelt whether professional baseball should continue. Roosevelt's response, known as the Green Light Letter, encouraged the sport to keep operating as recreation for Americans working through the war.",
    source: "National Baseball Hall of Fame",
    sourceUrl:
      "https://baseballhall.org/discover/inside-pitch/roosevelt-sends-green-light-letter",
    profile: null,
  },
  {
    year: "1950",
    category: "An Unusual First Pitch",
    title: "Truman Threw With Both Hands",
    fact: "Harry Truman threw ceremonial first pitches both right-handed and left-handed.",
    story:
      "At Washington's 1950 Opening Day, President Harry Truman demonstrated his ambidexterity by throwing ceremonial pitches with both arms. It remains one of the more unusual moments in presidential baseball history.",
    source: "National Baseball Hall of Fame",
    sourceUrl:
      "https://baseballhall.org/discover-more/stories/baseball-history/opening-day",
    profile: null,
  },
];

export default function DidYouKnowPage() {
  return (
    <main className="min-h-screen w-full max-w-full overflow-x-clip bg-[#f4ecdb] text-[#102c44]">
      

      <section className="bg-[#0b2439] px-6 py-20 text-center text-[#fff8e8]">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d6b46f]">
          Fascinating Presidential Baseball History
        </p>
        <h1 className="mt-5 font-serif text-4xl font-bold md:text-6xl">
          Did You Know?
        </h1>
        <div className="mx-auto my-7 h-[2px] w-28 bg-[#a4282d]" />
        <p className="mx-auto max-w-2xl font-serif text-lg leading-8 text-[#e6dac1] md:text-xl">
          Remarkable moments, forgotten stories, and surprising
          connections between America&apos;s presidents and its national pastime.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a4282d]">
            From the Historical Record
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold">
            Fascinating Facts &amp; Forgotten Stories
          </h2>
          <p className="mt-3 max-w-2xl leading-7 text-[#52606d]">
            Each story is accompanied by a historical source so you
            can explore the record for yourself.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story) => (
            <article
              key={story.title}
              className="flex flex-col border border-[#c9b994] bg-[#f8f1df] p-7"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#a4282d]">
                  {story.category}
                </span>
                <span className="font-serif text-xl font-bold text-[#98723c]">
                  {story.year}
                </span>
              </div>

              <h3 className="mt-6 font-serif text-2xl font-bold leading-snug">
                {story.title}
              </h3>

              <p className="mt-4 border-l-2 border-[#a4282d] pl-4 font-serif text-lg italic leading-7">
                {story.fact}
              </p>

              <p className="mt-5 flex-1 leading-7 text-[#52606d]">
                {story.story}
              </p>

              <div className="mt-7 border-t border-[#c9b994] pt-5">
                <a
                  href={story.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold uppercase tracking-wide text-[#a4282d] hover:underline"
                >
                  Historical Source: {story.source} ↗
                </a>
                {story.profile && (
                  <Link
                    href={story.profile}
                    className="mt-4 block text-xs font-bold uppercase tracking-wide text-[#102c44] hover:underline"
                  >
                    Explore Presidential Profile →
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-[#c9b994] bg-[#eae0cc] px-6 py-14 text-center">
        <h2 className="font-serif text-2xl font-bold">
          History Has More Stories to Tell
        </h2>
        <p className="mx-auto mt-4 max-w-xl leading-7 text-[#52606d]">
          Continue exploring the extraordinary relationship
          between the American presidency and baseball.
        </p>
        <Link
          href="/presidents"
          className="mt-7 inline-block bg-[#102c44] px-7 py-4 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#1b405e]"
        >
          Explore the Presidents →
        </Link>
      </section>
    </main>
  );
}
