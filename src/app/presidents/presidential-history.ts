
import type {
  BaseballEvent,
  HistoricalSource,
} from "./presidents-data";

type HistoryAddition = {
  events: BaseballEvent[];
  sources: HistoricalSource[];
};

const hallOfFame =
  "https://baseballhall.org/discover/shortstops-presidential-pitches";

const openingDay =
  "https://baseballhall.org/discover-more/stories/baseball-history/opening-day-the-baseball-holiday";

const washingtonGuide =
  "https://content.mlb.com/documents/9/2/6/275087926/2018_media_guide.pdf";

const presidentsCollection =
  "https://baseballhall.org/discover/short-stops/presidential-history-part-of-hof-collection";

const mlbFirstPitches =
  "https://www.mlb.com/cut4/celebrate-presidents-day-with-every-presidential-first-pitch-since-fdrs/c-109333564";

const wilsonHallOfFame =
  "https://baseballhall.org/discover/polo-grounds-pass-tells-story-of-woodrow-wilson";

const wilsonWorldSeriesPhoto =
  "https://artsandculture.google.com/asset/president-wilson-at-game-2-of-the-1915-world-series-photograph/qAGvaFcGxjACFA";

const wilsonLibraryOfCongressPhoto =
  "https://www.loc.gov/pictures/item/2016851225/";

export const presidentialHistory: Record<
  string,
  HistoryAddition
> = {
  "william-howard-taft": {
    events: [
      {
        date: "1909",
        title: "Taft at the Ballpark",
        description:
          "Taft's early baseball appearances helped establish a visible connection between the White House and America's national pastime.",
        image: "/taft-ballgame-1909.jpg",
      },
      {
        date: "1912",
        title: "Taft Returns to the Ballpark",
        description:
          "Taft continued attending baseball during his presidency, leaving an important photographic record of the presidency's growing connection with the game.",
        image: "/taft-baseball-1912.jpg",
      },
    ],
    sources: [
      {
        title: "Baseball Hall of Fame — Presidential History",
        url: presidentsCollection,
      },
    ],
  },

  "john-f-kennedy": {
    events: [
      {
        date: "July 10, 1962",
        title: "All-Star Game at D.C. Stadium",
        description:
          "Kennedy attended the Major League Baseball All-Star Game in Washington.",
        sourceUrl: washingtonGuide,
      },
      {
        date: "July 11, 1962",
        title: "Stan Musial Visits the White House",
        description:
          "Kennedy welcomed St. Louis Cardinals legend Stan Musial, his wife Lillian, and daughter Janet to the Oval Office.",
        image: "/jfk-stan-musial-1962.jpg",
      },
      {
        date: "April 8, 1963",
        title: "Kennedy's Final Presidential Opening Day",
        description:
          "Kennedy returned to D.C. Stadium for the Washington Senators' Opening Day game against the Baltimore Orioles.",
        image: "/jfk-opening-day-1963.jpg",
        sourceUrl: washingtonGuide,
      },
    ],
    sources: [
      {
        title: "Washington Baseball Media Guide",
        url: washingtonGuide,
      },
    ],
  },

  "woodrow-wilson": {
    events: [
      {
        date: "1874",
        title: "A Young Baseball Player at Davidson College",
        description:
          "Long before reaching the White House, Woodrow Wilson played baseball at Davidson College in North Carolina. He later attended Princeton, where he served as an assistant manager of the baseball team.",
        sourceUrl:
          "https://www.woodrowwilson.org/blog-podcast/presidential-baseball",
      },
      {
        date: "April 10, 1913",
        title: "Wilson's First Presidential Opening Day Pitch",
        description:
          "Newly inaugurated President Woodrow Wilson threw the ceremonial first pitch at Griffith Stadium before the Washington Senators defeated the New York Yankees 2–1. It was one of four baseball games he attended that April.",
        sourceUrl:
          "https://www.baseball-almanac.com/prz_cww.shtml",
      },
      {
        date: "August 2, 1913",
        title: "Walter Johnson Day in Washington",
        description:
          "Wilson attended Walter Johnson Day at Griffith Stadium as the Washington Senators defeated the Detroit Tigers 3–2, demonstrating his enthusiasm for baseball beyond ceremonial Opening Day appearances.",
        sourceUrl:
          "https://www.baseball-almanac.com/prz_cww.shtml",
      },
      {
        date: "April 14, 1915",
        title: "Opening Day Against the New York Yankees",
        description:
          "Wilson returned to Griffith Stadium to throw the ceremonial first pitch. Washington defeated the Yankees 7–0. A Library of Congress photograph documents Wilson at a baseball opening game dated 1915 or 1916.",
        sourceUrl: wilsonLibraryOfCongressPhoto,
      },
      {
        date: "October 9, 1915",
        title: "First Sitting President to Attend a World Series",
        image: "/wilson-world-series-1915.jpg",
        description:
          "Wilson made baseball history at the Baker Bowl in Philadelphia, attending Game 2 of the World Series between the Phillies and Boston Red Sox. He threw the ceremonial first pitch and watched the game alongside his fiancée, Edith Bolling Galt. Boston won 2–1.",
        sourceUrl: wilsonWorldSeriesPhoto,
      },
      {
        date: "April 20, 1916",
        title: "Another Presidential Opening Day",
        image: "/wilson-opening-day-1916.jpg",
        description:
          "Wilson threw the ceremonial first pitch at Griffith Stadium before Washington defeated the New York Yankees 12–4, continuing the tradition begun by William Howard Taft.",
        sourceUrl:
          "https://www.baseball-almanac.com/prz_cww.shtml",
      },
      {
        date: "1916",
        title: "Ty Cobb Supports Wilson's Reelection",
        description:
          "Detroit Tigers star Ty Cobb publicly expressed his support for Wilson's reelection campaign, illustrating the connection between baseball personalities and presidential politics during the era.",
        sourceUrl: wilsonHallOfFame,
      },
      {
        date: "1920s",
        title: "Watching Baseball From His Automobile",
        description:
          "As his health declined, Wilson continued attending Washington Senators games. By arrangement with Clark Griffith, his automobile entered Griffith Stadium through a special gate and parked near the home bullpen. Secret Service agents and players protected him from foul balls as he watched with the top down.",
        sourceUrl: wilsonHallOfFame,
      },
      {
        date: "1923",
        title: "A Sterling-Silver Polo Grounds Season Pass",
        description:
          "After his presidency, Wilson received an unusual sterling-silver New York Giants season pass for the Polo Grounds. The circular pass resembled a baseball and bore Wilson's name. It was later donated to the National Baseball Hall of Fame and Museum.",
        sourceUrl: wilsonHallOfFame,
      },
    ],
    sources: [
      {
        title: "Library of Congress — Wilson Opening Day Photograph, 1916",
        url: "https://www.loc.gov/item/97518727/",
      },
      {
        title: "Baseball Hall of Fame — Wilson at the 1915 World Series",
        url: wilsonWorldSeriesPhoto,
      },
      {
        title: "National Baseball Hall of Fame — Wilson's Polo Grounds Pass",
        url: wilsonHallOfFame,
      },
      {
        title: "Baseball Almanac — Woodrow Wilson Game Attendance Log",
        url: "https://www.baseball-almanac.com/prz_cww.shtml",
      },
      {
        title: "MLB — 1915 World Series Game 2",
        url: "https://www.mlb.com/news/remembering-phillys-1915-world-series-run/c-153671994",
      },
      {
        title: "Baseball Hall of Fame — 1915 World Series Photograph",
        url: wilsonWorldSeriesPhoto,
      },
      {
        title: "Library of Congress — Wilson at a Baseball Opening Game",
        url: wilsonLibraryOfCongressPhoto,
      },
      {
        title: "Woodrow Wilson Presidential Library — Wilson and Baseball",
        url: "https://www.woodrowwilson.org/blog-podcast/presidential-baseball",
      },
      {
        title: "Washington Baseball Media Guide",
        url: washingtonGuide,
      },
    ],
  },

  "warren-g-harding": {
    events: [
      {
        date: "1921 and 1922",
        title: "Opening Day Ceremonial Pitches",
        description:
          "Harding participated in the presidential Opening Day first-pitch tradition in Washington.",
        sourceUrl: washingtonGuide,
      },
    ],
    sources: [
      {
        title: "Washington Baseball Media Guide",
        url: washingtonGuide,
      },
      {
        title: "Hall of Fame — Presidential Artifacts",
        url: presidentsCollection,
      },
    ],
  },

  "calvin-coolidge": {
    events: [
      {
        date: "1924",
        title: "Coolidge in the Baseball Grandstand",
        description:
          "A Harris & Ewing photograph captures President Calvin Coolidge in the stands holding a baseball.",
        image: "/coolidge-grandstand-1924.jpg",
        sourceUrl: "https://www.loc.gov/pictures/item/2016893374/",
      },
      {
        date: "1920s",
        title: "Coolidge Welcomes the Washington Senators",
        description:
          "President Calvin Coolidge poses with members of the Washington Senators baseball team at the White House.",
        image: "/coolidge-senators-white-house.jpg",
        sourceUrl: "https://www.loc.gov/pictures/item/2016838491/",
      },
      {
        date: "September 5, 1924",
        title: "Walter Johnson Demonstrates His Curveball",
        description:
          "Washington Senators pitcher Walter Johnson demonstrates his curveball to President Calvin Coolidge, with player-manager Bucky Harris alongside them.",
        image: "/coolidge-walter-johnson-1924.jpg",
        sourceUrl: "https://www.loc.gov/item/92520581/",
      },
      {
        date: "April 15, 1924",
        title: "Opening Day at Griffith Stadium",
        description:
          "President Calvin Coolidge threw the ceremonial first pitch as Walter Johnson shut out the Philadelphia Athletics 4–0. It was the beginning of Washington's historic championship season.",
        sourceUrl: "https://www.baseball-almanac.com/prz_ccc.shtml",
      },
      {
        date: "October 4, 1924",
        title: "A President Opens the World Series",
        image: "/coolidge-world-series-1924.jpg",
        description:
          "Coolidge threw the ceremonial first pitch before Game 1 between the Washington Senators and New York Giants at Griffith Stadium. The Giants won 4–3 in 12 innings.",
        sourceUrl: "https://www.mlb.com/news/1924-world-series-recap",
      },
      {
        date: "October 9, 1924",
        title: "Grace Coolidge Cheers Washington",
        description:
          "President Coolidge and First Lady Grace Coolidge watched the Senators defeat the Giants 2–1 in Game 6. Grace was an enthusiastic baseball fan who kept score at games.",
        sourceUrl: "https://www.whitehousehistory.org/the-coolidges-and-baseball",
      },
      {
        date: "October 10, 1924",
        title: "Washington Wins the 1924 World Series",
        description:
          "With Calvin and Grace Coolidge watching at Griffith Stadium, the Senators defeated the Giants 4–3 in 12 innings. Walter Johnson earned the victory in relief, delivering Washington its first World Series championship.",
        sourceUrl: "https://baseballhall.org/discover/1924-washington-senators-world-series",
      },
      {
        date: "1927 and 1928",
        title: "Continuing the First-Pitch Tradition",
        description:
          "Coolidge returned to Washington baseball's Opening Day ceremonies in 1927 and 1928, continuing the presidential first-pitch tradition.",
        sourceUrl: washingtonGuide,
      },
    ],
    sources: [
      {
        title: "Library of Congress — Walter Johnson Curveball Photograph",
        url: "https://www.loc.gov/item/92520581/",
      },
      {
        title: "National Baseball Hall of Fame — 1924 World Series",
        url: "https://baseballhall.org/discover/1924-washington-senators-world-series",
      },
      {
        title: "White House Historical Association — The Coolidges and Baseball",
        url: "https://www.whitehousehistory.org/the-coolidges-and-baseball",
      },
      {
        title: "MLB — 1924 World Series Recap",
        url: "https://www.mlb.com/news/1924-world-series-recap",
      },
      {
        title: "Baseball Almanac — Calvin Coolidge Game Attendance",
        url: "https://www.baseball-almanac.com/prz_ccc.shtml",
      },
    ],
  },

  "herbert-hoover": {
    events: [
      {
        date: "1929–1932",
        title: "Four Presidential Opening Days",
        description:
          "Hoover participated in Washington's ceremonial Opening Day first pitches in four consecutive seasons.",
        sourceUrl: washingtonGuide,
      },
      {
        date: "1929",
        title: "The Presidential Autograph Baseball",
        description:
          "Hoover became the fourth president to sign Ray Schalk's presidential baseball, now preserved in Cooperstown.",
        sourceUrl: presidentsCollection,
      },
    ],
    sources: [
      {
        title: "Washington Baseball Media Guide",
        url: washingtonGuide,
      },
      {
        title: "Hall of Fame — Presidential Autograph Baseball",
        url: presidentsCollection,
      },
    ],
  },

  "franklin-d-roosevelt": {
    events: [
      {
        date: "1933–1941",
        title: "Opening Day at the Ballpark",
        description:
          "Roosevelt repeatedly participated in Washington's Opening Day ceremonies, continuing the presidential first-pitch tradition.",
        sourceUrl: washingtonGuide,
      },
      {
        date: "1937",
        title: "A President at the All-Star Game",
        description:
          "Roosevelt became the first sitting president to attend a Major League Baseball All-Star Game.",
        sourceUrl: hallOfFame,
      },
    ],
    sources: [
      {
        title: "Hall of Fame — Presidential Pitches",
        url: hallOfFame,
      },
      {
        title: "Washington Baseball Media Guide",
        url: washingtonGuide,
      },
    ],
  },

  "harry-s-truman": {
    events: [
      {
        date: "1946",
        title: "Baseball Returns After World War II",
        description:
          "Truman participated in Washington's Opening Day ceremonial first pitch following the end of World War II.",
        sourceUrl: washingtonGuide,
      },
      {
        date: "1950",
        title: "First Pitches With Both Hands",
        description:
          "The ambidextrous Truman famously delivered ceremonial first pitches with his right and left hands.",
        sourceUrl:
          "https://baseballhall.org/discover-more/stories/baseball-history/opening-day",
      },
    ],
    sources: [
      {
        title: "Hall of Fame — Opening Day History",
        url: "https://baseballhall.org/discover-more/stories/baseball-history/opening-day",
      },
      {
        title: "Washington Baseball Media Guide",
        url: washingtonGuide,
      },
    ],
  },

  "dwight-d-eisenhower": {
    events: [
      {
        date: "1953–1960",
        title: "The Presidential Opening Day Tradition",
        description:
          "Eisenhower threw ceremonial first pitches at multiple Washington season openers.",
        sourceUrl: washingtonGuide,
      },
      {
        date: "1956",
        title: "A World Series First Pitch",
        description:
          "Eisenhower became the first sitting president to throw a ceremonial first pitch at a World Series game.",
        sourceUrl:
          "https://www.mlb.com/cut4/president-bush-throws-first-pitch-at-yankee-stadium/c-155935460",
      },
    ],
    sources: [
      {
        title: "Washington Baseball Media Guide",
        url: washingtonGuide,
      },
      {
        title: "MLB — Presidential World Series First Pitches",
        url: "https://www.mlb.com/cut4/president-bush-throws-first-pitch-at-yankee-stadium/c-155935460",
      },
    ],
  },

  "lyndon-b-johnson": {
    events: [
      {
        date: "1964, 1965 and 1967",
        title: "Washington Opening Day First Pitches",
        description:
          "Johnson participated in three presidential Opening Day first-pitch ceremonies.",
        sourceUrl: washingtonGuide,
      },
    ],
    sources: [
      {
        title: "Washington Baseball Media Guide",
        url: washingtonGuide,
      },
    ],
  },

  "richard-nixon": {
    events: [
      {
        date: "1969",
        title: "Opening Day in Washington",
        description:
          "Nixon threw the ceremonial first pitch for Washington's Opening Day.",
        sourceUrl: washingtonGuide,
      },
      {
        date: "1973",
        title: "Opening Day in Anaheim",
        description:
          "Nixon became the first sitting president to throw an Opening Day ceremonial first pitch outside Washington, D.C.",
        sourceUrl:
          "https://baseballhall.org/discover/Shortstops-Sox-and-jackets",
      },
    ],
    sources: [
      {
        title: "Hall of Fame — Presidential Pitches",
        url: "https://baseballhall.org/discover/Shortstops-Sox-and-jackets",
      },
      {
        title: "Washington Baseball Media Guide",
        url: washingtonGuide,
      },
    ],
  },

  "gerald-ford": {
    events: [
      {
        date: "July 13, 1976",
        title: "The Bicentennial All-Star Game",
        description:
          "Ford threw the ceremonial first pitch at the 1976 Major League Baseball All-Star Game during America's bicentennial year.",
        sourceUrl: hallOfFame,
      },
    ],
    sources: [
      {
        title: "Hall of Fame — Presidential Pitches",
        url: hallOfFame,
      },
    ],
  },

  "jimmy-carter": {
    events: [
      {
        date: "1979",
        title: "World Series Game Seven",
        description:
          "Carter attended Game 7 of the World Series in Baltimore, where the Pittsburgh Pirates defeated the Orioles.",
        sourceUrl:
          "https://content.mlb.com/documents/5/2/8/266184528/2011_media_guide.pdf",
      },
    ],
    sources: [
      {
        title: "Baltimore Orioles Media Guide",
        url: "https://content.mlb.com/documents/5/2/8/266184528/2011_media_guide.pdf",
      },
      {
        title: "Hall of Fame — Opening Day Traditions",
        url: openingDay,
      },
    ],
  },

  "ronald-reagan": {
    events: [
      {
        date: "1930s",
        title: "Broadcasting Chicago Cubs Baseball",
        description:
          "Before his political career, Reagan recreated Chicago Cubs games for radio audiences.",
        sourceUrl: mlbFirstPitches,
      },
      {
        date: "1952",
        title: "The Winning Team",
        description:
          "Reagan portrayed Hall of Fame pitcher Grover Cleveland Alexander in the motion picture The Winning Team.",
        sourceUrl: mlbFirstPitches,
      },
      {
        date: "September 30, 1988",
        title: "Two First Pitches at Wrigley Field",
        description:
          "President Ronald Reagan threw two ceremonial first pitches at Wrigley Field before the Chicago Cubs played the Pittsburgh Pirates. The moment was captured by the Reagan White House Photographic Office.",
        image: "/reagan-first-pitch-1988.jpg",
        sourceUrl:
          "https://commons.wikimedia.org/wiki/File:President_Ronald_Reagan_throwing_out_the_first_pitch_at_a_baseball_game_between_the_Chicago_Cubs_and_Pittsburgh_Pirates.jpg",
      },
    ],
    sources: [
      {
        title: "MLB — Reagan at Wrigley Field",
        url: "https://www.mlb.com/video/reagan-throws-two-first-pitches-c37228051",
      },
      {
        title: "MLB — Presidential First Pitches",
        url: mlbFirstPitches,
      },
      {
        title: "Reagan First Pitch — National Archives Photograph",
        url: "https://commons.wikimedia.org/wiki/File:President_Ronald_Reagan_throwing_out_the_first_pitch_at_a_baseball_game_between_the_Chicago_Cubs_and_Pittsburgh_Pirates.jpg",
      },
    ],
  },

  "george-h-w-bush": {
    events: [
      {
        date: "1947",
        title: "Baseball at Yale",
        description:
          "Bush played college baseball at Yale, including a game against Fordham in which future broadcaster Vin Scully played.",
        sourceUrl:
          "https://www.mlb.com/news/baseball-has-history-with-many-u-s-presidents-c164503968",
      },
      {
        date: "1948",
        title: "George H. W. Bush Meets Babe Ruth at Yale",
        description:
          "George H. W. Bush, captain of the Yale baseball team, receives a manuscript of Babe Ruth's autobiography as Ruth donates it to Yale. The historic photograph captures the future president alongside one of baseball's greatest legends.",
        image: "/bush41-babe-ruth-1948.jpg",
        sourceUrl:
          "https://commons.wikimedia.org/wiki/File:George_Bush,_Captain_of_the_Yale_Baseball_Team,_Receives_Babe_Ruth%27s_Manuscript_of_His_Autobiography_which_He_Was_Donating_to_Yale_(3679513408).jpg",
      },
      {
        date: "April 3, 1989",
        title: "Opening Day in Baltimore",
        description:
          "Bush threw the ceremonial first pitch at Memorial Stadium before the Orioles played the Red Sox.",
        sourceUrl:
          "https://www.mlb.com/video/bush-throws-out-first-pitch-c37227645",
      },
      {
        date: "April 6, 1992",
        title: "Opening Oriole Park at Camden Yards",
        description:
          "Bush threw a ceremonial first pitch at the first regular-season game at Camden Yards.",
        sourceUrl:
          "https://www.mlb.com/brewers/video/president-bush-s-first-pitch-c33379335",
      },
    ],
    sources: [
      {
        title: "MLB — Opening Day at Camden Yards",
        url: "https://www.mlb.com/brewers/video/president-bush-s-first-pitch-c33379335",
      },
      {
        title: "MLB — Bush at Yale",
        url: "https://www.mlb.com/news/baseball-has-history-with-many-u-s-presidents-c164503968",
      },
      {
        title: "1948 Bush and Babe Ruth — Archival Photograph",
        url: "https://commons.wikimedia.org/wiki/File:George_Bush,_Captain_of_the_Yale_Baseball_Team,_Receives_Babe_Ruth%27s_Manuscript_of_His_Autobiography_which_He_Was_Donating_to_Yale_(3679513408).jpg",
      },
    ],
  },

  "bill-clinton": {
    events: [
      {
        date: "1993",
        title: "Opening Day in Baltimore",
        description:
          "Clinton attended the Baltimore Orioles' home opener during his first year in office.",
        sourceUrl:
          "https://content.mlb.com/documents/5/2/8/266184528/2011_media_guide.pdf",
      },
      {
        date: "September 6, 1995",
        title: "Cal Ripken Jr.'s Record-Breaking Game",
        description:
          "Clinton attended the game in which Cal Ripken Jr. surpassed Lou Gehrig's record by playing his 2,131st consecutive game.",
        sourceUrl:
          "https://content.mlb.com/documents/5/2/8/266184528/2011_media_guide.pdf",
      },
    ],
    sources: [
      {
        title: "Baltimore Orioles Media Guide",
        url: "https://content.mlb.com/documents/5/2/8/266184528/2011_media_guide.pdf",
      },
    ],
  },

  "george-w-bush": {
    events: [
      {
        date: "October 30, 2001",
        title: "The World Series First Pitch After 9/11",
        description:
          "At Yankee Stadium, Bush delivered the ceremonial first pitch before Game 3 of the World Series, an enduring moment of national unity after the September 11 attacks.",
        sourceUrl:
          "https://www.mlb.com/cut4/president-bush-throws-first-pitch-at-yankee-stadium/c-155935460",
      },
      {
        date: "March 30, 2008",
        title: "Opening Nationals Park",
        description:
          "Bush threw the ceremonial first pitch at the first regular-season game at Nationals Park.",
        sourceUrl:
          "https://www.mlb.com/news/nationals-top-opening-day-moments",
      },
    ],
    sources: [
      {
        title: "MLB — The 2001 World Series First Pitch",
        url: "https://www.mlb.com/cut4/president-bush-throws-first-pitch-at-yankee-stadium/c-155935460",
      },
      {
        title: "MLB — Nationals Park Opening Day",
        url: "https://www.mlb.com/news/nationals-top-opening-day-moments",
      },
    ],
  },

  "barack-obama": {
    events: [
      {
        date: "July 14, 2009",
        title: "All-Star Game in St. Louis",
        description:
          "Obama threw the ceremonial first pitch at the MLB All-Star Game in St. Louis.",
        sourceUrl:
          "https://www.mlb.com/cut4/rank-presidential-first-pitches-since-john-f-kennedy-c164344940",
      },
      {
        date: "2010",
        title: "A Century of Presidential First Pitches",
        description:
          "Obama threw the Opening Day first pitch at Nationals Park, 100 years after Taft began the tradition.",
        sourceUrl: openingDay,
      },
    ],
    sources: [
      {
        title: "Hall of Fame — Opening Day Traditions",
        url: openingDay,
      },
      {
        title: "MLB — Presidential First Pitches",
        url: "https://www.mlb.com/cut4/rank-presidential-first-pitches-since-john-f-kennedy-c164344940",
      },
    ],
  },
};
