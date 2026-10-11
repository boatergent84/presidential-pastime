
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
    overview: "Abraham Lincoln occupied the White House during a defining chapter in the development of American baseball. By the time he became president in 1861, organized baseball clubs were already flourishing in northeastern cities, and the sport was beginning to spread into other regions of the country. The Civil War accelerated that expansion as soldiers from different states played ball games in military camps and carried their enthusiasm for the sport to new communities. Lincoln himself appeared in an 1860 political cartoon titled 'The National Game,' which used baseball terminology to satirize the presidential election, demonstrating that the game had already become recognizable enough to serve as a national political metaphor. Although later accounts describe Lincoln playing baseball, historians have questioned the reliability of many such stories, and there is little firm contemporary evidence of his personal participation. His strongest historical connection to baseball lies instead in the extraordinary period of national change over which he presided. During the war, baseball helped provide recreation and companionship for soldiers far from home, while the movement of those soldiers helped carry the game beyond its earlier regional boundaries. Lincoln did not live to see the establishment of the first fully professional baseball club in 1869, but the sport that spread during his presidency would eventually become one of the country's most enduring traditions.",
    portrait: "/abraham-lincoln-gardner.jpg",
    events: [
      {
        date: "1860",
        title: "Lincoln and the Baseball Cartoon",
        description:
          "A political cartoon used baseball imagery to depict the presidential election of 1860, showing that the game was already familiar to American audiences.",
        image: "/lincoln-baseball-1860.jpg",
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
        image: "/civil-war-baseball.jpg",
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
    overview: "Andrew Johnson entered the presidency in April 1865, just as the Civil War was ending and organized baseball was preparing for a remarkable period of national growth. During the war, soldiers had played baseball and related bat-and-ball games in camps and military communities, helping carry the sport beyond its earlier northeastern centers. As Americans returned to civilian life, baseball clubs multiplied and increasingly organized competitive matches attracted public attention. Johnson's administration coincided with the emergence of baseball as a prominent part of the nation's postwar culture. The Brooklyn Atlantics, one of the leading clubs of the era, were associated with an 1865 visit to Washington and a reported White House reception during Johnson's presidency. Their prominence illustrated the growing prestige of organized baseball, although the surviving historical record does not establish Johnson as an active player or especially devoted spectator. The years of his administration also saw major changes in the game's organization, culminating in the formation of the National Association of Base Ball Players' first openly professional club, the Cincinnati Red Stockings, in 1869. Baseball's transformation from an amateur club pastime toward professional competition reflected the larger social changes taking place in the United States after the Civil War. Johnson's connection to baseball is therefore rooted in an important transitional era, when the game was becoming a more visible and lasting institution in American life.",
    portrait: "/andrew-johnson-brady.jpg",
    events: [
      {
        date: "August 30, 1865",
        title: "Baseball Comes to the White House",
        description:
          "A delegation from the National Baseball Club visited the White House, an early example of the connection between organized baseball and the presidency.",
        sourceUrl:
          "https://www.mlb.com/news/baseball-has-history-with-many-u-s-presidents-c164503968",
        image: "/andrew-johnson-atlantics-1865.jpg",
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
    portrait: "/grant.jpg",
    events: [
      {
        date: "1869",
        title: "The Cincinnati Red Stockings",
        description: "In 1869, the year Ulysses S. Grant became president, the Cincinnati Red Stockings emerged as baseball's first openly professional team. This period lithograph depicts the celebrated club.",
        image: "/grant-red-stockings-lithograph.jpg",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:1869_Cincinnati_Red_Stockings_lithograph.jpg",
      },
      {
        date: "1869",
        title: "Baseball Enters the Professional Age",
        description: "Professional baseball expanded during Grant's presidency. The 1869 Cincinnati club helped establish the model for professional teams and the game's growing national appeal.",
        image: "/grant-red-stockings-team.jpg",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:1869_Cincinnati_Red_Stockings.jpg",
      },

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
    events: [
      {
        date: "1879",
        title: "The 1879 Providence Grays",
        description: "The Providence Grays won the National League championship in 1879 during Rutherford B. Hayes's presidency. This original team photograph documents the growth of professional baseball in the late nineteenth century.",
        image: "/hayes-providence-grays-1879.jpg",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:1879_Providence_Grays.jpeg",
      },
    ],
    number: 19,
    years: "1877–1881",
    baseballEra: "Early National League",
    overview:
      "During Hayes's presidency, professional baseball developed further under the newly established National League. Specific presidential baseball appearances remain to be documented.",
    portrait: "/hayes.jpg",
  },
  {
    name: "James A. Garfield",
    slug: "james-a-garfield",
    events: [
      {
        date: "1881",
        title: "The 1881 Oberlin Baseball Team",
        description: "During James A. Garfield’s presidency, college baseball was expanding across America. This 1881 Oberlin College team photograph includes Moses Fleetwood Walker and his brother Weldy Walker, important figures in early baseball history.",
        image: "/garfield-oberlin-baseball-1881.jpg",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:1881_Oberlin_baseball_team.jpg",
      },
    ],
    number: 20,
    years: "1881",
    baseballEra: "19th-Century Baseball",
    overview:
      "Professional baseball was established by the time Garfield became president. His brief presidency left a limited record of direct presidential baseball activities.",
    portrait: "/garfield.jpg",
  },
  {
    name: "Chester A. Arthur",
    slug: "chester-a-arthur",
    number: 21,
    years: "1881–1885",
    baseballEra: "Professional League Expansion",
    overview:
      "Arthur's presidency coincided with the expansion of professional baseball and the development of competing leagues.",
    portrait: "/arthur.jpg",
    events: [
      {
        date: "1883",
        title: "The New York Gothams Enter the National League",
        description: "The New York Gothams began National League play in 1883. This original team portrait includes early baseball stars Buck Ewing, Roger Connor, Mickey Welch and John Montgomery Ward.",
        image: "/arthur-new-york-gothams-1883.jpg",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:1883_New_York_Gothams.jpeg",
      },

      {
        date: "1882",
        title: "The Providence Grays in 1882",
        description: "The 1882 Providence Grays, featuring pitcher Charles Old Hoss Radbourn, represent professional baseball during Chester A. Arthur's presidency. This is an original team photograph.",
        image: "/arthur-providence-grays-1882.jpg",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:1882_Providence_Grays.jpg",
      },

      {
        date: "1884",
        title: "The 1884 Providence Grays Championship",
        description: "During Chester A. Arthur’s presidency, the Providence Grays captured the National League pennant and swept the New York Metropolitans in an early postseason championship series. Their star pitcher, Charles Old Hoss Radbourn, became one of baseball’s legendary figures. This photograph depicts the 1884 Providence team.",
        image: "/arthur-providence-grays-1884.jpg",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:1884grays.jpg",
      },

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
    overview: "Grover Cleveland, the 22nd and 24th president of the United States, occupied the White House during an extraordinary period in baseball history, when the sport was becoming America's national pastime. Unlike the image of a president uninterested in recreation, Cleveland actually followed baseball and had developed a friendship with future Hall of Fame pitcher James 'Pud' Galvin during his years in Buffalo, New York. Yet Cleveland believed the public expected its president to devote himself entirely to official business, and he avoided attending baseball games while in office. He nevertheless welcomed professional players to the White House, including members of the Chicago White Stockings. On October 8, 1888, Cleveland received Chicago captain Adrian 'Cap' Anson, baseball executive Albert G. Spalding, and their companions before Spalding's ambitious international baseball tour. The players gathered in the East Room, where Cleveland greeted them and heard their request for an official presidential endorsement. Although he declined to issue the proclamation they sought, the encounter demonstrated baseball's growing national significance. The expedition subsequently carried American baseball across the Pacific and through Australia, Asia, Africa, and Europe. Cleveland's relationship with baseball reveals an interesting contrast: a president who appreciated the game personally, yet remained reluctant to be seen enjoying it publicly. His administration helped mark an era when baseball was becoming important enough that its leading figures sought recognition from the president of the United States.",
    portrait: "/cleveland.jpg",
    events: [
      {
        date: "October 8, 1888",
        title: "Cleveland Meets the Chicago White Stockings",
        description: "President Grover Cleveland welcomed Cap Anson, Albert Spalding and members of the Chicago White Stockings to the White House. The baseball delegation sought presidential endorsement for Spalding's international baseball tour. Cleveland greeted the players but declined to issue the requested proclamation. The accompanying historical baseball-card portrait depicts Chicago captain Cap Anson, not the White House meeting.",
        image: "/cleveland-cap-anson.jpg",
        sourceUrl: "https://www.mlb.com/news/cubs-looking-forward-to-white-house-event-c213572950",
      },
    ],
  },
  {
    name: "Benjamin Harrison",
    slug: "benjamin-harrison",
    number: 23,
    years: "1889–1893",
    baseballEra: "First Presidential MLB Attendance",
    overview:
      "Benjamin Harrison became the first sitting president to attend a major-league baseball game, establishing an important precedent in presidential baseball history.",
    portrait: "/benjamin-harrison.jpg",
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
    portrait: "/mckinley.jpg",
  },
  {
    name: "Theodore Roosevelt",
    slug: "theodore-roosevelt",
    number: 26,
    years: "1901–1909",
    baseballEra: "Deadball Era",
    overview:
      "Roosevelt's presidency overlapped with the early American League, the first modern World Series, and the growth of Major League Baseball as a national institution.",
    portrait: "/theodore-roosevelt.jpg",
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
    portrait: "/wilson.jpg",
  },
  {
    name: "Warren G. Harding",
    slug: "warren-g-harding",
    number: 29,
    years: "1921–1923",
    baseballEra: "Babe Ruth Era",
    overview:
      "Harding's presidency coincided with Babe Ruth's emergence as baseball's greatest home-run attraction.",
    portrait: "/harding.jpg",
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
    portrait: "/coolidge.jpg",
  },
  {
    name: "Herbert Hoover",
    slug: "herbert-hoover",
    number: 31,
    years: "1929–1933",
    baseballEra: "Depression-Era Baseball",
    overview:
      "Hoover's presidency coincided with the beginning of the Great Depression, when baseball remained an important part of American culture.",
    portrait: "/hoover.jpg",
  },
  {
    name: "Franklin D. Roosevelt",
    slug: "franklin-d-roosevelt",
    number: 32,
    years: "1933–1945",
    baseballEra: "Depression and World War II",
    overview:
      "Roosevelt supported the continuation of professional baseball during World War II through his historic Green Light Letter.",
    portrait: "/fdr.jpg",
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
    portrait: "/truman.jpg",
  },
  {
    name: "Dwight D. Eisenhower",
    slug: "dwight-d-eisenhower",
    number: 34,
    years: "1953–1961",
    baseballEra: "Postwar Baseball",
    overview:
      "Eisenhower had played baseball in his youth and participated in presidential first-pitch ceremonies.",
    portrait: "/eisenhower.jpg",
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
    portrait: "/lbj.jpg",
  },
  {
    name: "Richard Nixon",
    slug: "richard-nixon",
    number: 37,
    years: "1969–1974",
    baseballEra: "Expansion and Divisional Play",
    overview:
      "Divisional baseball and postseason league championship series became established.",
    portrait: "/nixon.jpg",
  },
  {
    name: "Gerald Ford",
    slug: "gerald-ford",
    number: 38,
    years: "1974–1977",
    baseballEra: "1970s Baseball",
    overview:
      "Free agency began transforming professional baseball during Ford's presidency.",
    portrait: "/ford.jpg",
  },
  {
    name: "Jimmy Carter",
    slug: "jimmy-carter",
    number: 39,
    years: "1977–1981",
    baseballEra: "Free Agency Era",
    overview:
      "Baseball's labor and financial landscape evolved during Carter's presidency.",
    portrait: "/carter.jpg",
  },
  {
    name: "Ronald Reagan",
    slug: "ronald-reagan",
    number: 40,
    years: "1981–1989",
    baseballEra: "1980s Baseball",
    overview:
      "Reagan had a personal connection to baseball through his earlier career broadcasting Chicago Cubs games.",
    portrait: "/reagan.jpg",
  },
  {
    name: "George H. W. Bush",
    slug: "george-h-w-bush",
    number: 41,
    years: "1989–1993",
    baseballEra: "Modern Baseball",
    overview:
      "Bush played college baseball at Yale and maintained a lifelong interest in the game.",
    portrait: "/bush41.jpg",
  },
  {
    name: "Bill Clinton",
    slug: "bill-clinton",
    number: 42,
    years: "1993–2001",
    baseballEra: "1990s Baseball",
    overview:
      "Baseball experienced labor disputes, expansion, and the home-run race during Clinton's presidency.",
    portrait: "/clinton.jpg",
  },
  {
    name: "George W. Bush",
    slug: "george-w-bush",
    number: 43,
    years: "2001–2009",
    baseballEra: "21st-Century Baseball",
    overview:
      "A former Texas Rangers managing general partner, Bush participated in memorable ceremonial first pitches.",
    portrait: "/george-w-bush.jpg",
  },
  {
    name: "Barack Obama",
    slug: "barack-obama",
    number: 44,
    years: "2009–2017",
    baseballEra: "Modern MLB",
    overview:
      "Obama celebrated baseball traditions and his Chicago White Sox fandom.",
    portrait: "/obama.jpg",
  },
  {
    name: "Donald Trump",
    slug: "donald-trump",
    number: 45,
    years: "2017–2021, 2025–present",
    baseballEra: "Contemporary Baseball",
    overview:
      "Trump's presidencies overlap with the modern era of Major League Baseball.",
    portrait: "/trump.jpg",
  },
  {
    name: "Joe Biden",
    slug: "joe-biden",
    number: 46,
    years: "2021–2025",
    baseballEra: "Contemporary Baseball",
    overview:
      "Baseball continued evolving through rule changes and expanded postseason formats during Biden's presidency.",
    portrait: "/biden.jpg",
  },
];

export function getPresident(slug: string): President | undefined {
  return presidents.find((president) => president.slug === slug);
}
