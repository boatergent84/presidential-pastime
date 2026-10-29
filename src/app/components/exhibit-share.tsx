"use client";

import { useEffect, useState } from "react";

export default function ExhibitShare() {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("Presidential Pastime");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setUrl(window.location.href);
    setTitle(document.title);
  }, []);

  const shareText = `Explore ${title} at Presidential Pastime`;

  const facebook = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  const twitter = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(url)}`;
  const email = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(shareText + "\\n\\n" + url)}`;

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      window.prompt("Copy this link:", url);
    }
  }

  if (!url) return null;

  return (
    <section
      aria-label="Share this page"
      className="border-t border-[#b59a62]/30 bg-[#102c44] px-6 py-9 text-center text-[#fff8e8]"
    >
      <div className="mx-auto max-w-3xl">
        <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#c9b98c]">
          Presidential Pastime Archive
        </p>

        <h2 className="mt-3 font-serif text-2xl font-bold">
          Share This Exhibit
        </h2>

        <p className="mt-2 font-serif text-sm italic text-[#d8c9ab]">
          Preserve the story. Share the history.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href={facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded border border-[#b59a62]/60 px-5 py-2.5 text-sm transition hover:bg-[#b59a62]/20"
          >
            Facebook
          </a>

          <a
            href={twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded border border-[#b59a62]/60 px-5 py-2.5 text-sm transition hover:bg-[#b59a62]/20"
          >
            X / Twitter
          </a>

          <a
            href={email}
            className="rounded border border-[#b59a62]/60 px-5 py-2.5 text-sm transition hover:bg-[#b59a62]/20"
          >
            Email
          </a>

          <button
            type="button"
            onClick={copyLink}
            className="rounded border border-[#b59a62]/60 px-5 py-2.5 text-sm transition hover:bg-[#b59a62]/20"
          >
            {copied ? "Link Copied!" : "Copy Link"}
          </button>
        </div>
      </div>
    </section>
  );
}
