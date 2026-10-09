
export type BaseballEvent = {
  date: string;
  title: string;
  description: string;
  image?: string;
  sourceUrl?: string;
};

export type HistoricPhoto = {
  image: string;
  caption: string;
  year?: string;
  sourceUrl?: string;
};

export type HistoricalSource = {
  title: string;
  url: string;
};

export type President = {
  name: string;
  slug: string;
  number: number;
  years: string;
  baseballEra: string;
  overview: string;
  portrait: string;
  events?: BaseballEvent[];
  photos?: HistoricPhoto[];
  sources?: HistoricalSource[];
};

export const presidents: President[] = [
  {
    name: "Abraham Lincoln",
    slug: "abraham-lincoln",
    number: 16,
    years: "1861–1865",
    baseballEra: "Civil War Baseball",
    overview:
      "During Abraham Lincoln's presidency, baseball spread through military camps and American communities. An 1860 political cartoon had already used baseball to depict Lincoln and his political opponents.",
    portrait: "",
    events: [
      {
        date: "1860",
        title: "Lincoln and the Baseball Cartoon",
        description:
          "A political cartoon used baseball imagery to depict the presidential election of 1860, showing that the game was already familiar to American audiences.",
        sourceUrl:
          "https://georgewbush-whitehouse.archives.gov/baseball/text/",
      },
      {
        date: "1861–1865",
        title: "Baseball During the Civil War",
        description:
          "Soldiers played baseball and related bat-and-ball games during the Civil War, contributing to the game's spread across the United States.",
        sourceUrl:
          "https://georgewbush-whitehouse.archives.gov/baseball/text/",
      },
    ],
    sources: [
      {
        title: "White House Archives — Baseball at the White House",
        url: "https://georgewbush-whitehouse.archives.gov/baseball/text/",
      },
    ],
  },
  {
    name: "Andrew Johnson",
    slug: "andrew-johnson",
    number: 17,
    years: "1865–1869",
    baseballEra: "Post-Civil War Baseball",
    overview:
      "Baseball expanded rapidly after the Civil War. Andrew Johnson's presidency coincided with early baseball activity around the White House.",
    portrait: "",
    events: [
      {
        date: "August 30, 1865",
        title: "Baseball Comes to the White House",
        description:
          "A delegation from the National Baseball Club visited the White House, an early example of the connection between organized baseball and the presidency.",
        sourceUrl:
          "https://www.mlb.com/news/baseball-has-history-with-many-u-s-presidents-c164503968",
      },
    ],
    sources: [
      {
        title: "MLB — Baseball's History with U.S. Presidents",
        url: "https://www.mlb.com/news/baseball-has-history-with-many-u-s-presidents-c164503968",
      },
    ],
  },
  {
    name: "Ulysses S. Grant",
    slug: "ulysses-s-grant",
    number: 18,
    years: "1869–1877",
    baseballEra: "Professional Baseball Begins",
    overview:
      "The first openly professional baseball team emerged at the beginning of Grant's presidency, and the National League was founded during his administration.",
    portrait: "",
    events: [
      {
        date: "1869",
        title: "Cincinnati Red Stockings Visit",
        description:
          "President Grant received the Cincinnati Red Stockings, an early professional baseball club, at the White House.",
        sourceUrl:
          "https://www.mlb.com/news/baseball-has-history-with-many-u-s-presidents-c164503968",
      },
      {
        date: "1876",
        title: "The National League Is Founded",
        description:
          "The National League was established during Grant's presidency, an important milestone in professional baseball history.",
        sourceUrl:
          "https://georgewbush-whitehouse.archives.gov/baseball/text/",
      },
    ],
    sources: [
      {
        title: "MLB — Baseball's History with U.S. Presidents",
        url: "https://www.mlb.com/news/baseball-has-history-with-many-u-s-presidents-c164503968",
      },
    ],
  },
  {
    name: "Rutherford B. Hayes",
    slug: "rutherford-b-hayes",
    number: 19,
    years: "1877–1881",
    baseballEra: "Early National League",
    overview:
      "During Hayes's presidency, professional baseball developed further under the newly established National League. Specific presidential baseball appearances remain to be documented.",
    portrait: "",
  },
  {
    name: "James A. Garfield",
    slug: "james-a-garfield",
    number: 20,
    years: "1881",
    baseballEra: "19th-Century Baseball",
    overview:
      "Professional baseball was established by the time Garfield became president. His brief presidency left a limited record of direct presidential baseball activities.",
    portrait: "",
  },
  {
    name: "Chester A. Arthur",
    slug: "chester-a-arthur",
    number: 21,
    years: "1881–1885",
    baseballEra: "Professional League Expansion",
    overview:
      "Arthur's presidency coincided with the expansion of professional baseball and the development of competing leagues.",
    portrait: "",
    events: [
      {
        date: "1882",
        title: "The American Association Begins",
        description:
          "The American Association began play, offering professional competition alongside the National League.",
      },
    ],
  },
  {
    name: "Grover Cleveland",
    slug: "grover-cleveland",
    number: 22,
    years: "1885–1889, 1893–1897",
    baseballEra: "19th-Century Major Leagues",
    overview:
      "Cleveland's two nonconsecutive presidencies coincided with baseball's growth as a professional spectator sport, including changes in leagues, playing rules, and ballparks.",
    portrait: "",
  },
  {
    name: "Benjamin Harrison",
    slug: "benjamin-harrison",
    number: 23,
    years: "1889–1893",
    baseballEra: "First Presidential MLB Attendance",
    overview:
      "Benjamin Harrison became the first sitting president to attend a major-league baseball game, establishing an important precedent in presidential baseball history.",
    portrait: "",
    events: [
      {
        date: "June 6, 1892",
        title: "First Sitting President at a Major-League Game",
        description:
          "Harrison attended the Washington Senators versus Cincinnati Reds game at Boundary Field. Cincinnati won 7–4 in eleven innings.",
        sourceUrl:
          "https://sabr.org/gamesproj/game/june-6-1892-president-benjamin-harrison-attends-a-major-league-game/",
      },
    ],
    sources: [
      {
        title: "SABR — Harrison Attends a Major-League Game",
        url: "https://sabr.org/gamesproj/game/june-6-1892-president-benjamin-harrison-attends-a-major-league-game/",
      },
      {
        title: "MLB — Benjamin Harrison's Historic Ballgame",
        url: "https://www.mlb.com/cut4/benjamin-harrison-is-first-u-s-president-to-attend-mlb-game-in-1892-c233930574",
      },
    ],
  },
  {
    name: "William McKinley",
    slug: "william-mckinley",
    number: 25,
    years: "1897–1901",
    baseballEra: "Turn-of-the-Century Baseball",
    overview:
      "Baseball was a major American spectator sport during McKinley's presidency. The American League was developing into a major-league competitor at the end of his administration.",
    portrait: "",
  },
  {
    name: "Theodore Roosevelt",
    slug: "theodore-roosevelt",
    number: 26,
    years: "1901–1909",
    baseballEra: "Deadball Era",
    overview:
      "Roosevelt's presidency overlapped with the early American League, the first modern World Series, and the growth of Major League Baseball as a national institution.",
    portrait: "",
    events: [
      {
        date: "1903",
        title: "The First Modern World Series",
        description:
          "The Boston Americans defeated the Pittsburgh Pirates in the first modern World Series during Roosevelt's presidency. This was a baseball milestone rather than a documented presidential appearance.",
      },
    ],
  },
  {
    name: "William Howard Taft",
    slug: "william-howard-taft",
    number: 27,
    years: "1909–1913",
    baseballEra: "Presidential First-Pitch Tradition",
    overview:
      "Taft began the presidential Opening Day ceremonial first-pitch tradition in 1910.",
    portrait: "/taft.jpg",
    events: [
      {
        date: "April 14, 1910",
        title: "The First Presidential Opening Day Pitch",
        description:
          "Taft threw the ceremonial first pitch before Washington played the Philadelphia Athletics.",
        image: "/taft-first-pitch-1910.jpg",
      },
      {
        date: "April 12, 1911",
        title: "The Tradition Continues",
        description:
          "Taft returned for another Opening Day ceremonial first pitch in Washington.",
        image: "/taft-baseball-1911.jpg",
      },
    ],
    sources: [
      {
        title: "Baseball Hall of Fame — Presidential History",
        url: "https://baseballhall.org/discover/short-stops/presidential-history-part-of-hof-collection",
      },
    ],
  },
  {
    name: "Woodrow Wilson",
    slug: "woodrow-wilson",
    number: 28,
    years: "1913–1921",
    baseballEra: "Deadball to Live-Ball Era",
    overview:
      "Baseball continued through World War I and entered a new era of offensive play near the end of Wilson's presidency.",
    portrait: "",
  },
  {
    name: "Warren G. Harding",
    slug: "warren-g-harding",
    number: 29,
    years: "1921–1923",
    baseballEra: "Babe Ruth Era",
    overview:
      "Harding's presidency coincided with Babe Ruth's emergence as baseball's greatest home-run attraction.",
    portrait: "",
    events: [
      {
        date: "1921–1923",
        title: "A Presidential Baseball Artifact",
        description:
          "A baseball bat autographed by Babe Ruth and presented to Harding survives in the National Baseball Hall of Fame's collection.",
        sourceUrl:
          "https://baseballhall.org/discover/short-stops/presidential-history-part-of-hof-collection",
      },
    ],
  },
  {
    name: "Calvin Coolidge",
    slug: "calvin-coolidge",
    number: 30,
    years: "1923–1929",
    baseballEra: "Roaring Twenties Baseball",
    overview:
      "Baseball flourished during the 1920s, and Coolidge became part of the presidential baseball memorabilia tradition.",
    portrait: "",
  },
  {
    name: "Herbert Hoover",
    slug: "herbert-hoover",
    number: 31,
    years: "1929–1933",
    baseballEra: "Depression-Era Baseball",
    overview:
      "Hoover's presidency coincided with the beginning of the Great Depression, when baseball remained an important part of American culture.",
    portrait: "",
  },
  {
    name: "Franklin D. Roosevelt",
    slug: "franklin-d-roosevelt",
    number: 32,
    years: "1933–1945",
    baseballEra: "Depression and World War II",
    overview:
      "Roosevelt supported the continuation of professional baseball during World War II through his historic Green Light Letter.",
    portrait: "",
    events: [
      {
        date: "January 15, 1942",
        title: "The Green Light Letter",
        description:
          "Roosevelt responded to Commissioner Kenesaw Mountain Landis and encouraged professional baseball to continue during World War II.",
        sourceUrl:
          "https://baseballhall.org/discover-more/stories/short-stops/keep-baseball-going",
      },
    ],
    sources: [
      {
        title: "Baseball Hall of Fame — Keep Baseball Going",
        url: "https://baseballhall.org/discover-more/stories/short-stops/keep-baseball-going",
      },
    ],
  },
  {
    name: "Harry S. Truman",
    slug: "harry-s-truman",
    number: 33,
    years: "1945–1953",
    baseballEra: "Baseball Integration",
    overview:
      "Jackie Robinson broke Major League Baseball's modern color barrier during Truman's presidency, transforming the sport.",
    portrait: "",
  },
  {
    name: "Dwight D. Eisenhower",
    slug: "dwight-d-eisenhower",
    number: 34,
    years: "1953–1961",
    baseballEra: "Postwar Baseball",
    overview:
      "Eisenhower had played baseball in his youth and participated in presidential first-pitch ceremonies.",
    portrait: "",
  },
  {
    name: "John F. Kennedy",
    slug: "john-f-kennedy",
    number: 35,
    years: "1961–1963",
    baseballEra: "Expansion Era",
    overview:
      "Kennedy continued the presidential Opening Day tradition in Washington.",
    portrait: "/jfk-portrait.jpg",
    events: [
      {
        date: "April 10, 1961",
        title: "Opening Day at Griffith Stadium",
        description:
          "Kennedy threw the ceremonial first pitch at Washington's Opening Day game.",
        image: "/jfk-first-pitch-1961.jpg",
      },
      {
        date: "April 9, 1962",
        title: "Opening Day at D.C. Stadium",
        description:
          "Kennedy participated in the presidential baseball tradition in Washington.",
        image: "/jfk-first-pitch-1962.webp",
      },
    ],
  },
  {
    name: "Lyndon B. Johnson",
    slug: "lyndon-b-johnson",
    number: 36,
    years: "1963–1969",
    baseballEra: "1960s Baseball",
    overview:
      "Baseball underwent expansion and cultural changes during Johnson's presidency.",
    portrait: "",
  },
  {
    name: "Richard Nixon",
    slug: "richard-nixon",
    number: 37,
    years: "1969–1974",
    baseballEra: "Expansion and Divisional Play",
    overview:
      "Divisional baseball and postseason league championship series became established.",
    portrait: "",
  },
  {
    name: "Gerald Ford",
    slug: "gerald-ford",
    number: 38,
    years: "1974–1977",
    baseballEra: "1970s Baseball",
    overview:
      "Free agency began transforming professional baseball during Ford's presidency.",
    portrait: "",
  },
  {
    name: "Jimmy Carter",
    slug: "jimmy-carter",
    number: 39,
    years: "1977–1981",
    baseballEra: "Free Agency Era",
    overview:
      "Baseball's labor and financial landscape evolved during Carter's presidency.",
    portrait: "",
  },
  {
    name: "Ronald Reagan",
    slug: "ronald-reagan",
    number: 40,
    years: "1981–1989",
    baseballEra: "1980s Baseball",
    overview:
      "Reagan had a personal connection to baseball through his earlier career broadcasting Chicago Cubs games.",
    portrait: "",
  },
  {
    name: "George H. W. Bush",
    slug: "george-h-w-bush",
    number: 41,
    years: "1989–1993",
    baseballEra: "Modern Baseball",
    overview:
      "Bush played college baseball at Yale and maintained a lifelong interest in the game.",
    portrait: "",
  },
  {
    name: "Bill Clinton",
    slug: "bill-clinton",
    number: 42,
    years: "1993–2001",
    baseballEra: "1990s Baseball",
    overview:
      "Baseball experienced labor disputes, expansion, and the home-run race during Clinton's presidency.",
    portrait: "",
  },
  {
    name: "George W. Bush",
    slug: "george-w-bush",
    number: 43,
    years: "2001–2009",
    baseballEra: "21st-Century Baseball",
    overview:
      "A former Texas Rangers managing general partner, Bush participated in memorable ceremonial first pitches.",
    portrait: "",
  },
  {
    name: "Barack Obama",
    slug: "barack-obama",
    number: 44,
    years: "2009–2017",
    baseballEra: "Modern MLB",
    overview:
      "Obama celebrated baseball traditions and his Chicago White Sox fandom.",
    portrait: "",
  },
  {
    name: "Donald Trump",
    slug: "donald-trump",
    number: 45,
    years: "2017–2021, 2025–present",
    baseballEra: "Contemporary Baseball",
    overview:
      "Trump's presidencies overlap with the modern era of Major League Baseball.",
    portrait: "",
  },
  {
    name: "Joe Biden",
    slug: "joe-biden",
    number: 46,
    years: "2021–2025",
    baseballEra: "Contemporary Baseball",
    overview:
      "Baseball continued evolving through rule changes and expanded postseason formats during Biden's presidency.",
    portrait: "",
  },
];

export function getPresident(slug: string): President | undefined {
  return presidents.find((president) => president.slug === slug);
}
