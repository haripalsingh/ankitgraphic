"use client";

import React, { use } from "react";
import Services from "./Services";
import Link from "next/link";

const Ourclients = () => {
  return (
    <section id="contact" className="relative border-b border-blue-500">
      <div className="max-w-7xl mx-auto   border-l border-r border-blue-500">
        <div className="grid grid-cols-1 md:grid-cols-12 ">
          {/* Left Arrow */}
          <div className="col-span-1 md:col-span-6">
            <div className="flex items-center justify-between pl-8 pr-8 pt-4">
              <p className="text-[#0066ff] text-lg font-bold">
                Copy to Clipboard Contact us: <br />
                mike@mikekus.com
              </p>

              <p className="text-[#0066ff] font-bold text-lg flex items-center">
                <svg
                  className="w-6 h-6 text-blue-600 transition-all duration-300 
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
                Brand / Web / Creative
              </p>
            </div>
          </div>
          {/* Right Text */}
          <div className="col-span-1 md:col-span-6">
            <div className="grid grid-cols-1 md:grid-cols-12 ">
              {/* Left Arrow */}
              <div className="col-span-1 md:col-span-6 border-l border-blue-500">
          
                <ul className="gap-8 flex items-center justify-between">
                  <li>
                    <Link
                      href="#"
                      className="group 
             
             py-3 transition-all duration-300 text-center"
                    >
                      {" "}
                      <svg
                        className="w-24 h-24"
                        viewBox="0 0 24 24"
                        fill="#2563EB" /* Tailwind blue-600 */
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M18.244 2H21.5l-7.63 8.72L22.5 22h-6.78l-5.31-6.94L4.5 22H1.244l8.16-9.33L1.5 2h6.87l4.79 6.33L18.244 2Zm-2.38 18h1.88L7.98 4h-2.02l9.904 16Z" />
                      </svg>{" "}
                    </Link>
                  </li>

                  <li className="border-l border-blue-500">
                    {" "}
                    <Link
                      href="#"
                      className="group 
          
             py-3 transition-all duration-300 "
                    >
                      <svg
                        className="w-24 h-24 text-blue-600"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10
           10-4.48 10-10S17.52 2 12 2zm6.93 4.36
           c1.45 1.86 2.07 4.18 1.77 6.48
           -1.91-.39-3.79-.45-5.56-.17
           -.41-1.01-.85-2-1.33-2.95
           1.86-.8 3.58-1.98 5.12-3.36zM12 4
           c1.7 0 3.29.49 4.63 1.33
           -1.36 1.23-2.89 2.23-4.55 2.96
           -.91-1.6-1.87-3.01-2.74-4.07
           C10.14 4.08 11.05 4 12 4zM7.3 5.25
           c.98 1.14 1.99 2.65 2.93 4.39
           -2.54.68-4.9.78-6.91.3
           C3.79 7.22 5.32 5.99 7.3 5.25zM4 12
           c0-.25.01-.49.03-.73
           2.36.5 5.1.37 7.87-.38
           .39.8.75 1.64 1.08 2.5
           -3.08.92-5.78 2.59-7.65 4.69
           C4.53 16.43 4 14.25 4 12zm3.19 6.54
           c1.59-1.87 3.9-3.34 6.58-4.17
           .74 2.13 1.3 4.35 1.63 6.28
           -.93.23-1.9.35-2.9.35
           -1.93 0-3.73-.53-5.31-1.46zm9.35-.88
           c-.31-1.76-.84-3.84-1.52-5.88
           1.56-.19 3.23-.09 4.94.28
           -.6 2.44-2.17 4.53-4.42 5.6z"
                        />
                      </svg>
                    </Link>
                  </li>

                  <li className="border-l border-blue-500">
                    {" "}
                    <Link
                      href="#"
                      className="group 
          
             py-3 transition-all duration-300 "
                    >
                      <svg
                        className="w-24 h-24 text-blue-600"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5C18.01 4 20 5.99 20 7.75v8.5c0 1.76-1.99 3.75-3.75 3.75h-8.5C5.99 20 4 18.01 4 16.25v-8.5C4 5.99 5.99 4 7.75 4zm4.25 2.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zm0 2a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm5.25-.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" />
                      </svg>
                    </Link>
                  </li>

                  <li className="border-l border-blue-500">
                    {" "}
                    <Link
                      href="#"
                      className="group 
            
             py-3 transition-all duration-300"
                    >
                      <svg
                        className="w-24 h-24 text-blue-600"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.65-1.86 3.4-1.86 3.63 0 4.3 2.39 4.3 5.49v6.26zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
                      </svg>
                    </Link>
                  </li>

                  <li className="border-l border-blue-500">
                    <Link
                      href="#"
                      className="group 
           
             py-3 transition-all duration-300"
                    >
                      <svg
                        className="w-24 h-24"
                        viewBox="0 0 24 24"
                        fill="#2563EB"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22.675 0h-21.35C.595 0 0 .595 0 1.326v21.348C0 23.405.595 24 
           1.326 24h11.495v-9.294H9.691V11.04h3.13V8.413
           c0-3.1 1.894-4.788 4.659-4.788 1.325 0 
           2.463.099 2.795.143v3.24l-1.918.001
           c-1.504 0-1.796.715-1.796 1.763v2.312h3.587
           l-.467 3.665h-3.12V24h6.116C23.405 24 
           24 23.405 24 22.674V1.326C24 .595 
           23.405 0 22.675 0z"
                        />
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>
              </div>
              {/* Right Text */}
            </div>
          </div> 
        </div>
    
    </section>
  );
};

export default Ourclients;
