import React from 'react'

const Banner2 = () => {
  return (
       <section className="relative border-b border-blue-500">
      <div className="max-w-7xl mx-auto px-6  border-l border-r border-blue-500">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

          {/* Left Arrow */}
          <div className="col-span-1 md:col-span-4">
            <svg
              className="w-96 h-96 text-blue-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="8"
              viewBox="0 0 100 100"
            >
              <line x1="10" y1="50" x2="80" y2="50" />
              <polyline points="55,25 80,50 55,75" />
            </svg>
          </div>

          {/* Right Text */}
          <div className="col-span-1 md:col-span-8">
            <h1 className="text-blue-600 font-bold leading-tight tracking-tight
              text-4xl smurexx text-3xl md:text-6xl lg:text-7xl mt-16">
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
