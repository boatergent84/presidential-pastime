import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support the Archive | Presidential Pastime",
  description: "Help preserve the stories connecting America's presidents and America's pastime.",
};

const priorities = [
  {
    number: "01",
    title: "Historical Research",
    description: "Finding, verifying, and documenting the stories that connect American presidents to baseball.",
  },
  {
    number: "02",
    title: "Preserving the Record",
    description: "Helping bring original photographs, programs, baseballs, and other historical materials into public view.",
  },
  {
    number: "03",
    title: "Building the Archive",
    description: "Developing an accessible historical resource for researchers, collectors, students, and baseball fans.",
  },
];

export default function DonatePage() {
  return (
    <main className="overflow-x-clip min-h-screen bg-[#f4ecdb] text-[#172b3d]">
      <header className="border-b-4 border-[#a4282d] bg-[#102c44] text-white">
        <div className="mx-auto flex max-w-6xl min-w-0 flex-col items-start gap-5 px-6 py-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col"><Link href="/" className="font-serif text-xl font-bold tracking-wide md:text-2xl">
            PRESIDENTIAL PASTIME
          </Link><p className="mt-1 text-xs tracking-[0.15em] text-[#c9b98c]">The Baseball History of the American Presidency</p></div>
          <nav className="flex w-full min-w-0 flex-nowrap items-center gap-5 overflow-x-auto whitespace-nowrap [touch-action:pan-x] text-xs font-bold uppercase tracking-wider text-[#e1d3b5] md:w-auto md:flex-wrap md:overflow-visible">
            <Link href="/" className="hover:text-white">Home</Link>
            <Link href="/presidents" className="hover:text-white">Presidents</Link>
            <Link href="/first-pitches" className="hover:text-white">First Pitch</Link>
            <Link href="/heritage-collection" className="hover:text-white">Heritage Collection</Link>
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/donate" className="hover:text-white">Donate</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </nav>
        </div>
      </header>

      <section className="bg-[#071d31] px-6 py-24 text-center text-white md:py-32">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d6b46f]">
            Support Presidential Pastime
          </p>
          <div className="mx-auto my-8 text-3xl text-[#d6b46f]">★</div>
          <h1 className="font-serif text-5xl font-bold leading-tight md:text-7xl">
            Help Keep History
            <br />
            <span className="italic text-[#d6b46f]">In Play.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#d3dce0]">
            Great stories deserve to be discovered, documented, and shared.
            Your support can help build a lasting home for the history of
            America&apos;s presidents and America&apos;s pastime.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#9b712f]">
            The Mission
          </p>
          <h2 className="mt-5 font-serif text-4xl font-bold md:text-5xl">
            What Your Support Makes Possible
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {priorities.map((item) => (
            <div key={item.number} className="border border-[#cdbd9b] bg-[#fbf7ed] p-8">
              <p className="font-serif text-4xl text-[#b99b62]">{item.number}</p>
              <h3 className="mt-7 font-serif text-2xl font-bold">{item.title}</h3>
              <p className="mt-5 text-sm leading-7 text-[#57606a]">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-[#d4c3a1] bg-[#eae0cb] px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#9b712f]">
            Become a Supporter
          </p>
          
          <p className="mt-7 text-base leading-8 text-[#47505a]">
            Support our mission through Stripe&apos;s secure checkout.
            In the meantime, you can contact us to discuss supporting
            the project, contributing historical materials, or collaborating
            on research.
          </p>
          <a
            href="https://buy.stripe.com/test_dRm6oHbUa0eP3zt0mDdUY00"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-block bg-[#102c44] px-9 py-4 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#234b68]"
          >
            Donate Securely with Stripe →
          </a>
          <p className="mt-6 text-xs leading-6 text-[#667078]">
            Stripe checkout is currently in test mode. Contributions are not
            represented as tax-deductible.
          </p>
        </div>
      </section>



      <footer className="bg-[#061727] px-6 py-8 text-center text-xs text-[#aebcc6]">
        <Link href="/" className="font-serif text-lg font-bold text-white">
          PRESIDENTIAL PASTIME
        </Link>
        <p className="mt-2">The Baseball History of the American Presidency</p>
      </footer>
    </main>
  );
}
