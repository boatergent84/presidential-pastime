"use client";

import Link from "next/link";
import { useState } from "react";

const subjects = [
  "General Inquiry",
  "Historical Photograph or Artifact",
  "Research or Historical Correction",
  "Supporting Presidential Pastime",
  "Collaboration or Media",
];

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("General Inquiry");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

  function copyInquiry() {
    const inquiry = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Subject: ${subject}`,
      "",
      message,
    ].join("\n");

    if (navigator.clipboard) {
      navigator.clipboard.writeText(inquiry)
        .then(() => setCopied(true))
        .catch(() => setCopied(false));
    }
  }

  return (
    <main className="min-h-screen bg-[#f4ecdb] text-[#172b3d]">
      <header className="border-b-4 border-[#a4282d] bg-[#102c44] text-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-5 px-6 py-6">
          <Link href="/" className="font-serif text-xl font-bold tracking-wide md:text-2xl">
            PRESIDENTIAL PASTIME
          </Link>
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-bold uppercase tracking-wider text-[#e1d3b5]">
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

      <section className="bg-[#071d31] px-6 py-20 text-center text-white md:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d6b46f]">
            Get in Touch
          </p>
          <h1 className="mt-8 font-serif text-5xl font-bold md:text-7xl">
            Every Great Story
            <br />
            <span className="italic text-[#d6b46f]">Begins Somewhere.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#d3dce0]">
            Have a historical discovery, a rare photograph, an artifact,
            or a question? We&apos;d love to hear about it.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[0.8fr_1.2fr] md:py-28">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#9b712f]">
            Correspondence
          </p>
          <h2 className="mt-5 font-serif text-4xl font-bold">
            Help Us Uncover the Next Chapter.
          </h2>
          <p className="mt-7 text-base leading-8 text-[#47505a]">
            Presidential Pastime welcomes conversations with collectors,
            historians, baseball enthusiasts, families, museums, and anyone
            with a story worth preserving.
          </p>

          <div className="mt-10 space-y-7 border-t border-[#cdbd9b] pt-8">
            <div>
              <h3 className="font-serif text-xl font-bold">Historical Discoveries</h3>
              <p className="mt-2 text-sm leading-7 text-[#57606a]">
                Share information about original photographs, signed baseballs,
                scorecards, programs, or other historical materials.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold">Research & Corrections</h3>
              <p className="mt-2 text-sm leading-7 text-[#57606a]">
                Help us strengthen the historical record with documented
                sources and new discoveries.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold">Partnerships & Support</h3>
              <p className="mt-2 text-sm leading-7 text-[#57606a]">
                Reach out about collaborations, contributions, or ways
                to support the archive.
              </p>
            </div>
          </div>
        </div>

        <div className="border border-[#cdbd9b] bg-[#fbf7ed] p-7 shadow-lg md:p-10">
          <div className="mb-8 border-b border-[#d9c9a9] pb-6">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#9b712f]">
              Presidential Pastime
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold">
              Send an Inquiry
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#57606a]">
              Prepare your message below. Online message delivery is
              being configured; for now you can copy your inquiry.
            </p>
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              copyInquiry();
            }}
            className="space-y-6"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-xs font-bold uppercase tracking-wider">
                Your Name
                <input
                  required
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Full name"
                  className="mt-2 w-full border border-[#cdbd9b] bg-white px-4 py-3 text-sm font-normal normal-case tracking-normal outline-none focus:border-[#9b712f]"
                />
              </label>
              <label className="block text-xs font-bold uppercase tracking-wider">
                Email Address
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  className="mt-2 w-full border border-[#cdbd9b] bg-white px-4 py-3 text-sm font-normal normal-case tracking-normal outline-none focus:border-[#9b712f]"
                />
              </label>
            </div>

            <label className="block text-xs font-bold uppercase tracking-wider">
              Subject
              <select
                value={subject}
                onChange={(event) => setSubject(event.target.value)}
                className="mt-2 w-full border border-[#cdbd9b] bg-white px-4 py-3 text-sm font-normal normal-case tracking-normal outline-none focus:border-[#9b712f]"
              >
                {subjects.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
            </label>

            <label className="block text-xs font-bold uppercase tracking-wider">
              Your Message
              <textarea
                required
                rows={7}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Tell us your story or question..."
                className="mt-2 w-full resize-y border border-[#cdbd9b] bg-white px-4 py-3 text-sm font-normal normal-case tracking-normal outline-none focus:border-[#9b712f]"
              />
            </label>

            <button
              type="submit"
              className="w-full bg-[#102c44] px-6 py-4 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#234b68]"
            >
              Copy Inquiry →
            </button>

            {copied && (
              <p role="status" className="text-center text-sm font-semibold text-[#51663c]">
                Inquiry copied. You can paste it into an email.
                No message has been sent.
              </p>
            )}
          </form>
        </div>
      </section>

      <section className="bg-[#102c44] px-6 py-16 text-center text-white">
        <p className="font-serif text-3xl italic text-[#e8d4a6]">
          Have a piece of presidential baseball history?
        </p>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#c8d1d5]">
          Your discovery could help preserve a story that might
          otherwise be forgotten.
        </p>
      </section>

      <footer className="bg-[#061727] px-6 py-8 text-center text-xs text-[#aebcc6]">
        <Link href="/" className="font-serif text-lg font-bold text-white">
          PRESIDENTIAL PASTIME
        </Link>
        <p className="mt-2">America&apos;s Presidents. America&apos;s Pastime.</p>
      </footer>
    </main>
  );
}
