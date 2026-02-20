import React from "react";
import Link from "next/link";

const philosophy = [
  {
    num: "01.",
    title: "Creative Leadership",
    desc: "We guide projects with clarity and purpose, turning ideas into design that delivers.",
  },
  {
    num: "02.",
    title: "Be Bold",
    desc: "Stand out in your space with design that's confident, distinctive, and memorable.",
  },
  {
    num: "03.",
    title: "Meaningful Design",
    desc: "We create visual languages that resonate, connecting brands with the people they serve.",
  },
  {
    num: "04.",
    title: "Creative Clarity",
    desc: "Design should express who you are, clearly, confidently, and with creativity at its core.",
  },
  {
    num: "05.",
    title: "Collaboration",
    desc: "The best work happens together, built through honest dialogue and shared ambition.",
  },
  {
    num: "06.",
    title: "High Standards",
    desc: "We approach every project with care, attention to detail, and a commitment to creative excellence.",
  },
];

export default function AboutUsPage() {
  return (
    <main className="pt-20">
      {/* Founder hero */}
      <section className="border-b border-blue-600">
        <div className="max-w-7xl mx-auto border-l border-r border-blue-600 px-6 md:px-12 lg:px-16 py-12 md:py-20">
          <p className="text-blue-600 font-bold text-sm uppercase tracking-wider mb-4">
            Founder
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900">
            Designer + Creative Director
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-gray-600 leading-relaxed">
            We&apos;re a studio with a passion for bold, concept-led work that helps brands stand out and connect. We specialise in branding, web and product design, and visual identity—working with everyone from early-stage startups to established brands. Our goal is to give every project a distinct voice: confident, credible, and unmistakably its own.
          </p>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="border-b border-blue-600">
        <div className="max-w-7xl mx-auto border-l border-r border-blue-600 px-6 md:px-12 lg:px-16 py-12 md:py-20">
          <p className="text-blue-600 font-bold text-sm uppercase tracking-wider mb-4">
            Design Philosophy
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-gray-900 max-w-3xl mb-16">
            We design for brands seeking a distinct voice. Confident, credible, and unmistakably their own.
          </h2>
          <div className="space-y-10 md:space-y-14">
            {philosophy.map((item) => (
              <div
                key={item.num}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start"
              >
                <div className="md:col-span-2">
                  <span className="text-blue-600 font-bold text-lg md:text-xl">
                    {item.num}
                  </span>
                </div>
                <div className="md:col-span-10">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed max-w-2xl">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="border-b border-blue-600">
        <div className="max-w-7xl mx-auto border-l border-r border-blue-600 px-6 md:px-12 lg:px-16 py-12 md:py-20">
          <p className="text-blue-600 font-bold text-sm uppercase tracking-wider mb-4">
            Recognition
          </p>
          <h2 className="text-2xl md:text-3xl font-bold leading-tight text-gray-900 max-w-2xl mb-12">
            Our work has been recognised and featured across design and digital publications.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border-l-4 border-blue-600 pl-6">
              <p className="font-bold text-gray-900 text-lg">Site of the Day</p>
              <p className="text-gray-600 text-sm mt-1">Awwwards.com</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <p className="font-bold text-gray-900 text-lg">Honorable Mention</p>
              <p className="text-gray-600 text-sm mt-1">Awwwards.com</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <p className="font-bold text-gray-900 text-lg">Featured Work</p>
              <p className="text-gray-600 text-sm mt-1">Design & Web</p>
            </div>
          </div>
        </div>
      </section>

      {/* Get in touch */}
      <section className="border-b border-blue-600">
        <div className="max-w-7xl mx-auto border-l border-r border-blue-600 px-6 md:px-12 lg:px-16 py-12 md:py-20">
          <p className="text-blue-600 font-bold text-sm uppercase tracking-wider mb-4">
            Get in touch
          </p>
          <h2 className="text-2xl md:text-3xl font-bold leading-tight text-gray-900 max-w-2xl mb-8">
            Have a project in mind you&apos;d like to talk about? Drop us a line, we&apos;d love to chat.
          </h2>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 text-blue-600 font-bold text-lg hover:text-blue-700 transition"
          >
            Contact us
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Work highlights CTA */}
      <section className="border-b border-blue-600">
        <div className="max-w-7xl mx-auto border-l border-r border-blue-600 px-6 md:px-12 lg:px-16 py-12 md:py-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-blue-600 font-bold text-sm uppercase tracking-wider mb-2">
                Work – Highlights
              </p>
              <p className="text-gray-700 text-lg">
                See what we&apos;ve made for our clients.
              </p>
            </div>
            <Link
              href="/#work"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition shrink-0"
            >
              View our Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
