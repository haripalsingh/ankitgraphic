"use client";

import React, { useState } from "react";
import Link from "next/link";

const email = "hello@ankitgraphic.com";

const socialLinks = [
  { label: "Dribbble", href: "#", icon: "dribbble" },
  { label: "Twitter", href: "#", icon: "twitter" },
  { label: "Instagram", href: "#", icon: "instagram" },
  { label: "LinkedIn", href: "#", icon: "linkedin" },
];

function CopyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback for older browsers
      setCopied(false);
    }
  };

  return (
    <main className="pt-20">
      {/* Get in touch */}
      <section className="border-b border-blue-600">
        <div className="max-w-7xl mx-auto border-l border-r border-blue-600 px-6 md:px-12 lg:px-16 py-12 md:py-20">
          <p className="text-blue-600 font-bold text-sm uppercase tracking-wider mb-4">
            Get in touch
          </p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-gray-900 max-w-2xl mb-10">
            If you&apos;d like to chat, you can reach us at:
          </h1>
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 break-all">
              {email}
            </span>
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-2 rounded-full border-2 border-blue-600 bg-transparent px-5 py-2.5 text-sm font-semibold text-blue-600 hover:bg-blue-600 hover:text-white transition"
            >
              {copied ? (
                <>
                  <CheckIcon className="w-4 h-4" />
                  Copied
                </>
              ) : (
                <>
                  <CopyIcon className="w-4 h-4" />
                  Copy
                </>
              )}
            </button>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Copy to Clipboard
          </p>
        </div>
      </section>

      {/* Elsewhere online */}
      <section className="border-b border-blue-600">
        <div className="max-w-7xl mx-auto border-l border-r border-blue-600 px-6 md:px-12 lg:px-16 py-12 md:py-20">
          <p className="text-blue-600 font-bold text-sm uppercase tracking-wider mb-4">
            Elsewhere online
          </p>
          <h2 className="text-xl md:text-2xl font-bold leading-tight text-gray-900 max-w-xl mb-10">
            You can also find us here:
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialLinks.map((item) => (
              <li key={item.icon}>
                <Link
                  href={item.href}
                  className="group flex items-center gap-3 text-gray-700 hover:text-blue-600 transition font-medium"
                >
                  <span className="text-lg">{item.label}</span>
                  <svg
                    className="w-5 h-5 text-blue-600 opacity-80 group-hover:translate-x-1 transition"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Tagline */}
      <section className="border-b border-blue-600">
        <div className="max-w-7xl mx-auto border-l border-r border-blue-600 px-6 md:px-12 lg:px-16 py-12 md:py-16">
          <p className="text-blue-600 font-bold text-sm uppercase tracking-wider mb-2">
            Brand / Web / Creative
          </p>
          <p className="text-gray-700 text-lg max-w-2xl">
            Working with brands ready to stand out. If you&apos;re bored of blending in, drop us a line and let&apos;s bring your brand to life.
          </p>
        </div>
      </section>
    </main>
  );
}
