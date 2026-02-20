import React from "react";
import Image from "next/image";
import Link from "next/link";
import sliderbanner1 from "../../public/images/2x1-intro01.webp";

const Banner = () => {
  return (
    <section className="relative min-h-[85vh] flex overflow-hidden bg-[#0f2847]">
      <svg width="0" height="0" aria-hidden>
        <defs>
          <clipPath id="hero-curve" clipPathUnits="objectBoundingBox">
            <path d="M 0 0 L 0 1 L 0.72 1 Q 1 0.5 0.72 0 L 0 0 Z" />
          </clipPath>
        </defs>
      </svg>
      {/* Left: dark blue panel with curved right edge */}
      <div
        className="relative z-10 flex w-full min-w-0 flex-col justify-center px-8 py-20 md:w-[52%] md:pl-16 md:pr-24 lg:pl-24 lg:pr-32"
        style={{ clipPath: "url(#hero-curve)" }}
      >
        <div className="max-w-xl">
          <p className="mb-3 text-sm font-normal tracking-wide text-white/90 md:text-base">
            Modern digital services
          </p>
          <h1 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl md:mb-6 md:text-5xl lg:text-[2.75rem] xl:text-6xl">
            Build A Professional Website With Ease!
          </h1>
          <p className="mb-8 text-sm leading-relaxed text-white/90 md:mb-10 md:text-base">
            Strengthen your online presence with modern design solutions tailored
            for high performance & lasting impact.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#work"
              className="inline-flex items-center justify-center rounded-lg border-2 border-blue-400 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              What we offer
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
            >
              Get a quote
            </Link>
          </div>
        </div>
      </div>

      {/* Right: image - positioned to show behind/next to the curve */}
      <div className="absolute inset-0 md:left-[40%]">
        <Image
          src={sliderbanner1}
          alt="Team collaboration"
          fill
          className="object-cover object-left"
          sizes="(max-width: 768px) 100vw, 60vw"
          priority
        />
        {/* Subtle gradient so text on left stays readable if image bleeds */}
        <div
          className="absolute inset-0 md:hidden"
          aria-hidden
          style={{
            background: "linear-gradient(to right, #0f2847 30%, transparent 70%)",
          }}
        />
      </div>

      {/* Optional badge (top-right on image) */}
      <div className="absolute right-6 top-24 z-20 rounded-lg bg-black/70 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white shadow-lg md:right-12 md:top-28">
        Our Work
      </div>
    </section>
  );
};

export default Banner;
