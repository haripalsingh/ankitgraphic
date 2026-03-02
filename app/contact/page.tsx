import React from "react";
import Link from "next/link";
import Contact from "../components/Contact";
import Footerlogo from "../components/Footerlogo";
import Videobanner from "../components/Videobanner";

 
export default function AboutUsPage() {
  return (
    <main className="mt-16">
      <section className="border-b border-blue-600">
        <div className="max-w-7xl mx-auto border-l border-r border-blue-600 ">
           <div className="grid grid-cols-1 md:grid-cols-12 gap-4 px-6 py-12 md:py-16">
            <div className="col-span-1 md:col-span-4 ">
                    <p className="text-blue-600 font-bold text-sm uppercase tracking-wider mb-4 ">
          Get in touch:

          </p>
            </div>
              <div className="col-span-1 md:col-span-8">
              
          <p className="lg:text-5xl xl:text-6xl font-bold leading-tight  text-blue-600 text-sm ">
           
If you'd like to chat, you can reach me at:
sales@ankitgraphic.com
          </p>
            </div>
            </div>

          
        </div>
      </section>

      
  
             
    <Contact/>
     <Footerlogo/>
    </main>
  );
}
