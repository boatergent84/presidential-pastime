import Link from 'next/link';
const links = [
  ['Home','/'], ['Presidents','/presidents'], ['First Pitch','/first-pitches'],
  ['Heritage Collection','/heritage-collection']
];
export default function SiteNav() {
 return <nav aria-label="Main navigation" className="border-b-4 border-[#a4282d] bg-[#102c44] text-white">
  <div className="mx-auto max-w-6xl px-5 py-4">
   <Link href="/" className="font-serif text-xl font-bold tracking-wide">PRESIDENTIAL PASTIME</Link>
   <p className="mt-1 text-xs tracking-widest text-[#c9b98c]">The Baseball History of the American Presidency</p>
   <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">{links.map(([label,href])=><Link key={href} href={href} className="hover:text-[#c9b98c]">{label}</Link>)}</div>
  </div>
 </nav>
}
