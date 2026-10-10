import type { Metadata } from 'next';
import ArchiveShell from '../components/archive-shell';
import ArchiveSearch,{type ArchiveItem} from '../components/archive-search';
export const metadata:Metadata={title:'Photo Archive | Presidential Pastime',description:'Historic photographs of presidents and baseball.'};
const items:ArchiveItem[]=[
 {title:'Taft and the First-Pitch Tradition',category:'Taft',date:'1910',description:'Historical image associated with the start of the presidential Opening Day tradition.',image:'/taft-first-pitch-1910.jpg',href:'/presidents/william-howard-taft'},
 {title:'Woodrow Wilson and Baseball',category:'Wilson',date:'1916',description:'An archival baseball image from the Wilson administration.',image:'/wilson-opening-day-1916.jpg',href:'/presidents/woodrow-wilson'},
 {title:'Coolidge and Walter Johnson',category:'Coolidge',date:'1920s',description:'A historical photograph of Coolidge with baseball star Walter Johnson.',image:'/coolidge-opening-day.jpg',href:'/presidents/calvin-coolidge',note:'Date of photograph should not be assumed to match a particular game.'},
 {title:'Coolidge and the World Series',category:'Coolidge',date:'1924',description:'Coolidge-era photograph connected with Washington baseball.',image:'/coolidge-world-series-1924.jpg',href:'/presidents/calvin-coolidge'},
 {title:'Kennedy at Opening Day',category:'Kennedy',date:'1961',description:'Kennedy’s Washington baseball Opening Day appearance.',image:'/jfk-first-pitch-1961.jpg',href:'/presidents/john-f-kennedy'},
 {title:'George H. W. Bush and Babe Ruth',category:'Bush',date:'1948',description:'Historic Yale-era baseball photograph.',image:'/bush41-babe-ruth-1948.jpg',href:'/presidents/george-h-w-bush'}
];
export default function Page(){return <ArchiveShell eyebrow="Images of a Presidential Pastime" title="The Photo Archive" subtitle="A growing visual record of presidents, ballparks, and American baseball history."><p className="mb-8 max-w-3xl leading-7">Images are drawn from files already in this project. Full archival source credits and rights information should be reviewed before public launch.</p><ArchiveSearch items={items}/></ArchiveShell>}
