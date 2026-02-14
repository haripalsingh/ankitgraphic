import React from "react";
import Image from "next/image";
import Link from "next/link";
import sliderbanner1 from "../../public/images/slider-banner-1.png";

const Banner = () => {
  return (
    <section className="border-b border-blue-600">
      <div className="max-w-7xl mx-auto  border-l border-r border-blue-600">
        <Link href="#">
          <Image
            src={sliderbanner1}
            alt="Banner Image"
            width={1920}
            height={800}
          />
        </Link>
      </div>{" "}
    </section>
  );
};

export default Banner;
