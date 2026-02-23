import React from "react";

const PlusIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const Banner2 = () => {
  return (
       <section className="relative border-b border-blue-500">
      <div className="max-w-7xl mx-auto px-6  border-l border-r border-blue-500">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

          {/* Left Arrow */}
          <div className="col-span-1 md:col-span-4  border-r border-blue-500">
            <svg
              className="w-96 h-96 text-blue-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="5"
              viewBox="0 0 100 100"
            >
              <line x1="10" y1="50" x2="80" y2="50" />
              <polyline points="55,25 80,50 55,75" />
            </svg>
          </div>

          {/* Right Text */}
          <div className="col-span-1 md:col-span-8 relative py-16 md:py-20">
          
            {/* Corner + icons */}
            <PlusIcon className="absolute top-3 left-0 w-4 h-6 md:w-6 md:h-6 text-blue-600" />
            <PlusIcon className="absolute top-3 right-0 w-6 h-6 md:w-6 md:h-6 text-blue-600" />
            <PlusIcon className="absolute bottom-3 left-0 w-6 h-6 md:w-6 md:h-6 text-blue-600" />
            <PlusIcon className="absolute bottom-3 right-0 w-6 h-6 md:w-6 md:h-6 text-blue-600" />

            <h1 className="text-blue-600 font-bold leading-tight tracking-tight text-4xl md:text-6xl lg:text-7xl">
              Building brands for
              those who are bored
              of blending in.
            </h1>
          </div>

        </div>

      </div>
    </section>

  )
}

export default Banner2
