import React from "react";
import Image from "next/image";
import Link from "next/link";
import Contact from "../components/Contact";
import Footerlogo from "../components/Footerlogo";


const projects = [
  { title: "Project One", subtitle: "Branding & Web Design", image: "/images/portfolio-1.png", href: "#" },
  { title: "Project Two", subtitle: "Branding & Web Design", image: "/images/portfolio-2.png", href: "#" },
  { title: "Project Three", subtitle: "Branding & Web Design", image: "/images/portfolio-3.png", href: "#" },
  { title: "Project Four", subtitle: "Branding & Web Design", image: "/images/portfolio-4.png", href: "#" },
  { title: "Project Five", subtitle: "Branding & Web Design", image: "/images/portfolio-1.png", href: "#" },
  { title: "Project Six", subtitle: "Branding & Web Design", image: "/images/portfolio-2.png", href: "#" },
  { title: "Project Seven", subtitle: "Branding & Web Design", image: "/images/portfolio-3.png", href: "#" },
  { title: "Project Eight", subtitle: "Branding & Web Design", image: "/images/portfolio-4.png", href: "#" },
];

export default function WorkPage() {
  return (
    <main >
      {/* What we do */}
    


      <section className="border-b border-blue-600">
        <div className="max-w-7xl mx-auto border-l border-r border-blue-600 ">
           <div className="grid grid-cols-1 md:grid-cols-12 gap-4 px-6 md:px-12 lg:px-16 py-12 md:py-20">
            <div className="col-span-1 md:col-span-4 ">
                    <p className="text-blue-600 font-bold text-sm uppercase tracking-wider mb-4 mt-8">
            Founder
          </p>
            </div>
              <div className="col-span-1 md:col-span-8">
          <p className="mt-8  text-6xl leading-tight
 text-blue-600 font-bold">
          Bold brands, striking
creative and smart
digital design.
          </p>
            </div>
            </div>

          
        </div>
      </section>




      {/* Work – Highlights + Contact */}
      <section className="border-b border-blue-600">
        <div className="max-w-7xl mx-auto border-l border-r border-blue-600 ">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 px-6 md:px-12 lg:px-16 py-6 md:py-8">
            <div className="col-span-1 md:col-span-6 flex items-center">
              <p className="text-blue-600 font-bold leading-tight tracking-tight text-2xl md:text-3xl">
                Work -<br />
                Highlights
              </p>
            </div>
            <div className="col-span-1 md:col-span-6 flex items-center justify-end">
              <Link
                href="/contact"
                className="text-blue-600 font-bold text-lg hover:text-blue-700 transition"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Project grid */}
      <section className="border-b border-blue-600">
        <div className="max-w-7xl mx-auto border-l border-r border-blue-600 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {projects.map((project, i) => (
              <div
                key={i}
                className="group border-b border-blue-600 md:border-b-0 md:odd:border-r border-r-blue-600"
              >
                <Link href={project.href} className="block">
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t border-blue-600">
                    <div>
                      <p className="font-bold text-gray-900 text-lg">
                        {project.title} – {project.subtitle}
                      </p>
                    </div>
                    <span className="text-blue-600 font-semibold text-sm shrink-0">
                      View Project
                    </span>
                  </div>
                </Link>
              </div>
            ))}
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
