import ArchiveShell from "../../components/archive-shell";

const teams = [
  {
    era: "1925–1945",
    league: "American League",
    players: [
      ["Catcher", "Mickey Cochrane, Bill Dickey"],
      ["First Base", "Lou Gehrig"],
      ["Second Base", "Charlie Gehringer"],
      ["Third Base", "Red Rolfe"],
      ["Shortstop", "Joe Cronin"],
      ["Outfield", "Babe Ruth, Joe DiMaggio, Al Simmons"],
      ["Pitchers", "Satchel Paige, Herb Pennock, Lefty Grove, Red Ruffing, Bobo Newsom"],
      ["Reserves", "Jimmie Foxx, Hank Greenberg, Luke Appling, Goose Goslin, Harry Heilmann"],
      ["Relief Pitcher", "Johnny Murphy"],
    ],
  },
  {
    era: "1925–1945",
    league: "National League",
    players: [
      ["Catcher", "Ernie Lombardi, Gabby Hartnett"],
      ["First Base", "Bill Terry"],
      ["Second Base", "Rogers Hornsby"],
      ["Third Base", "Pie Traynor"],
      ["Shortstop", "Arky Vaughan"],
      ["Outfield", "Paul Waner, Mel Ott, Hack Wilson"],
      ["Pitchers", "Carl Hubbell, Dizzy Dean, Bucky Walters, Mort Cooper, Burleigh Grimes"],
      ["Reserves", "Frankie Frisch, Marty Marion, Ducky Medwick, Chuck Klein, Edd Roush"],
      ["Relief Pitcher", "Mace Brown"],
      ["Manager", "Branch Rickey"],
    ],
  },
  {
    era: "1945–1970",
    league: "American League",
    players: [
      ["Catcher", "Yogi Berra, Elston Howard"],
      ["First Base", "Harmon Killebrew"],
      ["Second Base", "Nellie Fox"],
      ["Third Base", "Brooks Robinson"],
      ["Shortstop", "Lou Boudreau"],
      ["Outfield", "Ted Williams, Mickey Mantle, Frank Robinson"],
      ["Pitchers", "Bob Lemon, Bob Feller, Early Wynn, Whitey Ford, Dave McNally"],
      ["Reserves", "Bobby Richardson, Luis Aparicio, Al Kaline"],
    ],
  },
  {
    era: "1945–1970",
    league: "National League",
    players: [
      ["Catcher", "Roy Campanella, Johnny Bench"],
      ["First Base", "Stan Musial"],
      ["Second Base", "Jackie Robinson"],
      ["Third Base", "Eddie Mathews"],
      ["Shortstop", "Ernie Banks"],
      ["Outfield", "Hank Aaron, Willie Mays"],
      ["Pitcher", "Sandy Koufax, Bob Gibson"],
    ],
  },
];


const teams1992 = [
  {
    era: "1925–1959", league: "American League",
    players: [
      ["C", "Mickey Cochrane"], ["1B", "Lou Gehrig"],
      ["2B", "Charlie Gehringer"], ["3B", "George Kell"],
      ["SS", "Phil Rizzuto"], ["OF", "Babe Ruth"],
      ["OF", "Joe DiMaggio"], ["OF", "Ted Williams"],
      ["DH", "Jimmie Foxx"],
      ["P", "Satchel Paige, Bob Feller, Lefty Grove, Early Wynn, Bobo Newsom"],
      ["Manager", "Casey Stengel"]
    ]
  },
  {
    era: "1925–1959", league: "National League",
    players: [
      ["C", "Roy Campanella"], ["1B", "Johnny Mize"],
      ["2B", "Jackie Robinson"], ["3B", "Eddie Mathews"],
      ["SS", "Ernie Banks"], ["OF", "Stan Musial"],
      ["OF", "Willie Mays"], ["OF", "Mel Ott"],
      ["DH", "Rogers Hornsby"],
      ["P", "Elroy Face, Warren Spahn, Robin Roberts, Carl Hubbell, Dizzy Dean"],
      ["Manager", "Branch Rickey"]
    ]
  },
  {
    era: "1960–1991", league: "American League",
    players: [
      ["C", "Thurman Munson"], ["1B", "Harmon Killebrew"],
      ["2B", "Bobby Grich"], ["3B", "Brooks Robinson"],
      ["SS", "Luis Aparicio"], ["OF", "Carl Yastrzemski"],
      ["OF", "Mickey Mantle"], ["OF", "Reggie Jackson"],
      ["DH", "Rod Carew"],
      ["P", "Luis Tiant, Catfish Hunter, Jim Palmer, Whitey Ford, Rollie Fingers"],
      ["Manager", "Billy Martin"]
    ]
  },
  {
    era: "1960–1991", league: "National League",
    players: [
      ["C", "Johnny Bench"], ["1B", "Willie McCovey"],
      ["2B", "Joe Morgan"], ["3B", "Mike Schmidt"],
      ["SS", "Maury Wills"], ["OF", "Hank Aaron"],
      ["OF", "Roberto Clemente"], ["OF", "Lou Brock"],
      ["DH", "Pete Rose"],
      ["P", "Tom Seaver, Steve Carlton, Sandy Koufax, Juan Marichal, Bob Gibson"],
      ["Manager", "Walt Alston"]
    ]
  },
  {
    era: "Active in 1992", league: "American League",
    players: [
      ["C", "Carlton Fisk"], ["1B", "Don Mattingly"],
      ["2B", "Roberto Alomar"], ["3B", "George Brett"],
      ["SS", "Cal Ripken Jr."], ["OF", "Kirby Puckett"],
      ["OF", "Ken Griffey Jr."], ["OF", "Rickey Henderson"],
      ["DH", "Jose Canseco"],
      ["P", "Jack Morris, Nolan Ryan, Dennis Eckersley, Roger Clemens, Goose Gossage"],
      ["Manager", "Tony La Russa"]
    ]
  },
  {
    era: "Active in 1992", league: "National League",
    players: [
      ["C", "Gary Carter"], ["1B", "Will Clark"],
      ["2B", "Ryne Sandberg"], ["3B", "Howard Johnson"],
      ["SS", "Ozzie Smith"], ["OF", "Tony Gwynn"],
      ["OF", "Andre Dawson"], ["OF", "Darryl Strawberry"],
      ["DH", "Bobby Bonilla"],
      ["P", "Lee Smith, Rob Dibble, David Cone, Bret Saberhagen, Dwight Gooden"],
      ["Manager", "Tommy Lasorda"]
    ]
  }
];

export default function NixonDreamTeamPage() {
  return (
    <ArchiveShell
      eyebrow="The 1600 Collection · Presidential Baseball History"
      title="Richard Nixon's Dream Team"
      subtitle="A President's All-Time Baseball Selections · 1972 & 1992"
    >
      <div className="space-y-12">

        <section className="mx-auto max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a4282d]">
            The Historical Record
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold">
            A Presidential Assignment
          </h2>
          <p className="mt-5 leading-8">
            On June 22, 1972, reporter Cliff Evans asked President
            Richard Nixon to select his all-time baseball team.
            Nixon accepted the challenge and enlisted his son-in-law,
            David Eisenhower, to help examine the game's great players.
          </p>
          <p className="mt-4 leading-8">
            At Camp David, they studied baseball records and considered
            generations of stars. Nixon ultimately divided his choices
            between the American and National Leagues, and between
            the periods 1925–1945 and 1945–1970.
          </p>
          <p className="mt-4 leading-8">
            His selections appeared in newspapers on July 2, 1972,
            offering the public an unusual glimpse into a president's
            personal enthusiasm for America's national pastime.
          </p>
        </section>

        <section>
          <div className="mb-8 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a4282d]">
              The Original 1972 Selections
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold md:text-4xl">
              Nixon's Four All-Star Teams
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7">
              The following cards reproduce documented selections
              from Nixon's original rosters. Some reserve, pitching,
              and managerial entries remain to be added after
              cross-checking the complete original lists.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {teams.map((team) => (
              <article
                key={`${team.era}-${team.league}`}
                className="relative overflow-hidden border-[3px] border-[#243b50] bg-[#f2e7cc] p-3 shadow-[5px_7px_0px_#c6b793]"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, transparent, transparent 31px, rgba(90,75,55,0.09) 32px)",
                }}
              >
                <div className="border border-[#8d8068] px-5 py-6">

                  <div className="border-b-4 border-double border-[#243b50] pb-4 text-center">
                    <p className="font-serif text-xs font-bold uppercase tracking-[0.25em]">
                      Presidential Baseball Selection
                    </p>

                    <h3 className="mt-3 font-serif text-3xl font-black uppercase tracking-wide">
                      {team.league}
                    </h3>

                    <p className="mt-2 font-serif text-sm font-bold uppercase tracking-widest">
                      {team.era} · Richard Nixon
                    </p>
                  </div>

                  <div className="mt-5 border-b-2 border-[#243b50] pb-2">
                    <div className="grid grid-cols-[40px_1fr_90px] gap-2 text-xs font-bold uppercase tracking-wider">
                      <span>No.</span>
                      <span>Player</span>
                      <span>Position</span>
                    </div>
                  </div>

                  <div className="mt-1">
                    {team.players.map(([position, names], index) => (
                      <div
                        key={position}
                        className="grid min-h-[45px] grid-cols-[40px_1fr_90px] items-center gap-2 border-b border-[#b7a98b] py-2"
                      >
                        <span className="font-serif text-lg font-bold text-[#9e3030]">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span
                          className="text-lg leading-tight text-[#233b52]"
                          style={{
                            fontFamily: "Georgia, 'Times New Roman', serif",
                            fontStyle: "italic",
                          }}
                        >
                          {names}
                        </span>

                        <span className="text-right font-serif text-xs font-bold uppercase text-[#665d4b]">
                          {position}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 border-t-2 border-[#243b50] pt-4">
                    <p className="font-serif text-xs uppercase tracking-widest">
                      Selected By
                    </p>
                    <p
                      className="mt-2 text-2xl italic text-[#243b50]"
                      style={{ fontFamily: "Georgia, serif" }}
                    >
                      Richard M. Nixon
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-wider text-[#746b58]">
                      Historical roster recreation · 1972
                    </p>
                  </div>

                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-[#b89a61] bg-[#102c44] px-7 py-10 text-center text-white">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d7bb83]">
            The White House Tapes
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold">
            Hear Nixon Explain His Selections
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#e9dfc8]">
            On June 30, 1972, Nixon discussed his All-Star teams
            during an Oval Office interview. The recording preserves
            his own explanation of the project.
          </p>
          <a
            href="https://www.archives.gov/news/topics/baseball-and-the-archives"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-md border border-[#d7bb83] px-6 py-3 font-bold text-[#d7bb83] hover:bg-[#d7bb83] hover:text-[#102c44]"
          >
            Listen at the National Archives
          </a>
        </section>

        <section className="mx-auto max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a4282d]">
            Twenty Years Later
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold">
            The 1992 Dream Teams
          </h2>
          <p className="mt-5 leading-8">
            Two decades after publishing his original choices,
            former President Nixon revisited his baseball selections.
            The 1992 lists recognized additional generations of
            players and extended his baseball retrospective.
          </p>
          <p className="mt-4 leading-8">
            On July 15, 1992, Nixon and David Eisenhower presented
            six all-time All-Star teams at the Nixon Library in
            Yorba Linda, California. The new selections included
            players who were still active that season.
          </p>
        </section>


        <section>
          <div className="mb-8 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a4282d]">
              The 1992 Edition
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold">
              Six Presidential All-Star Lineup Cards
            </h2>
            <p className="mt-3 text-sm">
              Nixon's documented selections, arranged as vintage-style
              commemorative roster cards. Not original artifacts or batting orders.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {teams1992.map((team) => (
              <article
                key={`${team.era}-${team.league}`}
                className="border-[3px] border-[#243b50] bg-[#f2e7cc] p-3 shadow-[5px_7px_0px_#c6b793]"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, transparent, transparent 31px, rgba(90,75,55,0.09) 32px)",
                }}
              >
                <div className="border border-[#8d8068] px-5 py-6">
                  <div className="border-b-4 border-double border-[#243b50] pb-4 text-center">
                    <p className="font-serif text-xs font-bold uppercase tracking-[0.2em]">
                      Presidential Baseball Selection · 1992
                    </p>
                    <h3 className="mt-3 font-serif text-2xl font-black uppercase">
                      {team.league}
                    </h3>
                    <p className="mt-2 font-serif text-sm font-bold uppercase tracking-widest">
                      {team.era}
                    </p>
                  </div>

                  <div className="mt-5 grid grid-cols-[38px_1fr_55px] border-b-2 border-[#243b50] pb-2 text-xs font-bold uppercase">
                    <span>No.</span><span>Player</span><span>Pos.</span>
                  </div>

                  {team.players.map(([position, names], index) => (
                    <div
                      key={index}
                      className="grid grid-cols-[38px_1fr_55px] items-center gap-2 border-b border-[#b7a98b] py-3"
                    >
                      <span className="font-serif font-bold text-[#9e3030]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-serif text-lg italic text-[#233b52]">
                        {names}
                      </span>
                      <span className="text-right font-serif text-xs font-bold text-[#665d4b]">
                        {position}
                      </span>
                    </div>
                  ))}

                  <div className="mt-7 border-t-2 border-[#243b50] pt-4">
                    <p className="font-serif text-xs uppercase tracking-widest">
                      Selected By
                    </p>
                    <p className="mt-2 font-serif text-2xl italic">
                      Richard M. Nixon
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-wider">
                      Historical roster recreation · 1992
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>


        {/* NIXON ARCHIVAL PHOTO GALLERY */}
        <section className="space-y-7">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a4282d]">
              From the Presidential Archives
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold">
              Nixon in Photographs & Recordings
            </h2>
            <p className="mx-auto mt-3 max-w-2xl leading-7">
              Authentic archival photographs and primary sources
              documenting the president, his family, and his
              interest in America's national pastime.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2">
            <figure className="overflow-hidden rounded-xl border border-[#b89a61] bg-[#f8f4e9] shadow-md">
              <img
                src="/nixon-dream-team/nixon-family.jpg"
                alt="President Richard Nixon with Pat Nixon and family, including David Eisenhower"
                className="h-72 w-full object-contain bg-[#e7dcc4]"
              />
              <figcaption className="p-5">
                <h3 className="font-serif text-xl font-bold">
                  Nixon and the Eisenhower Family
                </h3>
                <p className="mt-2 text-sm leading-6">
                  A 1971 White House family photograph including
                  David Eisenhower, who helped Nixon develop his
                  baseball selections.
                </p>
                <p className="mt-2 text-xs text-[#76694f]">
                  National Archives · U.S. Government photograph
                </p>
              </figcaption>
            </figure>

            <figure className="overflow-hidden rounded-xl border border-[#b89a61] bg-[#f8f4e9] shadow-md">
              <img
                src="/nixon-dream-team/nixon-daughters.jpg"
                alt="President Richard Nixon with his daughters Tricia and Julie on Father's Day"
                className="h-72 w-full object-contain bg-[#e7dcc4]"
              />
              <figcaption className="p-5">
                <h3 className="font-serif text-xl font-bold">
                  The Nixon Family at the White House
                </h3>
                <p className="mt-2 text-sm leading-6">
                  Nixon with his daughters on Father's Day, 1969,
                  photographed by the White House Photo Office.
                </p>
                <p className="mt-2 text-xs text-[#76694f]">
                  National Archives · Identifier 6528105
                </p>
              </figcaption>
            </figure>
          </div>

          <div className="rounded-xl border border-[#b89a61] bg-[#eee5d2] p-6">
            <h3 className="font-serif text-2xl font-bold">
              Explore the Original Historical Record
            </h3>
            <div className="mt-4 space-y-4 text-sm leading-7">
              <p>
                <a className="font-bold underline" href="https://nara.getarchive.net/media/richard-pat-tricia-and-julie-nixon-cheering-at-a-baseball-game-at-griffith-b6fcf0" target="_blank" rel="noopener noreferrer">
                  1958 — Nixon Family at Griffith Stadium
                </a>
                <span> — Archival baseball photograph.</span>
              </p>
              <p>
                <a className="font-bold underline" href="https://commons.wikimedia.org/wiki/File:Richard_Nixon_explains_his_All-Time_All-Star_baseball_team_selections,_June_30,_1972.webm" target="_blank" rel="noopener noreferrer">
                  1972 — Nixon Explains His Dream Teams
                </a>
                <span> — Original Oval Office recording and archival imagery.</span>
              </p>
              <p>
                <a className="font-bold underline" href="https://www.jamesrogan.org/blog/posts/41204" target="_blank" rel="noopener noreferrer">
                  1992 — The Nixon Library Baseball Gathering
                </a>
                <span> — Firsthand recollection and historical event photograph.</span>
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-[#b89a61] pt-8">
          <h2 className="font-serif text-2xl font-bold">
            Historical Sources
          </h2>
          <div className="mt-4 space-y-3 text-sm">
            <p>
              <a className="underline" href="https://www.baseball-almanac.com/prz_rna1.shtml" target="_blank" rel="noopener noreferrer">
                Baseball Almanac — Nixon's 1972 All-Star Selections
              </a>
            </p>
            <p>
              <a className="underline" href="https://www.nixonfoundation.org/2014/04/love-game-rn-baseball/" target="_blank" rel="noopener noreferrer">
                Richard Nixon Foundation — Love of the Game
              </a>
            </p>
            <p>
              <a className="underline" href="https://www.nixonlibrary.gov/sites/default/files/2023-08/baseball.pdf" target="_blank" rel="noopener noreferrer">
                Richard Nixon Presidential Library — Baseball Archival Guide
              </a>
            </p>
          </div>
        </section>

      </div>
    </ArchiveShell>
  );
}
