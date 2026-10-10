import type { Metadata } from 'next';
import ArchiveShell from '../components/archive-shell';
import ArchiveSearch, {type ArchiveItem} from '../components/archive-search';
export const metadata:Metadata={title:'First Pitch Archive | Presidential Pastime',description:'Explore documented ceremonial first pitches by U.S. presidents.'};
const items:ArchiveItem[]=[
 {title:'William Howard Taft — Opening Day',category:'Opening Day',date:'April 14, 1910',description:'Taft began the tradition of the sitting president throwing a ceremonial Opening Day first pitch at Washington’s National Park.',image:'/taft-first-pitch-1910.jpg',href:'/presidents/william-howard-taft'},
 {title:'Calvin Coolidge — Opening Day',category:'Opening Day',date:'April 12, 1927',description:'Coolidge continued the presidential first-pitch tradition in Washington.',image:'/coolidge-first-pitch-1927.jpg',href:'/presidents/calvin-coolidge'},
 {title:'John F. Kennedy — Washington Senators',category:'Opening Day',date:'April 10, 1961',description:'Kennedy threw the ceremonial first pitch at the new Senators franchise’s first Opening Day.',image:'/jfk-first-pitch-1961.jpg',href:'/presidents/john-f-kennedy'},
 {title:'Ronald Reagan — Wrigley Field',category:'Ballpark Ceremony',date:'1988',description:'Reagan made a ceremonial first-pitch appearance at Wrigley Field.',image:'/reagan-first-pitch-1988.jpg',href:'/presidents/ronald-reagan'},
 {title:'George W. Bush — World Series Game 3',category:'World Series',date:'October 30, 2001',description:'Bush delivered a memorable ceremonial first pitch at Yankee Stadium after the September 11 attacks.',href:'/presidents/george-w-bush'},
 {title:'Barack Obama — All-Star Game',category:'All-Star Game',date:'July 14, 2009',description:'Obama threw the ceremonial first pitch before the MLB All-Star Game in St. Louis.',href:'/presidents/barack-obama'}
];
export default function Page(){return <ArchiveShell eyebrow="A Presidential Tradition" title="The First Pitch Archive" subtitle="Documented ceremonies, historical photographs, and the stories behind the opening toss."><p className="mb-8 max-w-3xl leading-7">This is a growing selection of presidential first-pitch appearances, not yet an exhaustive database. Dates and images will be reviewed against archival records as the collection expands.</p><ArchiveSearch items={items}/></ArchiveShell>}
