
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
  "donald-trump": {
    events: [
      {
        date: "August 18, 2006",
        title: "Ceremonial First Pitch at Fenway Park",
        description:
          "Before becoming president, Donald Trump threw a ceremonial first pitch at Fenway Park in Boston before a Red Sox–Yankees doubleheader game, during an appearance connected with the Jimmy Fund.",
      },
      {
        date: "October 27, 2019",
        title: "Trump Attends the World Series",
        image: "/trump-world-series-2019-final.jpg",
        description:
          "President Trump attended Game 5 of the World Series between the Washington Nationals and Houston Astros at Nationals Park in Washington, D.C.",
      },
      {
        date: "July 23, 2020",
        title: "Baseball Returns During the Pandemic",
        description:
          "Major League Baseball began its delayed 60-game regular season under special health protocols during Trump's first presidency.",
      },
      {
        date: "January 20, 2025",
        title: "A Second Presidential Baseball Era",
        description:
          "Trump began his second, nonconsecutive presidency, extending his presidential baseball history into another era of Major League Baseball.",
      },
    ],
    sources: [
      {
        title: "Baseball Hall of Fame — Presidential Baseball History",
        url: presidentsCollection,
      },
    ],
  },

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
        image: "/wilson-opening-day-1913.jpg",
        title: "Wilson's First Presidential Opening Day Pitch",
        description:
          "Newly inaugurated President Woodrow Wilson threw the ceremonial first pitch at Griffith Stadium before the Washington Senators defeated the New York Yankees 2–1. It was one of four baseball games he attended that April.",
        sourceUrl:
          "https://www.baseball-almanac.com/prz_cww.shtml",
      },
      {
        date: "August 2, 1913",
        image: "/walter-johnson-1911.jpg",
        title: "Walter Johnson Day in Washington",
        description:
          "Wilson attended Walter Johnson Day at Griffith Stadium as the Washington Senators defeated the Detroit Tigers 3–2, demonstrating his enthusiasm for baseball beyond ceremonial Opening Day appearances.",
        sourceUrl:
          "https://www.baseball-almanac.com/prz_cww.shtml",
      },
      {
        date: "April 14, 1915",
        image: "/griffith-stadium-historic.jpg",
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
        image: "/ty-cobb-1913.jpg",
        description:
          "Detroit Tigers star Ty Cobb publicly expressed his support for Wilson's reelection campaign, illustrating the connection between baseball personalities and presidential politics during the era.",
        sourceUrl: wilsonHallOfFame,
      },
      {
        date: "1920s",
        title: "Watching Baseball From His Automobile",
        image: "/wilson-automobile-1921.jpg",
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
        date: "April 13, 1921",
        title: "Harding's First Presidential Opening Day",
        image: "/harding-throwing.jpg",
        description:
          "Harding threw the ceremonial first pitch at Griffith Stadium in Washington. The Boston Red Sox defeated the Senators 6–3, but the occasion established Harding as an enthusiastic supporter of the presidential baseball tradition.",
        sourceUrl: "https://www.baseball-almanac.com/prz_cwh.shtml",
      },
      {
        date: "April 12, 1922",
        title: "Opening Day Against the Yankees",
        image: "/harding-opening-day-1922.jpg",
        description:
          "Harding returned to Griffith Stadium to throw the ceremonial first pitch as Washington defeated the New York Yankees 6–5. His regular attendance reflected his strong attachment to the Senators.",
        sourceUrl: "https://www.baseball-almanac.com/prz_cwh.shtml",
      },
      {
        date: "May 22, 1922",
        title: "An Afternoon at Griffith Stadium",
        image: "/harding-ballgame-may-1922.jpg",
        description:
          "Harding watched Washington play the Chicago White Sox, remaining for all nine innings. Future president Herbert Hoover and General John J. Pershing were among those attending with him.",
        sourceUrl: "https://www.baseball-almanac.com/prz_cwh.shtml",
      },
      {
        date: "April 24, 1923",
        title: "A President Visits the New Yankee Stadium",
        image: "/harding-yankee-stadium.jpg",
        description:
          "A Bain News Service photograph documents Harding's visit to Yankee Stadium on April 24, 1923.",
        sourceUrl: "https://www.loc.gov/item/2014715992/",
      },
      {
        date: "April 24, 1923",
        title: "Harding Meets Babe Ruth at Yankee Stadium",
        image: "/harding-babe-ruth-1923.jpg",
        description:
          "Harding arrived unannounced at the newly opened Yankee Stadium, where he met Babe Ruth and watched the Yankees defeat the Washington Senators 4–0. It was the first shutout in the ballpark's history, and Harding was the first sitting president to visit the stadium.",
        sourceUrl: "https://sabr.org/journal/article/yankee-stadium-the-giants-greatest-mistake/",
      },
      {
        date: "April 26, 1923",
        title: "Harding's Final Presidential First Pitch",
        image: "/harding-first-pitch-1923.jpg",
        description:
          "Harding threw the ceremonial first pitch at Washington's home opener against the Philadelphia Athletics. The Senators won 2–1. It was his final presidential Opening Day appearance.",
        sourceUrl: "https://www.baseball-almanac.com/prz_cwh.shtml",
      },
      {
        date: "August 1923",
        title: "Baseball Mourns President Harding",
        image: "/harding-funeral-1923.jpg",
        description:
          "Following Harding's death on August 2, 1923, Babe Ruth sent a condolence letter to First Lady Florence Harding. The original letter is preserved by Ohio History Connection.",
        sourceUrl: "https://artsandculture.google.com/story/warren-g-harding-ohio-history-connection/BQWBjw37Z4KEJw",
      },
    ],
    sources: [
      {
        title: "SABR — Warren G. Harding",
        url: "https://sabr.org/bioproj/person/warren-harding",
      },
      {
        title: "Baseball Almanac — Harding Game Attendance",
        url: "https://www.baseball-almanac.com/prz_cwh.shtml",
      },
      {
        title: "National Baseball Hall of Fame — Presidential Pastime",
        url: "https://artsandculture.google.com/story/cgVBoiDknfnvJQ",
      },
    ],
  },

  "calvin-coolidge": {
    events: [
      {
        date: "April 15, 1924",
        title: "Opening Day at Griffith Stadium",
        image: "/coolidge-opening-day.jpg",
        description:
          "President Calvin Coolidge threw the ceremonial first pitch as Walter Johnson shut out the Philadelphia Athletics 4–0. It was the beginning of Washington's historic championship season.",
        sourceUrl: "https://www.baseball-almanac.com/prz_ccc.shtml",
      },
      {
        date: "1924",
        title: "Coolidge in the Baseball Grandstand",
        description:
          "A Harris & Ewing photograph captures President Calvin Coolidge in the stands holding a baseball.",
        image: "/coolidge-grandstand-1924.jpg",
        sourceUrl: "https://www.loc.gov/pictures/item/2016893374/",
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
        image: "/coolidge-grace-world-series-1924.jpg",
        description:
          "President Coolidge and First Lady Grace Coolidge watched the Senators defeat the Giants 2–1 in Game 6. Grace was an enthusiastic baseball fan who kept score at games.",
        sourceUrl: "https://www.whitehousehistory.org/the-coolidges-and-baseball",
      },
      {
        date: "October 10, 1924",
        title: "Washington Wins the 1924 World Series",
        image: "/coolidge-championship-1924.jpg",
        description:
          "With Calvin and Grace Coolidge watching at Griffith Stadium, the Senators defeated the Giants 4–3 in 12 innings. Walter Johnson earned the victory in relief, delivering Washington its first World Series championship.",
        sourceUrl: "https://baseballhall.org/discover/1924-washington-senators-world-series",
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
        date: "1927 and 1928",
        title: "Continuing the First-Pitch Tradition",
        image: "/coolidge-first-pitch-1927.jpg",
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
        date: "April 17, 1929",
        title: "Hoover's First Presidential Opening Day",
        image: "/hoover-first-pitch-1929.jpg",
        description:
          "President Herbert Hoover continued the presidential first-pitch tradition at Griffith Stadium in Washington, D.C. The Washington Senators faced Connie Mack's Philadelphia Athletics, whose powerful lineup included future Hall of Famers. Philadelphia defeated Washington 13–4.",
        sourceUrl: washingtonGuide,
      },
      {
        date: "1929",
        title: "The Presidential Autograph Baseball",
        description:
          "Hoover became the fourth president to sign a special baseball associated with former major league catcher Ray Schalk. The historic presidential autograph baseball is preserved in the National Baseball Hall of Fame in Cooperstown.",
        sourceUrl: presidentsCollection,
      },
      {
        date: "April 14, 1930",
        title: "Opening Day During the Great Depression",
        image: "/hoover-baseball-1930.jpg",
        description:
          "Hoover returned to Griffith Stadium for Washington's home opener against the Boston Red Sox. As the nation entered the Great Depression, the presidential ceremonial first pitch remained an annual baseball tradition.",
        sourceUrl: washingtonGuide,
      },
      {
        date: "April 14, 1931",
        title: "A Third Consecutive Opening Day",
        image: "/hoover-first-pitch-1931.jpg",
        description:
          "President Hoover continued the White House's connection to the Washington Senators, appearing for another Opening Day ceremony against the Philadelphia Athletics, one of the American League's dominant clubs.",
        sourceUrl: washingtonGuide,
      },
      {
        date: "April 11, 1932",
        title: "Hoover's Final Presidential Opening Day",
        description:
          "Hoover made his fourth and final presidential Opening Day appearance at Griffith Stadium. The Senators defeated the Boston Red Sox 1–0, providing a memorable conclusion to Hoover's participation in the annual ceremony.",
        sourceUrl: washingtonGuide,
      },
      {
        date: "November 11, 1933",
        title: "Hoover Meets Babe Ruth",
        image: "/hoover-babe-ruth-1933.jpg",
        description:
          "Former President Herbert Hoover met baseball legend Babe Ruth during a Stanford–USC football game in California. The photograph preserves a meeting between a former president and one of the most celebrated figures in baseball history.",
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
        title: "Eight Presidential Opening Day First Pitches",
        description:
          "Roosevelt continued the ceremonial first-pitch tradition at Washington Senators games, throwing eight Opening Day pitches during his presidency. His appearances helped maintain a visible connection between the White House and America's national pastime.",
        sourceUrl: "https://baseballhall.org/discover/short-stops/red-light-letter",
      },
      {
        date: "January 23, 1937",
        title: "Roosevelt Describes His Ideal Baseball Game",
        description:
          "In a letter to the Baseball Writers' Association of America, Roosevelt described his preference for high-scoring games and exciting action over low-scoring pitchers' duels. The letter provides an unusually personal glimpse into his enthusiasm for baseball.",
        sourceUrl: "https://www.presidency.ucsb.edu/documents/letter-baseball-sports-and-sportsmanship",
      },
      {
        date: "July 7, 1937",
        title: "The First President at an All-Star Game",
        image: "/fdr-all-star-1937.jpg",
        description:
          "Roosevelt became the first sitting president to attend Major League Baseball's All-Star Game. At Griffith Stadium in Washington, the American League defeated the National League 8–3. Lou Gehrig hit a two-run home run, while a line drive fractured pitcher Dizzy Dean's toe.",
        sourceUrl: "https://content.mlb.com/documents/9/2/6/275087926/2018_media_guide.pdf",
      },
      {
        date: "April 19, 1937",
        title: "Opening Day with Connie Mack",
        image: "/fdr-opening-day-1937.jpg",
        description:
          "President Roosevelt opened Washington's 1937 baseball season against the Philadelphia Athletics. He was photographed with Connie Mack, Clark Griffith, Bucky Harris, and presidential secretary Marvin McIntyre at Griffith Stadium.",
        sourceUrl: "https://www.loc.gov/item/2016883754/",
      },
      {
        date: "April 16, 1940",
        title: "Opening Day at Griffith Stadium",
        description:
          "Roosevelt threw the ceremonial first pitch before the Washington Senators faced the Boston Red Sox. The appearance became one of the best-documented images of his connection to professional baseball.",
        sourceUrl: "https://baseballhall.org/discover/inside-pitch/roosevelt-sends-green-light-letter",
      },
      {
        date: "January 15, 1942",
        title: "The Green Light Letter Saves Wartime Baseball",
        image: "/fdr-green-light-letter-1942.jpg",
        description:
          "Responding to Commissioner Kenesaw Mountain Landis after the attack on Pearl Harbor, Roosevelt expressed his personal support for continuing professional baseball during World War II. He believed Americans needed affordable recreation and relief from the pressures of wartime work. His celebrated Green Light Letter helped encourage baseball to continue throughout the war.",
        sourceUrl: "https://www.archives.gov/publications/prologue/2002/spring/greenlight.html",
      },
    ],
    sources: [
      {
        title: "National Baseball Hall of Fame — Green Light Letter",
        url: "https://baseballhall.org/discover/inside-pitch/roosevelt-sends-green-light-letter",
      },
      {
        title: "National Archives — When FDR Said Play Ball",
        url: "https://www.archives.gov/publications/prologue/2002/spring/greenlight.html",
      },
      {
        title: "American Presidency Project — Roosevelt's 1937 Baseball Letter",
        url: "https://www.presidency.ucsb.edu/documents/letter-baseball-sports-and-sportsmanship",
      },
    ],
  },


  "harry-s-truman": {
    events: [
      {
        date: "1945",
        title: "Baseball Welcomes the Return of Peace",
        description:
          "Following the end of World War II, President Truman's baseball appearances became symbols of the country's return to peacetime. He attended a Washington baseball game shortly after Japan's surrender, renewing the presidential connection to the national pastime.",
        sourceUrl: "https://www.trumanlibraryinstitute.org/",
      },
      {
        date: "April 17, 1946",
        title: "Truman's First Presidential Opening Day",
        description:
          "At Griffith Stadium, Truman continued the presidential first-pitch tradition and became the first president to deliver an Opening Day pitch left-handed. The Washington Senators opened their season against the Boston Red Sox.",
        sourceUrl: "https://artsandculture.google.com/story/presidential-pastime-national-baseball-hall-of-fame-and-museum/cgVBoiDknfnvJQ",
      },
      {
        date: "April 15, 1947",
        title: "Jackie Robinson Breaks Baseball's Color Barrier",
        description:
          "During Truman's presidency, Jackie Robinson made his historic Brooklyn Dodgers debut against the Boston Braves at Ebbets Field, breaking the modern major leagues' longstanding color barrier. His arrival marked a defining turning point in baseball and American civil rights.",
        sourceUrl: "https://baseballhall.org/",
      },
      {
        date: "July 5, 1947",
        title: "Larry Doby Integrates the American League",
        description:
          "Larry Doby made his debut with the Cleveland Indians, becoming the first Black player in the American League's modern era. Alongside Jackie Robinson, Doby helped begin baseball's transformation into an integrated major league sport.",
        sourceUrl: "https://baseballhall.org/",
      },
      {
        date: "April 18, 1950",
        title: "The President Who Pitched With Both Hands",
        image: "/truman-first-pitch-1950.jpg",
        description:
          "Opening the Washington Senators' season against the Philadelphia Athletics, Truman famously threw ceremonial baseballs with both his left and right hands. Bess Truman, Margaret Truman, Vice President Alben Barkley, Connie Mack, and Clark Griffith were among those present.",
        sourceUrl: "https://www.trumanlibrary.gov/photograph-records/2015-2278",
      },
      {
        date: "April 20, 1951",
        title: "Opening Day With Casey Stengel",
        image: "/truman-opening-day-1951.jpg",
        description:
          "Truman threw the ceremonial first pitch at Griffith Stadium before the Washington Senators played the New York Yankees. The president was photographed alongside Bess Truman, Senators owner Clark Griffith, and Yankees manager Casey Stengel.",
        sourceUrl: "https://www.trumanlibrary.gov/photograph-records/65-3598",
      },
      {
        date: "April 15, 1952",
        title: "Truman's Final Presidential Opening Day",
        image: "/truman-opening-day-1952.jpg",
        description:
          "In his final full year as president, Truman threw the ceremonial first pitch at Griffith Stadium before the Washington Senators faced the Boston Red Sox. Vice President Alben Barkley and managers Bucky Harris and Lou Boudreau were present.",
        sourceUrl: "https://www.trumanlibrary.gov/photograph-records/58-125",
      },
    ],
    sources: [
      {
        title: "Harry S. Truman Presidential Library — 1950 First Pitch",
        url: "https://www.trumanlibrary.gov/photograph-records/2015-2278",
      },
      {
        title: "Harry S. Truman Presidential Library — 1951 Opening Day",
        url: "https://www.trumanlibrary.gov/photograph-records/65-3598",
      },
      {
        title: "Harry S. Truman Presidential Library — 1952 Opening Day",
        url: "https://www.trumanlibrary.gov/photograph-records/58-125",
      },
      {
        title: "National Baseball Hall of Fame — Opening Day",
        url: "https://baseballhall.org/discover-more/stories/baseball-history/opening-day",
      },
    ],
  },

  "dwight-d-eisenhower": {
    events: [
      {
        date: "Early 1910s",
        title: "Eisenhower's Semiprofessional Baseball Days",
        description:
          "Before becoming president, Dwight Eisenhower played baseball as a young man in Kansas. He later acknowledged playing for money under an assumed name, a detail that raised questions about his amateur athletic eligibility at West Point.",
        sourceUrl: "https://www.eisenhowerlibrary.gov/",
      },
      {
        date: "April 16, 1953",
        title: "Eisenhower's First Presidential Opening Day",
        description:
          "President Eisenhower continued the ceremonial first-pitch tradition at Griffith Stadium in Washington during his first spring in the White House.",
        sourceUrl: "https://www.eisenhowerlibrary.gov/",
      },
      {
        date: "1955",
        title: "Brooklyn's Historic World Series Victory",
        description:
          "During Eisenhower's presidency, the Brooklyn Dodgers defeated the New York Yankees to win their first World Series championship. Jackie Robinson, Duke Snider, and Roy Campanella helped make the victory a landmark in baseball history.",
        sourceUrl: "https://baseballhall.org/",
      },
      {
        date: "October 3, 1956",
        title: "Eisenhower Throws the World Series First Pitch",
        description:
          "At Ebbets Field in Brooklyn, President Eisenhower threw the ceremonial first pitch before Game 1 of the World Series between the Brooklyn Dodgers and New York Yankees. Seated near Dodgers owner Walter O'Malley, Eisenhower watched Brooklyn defeat New York 6–3. It was the first presidential World Series first pitch since Franklin D. Roosevelt's appearance in 1936.",
        sourceUrl: "https://sabr.org/gamesproj/game/october-3-1956-sal-maglie-fans-10-bests-whitey-ford-in-world-series-opener/",
      },
      {
        date: "1957",
        title: "The Milwaukee Braves Win the World Series",
        description:
          "Hank Aaron led the Milwaukee Braves to the 1957 World Series championship over the Yankees. The victory highlighted baseball's growing popularity beyond its traditional northeastern strongholds.",
        sourceUrl: "https://baseballhall.org/",
      },
      {
        date: "May 14, 1957",
        title: "Eisenhower Meets Jackie Robinson",
        image: "/eisenhower-jackie-robinson-1957.jpg",
        description:
          "President Eisenhower met baseball pioneer Jackie Robinson and entertainer Joe E. Brown. The Eisenhower Presidential Library preserves a photograph documenting the meeting, connecting the White House with one of baseball's most important figures.",
        sourceUrl: "https://www.eisenhowerlibrary.gov/research/photographs",
      },
      {
        date: "1957",
        title: "Eisenhower Throws an Opening Day First Pitch",
        description:
          "President Eisenhower throws the ceremonial first pitch at Griffith Stadium in Washington. The moment is preserved in an archival photograph from the Library of Congress.",
        image: "/eisenhower-opening-day-1957.jpg",
        sourceUrl: "https://www.loc.gov/pictures/item/2023630487/",
      },
      {
        date: "1958",
        title: "Major League Baseball Reaches the West Coast",
        description:
          "The Brooklyn Dodgers moved to Los Angeles and the New York Giants moved to San Francisco, fundamentally changing Major League Baseball's geography during Eisenhower's presidency.",
        sourceUrl: "https://baseballhall.org/",
      },
      {
        date: "1960",
        title: "Eisenhower's Final Baseball Season as President",
        description:
          "In Eisenhower's final year in office, Bill Mazeroski's dramatic Game 7 home run gave the Pittsburgh Pirates a World Series victory over the New York Yankees. It closed an extraordinary decade of baseball history.",
        sourceUrl: "https://baseballhall.org/",
      },
    ],
    sources: [
      {
        title: "Dwight D. Eisenhower Presidential Library",
        url: "https://www.eisenhowerlibrary.gov/",
      },
      {
        title: "National Baseball Hall of Fame",
        url: "https://baseballhall.org/",
      },
    ],
  },


  "lyndon-b-johnson": {
    events: [
      {
        date: "April 13, 1964",
        title: "Johnson's First Presidential Opening Day",
        image: "/lbj-opening-day-1964.jpg",
        description:
          "President Lyndon B. Johnson threw the ceremonial first pitch at D.C. Stadium before the Washington Senators faced the Los Angeles Angels. The Angels defeated Washington 4–0.",
        sourceUrl: "https://www.baseball-reference.com/bullpen/Ceremonial_first_pitch",
      },
      {
        date: "April 9, 1965",
        title: "The Astrodome Opens in Houston",
        description:
          "President Johnson and Lady Bird Johnson attended an exhibition between the Houston Astros and New York Yankees at the newly opened Astrodome. Mickey Mantle hit the stadium's first home run.",
        sourceUrl: "https://www.milb.com/news/gcs-185535722",
      },
      {
        date: "April 12, 1965",
        title: "Opening Day With Gil Hodges",
        image: "/lbj-gil-hodges-1965.jpg",
        description:
          "Johnson threw the ceremonial first pitch at D.C. Stadium and greeted Washington Senators manager Gil Hodges. The Boston Red Sox defeated the Senators 7–2.",
        sourceUrl: "https://sabr.org/gamesproj/game/april-12-1965-red-sox-center-fielder-lenny-green-homers-twice-on-opening-day/",
      },
      {
        date: "April 6, 1967",
        title: "Hank Aaron Visits the White House",
        description:
          "President Johnson welcomed baseball stars including Hank Aaron, Brooks Robinson, Joe Torre, and Harmon Killebrew to the Oval Office during a presentation of annual major league baseball passes.",
        sourceUrl: "https://sites.google.com/view/spotlightseries-playball/home",
      },
      {
        date: "April 10, 1967",
        title: "Johnson's Final Presidential Opening Day Pitch",
        description:
          "Johnson threw the ceremonial first pitch as the Washington Senators opened their season against the New York Yankees. New York won 8–0.",
        sourceUrl: "https://www.baseball-reference.com/bullpen/Ceremonial_first_pitch",
      },
      {
        date: "April 10, 1968",
        title: "Opening Day Amid National Mourning",
        description:
          "Following the assassination of Martin Luther King Jr., President Johnson did not attend Washington's Opening Day game. Vice President Hubert Humphrey represented the administration instead.",
        sourceUrl: "https://washingtonbaseballhistory.com/2023/03/30/presidential-openers-and-d-c/",
      },
      {
        date: "1968",
        title: "The Detroit Tigers Win the World Series",
        description:
          "During Johnson's final full year as president, the Detroit Tigers defeated the St. Louis Cardinals in seven games, led by Mickey Lolich and Denny McLain. The championship became one of the defining baseball moments of the decade.",
        sourceUrl: "https://baseballhall.org/",
      },
    ],
    sources: [
      {
        title: "LBJ Presidential Library Baseball Collection",
        url: "https://sites.google.com/view/spotlightseries-playball/home",
      },
      {
        title: "Washington Nationals Historical Media Guide",
        url: "https://content.mlb.com/documents/9/2/6/275087926/2018_media_guide.pdf",
      },
      {
        title: "Society for American Baseball Research",
        url: "https://sabr.org/",
      },
    ],
  },


  "richard-nixon": {
    events: [
      {
        date: "April 7, 1969",
        title: "Nixon Throws His First Presidential Opening Day Pitch",
        image: "/nixon-opening-day-1969.jpg",
        description:
          "President Richard Nixon threw the ceremonial first pitch at RFK Stadium as the Washington Senators opened their season against the New York Yankees. Senators manager Ted Williams and Baseball Commissioner Bowie Kuhn joined the president for the ceremony.",
        sourceUrl: "https://www.nixonlibrary.gov/research/almanac/april-7-1969",
      },
      {
        date: "1969",
        title: "Baseball Enters the Divisional Era",
        description:
          "During Nixon's first year in office, Major League Baseball expanded to 24 teams and introduced divisional play and League Championship Series. The changes transformed the pennant race and created a new postseason structure.",
        sourceUrl: "https://baseballhall.org/",
      },
      {
        date: "July 15, 1969",
        title: "Nixon Meets Detroit Tigers Stars at the White House",
        description:
          "President Nixon met with Detroit Tigers players Al Kaline, Tom Tresh, and Mickey Stanley, accompanied by Congressman Gerald Ford, in the Oval Office. The meeting was documented by the White House Photographic Office.",
        image: "/nixon-al-kaline-1969.jpg",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Nixon_Contact_Sheet_WHPO-1552.jpg",
      },
      {
        date: "July 22, 1969",
        title: "Nixon Welcomes Baseball Legends to the White House",
        description:
          "Nixon hosted a White House reception celebrating professional baseball's centennial. More than 400 guests attended, including Joe DiMaggio, Mickey Mantle, Roberto Clemente, and Pete Rose. The gathering brought generations of baseball stars together at the Executive Mansion.",
        sourceUrl: "https://www.nixonfoundation.org/2019/07/podcast-nicholas-sarantakes-nixon-baseball/",
      },
      {
        date: "1970",
        title: "Nixon Visits Anaheim Stadium",
        description:
          "President Nixon attended a game between the Washington Senators and California Angels at Anaheim Stadium. The contest lasted 11 innings, with Washington defeating California 11–10.",
        sourceUrl: "https://sabr.org/gamesproj/game/april-6-1973-nolan-ryan-whiffs-12-on-opening-day-vietnam-war-pow-throws-out-first-ball/",
      },
      {
        date: "July 14, 1970",
        title: "Nixon Throws the First Pitch at the All-Star Game",
        description:
          "President Nixon attended the 1970 Major League Baseball All-Star Game at Cincinnati's Riverfront Stadium and threw the ceremonial first pitch. The National League defeated the American League 5–4 in 12 innings.",
        image: "/nixon-all-star-1970.jpg",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:President_Richard_Nixon_Throwing_Out_the_First_Ball_at_the_1970_All_Star_Baseball_Game_-_DPLA_-_7847749c959d29290002f45718831b4e.jpg",
      },
      {
        date: "1971",
        title: "Washington Loses the Senators",
        description:
          "Following the 1971 season, the Washington Senators relocated to Arlington, Texas, becoming the Texas Rangers. The departure ended major-league baseball in the nation's capital until 2005 and changed the presidential Opening Day tradition.",
        sourceUrl: "https://baseballhall.org/discover-more/stories/baseball-history/opening-day",
      },
      {
        date: "April 6, 1973",
        title: "Nixon Makes Opening Day History in Anaheim",
        image: "/nixon-anaheim-1973.jpg",
        description:
          "Nixon became the first sitting president to participate in a Major League Opening Day first-pitch ceremony outside Washington, D.C. At Anaheim Stadium, he joined former Vietnam War prisoner of war José Luna in the pregame ceremony.",
        sourceUrl: "https://sabr.org/gamesproj/game/april-6-1973-nolan-ryan-whiffs-12-on-opening-day-vietnam-war-pow-throws-out-first-ball/",
      },
      {
        date: "April 8, 1974",
        title: "Nixon Calls Hank Aaron After Home Run No. 715",
        description:
          "After Hank Aaron surpassed Babe Ruth's career home-run record against the Los Angeles Dodgers, President Nixon telephoned Aaron and invited him to the White House. Aaron later recalled the extraordinary interruption during the historic game.",
        sourceUrl: "https://baseballhall.org/discover/fifty-years-ago-hank-aaron-became-king",
      },
    ],
    sources: [
      {
        title: "Richard Nixon Presidential Library — April 7, 1969",
        url: "https://www.nixonlibrary.gov/research/almanac/april-7-1969",
      },
      {
        title: "National Baseball Hall of Fame — Presidential First Pitches",
        url: "https://baseballhall.org/discover/Shortstops-Sox-and-jackets",
      },
      {
        title: "SABR — Nixon's 1973 Anaheim Opening Day",
        url: "https://sabr.org/gamesproj/game/april-6-1973-nolan-ryan-whiffs-12-on-opening-day-vietnam-war-pow-throws-out-first-ball/",
      },
      {
        title: "National Baseball Hall of Fame — Hank Aaron's 715th",
        url: "https://baseballhall.org/discover/fifty-years-ago-hank-aaron-became-king",
      },
    ],
  },


  "gerald-ford": {
    events: [
      {
        date: "1957",
        title: "Ford Hits a Congressional Baseball Grand Slam",
        description:
          "Long before becoming president, Congressman Gerald Ford played catcher for the Republican team in the Congressional Baseball Game. In 1957, he hit an inside-the-park grand slam, although his team ultimately lost.",
        sourceUrl:
          "https://baseballhall.org/discover/shortstops-gerald-first-all-star-game-first-pitch",
      },
      {
        date: "February 6, 1975",
        title: "Ford Writes to Baseball Commissioner Bowie Kuhn",
        description:
          "President Ford wrote to Commissioner Bowie Kuhn praising Major League Baseball's Drug Education and Prevention Program. The letter is preserved among the National Baseball Hall of Fame's presidential baseball artifacts.",
        sourceUrl:
          "https://artsandculture.google.com/story/cgVBoiDknfnvJQ",
      },
      {
        date: "December 1975",
        title: "Baseball's Free Agency Revolution Begins",
        description:
          "During Ford's presidency, an arbitration ruling involving pitchers Andy Messersmith and Dave McNally helped dismantle baseball's longstanding reserve-clause system. The decision paved the way for modern free agency and transformed player contracts.",
        sourceUrl:
          "https://baseballhall.org/",
      },
      {
        date: "April 9, 1976",
        title: "Opening Day with the Texas Rangers",
        image: "/ford-rangers-opening-day-1976.jpg",
        description:
          "Ford participated in the Texas Rangers' home opener at Arlington Stadium, throwing two ceremonial baseballs to Rangers catcher Jim Sundberg. The appearance continued the presidential Opening Day tradition outside Washington.",
        sourceUrl:
          "https://artsandculture.google.com/story/cgVBoiDknfnvJQ",
      },
      {
        date: "May 17, 1976",
        title: "Gerald Ford Meets Mickey Mantle at the White House",
        description:
          "President Gerald Ford and French President Valéry Giscard d'Estaing greeted New York Yankees legend Mickey Mantle in the receiving line at a White House state dinner honoring the French president. The meeting was captured in an official White House photograph.",
        image: "/ford-mickey-mantle-1976.jpg",
        sourceUrl:
          "https://commons.wikimedia.org/wiki/File:President_Gerald_R._Ford_and_President_Valery_Giscard_d%27Estaing_of_France_Greeting_Baseball_Player_Mickey_Mantle_in_the_Receiving_Line_at_a_State_Dinner_Honoring_President_Giscard_d%27Estaing_-_NARA_-_12004822_(cropped).jpg",
      },
      {
        date: "July 13, 1976",
        title: "Ford Meets Pittsburgh Pirates Star Al Oliver",
        description:
          "Before the 1976 All-Star Game at Veterans Stadium in Philadelphia, President Ford spoke with Pittsburgh Pirates outfielder Al Oliver. The moment was preserved in an official National Archives photograph.",
        image: "/ford-al-oliver-1976.jpg",
        sourceUrl:
          "https://commons.wikimedia.org/wiki/File:Gerald_Ford_and_Al_Oliver_1976.jpg",
      },
      {
        date: "July 13, 1976",
        title: "Two First Pitches at the Bicentennial All-Star Game",
        image: "/ford-all-star-1976.jpg",
        description:
          "At Veterans Stadium in Philadelphia, President Ford celebrated America's bicentennial by throwing two ceremonial first pitches: one right-handed to Cincinnati Reds catcher Johnny Bench and another left-handed to New York Yankees catcher Thurman Munson. The National League won 7–1.",
        sourceUrl:
          "https://baseballhall.org/discover/shortstops-gerald-first-all-star-game-first-pitch",
      },
    ],
    sources: [
      {
        title: "Baseball Hall of Fame — Gerald Ford's First Pitches",
        url: "https://baseballhall.org/discover/shortstops-gerald-first-all-star-game-first-pitch",
      },
      {
        title: "National Baseball Hall of Fame — Presidential Pastime Collection",
        url: "https://artsandculture.google.com/story/cgVBoiDknfnvJQ",
      },
      {
        title: "White House Historical Association — Ford's All-Star Pitch",
        url: "https://www.whitehousehistory.org/photos/presidents-baseball-president-ford-throws-the-first-pitch",
      },
      {
        title: "National Archives — Baseball and the All-Star Game",
        url: "https://www.archives.gov/news/articles/baseball-records-provide-historical-perspective-on-all-star",
      },
    ],
  },


  "jimmy-carter": {
    events: [
      {
        date: "April 8, 1974",
        title: "Witnessing Hank Aaron's 715th Home Run",
        description:
          "While serving as governor of Georgia, Jimmy Carter attended the Atlanta Braves game in which Hank Aaron hit his 715th career home run, surpassing Babe Ruth's longstanding major-league record. The historic moment connected Carter with one of baseball's most celebrated achievements.",
        sourceUrl:
          "https://www.whitehousehistory.org/jimmy-carter-and-sports",
      },
      {
        date: "August 15, 1978",
        title: "Hank Aaron Visits the Oval Office",
        image: "/carter-hank-aaron-1978.jpg",
        description:
          "President Carter welcomed baseball legend Hank Aaron to the Oval Office. Their meeting reflected a friendship that began during Carter's years as Georgia governor and Aaron's record-setting career with the Atlanta Braves.",
        sourceUrl:
          "https://www.whitehousehistory.org/photos/jimmy-carter-chats-with-home-run-king-hank-aaron-at-the-white-house",
      },
      {
        date: "October 17, 1979",
        title: "A Presidential First Pitch at World Series Game Seven",
        image: "/carter-world-series-1979.jpg",
        description:
          "President Carter attended the decisive seventh game of the 1979 World Series at Memorial Stadium in Baltimore and threw the ceremonial first pitch to Orioles catcher Rick Dempsey. Willie Stargell led the Pittsburgh Pirates to a 4–1 victory over Baltimore, completing a comeback from a three-games-to-one deficit.",
        sourceUrl:
          "https://sabr.org/gamesproj/game/october-17-1979-pops-stargell-named-mvp-as-pirates-complete-world-series-comeback/",
      },
      {
        date: "October 17, 1979",
        title: "Celebrating with Willie Stargell and the Pirates",
        description:
          "After Pittsburgh's World Series victory, Carter visited the Pirates' clubhouse and celebrated with star Willie Stargell. The moment was captured by White House photographers and preserved in the National Archives.",
        sourceUrl:
          "https://docsteach.org/document/jimmy-carter-pirates-locker-room/",
      },
      {
        date: "February 22, 1980",
        title: "The World Champion Pirates Visit the White House",
        image: "/carter-pirates-white-house-1980.jpg",
        description:
          "President Carter welcomed the Pittsburgh Pirates and Pittsburgh Steelers to the White House to celebrate their championships. During the East Room reception, Carter held a Pirates cap and a Steelers Terrible Towel, honoring Pittsburgh's remarkable year in professional sports.",
        sourceUrl:
          "https://www.whitehousehistory.org/photos/president-carter-congratulates-pittsburgh-sports-champions",
      },
    ],
    sources: [
      {
        title: "White House Historical Association — Jimmy Carter and Sports",
        url: "https://www.whitehousehistory.org/jimmy-carter-and-sports",
      },
      {
        title: "National Archives — Carter in the Pirates Clubhouse",
        url: "https://docsteach.org/document/jimmy-carter-pirates-locker-room/",
      },
      {
        title: "SABR — 1979 World Series Game Seven",
        url: "https://sabr.org/gamesproj/game/october-17-1979-pops-stargell-named-mvp-as-pirates-complete-world-series-comeback/",
      },
      {
        title: "White House Historical Association — Pirates Reception",
        url: "https://www.whitehousehistory.org/photos/president-carter-congratulates-pittsburgh-sports-champions",
      },
    ],
  },
  "ronald-reagan": {
    events: [
      {
        date: "1933–1937",
        title: "Broadcasting Chicago Cubs Baseball",
        description:
          "As a sports announcer for WHO Radio in Des Moines, Iowa, Ronald Reagan recreated Chicago Cubs games for listeners using play-by-play reports transmitted by telegraph. His vivid descriptions helped develop the storytelling skills that later became a hallmark of his public career.",
        sourceUrl:
          "https://www.reaganlibrary.gov/virtual-exhibits/reagan-and-baseball",
      },
      {
        date: "June 7, 1934",
        title: "The Famous Radio Broadcast That Went Silent",
        description:
          "While recreating a Cubs–Cardinals game, Reagan lost his telegraph feed during a ninth-inning at-bat involving Billy Jurges and Dizzy Dean. To keep listeners entertained, he improvised nearly twelve minutes of foul balls until the transmission returned. The story became one of his favorite baseball anecdotes.",
        sourceUrl:
          "https://www.reaganlibrary.gov/virtual-exhibits/reagan-and-baseball",
      },
      {
        date: "1952",
        title: "Playing Grover Cleveland Alexander in The Winning Team",
        description:
          "Reagan starred as Hall of Fame pitcher Grover Cleveland Alexander in the Warner Bros. baseball film The Winning Team, opposite Doris Day. The role connected his acting career with one of the most celebrated pitchers of baseball's early twentieth century.",
        sourceUrl:
          "https://www.reaganlibrary.gov/virtual-exhibits/reagan-and-baseball",
      },
      {
        date: "April 2, 1984",
        title: "Opening Day with the Baltimore Orioles",
        image: "/reagan-opening-day-1984.jpg",
        description:
          "President Reagan threw the ceremonial first pitch to catcher Rick Dempsey at Baltimore's Memorial Stadium before the Orioles faced the Chicago White Sox. He then spent part of the game in the Orioles dugout alongside baseball officials.",
        sourceUrl:
          "https://www.reaganfoundation.org/ronald-reagan/white-house-diaries/diary-entry-04021984",
      },
      {
        date: "April 7, 1986",
        title: "Another Presidential First Pitch in Baltimore",
        image: "/reagan-opening-day-1986.jpg",
        description:
          "Reagan returned to Memorial Stadium for the Orioles' Opening Day game against Cleveland. His first ceremonial throw went astray, prompting another attempt. The visit was documented in his White House diary and by official presidential photographers.",
        sourceUrl:
          "https://www.reaganfoundation.org/ronald-reagan/white-house-diaries/diary-entry-04071986",
      },
      {
        date: "1986",
        title: "Meeting Cal Ripken Jr. in the Orioles Dugout",
        image: "/reagan-cal-ripken-1986.jpg",
        description:
          "During his Baltimore baseball appearances, Reagan was photographed speaking with Orioles star Cal Ripken Jr. The Ronald Reagan Presidential Library preserves the encounter in its White House sports photography collection.",
        sourceUrl:
          "https://www.reaganlibrary.gov/archives/photo/sports-and-athletes",
      },
      {
        date: "September 30, 1988",
        title: "Two First Pitches at Wrigley Field",
        description:
          "Reagan returned to Chicago's Wrigley Field and threw two ceremonial first pitches before the Cubs played the Pittsburgh Pirates. The appearance brought him back to the ballpark associated with his early broadcasting career.",
        image: "/reagan-first-pitch-1988.jpg",
        sourceUrl:
          "https://commons.wikimedia.org/wiki/File:President_Ronald_Reagan_throwing_out_the_first_pitch_at_a_baseball_game_between_the_Chicago_Cubs_and_Pittsburgh_Pirates.jpg",
      },
      {
        date: "September 30, 1988",
        title: "Back in the Broadcast Booth with Harry Caray",
        image: "/reagan-harry-caray-1988.jpg",
        description:
          "During the Cubs–Pirates game at Wrigley Field, Reagan joined legendary broadcaster Harry Caray and returned to calling baseball on the air. The appearance brought his baseball story full circle, from Iowa radio announcer to president of the United States.",
        sourceUrl:
          "https://www.reaganlibrary.gov/virtual-exhibits/reagan-and-baseball",
      },
    ],
    sources: [
      {
        title: "Ronald Reagan Presidential Library — Reagan and Baseball",
        url: "https://www.reaganlibrary.gov/virtual-exhibits/reagan-and-baseball",
      },
      {
        title: "Ronald Reagan Presidential Library — Sports Photographs",
        url: "https://www.reaganlibrary.gov/archives/photo/sports-and-athletes",
      },
      {
        title: "Reagan White House Diary — April 2, 1984",
        url: "https://www.reaganfoundation.org/ronald-reagan/white-house-diaries/diary-entry-04021984",
      },
      {
        title: "Reagan White House Diary — April 7, 1986",
        url: "https://www.reaganfoundation.org/ronald-reagan/white-house-diaries/diary-entry-04071986",
      },
      {
        title: "National Archives — Reagan at Wrigley Field",
        url: "https://commons.wikimedia.org/wiki/File:President_Ronald_Reagan_throwing_out_the_first_pitch_at_a_baseball_game_between_the_Chicago_Cubs_and_Pittsburgh_Pirates.jpg",
      },
    ],
  },
  "george-h-w-bush": {
    events: [
      {
        date: "1945–1948",
        title: "A First Baseman at Yale University",
      image: "/bush41-yale-first-base.webp",
        description:
          "After serving as a naval aviator during World War II, George H. W. Bush attended Yale University and played first base for the Bulldogs. Baseball became an important part of his college experience, and he eventually served as team captain.",
        sourceUrl:
          "https://www.mlb.com/news/baseball-has-history-with-many-u-s-presidents-c164503968",
      },
      {
        date: "1947",
        title: "Playing in the First College World Series",
      image: "/bush41-yale-team.webp",
        description:
          "Bush played first base for Yale in the inaugural College World Series, held in Kalamazoo, Michigan. Yale advanced to the championship series but lost to California, making Bush part of the earliest chapter in the tournament's history.",
        sourceUrl:
          "https://www.mlb.com/news/baseball-has-history-with-many-u-s-presidents-c164503968",
      },
      {
        date: "1947",
        title: "Facing Fordham and Future Broadcaster Vin Scully",
      image: "/bush41-yale-at-bat.webp",
        description:
          "While playing for Yale, Bush competed against Fordham University, whose baseball team included future Hall of Fame broadcaster Vin Scully. The connection linked two figures who would later become prominent in American public life and baseball history.",
        sourceUrl:
          "https://www.mlb.com/news/baseball-has-history-with-many-u-s-presidents-c164503968",
      },
      {
        date: "1948",
        title: "Captain of the Yale Baseball Team",
      image: "/bush41-college-world-series-1948.webp",
        description:
          "Bush captained the Yale Bulldogs during his senior season. Yale returned to the College World Series championship round, where the Bulldogs fell to Southern California. His college baseball career remained a source of pride throughout his life.",
        sourceUrl:
          "https://www.mlb.com/news/baseball-has-history-with-many-u-s-presidents-c164503968",
      },
      {
        date: "June 5, 1948",
        title: "George H. W. Bush Meets Babe Ruth at Yale",
        description:
          "As Yale's baseball captain, Bush received the manuscript of Babe Ruth's autobiography during a ceremony at Yale Field. The historic photograph captures the future president beside the legendary slugger just weeks before Ruth's death.",
        image: "/bush41-babe-ruth-1948.jpg",
        sourceUrl:
          "https://commons.wikimedia.org/wiki/File:George_Bush,_Captain_of_the_Yale_Baseball_Team,_Receives_Babe_Ruth%27s_Manuscript_of_His_Autobiography_which_He_Was_Donating_to_Yale_(3679513408).jpg",
      },
      {
        date: "April 3, 1989",
        title: "Opening Day in Baltimore",
        image: "/bush41-opening-day-1989.jpg",
        description:
          "President Bush threw the ceremonial first pitch at Baltimore's Memorial Stadium before the Orioles played the Boston Red Sox. The appearance continued the presidential tradition of participating in Major League Baseball's Opening Day.",
        sourceUrl:
          "https://www.mlb.com/video/bush-throws-out-first-pitch-c37227645",
      },
      {
        date: "April 6, 1992",
        title: "Opening Oriole Park at Camden Yards",
        description:
          "Bush delivered the ceremonial first pitch for the inaugural regular-season game at Oriole Park at Camden Yards. The Baltimore Orioles defeated the Cleveland Indians, 2–0, as the ballpark began a new era in stadium architecture.",
        sourceUrl:
          "https://www.mlb.com/brewers/video/president-bush-s-first-pitch-c33379335",
      },
    {
      date: "August 28, 1988",
      title: "An Astrodome First Pitch with Nolan Ryan",
      description: "While serving as vice president, George H. W. Bush threw a ceremonial first pitch at Houston's Astrodome as Astros pitcher Nolan Ryan looked on. The occasion brought together two prominent Texans whose careers intersected with America's national pastime.",
      image: "/bush41-nolan-ryan-1988.webp",
      sourceUrl: "https://www.bush41library.gov/galleries/baseball",
    },
    {
      date: "April 10, 1990",
      title: "Opening Day with the Texas Rangers",
      description: "President Bush threw the ceremonial first pitch at the Texas Rangers' 1990 home opener against the Toronto Blue Jays, continuing the presidential tradition of celebrating the beginning of the baseball season.",
      image: "/bush41-rangers-1990.webp",
      sourceUrl: "https://www.bush41library.gov/galleries/baseball",
    },
    {
      date: "September 25, 1990",
      title: "Exchanging Baseball Keepsakes with Stan Musial",
      description: "Baseball Hall of Famer Stan Musial presented President Bush with an autographed glove during a White House visit. Bush reciprocated with a signed baseball, creating a memorable exchange between a president and one of the game's greatest hitters.",
      image: "/bush41-stan-musial-1990.webp",
      sourceUrl: "https://www.bush41library.gov/galleries/baseball",
    },
    {
      date: "May 15, 1991",
      title: "Cal Ripken Jr. Meets President Bush and Queen Elizabeth II",
      description: "During Queen Elizabeth II's visit to an Orioles game at Baltimore's Memorial Stadium, President Bush and Barbara Bush joined the queen for a photograph with Cal Ripken Jr. The occasion connected baseball with a historic royal visit.",
      image: "/bush41-cal-ripken-1991.webp",
      sourceUrl: "https://www.bush41library.gov/galleries/baseball",
    },
    {
      date: "July 9, 1991",
      title: "A White House Visit from DiMaggio and Williams",
      description: "President Bush welcomed baseball legends Joe DiMaggio and Ted Williams to the White House. An archival photograph captures the president alongside two of the most celebrated hitters in American baseball history.",
      image: "/bush41-dimaggio-williams-1991.webp",
      sourceUrl: "https://www.bush41library.gov/galleries/baseball",
    },
  ],
    sources: [
      {
        title: "MLB — Presidential Baseball History",
        url: "https://www.mlb.com/news/baseball-has-history-with-many-u-s-presidents-c164503968",
      },
      {
        title: "MLB — 1989 Presidential First Pitch",
        url: "https://www.mlb.com/video/bush-throws-out-first-pitch-c37227645",
      },
      {
        title: "MLB — Opening Day at Camden Yards",
        url: "https://www.mlb.com/brewers/video/president-bush-s-first-pitch-c33379335",
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
