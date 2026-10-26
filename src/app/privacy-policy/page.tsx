import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Presidential Pastime",
  description:
    "Learn about privacy and information practices at Presidential Pastime.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#eee7d7] text-[#172b3d]">
      <section className="border-b-4 border-[#a4282d] bg-[#102c44] px-6 py-20 text-center text-white">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d6b46f]">
          Presidential Pastime
        </p>
        <h1 className="mt-5 font-serif text-4xl font-bold md:text-6xl">
          Privacy Policy
        </h1>
        <p className="mx-auto mt-6 max-w-2xl leading-8 text-[#c8d1d5]">
          Our commitment to transparency and the responsible
          handling of information.
        </p>
      </section>

      <article className="mx-auto max-w-4xl px-6 py-16">
        <div className="border border-[#d8c9aa] bg-[#fffdf8] p-8 shadow-sm md:p-12">
          <p className="mb-10 text-sm text-[#65717b]">
            Last updated: October 26, 2026
          </p>

          <div className="space-y-10 leading-8 text-[#334454]">
            <section>
              <h2 className="mb-4 font-serif text-2xl font-bold text-[#102c44]">
                1. About This Website
              </h2>
              <p>
                Presidential Pastime is an independent historical
                research website dedicated to exploring the
                relationship between American presidents and
                baseball. This policy describes how information
                may be handled when you visit our website.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-2xl font-bold text-[#102c44]">
                2. Information You Provide
              </h2>
              <p>
                If you contact us, we may receive information
                you choose to provide, such as your name,
                email address, and message. We use this
                information to respond to inquiries and
                communicate with you.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-2xl font-bold text-[#102c44]">
                3. Website Analytics
              </h2>
              <p>
                We may use website analytics services,
                including Vercel Analytics, to understand
                website traffic and improve the visitor
                experience. These services may process
                technical information about website visits
                according to their own privacy practices.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-2xl font-bold text-[#102c44]">
                4. External Websites
              </h2>
              <p>
                Our website may contain links to museums,
                libraries, historical archives, and other
                independent websites. We are not responsible
                for the privacy practices or content of
                external websites.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-2xl font-bold text-[#102c44]">
                5. Donations and Third-Party Services
              </h2>
              <p>
                If donation or payment services are offered,
                transactions may be processed by independent
                third-party providers. Their privacy policies
                govern the information they collect and process.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-2xl font-bold text-[#102c44]">
                6. Information Security and Retention
              </h2>
              <p>
                We aim to handle information responsibly and
                retain correspondence only as reasonably
                necessary for its intended purpose. No
                internet transmission or storage system can
                be guaranteed completely secure.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-2xl font-bold text-[#102c44]">
                7. Changes to This Policy
              </h2>
              <p>
                This Privacy Policy may be updated as the
                website develops or its information practices
                change. Updates will be published on this page.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-2xl font-bold text-[#102c44]">
                8. Contact
              </h2>
              <p>
                For questions about this Privacy Policy or
                information you have provided, please visit
                our contact page.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-block font-bold text-[#8d6c32] underline underline-offset-4"
              >
                Contact Presidential Pastime
              </Link>
            </section>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-block bg-[#102c44] px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#1b4260]"
          >
            Return to Homepage
          </Link>
        </div>
      </article>
    </main>
  );
}
