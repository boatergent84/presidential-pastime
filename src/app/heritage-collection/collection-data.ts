export type Exhibit = {
  slug: string;
  title: string;
  category: string;
  year: string;
  president: string;
  presidentSlug: string;
  description: string;
  researchNote: string;
  image?: string;
};

// Research topics, not claims that Presidential Pastime owns or has authenticated artifacts.
// Replace with specific documented items and credited images after verifying provenance and rights.
export const exhibits: Exhibit[] = [
  {
    slug: "walter-johnson-presidential-baseballs",
    title: "Walter Johnson's Six Presidential Baseballs",
    president: "Roosevelt, Taft, Wilson, Harding, Coolidge & Hoover",
    year: "1937",
    category: "Signed Baseballs",
    description: "Explore a remarkable archival photograph documenting six presidential-autographed baseballs associated with Washington Senators legend Walter Johnson.",
    image: "/heritage/walter-johnson-baseballs.jpg",
    presidentSlug: "william-howard-taft",
      researchNote: "The 1937 Library of Congress photographic record documents six presidential-autographed baseballs associated with Walter Johnson. This website does not own the original artifacts.",
    },

  {slug:'taft-1910-opening-day',title:'1910 Washington Opening Day Programs & Tickets',category:'Tickets & Programs',year:'1910',president:'William Howard Taft',presidentSlug:'william-howard-taft',description:'Explore surviving printed materials associated with the Opening Day game at which Taft inaugurated the presidential first-pitch tradition.',researchNote:'Locate a specific original ticket or program in a catalog or auction archive before describing or illustrating an individual object.'},
  {slug:'taft-first-pitch-photography',title:'Taft First-Pitch Photographs',category:'Photographs',year:'1910',president:'William Howard Taft',presidentSlug:'william-howard-taft',description:'Historic photographic records of Taft and Washington baseball.',researchNote:'Confirm the exact date and photographer of each image before assigning it to the 1910 ceremony.',image:'/taft-first-pitch-1910.jpg'},
  {slug:'wilson-1915-world-series',title:'1915 World Series Tickets & Programs',category:'Tickets & Programs',year:'1915',president:'Woodrow Wilson',presidentSlug:'woodrow-wilson',description:'Printed souvenirs and documentary material from the World Series attended by President Wilson.',researchNote:'Find a documented specimen and distinguish the specific game and venue.',image:'/wilson-baseball-1915.jpg'},
  {slug:'coolidge-1924-world-series',title:'1924 World Series Admission Tickets',category:'Tickets & Programs',year:'1924',president:'Calvin Coolidge',presidentSlug:'calvin-coolidge',description:'Tickets associated with the Washington Senators’ championship series against the New York Giants.',researchNote:'A ticket from a particular game requires independent provenance and a verified photograph.'},
  {slug:'coolidge-1924-photographs',title:'Coolidge and the 1924 Senators',category:'Photographs',year:'1924',president:'Calvin Coolidge',presidentSlug:'calvin-coolidge',description:'Period photographs recording the White House connection with Washington’s championship season.',researchNote:'Check Library of Congress catalog records for image dates, captions and reproduction rights.',image:'/coolidge-world-series-1924.jpg'},
  {slug:'fdr-opening-day',title:'Franklin Roosevelt Opening Day Programs',category:'Programs & Scorecards',year:'1930s–1940s',president:'Franklin D. Roosevelt',presidentSlug:'franklin-d-roosevelt',description:'Programs and scorecards connected to baseball during the Roosevelt administration.',researchNote:'Identify a specific dated program and holding institution before presenting it as an exhibit object.'},
  {slug:'kennedy-1961-opening-day',title:'1961 Washington Opening Day Tickets',category:'Tickets & Programs',year:'1961',president:'John F. Kennedy',presidentSlug:'john-f-kennedy',description:'Ephemera relating to Kennedy’s first presidential Opening Day appearance.',researchNote:'Verify the original ticket, game date, and collection or auction attribution.'},
  {slug:'kennedy-first-pitch-photo',title:'Kennedy’s 1961 First-Pitch Photograph',category:'Photographs',year:'1961',president:'John F. Kennedy',presidentSlug:'john-f-kennedy',description:'A photographic record of the president at Washington baseball.',researchNote:'Confirm photo credit and exact event attribution using the source archive.',image:'/jfk-first-pitch-1961.jpg'},
  {slug:'presidential-signed-baseballs',title:'Baseballs Signed by U.S. Presidents',category:'Signed Baseballs',year:'20th–21st centuries',president:'Multiple presidents',presidentSlug:'',description:'A future gallery of authenticated presidential signatures on baseballs, including examples documented in museum and auction records.',researchNote:'Do not assign signatures, owners, values, or authentication status until an individual ball has been verified.'},
  {slug:'bush-2001-world-series',title:'2001 World Series Game 3 Tickets & Programs',category:'Tickets & Programs',year:'2001',president:'George W. Bush',presidentSlug:'george-w-bush',description:'Printed artifacts associated with the president’s ceremonial first pitch at Yankee Stadium.',researchNote:'Find a documented Game 3 specimen with image permission and a reliable provenance trail.'},
];
