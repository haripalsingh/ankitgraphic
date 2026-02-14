import React from "react";
import Link from "next/link";
import Image from "next/image";
import testimonails from "../../public/images/testimonails-1.avif";

const Testimonails = () => {
  return (
    <section className="relative border-b border-blue-500">
      <div className="max-w-7xl mx-auto border-l border-r border-blue-500 bg-blue-600">
        <div className="max-w-4xl mx-auto py-24 px-6 relative">
          <div className="text-white   leading-none mb-6 absolute -left-32 top-24 text-[80px]"><svg
    viewBox="0 0 140 100"
    className="w-24 md:w-32 h-auto text-white"
    fill="currentColor"
  >
    <path d="M60 0C35 15 15 45 15 70C15 88 26 100 44 100C62 100 72 88 72 70C72 52 62 42 44 42C42 42 40 42 38 43C42 28 56 12 70 4L60 0Z" />
    <path d="M130 0C105 15 85 45 85 70C85 88 96 100 114 100C132 100 142 88 142 70C142 52 132 42 114 42C112 42 110 42 108 43C112 28 126 12 140 4L130 0Z" />
  </svg></div>

          <p className="text-white text-3xl md:text-4xl font-semibold leading-tight">
            Mike's understanding of our requirements, his fantastic design
            skills and his laidback but professional and attentive manner made
            the project a resounding success.
          </p>

          <div className="flex items-center gap-4 mt-10">
            <Image
              src={testimonails}
              alt="Charlie Shepherd"
              className="w-12 h-12 rounded-full object-cover"
            />

            <div>
              <p className="text-white font-medium">Charlie Shepherd</p>
              <p className="text-white/80 text-sm">Founder - Epic Travel</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonails;
