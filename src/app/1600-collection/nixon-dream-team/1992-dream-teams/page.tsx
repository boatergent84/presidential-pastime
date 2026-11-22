import ArchiveShell from "../../../components/archive-shell";

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

export default function Nixon1992DreamTeamsPage() {
  return (
    <ArchiveShell
      eyebrow="The 1600 Collection · Presidential Baseball History"
      title="Richard Nixon's Dream Team"
      subtitle="The 1992 Updated All-Star Selections"
    >
      <div className="space-y-10">
        <section className="mx-auto max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a4282d]">
            Twenty Years Later
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold">
            Six 1992 All-Star Lineups
          </h2>
          <p className="mt-4 leading-8">
            Nixon and David Eisenhower returned to the project in 1992,
            expanding the earlier selections with more recent stars and
            players who were active that season. These cards present the
            six documented lineups; they are not original artifacts or
            batting orders.
          </p>
          <a
            href="/1600-collection/nixon-dream-team"
            className="mt-4 inline-block font-bold text-[#a4282d] underline underline-offset-4"
          >
            Back to Richard Nixon's exhibit
          </a>
        </section>

        <section>
          <div className="mb-8 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a4282d]">
              The 1992 Edition
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold">
              Six Presidential All-Star Lineup Cards
            </h2>
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
      </div>
    </ArchiveShell>
  );
}
