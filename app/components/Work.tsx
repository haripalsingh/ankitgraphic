import React from 'react'
import Image from "next/image";
import Link from "next/link";
import portfolio1 from "../../public/images/portfolio-1.png";
import portfolio2 from "../../public/images/portfolio-2.png";
import portfolio3 from "../../public/images/portfolio-3.png";
import portfolio4 from "../../public/images/portfolio-4.png";

const Work = () => {
  return (
    <>
      <section id="work" className="border-b border-blue-600">
      <div className="max-w-7xl mx-auto  border-l border-r border-blue-600">

             <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-4">

        
          <div className="col-span-1 md:col-span-6">
           <div className='text-blue-600 font-bold leading-tight tracking-tight   text-3xl p-5'>Work - <br/>
Highlights </div> 
          </div>
           <div className="col-span-1 md:col-span-6">
          <div className='text-blue-600 font-bold leading-tight tracking-tight   text-lg text-right p-5'>
              View our Work
</div>

        
      </div>
      </div>


             <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-4">

          {/* Left Arrow */}
          <div className="col-span-1 md:col-span-6">
                <Image
    src={portfolio3}
    alt="Portfolio 3"
    width={1200}
    height={800}
    sizes="(max-width: 768px) 100vw, 50vw"
    className="w-full h-auto "
    priority
  />
</div>
         
            {/* Right Text */}
            <div className="col-span-1 md:col-span-6">
                            <Image
    src={portfolio2}
    alt="Portfolio 3"
    width={1200}
    height={800}
    sizes="(max-width: 768px) 100vw, 50vw"
    className="w-full h-auto "
    priority
  />

            </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

          {/* Left Arrow */}
          <div className="col-span-1 md:col-span-6">
              <Image
    src={portfolio3}
    alt="Portfolio 3"
    width={1200}
    height={800}
    sizes="(max-width: 768px) 100vw, 50vw"
    className="w-full h-auto "
    priority
  />
          </div>
            {/* Right Text */}
            <div className="col-span-1 md:col-span-6">
                              <Image
    src={portfolio4}
    alt="Portfolio 4"
    width={1200}
    height={800}
    sizes="(max-width: 768px) 100vw, 50vw"
    className="w-full h-auto "
    priority
  />
            </div>
            </div>
            </div>
 
      </section>
    </>
  )
}

export default Work
