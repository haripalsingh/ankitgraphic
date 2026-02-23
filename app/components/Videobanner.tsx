import React from "react";

const Videobanner = () => {
  return (
    
    <section className="relative border-b border-blue-500">
      <div className="max-w-7xl mx-auto   border-l border-r border-blue-500">
    <div className="relative w-full overflow-hidden bg-black aspect-video min-h-[280px]">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/images/banner.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    </div>
    </section>
  );
};

export default Videobanner;