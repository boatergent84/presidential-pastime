
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
    overview: "Ulysses S. Grant entered the White House in March 1869, at precisely the moment American baseball was beginning its transformation from an amateur pastime into an organized professional sport. That same year, the Cincinnati Red Stockings assembled the first widely recognized openly professional baseball team, paying their players and embarking on a remarkable undefeated season. Led by Harry Wright and his brother George Wright, the Red Stockings traveled across the country, attracting large crowds and demonstrating baseball's growing national appeal. Their 1869 season helped establish the commercial possibilities of the game and foreshadowed the professional leagues that would follow. Grant's presidency also witnessed the creation of the National Association of Professional Base Ball Players in 1871, an important predecessor to modern major league baseball. By 1876, during Grant's final full year in office, the National League had been established, bringing greater structure and permanence to professional competition. These developments unfolded during an era of railroad expansion, industrial growth, and rapidly changing American cities, all of which helped teams travel, compete, and attract spectators. Grant's own personal involvement with baseball is less firmly documented than the sport's extraordinary growth during his administration, so his historical importance to the game rests chiefly in the period he represented rather than in any unverified claim that he played or attended particular games. From the first openly professional team in 1869 to the formation of the National League in 1876, the Grant years marked one of the most consequential chapters in baseball history.",
    portrait: "/grant-new.jpg",
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
        image: "/grant-champion-bat-1869.jpg",
        description:
          "President Grant received the Cincinnati Red Stockings, an early professional baseball club, at the White House.",
        sourceUrl:
          "https://www.mlb.com/news/baseball-has-history-with-many-u-s-presidents-c164503968",
      },
      {
        date: "1876",
        title: "The National League Is Founded",
        image: "/grant-chicago-1876.jpg",
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
      {
        date: "September 30, 1879",
        title: "Baseball at Messer Street Grounds",
        description: "The Boston and Providence clubs assembled for this historic photograph at Messer Street Grounds in Providence, Rhode Island, on the final day of the 1879 National League season. The photograph captures the growing professional game during President Hayes's administration.",
        image: "/hayes-messer-street-1879.jpg",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Messer_Street_Grounds,_1879.jpg",
      },
    ],
    number: 19,
    years: "1877–1881",
    baseballEra: "Early National League",
    overview: "Rutherford B. Hayes became president in 1877, just one year after the National League was founded, placing his administration at the beginning of a new era in organized professional baseball. The sport was evolving from loosely organized clubs into a more structured competition with established teams, regular schedules, and growing audiences. During Hayes's presidency, the National League worked to strengthen its organization while clubs from major American cities competed for championship honors. One of the most notable teams of the period was the Providence Grays, who joined the league in 1878 and captured the National League pennant in 1879. Led by George Wright, an important figure in early professional baseball, the Grays demonstrated the increasing competitiveness of the young league. Meanwhile, the Boston Red Caps and Chicago White Stockings helped establish enduring baseball traditions as the professional game expanded its reach. Railroads, newspapers, and growing urban populations allowed baseball to attract spectators far beyond the communities where individual clubs played. Newspaper coverage increasingly made prominent players and teams familiar to readers throughout the country. Although Hayes's personal involvement with baseball is not well documented, his presidency coincided with an important period of consolidation for the professional game. By the time he left office in 1881, baseball had become an increasingly organized national attraction, with the National League laying foundations that would shape America's pastime for generations.",
    portrait: "/hayes-whitehouse.jpg",
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
      {
        date: "1881",
        title: "Chicago White Stockings Win the Pennant",
        description: "The Chicago White Stockings captured the 1881 National League championship with a 56–28 record during James A. Garfield's presidency. Pictured is Chicago pitcher Fred Goldsmith in an 1880 photograph, a member of the club's championship-era pitching staff.",
        image: "/garfield-fred-goldsmith-1880.jpg",
        sourceUrl: "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Fred%20Goldsmith%201880",
      },
    ],
    number: 20,
    years: "1881",
    baseballEra: "19th-Century Baseball",
    overview: "James A. Garfield became the twentieth president of the United States on March 4, 1881, during the sixth season of the National League. Professional baseball was still relatively young, but the game was developing into an organized national sport with established clubs, competitive pennant races, and growing newspaper coverage. The 1881 season featured eight National League teams, including the Chicago White Stockings, Providence Grays, Boston Red Caps, and the newly admitted Detroit Wolverines. Detroit's arrival was particularly significant for Michigan baseball history, beginning the city's first National League franchise decades before the Tigers. Chicago, managed on the field by the influential Cap Anson, emerged as the league's strongest club and ultimately captured the pennant with a 56–28 record. The Providence Grays finished second. Other important developments included the growing prominence of players such as Roger Connor, whose historic grand slam for the Troy Trojans came in September 1881. Garfield's presidency was tragically brief. He was shot on July 2 and died on September 19, 1881, before the baseball season ended. There is no firmly established evidence that Garfield personally participated in a presidential baseball ceremony or threw a ceremonial first pitch. His connection to the sport is therefore primarily historical: the growth of professional baseball during his administration. In 1881, baseball continued its transformation from a nineteenth-century pastime into a major American sporting institution, with expanding city rivalries, recognized professional championships, and an increasingly national audience.",
    portrait: "/garfield-whitehouse.jpg",
  },
  {
    name: "Chester A. Arthur",
    slug: "chester-a-arthur",
    number: 21,
    years: "1881–1885",
    baseballEra: "Professional League Expansion",
    overview: "Chester A. Arthur became the twenty-first president of the United States on September 19, 1881, following the death of James A. Garfield. His presidency coincided with one of the most important periods in the early development of professional baseball. The National League, founded in 1876, was establishing itself as a major professional organization, while the American Association began play in 1882 and introduced new competition. The Association attracted fans through lower admission prices and Sunday baseball in cities where it was permitted. In 1883, the New York Gothams entered the National League, beginning the franchise history of today's San Francisco Giants. The era featured prominent players including Buck Ewing, Roger Connor, John Montgomery Ward, and Charles Old Hoss Radbourn. In 1884, Radbourn produced one of baseball's most extraordinary pitching seasons, helping the Providence Grays win the National League pennant. Providence then defeated the American Association champion New York Metropolitans in a three-game postseason championship series, an early predecessor to the modern World Series. Arthur's presidency therefore witnessed professional baseball's expansion into competing major leagues and its emergence as an increasingly important part of American culture. No reliably documented ceremonial first pitch by President Arthur has been established.",
    portrait: "/arthur-whitehouse.jpg",
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
          "The American Association began play in 1882, offering professional competition alongside the National League. The Cincinnati Red Stockings won the league's inaugural pennant. Pictured is the actual 1882 Cincinnati team.",
        image: "/arthur-american-association-1882.png",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:1882_Cincinnati_Red_Stockings.png",
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
    portrait: "/cleveland-new.png?v=1",
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
      "Benjamin Harrison holds a special place in presidential baseball history as the first sitting president documented attending a major-league game. Long before entering the White House, Harrison enjoyed watching baseball in Indianapolis and Chicago. In 1889, he publicly expressed his pleasure in watching a good game of ball. His administration coincided with a turbulent and transformative period in professional baseball. The Players' League challenged the established National League in 1890, while the American Association folded after the 1891 season. The National League expanded to twelve clubs in 1892, including the Washington Senators. On June 6, 1892, Harrison traveled to Boundary Field in Washington to watch the Senators face the Cincinnati Reds. Wearing a derby and frock coat, he watched from the press box as the home team competed against Cincinnati. Harrison departed during the sixth inning with the Reds ahead, missing Washington's comeback and Cincinnati's eventual 7–4 victory in eleven innings. He returned to Boundary Field on June 25, 1892, to see Washington play Philadelphia. His attendance established an enduring connection between the presidency and America's national pastime, preceding the presidential ceremonial first-pitch tradition that began under William Howard Taft in 1910.",
    portrait: "/harrison-pach-1896.jpg?v=1",
    events: [
      {
        date: "June 6, 1892",
        title: "First Sitting President at a Major-League Game",
        image: "/harrison-washington-senators-1895.jpg",
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
      "William McKinley's presidency marked a turning point in American baseball. In 1897, Washington baseball representatives visited the White House and invited the president to their season opener. Although McKinley did not begin the ceremonial first-pitch tradition, the invitation demonstrated baseball's growing connection to the presidency. During his administration, the National League dominated professional baseball, with stars such as Cy Young, Honus Wagner, and Nap Lajoie helping shape the sport. After the 1899 season, the National League contracted from twelve clubs to eight, eliminating Washington's team. Meanwhile, Ban Johnson's Western League became the American League in 1900. In 1901, the American League began operating as a major league, establishing the rivalry that would transform professional baseball. McKinley's presidency thus bridged nineteenth-century baseball and the beginnings of the modern two-league era.",
    portrait: "/mckinley-whitehouse.jpg?v=1",
    events: [
      {
        date: "April 1897",
        title: "Washington Baseball Visits the White House",
        description:
          "Washington baseball representatives visited President McKinley and invited him to their season opener.",
        image: "/mckinley-washington-1895.jpg",
      },
      {
        date: "1901",
        title: "The American League Arrives",
        description:
          "The American League began its first season as a major league during McKinley's final year in office.",
        image: "/mckinley-american-league-1901.jpg",
      },
    ],

  },
  {
    name: "Theodore Roosevelt",
    slug: "theodore-roosevelt",
    number: 26,
    years: "1901–1909",
    baseballEra: "Deadball Era",
    overview:
      "Theodore Roosevelt occupied the White House during one of the most important periods in baseball history. When he became president in September 1901, the newly established American League was challenging the older National League for players, fans, and national attention. In 1903, the Boston Americans defeated the Pittsburgh Pirates in the first modern World Series, establishing a championship tradition that would become central to American sports. Roosevelt's presidency also overlapped with the rise of legendary players such as Honus Wagner, Nap Lajoie, Christy Mathewson, and Ty Cobb. The early twentieth century became known as the Deadball Era, when pitching, defense, bunting, and aggressive baserunning were central to the game. The Chicago Cubs won consecutive World Series championships in 1907 and 1908, while the New York Giants and Philadelphia Athletics emerged as important clubs in the new two-league system. Roosevelt strongly advocated physical activity, competition, and vigorous living, values that resonated with the growing popularity of organized sports. Although he did not establish the presidential Opening Day first-pitch tradition, his administration witnessed baseball's transformation into a modern national institution. That ceremonial tradition would begin under his successor, William Howard Taft, in 1910.",
    portrait: "/roosevelt-formal.jpg?v=1",
    events: [
      {
        date: "1901",
        title: "The American League Challenges the National League",
        description:
          "The American League completed its first major-league season, beginning a new era of competition between baseball's two major leagues.",
        image: "/roosevelt-american-league-1901.jpg",
      },
      {
        date: "1903",
        title: "The First Modern World Series",
        description:
          "The Boston Americans defeated the Pittsburgh Pirates five games to three in the first modern World Series. The event occurred during Roosevelt's presidency, but was not a documented presidential appearance.",
        image: "/roosevelt-world-series-1903.jpg",
      },
      {
        date: "1908",
        title: "The Chicago Cubs Win Their Second Consecutive World Series",
        description:
          "The Chicago Cubs defeated the Detroit Tigers for the second consecutive year, becoming one of the defining championship teams of the Deadball Era.",
        image: "/roosevelt-cubs-1908.jpg",
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
    portrait: "/taft-formal-portrait.jpg?v=1",
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
    portrait: "/wilson-1914.jpg",
  },
  {
    name: "Warren G. Harding",
    slug: "warren-g-harding",
    number: 29,
    years: "1921–1923",
    baseballEra: "Babe Ruth Era",
    overview:
      "Harding's presidency coincided with Babe Ruth's emergence as baseball's greatest home-run attraction.",
    portrait: "/harding-front-1920.jpg",
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
      "Calvin Coolidge occupied the White House during one of the most celebrated eras in baseball history. Although known for his reserved personality, Coolidge became closely associated with the Washington Senators and their remarkable 1924 championship season. On April 15, 1924, he delivered the ceremonial first pitch at Griffith Stadium before Walter Johnson shut out the Philadelphia Athletics, 4–0. That autumn, the Senators captured their first American League pennant and faced the New York Giants in a dramatic seven-game World Series. Coolidge opened the Series with a ceremonial pitch and attended the deciding seventh game alongside First Lady Grace Coolidge, an enthusiastic baseball supporter who followed the action closely and kept score. Washington prevailed 4–3 in twelve innings, with Walter Johnson earning the victory in relief. Coolidge later continued the presidential Opening Day tradition in 1927 and 1928. His presidency remains linked to the Senators’ greatest triumph and to an unforgettable chapter in the history of baseball in the nation’s capital.",
    portrait: "/coolidge.jpg",
  },
  {
    name: "Herbert Hoover",
    slug: "herbert-hoover",
    number: 31,
    years: "1929–1933",
    baseballEra: "Depression-Era Baseball",
    overview:
      "Herbert Hoover served as president as American baseball entered the Great Depression. In 1929, the year he took office, Babe Ruth and Lou Gehrig were among the stars drawing crowds, and Connie Mack's Philadelphia Athletics began a run of three straight American League pennants. Hoover continued the Washington Opening Day tradition, participating in ceremonial first pitches in each season from 1929 through 1932. His connection to the game also survives in a presidential autograph baseball associated with former catcher Ray Schalk and preserved in the National Baseball Hall of Fame. As unemployment rose and families faced economic hardship, baseball remained a familiar source of community and inexpensive entertainment, even as attendance and club finances came under pressure. The era also saw remarkable performances by Jimmie Foxx, Lefty Grove, and other stars who helped sustain public interest. Hoover's baseball legacy rests less on a single championship than on his continued public participation in the national pastime during a period of profound economic uncertainty.",
    portrait: "/hoover.jpg",
  },
  {
    name: "Franklin D. Roosevelt",
    slug: "franklin-d-roosevelt",
    number: 32,
    years: "1933–1945",
    baseballEra: "Depression and World War II",
    overview:
      "Franklin D. Roosevelt's presidency spanned the Great Depression and most of the Second World War, two crises that deeply affected professional baseball. Roosevelt maintained the presidential Opening Day tradition in Washington and attended the 1937 All-Star Game. His most consequential baseball intervention came after the United States entered World War II. In January 1942, Commissioner Kenesaw Mountain Landis asked whether the major leagues should continue playing while the nation mobilized. Roosevelt replied in the famous Green Light Letter, explaining that baseball could provide recreation for Americans working long hours in wartime industries. The major leagues continued, although many players entered military service and rosters changed dramatically. The war years also brought the All-American Girls Professional Baseball League, founded in 1943, to new prominence. Roosevelt did not live to see Jackie Robinson's major-league debut in 1947, but his support for keeping the game on the field during wartime remains one of the clearest examples of a president directly influencing baseball's history.",
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
      "Harry S. Truman entered the White House in April 1945, as World War II neared its end and professional baseball prepared for the return of players from military service. Truman continued the presidential Opening Day custom in Washington, sometimes delighting crowds by throwing ceremonial pitches with both hands. His presidency coincided with a historic transformation in the game. On April 15, 1947, Jackie Robinson made his Brooklyn Dodgers debut, breaking the modern major leagues' longstanding color barrier. Larry Doby integrated the American League later that season with Cleveland, and additional Black players soon followed. Baseball also experienced some of its most memorable postwar pennant races, including Cleveland's 1948 championship and the Yankees' rise under Casey Stengel. Truman's own ceremonial appearances linked the White House with the sport, while the integration of major-league baseball during his administration made the period one of the most consequential in American sporting and social history.",
    portrait: "/truman.jpg",
  },
  {
    name: "Dwight D. Eisenhower",
    slug: "dwight-d-eisenhower",
    number: 34,
    years: "1953–1961",
    baseballEra: "Postwar Baseball",
    overview:
      "Dwight D. Eisenhower brought a personal baseball background to the presidency, having played the sport in his youth and developed a lifelong appreciation for competition. During his years in office, he continued ceremonial first-pitch appearances at Washington baseball games. His administration witnessed a dramatic reshaping of the major leagues: the Boston Braves moved to Milwaukee in 1953, the Philadelphia Athletics moved to Kansas City in 1955, and the Brooklyn Dodgers and New York Giants departed for California after the 1957 season. The sport's national reach grew alongside television broadcasting and the postwar expansion of American suburbs. On the field, Willie Mays, Mickey Mantle, Hank Aaron, and other stars defined the decade. Eisenhower also served during Don Larsen's perfect game in the 1956 World Series and the emergence of new West Coast rivalries. His presidency bridged the traditional eastern-centered baseball map and the modern coast-to-coast major leagues.",
    portrait: "/eisenhower.jpg",
  },
  {
    name: "John F. Kennedy",
    slug: "john-f-kennedy",
    number: 35,
    years: "1961–1963",
    baseballEra: "Expansion Era",
    overview:
      "John F. Kennedy became president in 1961, the year the American League expanded and Washington received a new Senators franchise after its previous club moved to Minnesota. On April 10, 1961, Kennedy threw the ceremonial first pitch at Griffith Stadium as the new Senators opened their inaugural season against the Chicago White Sox. It was the final presidential Opening Day at the historic ballpark. In 1962, Kennedy returned for the Senators' first opener at the new D.C. Stadium and attended the Major League All-Star Game in Washington. He also welcomed St. Louis Cardinals great Stan Musial to the White House that July. Kennedy made another Opening Day appearance in April 1963, only months before his assassination. His baseball appearances offer a vivid record of the relationship between the White House and Washington's changing ballparks during a period of expansion, televised sports, and rapid cultural change.",
    portrait: "/jfk-color-portrait.jpg",
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
      "Lyndon B. Johnson occupied the White House during an eventful period of American baseball, as the sport confronted social change, new markets, and the growing influence of television. Johnson continued the presidential Opening Day tradition with Washington Senators appearances in 1964, 1965, and 1967. His administration coincided with the extraordinary achievements of Sandy Koufax, Bob Gibson, and Willie Mays, along with the 1967 Boston Red Sox 'Impossible Dream' pennant run and the Detroit Tigers' 1968 World Series championship. The 1960s also saw greater attention to players' labor rights and the difficult conditions facing Black athletes despite baseball's earlier integration. By the end of Johnson's presidency, expansion and divisional play were on the horizon, changing how the major leagues would organize pennant races. Johnson's documented ceremonial pitches connect his administration to Washington baseball, while the wider era marked a transition toward the modern game.",
    portrait: "/lbj.jpg",
  },
  {
    name: "Richard Nixon",
    slug: "richard-nixon",
    number: 37,
    years: "1969–1974",
    baseballEra: "Expansion and Divisional Play",
    overview:
      "Richard Nixon was a serious sports enthusiast whose presidency overlapped with major changes in professional baseball. The 1969 season introduced divisional play and League Championship Series, adding a new postseason round to the traditional pennant race. Nixon threw a ceremonial first pitch in Washington in 1969 and, in 1973, participated in an Opening Day ceremony in Anaheim, helping extend the presidential first-pitch tradition beyond the nation's capital. His years in office also included the rise of the Oakland Athletics dynasty, Hank Aaron's pursuit and breaking of Babe Ruth's career home-run record in 1974, and growing debate over player contracts and labor rights. The Washington Senators relocated to Texas after the 1971 season, ending major-league baseball in the capital for more than three decades. Nixon's baseball story therefore combines personal interest and ceremonial appearances with a period of major changes in the sport's geography and structure.",
    portrait: "/nixon.jpg",
  },
  {
    name: "Gerald Ford",
    slug: "gerald-ford",
    number: 38,
    years: "1974–1977",
    baseballEra: "1970s Baseball",
    overview:
      "Gerald Ford's presidency coincided with a turning point in the business of Major League Baseball. The 1975 World Series between Cincinnati and Boston became one of the sport's most celebrated championships, while the Cincinnati Reds' 'Big Red Machine' continued to dominate the National League. In December 1975, an arbitration decision involving pitchers Andy Messersmith and Dave McNally accelerated the end of baseball's reserve-clause system and helped usher in modern free agency. Ford participated in the ceremonial first pitch at the 1976 All-Star Game in Philadelphia, held during the United States bicentennial celebration. The occasion joined America's 200th anniversary with its national pastime. Ford's own background as an accomplished college football player made athletics a familiar part of his public life, but his presidency's strongest baseball connections are the bicentennial All-Star Game and the sweeping changes in player mobility that reshaped the sport.",
    portrait: "/ford.jpg",
  },
  {
    name: "Jimmy Carter",
    slug: "jimmy-carter",
    number: 39,
    years: "1977–1981",
    baseballEra: "Free Agency Era",
    overview:
      "Jimmy Carter's presidency unfolded as free agency transformed major-league rosters and the economics of the game. Star players gained new leverage in contract negotiations, while the New York Yankees, Los Angeles Dodgers, and Pittsburgh Pirates featured prominently in late-1970s pennant races. Carter attended Game 7 of the 1979 World Series in Baltimore, where Willie Stargell and the Pirates completed their comeback against the Orioles. That championship, remembered for Pittsburgh's 'We Are Family' team, became one of the era's defining moments. Carter's Georgia roots also connected him with the growing baseball culture of the Southeast, including the Atlanta Braves. His presidential baseball record is more closely associated with attending a championship game than with repeated ceremonial Opening Day pitches. The Carter years capture baseball adjusting to a new labor landscape while retaining its place in American public life.",
    portrait: "/carter.jpg",
  },
  {
    name: "Ronald Reagan",
    slug: "ronald-reagan",
    number: 40,
    years: "1981–1989",
    baseballEra: "1980s Baseball",
    overview:
      "Ronald Reagan's connection to baseball began decades before he entered the White House. As a young radio announcer in the 1930s, he recreated Chicago Cubs games for listeners using telegraphed accounts of the action, developing the vivid storytelling skills that later helped define his public career. In the 1952 film The Winning Team, Reagan portrayed Hall of Fame pitcher Grover Cleveland Alexander. As president, he maintained a visible connection to the sport, including a September 30, 1988 appearance at Wrigley Field, where he threw two ceremonial first pitches before a Cubs game. His administration also witnessed the 1981 players' strike, the rise of stars such as Cal Ripken Jr. and Rickey Henderson, and the dramatic 1986 World Series. Reagan's baseball legacy is unusually personal: few presidents have spent part of their professional lives describing the game to fans or portraying one of its great players on screen.",
    portrait: "/reagan.jpg",
  },
  {
    name: "George H. W. Bush",
    slug: "george-h-w-bush",
    number: 41,
    years: "1989–1993",
    baseballEra: "Modern Baseball",
    overview:
      "George H. W. Bush was among the most accomplished baseball players ever to become president. As a student at Yale after World War II, he played first base and captained the university team, which reached the first two College World Series tournaments in 1947 and 1948. A famous photograph shows Bush meeting Babe Ruth during the legendary slugger's visit to Yale in 1948. Bush carried that personal affection for baseball into public life and participated in ceremonial first pitches as president. His administration saw the Oakland Athletics' 1989 championship, the extraordinary 1991 World Series between Minnesota and Atlanta, and the growing international reach of the major leagues. Unlike presidents whose connections were primarily ceremonial, Bush could speak about the game from direct experience as a competitive college player. His Yale years remain a particularly distinctive chapter in presidential baseball history.",
    portrait: "/bush41.jpg",
  },
  {
    name: "Bill Clinton",
    slug: "bill-clinton",
    number: 42,
    years: "1993–2001",
    baseballEra: "1990s Baseball",
    overview:
      "Bill Clinton occupied the White House during a turbulent but highly visible era in Major League Baseball. Expansion brought the Colorado Rockies and Florida Marlins into the National League in 1993, followed by the Arizona Diamondbacks and Tampa Bay Devil Rays in 1998. Clinton took part in ceremonial baseball events, including a 1993 Opening Day first pitch in Baltimore. The 1994–95 players' strike canceled the 1994 World Series and damaged relations between fans, owners, and players. Yet the sport rebounded with memorable moments, including Cal Ripken Jr.'s consecutive-games record in 1995 and the celebrated 1998 home-run chase involving Mark McGwire and Sammy Sosa. The Yankees also built a championship dynasty late in the decade. Clinton's presidency illustrates the tension between baseball's popularity and its labor disputes, as well as the game's expanding national footprint.",
    portrait: "/clinton.jpg",
  },
  {
    name: "George W. Bush",
    slug: "george-w-bush",
    number: 43,
    years: "2001–2009",
    baseballEra: "21st-Century Baseball",
    overview:
      "George W. Bush had an unusually direct relationship with Major League Baseball before entering politics. He was part of the ownership group that purchased the Texas Rangers in 1989 and served as the club's managing general partner, giving him firsthand experience with the business of the sport. As president, Bush delivered one of the most memorable ceremonial pitches in baseball history at Yankee Stadium before Game 3 of the 2001 World Series, only weeks after the September 11 terrorist attacks. Wearing a protective vest beneath an FDNY jacket, he threw from the pitcher's mound as the crowd responded with a powerful show of unity. Bush also welcomed championship teams to the White House and spoke frequently about baseball's place in American life. His presidency coincided with debates over performance-enhancing drugs, the Boston Red Sox ending their long championship drought in 2004, and Washington's return to Major League Baseball in 2005. His Rangers experience and the 2001 World Series pitch make his baseball connection among the most distinctive of modern presidents.",
    portrait: "/george-w-bush.jpg",
  },
  {
    name: "Barack Obama",
    slug: "barack-obama",
    number: 44,
    years: "2009–2017",
    baseballEra: "Modern MLB",
    overview:
      "Barack Obama brought an openly expressed allegiance to the Chicago White Sox into the White House. In 2009, he wore a White Sox jacket when he threw the ceremonial first pitch at the Major League All-Star Game in St. Louis. He continued the presidential Opening Day tradition in Washington in 2010, marking a century since William Howard Taft's first presidential Opening Day pitch. Obama's administration also witnessed major developments across the sport: expanded use of instant replay, the introduction of the second wild-card berth in each league, and the Chicago Cubs' historic 2016 World Series victory after a 108-year championship drought. Baseball also remained a prominent part of White House celebrations for championship teams. Obama's fandom and public appearances helped connect the long presidential baseball tradition with a new generation of fans.",
    portrait: "/obama.jpg",
  },
  {
    name: "Donald Trump",
    slug: "donald-trump",
    number: 45,
    years: "2017–2021, 2025–present",
    baseballEra: "Contemporary Baseball",
    overview:
      "Donald Trump's first presidency, from 2017 to 2021, coincided with major changes and disruptions in professional baseball. The Houston Astros won their first World Series in 2017, the Washington Nationals claimed their first title in 2019, and the 2020 season was shortened to 60 games because of the COVID-19 pandemic. Major League Baseball played that year's postseason under unusual restrictions, with the Los Angeles Dodgers winning the World Series. Trump's presidency also coincided with continuing debates about pace of play, technology, and the integrity of competition. His second presidency began in 2025, placing him in office during a further chapter of baseball's contemporary history. Unlike several predecessors, Trump did not establish a regular presidential Opening Day first-pitch tradition during his first term. His connection to the game is best presented through documented appearances and the changing baseball landscape of the years in which he served, rather than through an unsupported claim of a particular ceremonial pitch.",
    portrait: "/trump.jpg",
  },
  {
    name: "Joe Biden",
    slug: "joe-biden",
    number: 46,
    years: "2021–2025",
    baseballEra: "Contemporary Baseball",
    overview:
      "Joe Biden's presidency, from 2021 to 2025, coincided with a period of rapid change in Major League Baseball. After the pandemic-disrupted 2020 season, ballparks gradually returned to fuller attendance in 2021, while the Atlanta Braves won that year's World Series. A labor lockout delayed the start of the 2022 season, and a new collective bargaining agreement established an expanded 12-team postseason format. In 2023, Major League Baseball introduced a pitch timer, restrictions on defensive shifts, and larger bases, producing a faster-paced style of play and more stolen-base attempts. The Texas Rangers won their first World Series in 2023, and the Los Angeles Dodgers claimed the championship in 2024. Biden's administration thus overlapped with a notable reworking of the game's rules and postseason structure. His presidential baseball profile is strongest when grounded in those documented developments rather than in unverified accounts of ceremonial first pitches.",
    portrait: "/biden.jpg",
  },
];

export function getPresident(slug: string): President | undefined {
  return presidents.find((president) => president.slug === slug);
}
