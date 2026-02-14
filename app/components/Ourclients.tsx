import React from 'react'
import Services from './Services'

const Ourclients = () => {
  return (
       <section className="relative border-b border-blue-500">
      <div className="max-w-7xl mx-auto   border-l border-r border-blue-500">

        <div className="grid grid-cols-1 md:grid-cols-12 ">

          {/* Left Arrow */}
          <div className="col-span-1 md:col-span-3">
                  <h2 className="text-blue-600 font-bold leading-tight tracking-tight text-lg text-left p-5 mt-24">
            Our Clients:
            </h2>
          </div>

          {/* Right Text */}
          <div className="col-span-1 md:col-span-9">
            <p className="text-blue-600 font-bold leading-tight tracking-tight
              smurexx text-3xl md:text-5xl lg:text-5xl mt-24 mb-16">
            We partner with companies ready to break the mould, own their identity, and never blend in.
            </p>
          </div>

        </div>


          <Services />

      </div>

    
    </section>

  )
}

export default Ourclients
