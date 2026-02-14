'use client'

import React, { use } from 'react';
import Services from './Services';
import Link from "next/link";

const Ourclients = () => {
  return (
       <section className="relative border-b border-blue-500">
      <div className="max-w-7xl mx-auto   border-l border-r border-blue-500">

        <div className="grid grid-cols-1 md:grid-cols-12 ">

          {/* Left Arrow */}
          <div className="col-span-1 md:col-span-6">
              <div className='p-4 flex items-center justify-center '>
                <div>
                <h3>Kus  ©  2025
                </h3>
                <p>Working with brands ready to break the mould. If you’re bored of blending in drop us a line and let’s bring your brand to life.

                    </p></div>
                    <div className='logo'>
                         K   
                    </div>
                </div> 
          </div>

          {/* Right Text */}
          <div className="col-span-1 md:col-span-6">
              <div className='p-4'>
                          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* Left Arrow */}
          <div className="col-span-1 md:col-span-6">
                    <h3>Website:
                        </h3>

                        <ul  className='gap-4'>

                          <li>   <Link
  href="#"
  className="group border-blue-700 border-b border-dashed 
             flex items-center justify-between 
             py-3 transition-all duration-300 hover:bg-blue-600 hover:text-white"
>
  <span className="text-blue-600 transition-colors duration-300 group-hover:text-white">
    LinkBoard
  </span>

  <svg
    className="w-5 h-5 text-blue-600 transition-all duration-300 
               group-hover:text-white group-hover:rotate-45"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
  >
    <path
      d="M4 12H18M13 7L18 12L13 17"
      strokeLinecap="square"
      strokeLinejoin="miter"
    />
  </svg>
</Link></li>
                            <li>   <Link
  href="#"
  className="group border-blue-700 border-b border-dashed 
             flex items-center justify-between 
             py-3 transition-all duration-300 hover:bg-blue-600 hover:text-white"
>
  <span className="text-blue-600 transition-colors duration-300 group-hover:text-white">
    LinkBoard
  </span>

  <svg
    className="w-5 h-5 text-blue-600 transition-all duration-300 
               group-hover:text-white group-hover:rotate-45"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
  >
    <path
      d="M4 12H18M13 7L18 12L13 17"
      strokeLinecap="square"
      strokeLinejoin="miter"
    />
  </svg>
</Link></li>
                            <li>   <Link
  href="#"
  className="group border-blue-700 border-b border-dashed 
             flex items-center justify-between 
             py-3 transition-all duration-300 hover:bg-blue-600 hover:text-white"
>
  <span className="text-blue-600 transition-colors duration-300 group-hover:text-white">
    LinkBoard
  </span>

  <svg
    className="w-5 h-5 text-blue-600 transition-all duration-300 
               group-hover:text-white group-hover:rotate-45"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
  >
    <path
      d="M4 12H18M13 7L18 12L13 17"
      strokeLinecap="square"
      strokeLinejoin="miter"
    />
  </svg>
</Link></li>
                        </ul>
          </div>
            {/* Right Text */}



            <div className="col-span-1 md:col-span-6">  

                    <h3>Interweb:</h3>

                   <ul  className='gap-4'>

                         <li>   <Link
  href="#"
  className="group border-blue-700 border-b border-dashed 
             flex items-center justify-between 
             py-3 transition-all duration-300 hover:bg-blue-600 hover:text-white"
>
  <span className="text-blue-600 transition-colors duration-300 group-hover:text-white">
    LinkBoard
  </span>

  <svg
    className="w-5 h-5 text-blue-600 transition-all duration-300 
               group-hover:text-white group-hover:rotate-45"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
  >
    <path
      d="M4 12H18M13 7L18 12L13 17"
      strokeLinecap="square"
      strokeLinejoin="miter"
    />
  </svg>
</Link></li>
                          <li>   <Link
  href="#"
  className="group border-blue-700 border-b border-dashed 
             flex items-center justify-between 
             py-3 transition-all duration-300 hover:bg-blue-600 hover:text-white"
>
  <span className="text-blue-600 transition-colors duration-300 group-hover:text-white">
    LinkBoard
  </span>

  <svg
    className="w-5 h-5 text-blue-600 transition-all duration-300 
               group-hover:text-white group-hover:rotate-45"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
  >
    <path
      d="M4 12H18M13 7L18 12L13 17"
      strokeLinecap="square"
      strokeLinejoin="miter"
    />
  </svg>
</Link></li>
                            <li>   <Link
  href="#"
  className="group border-blue-700 border-b border-dashed 
             flex items-center justify-between 
             py-3 transition-all duration-300 hover:bg-blue-600 hover:text-white"
>
  <span className="text-blue-600 transition-colors duration-300 group-hover:text-white">
    LinkBoard
  </span>

  <svg
    className="w-5 h-5 text-blue-600 transition-all duration-300 
               group-hover:text-white group-hover:rotate-45"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
  >
    <path
      d="M4 12H18M13 7L18 12L13 17"
      strokeLinecap="square"
      strokeLinejoin="miter"
    />
  </svg>
</Link></li>
                        </ul>

                </div> 

                </div>
          </div> </div>

        </div>


  

      </div>

    
    </section>

  )
}

export default Ourclients
