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
           <div className="grid grid-cols-1 md:grid-cols-12 gap-4 px-6 md:px-12 lg:px-16 py-12 md:py-20">
            <div className="col-span-1 md:col-span-4 ">
                    <p className="text-blue-600 font-bold text-sm uppercase tracking-wider mb-4 ">
            Founder
          </p>
            </div>
              <div className="col-span-1 md:col-span-8">
                   <h1 className="text-3xl  lg:text-5xl xl:text-6xl font-bold leading-tight  text-blue-600 text-sm uppercase">
                      British Designer +
                      Creative Director
                    </h1>
          <p className="mt-8  text-lg leading-relaxed  text-blue-600">
            We&apos;re a studio with a passion for bold, concept-led work that helps brands stand out and connect. We specialise in branding, web and product design, and visual identity—working with everyone from early-stage startups to established brands. Our goal is to give every project a distinct voice: confident, credible, and unmistakably its own.
          </p>
            </div>
            </div>

          
        </div>
      </section>

      <section>
        <Videobanner />
      </section>



         <section className="border-b border-blue-600">
        <div className="max-w-7xl mx-auto border-l border-r border-blue-600 bg-blue-600">
           <div className="grid grid-cols-1 md:grid-cols-12 gap-4 px-6 md:px-12 lg:px-16 py-12 md:py-20">
            <div className="col-span-1 md:col-span-4 ">
                    <p className="text-white font-bold text-sm uppercase tracking-wider mb-4 ">
         Design Philosophy:

          </p>
            </div>
              <div className="col-span-1 md:col-span-8">
                   <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-white max-w-3xl mb-16">
           I design for brands seeking a distinct voice. Confident, credible, and unmistakably their own.

          </h2>



             <div className="grid grid-cols-1 md:grid-cols-12 gap-4 ">
                  <div className="col-span-1 md:col-span-4">
                    <div className="border-b border-white border-dashed text-lg font-bold mb-3 text-white pt-3 pb-3">01.</div>
                     <h3 className="text-lg font-bold mb-3 text-white">Creative Leadership</h3> 
      <p className="text-sm font-normal mb-3 text-white">I guide projects with clarity and purpose, turning ideas into design that delivers.</p>
                  </div>
                 <div className="col-span-1 md:col-span-4">
                    <div className="border-b border-white border-dashed text-lg font-bold mb-3 text-white pt-3 pb-3">02.</div>
                     <h3 className="text-lg font-bold mb-3 text-white">Be Bold
</h3> 
      <p className="text-sm font-normal mb-3 text-white">Stand out in your space with design that’s confident, distinctive, and memorable.

</p>
                  </div>
               <div className="col-span-1 md:col-span-4">
                    <div className="border-b border-white border-dashed text-lg font-bold mb-3 text-white pt-3 pb-3">03.</div>
                     <h3 className="text-lg font-bold mb-3 text-white">Meaningful Design
</h3> 
      <p className="text-sm font-normal mb-3 text-white">I create visual languages that resonate, connecting brands with the people they’re here to serve.

</p>
                  </div>

            </div>



             <div className="grid grid-cols-1 md:grid-cols-12 gap-4 ">
                  <div className="col-span-1 md:col-span-4">
                    <div className="border-b border-white border-dashed text-lg font-bold mb-3 text-white pt-3 pb-3">04.</div>
                     <h3 className="text-lg font-bold mb-3 text-white">Creative Clarity
</h3> 
      <p className="text-sm font-normal mb-3 text-white">Design should express who you are, clearly, confidently, and with creativity at its core.


</p>
                  </div>
                 <div className="col-span-1 md:col-span-4">
                    <div className="border-b border-white border-dashed text-lg font-bold mb-3 text-white pt-3 pb-3">05.</div>
                     <h3 className="text-lg font-bold mb-3 text-white">Collaboration
</h3> 
      <p className="text-sm font-normal mb-3 text-white">The best work happens together, built through honest dialogue and shared ambition.

</p>
                  </div>
               <div className="col-span-1 md:col-span-4">
                    <div className="border-b border-white border-dashed text-lg font-bold mb-3 text-white pt-3 pb-3">06.</div>
                     <h3 className="text-lg font-bold mb-3 text-white">High Standards
</h3> 
      <p className="text-sm font-normal mb-3 text-white">I approach every project with care, attention to detail, and a commitment to creative excellence.

</p>
                  </div>

            </div>
 
            </div>
            </div>

          
        </div>
      </section>

 
 
      

         <section className="border-b border-blue-600">
        <div className="max-w-7xl mx-auto border-l border-r border-blue-600 grid-bg z-10">
           <div className="grid grid-cols-1 md:grid-cols-12 gap-4 px-6 md:px-12 lg:px-16 py-12 md:py-20">
            <div className="col-span-1 md:col-span-4 ">
                    <p className="text-blue-600 z-30 font-bold text-sm uppercase tracking-wider mb-4 ">
         Public Speaking:

          </p>
            </div>
              <div className="col-span-1 md:col-span-8">
                
          <p className="text-5xl text-blue-600 z-30">
            Over the past 15 years, I’ve spoken at design conferences across the UK, Europe, and the US—including Awwwards, WebExpo, Beyond Tellerrand, Reason.to, Generate, Dibi, Front, Pixel Pioneers, The Future of Web Design, and more. 
          </p>
            </div>
            </div>

          
        </div>
      </section>






 <section className="border-b border-blue-600">
        <div className="max-w-7xl mx-auto border-l border-r border-blue-600 bg-blue-600">
           <div className="grid grid-cols-1 md:grid-cols-12 gap-4 px-6 md:px-12 lg:px-16 py-12 md:py-20">
            <div className="col-span-1 md:col-span-4 ">
                    <p className="text-white font-bold text-sm uppercase tracking-wider mb-4 ">
        Get in touch:

          </p>
            </div>
              <div className="col-span-1 md:col-span-8">
                   <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-white max-w-3xl mb-16">
 
Have a project in mind you’d like to talk about? Drop me a line, I'd love to chat. 
sales@ankitgraphic.com
          </h2>

 
             
 
            </div>
            </div>

          
        </div>
      </section>




             
    <Contact/>
     <Footerlogo/>
    </main>
  );
}
