"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import bigeye from "../../public/images/bigeye.jpg";
import mxd from "../../public/images/mxd.jpg";
import huawei from "../../public/images/huawei.jpg";
import scotland from "../../public/images/scotland.jpg";
import epic from "../../public/images/epic.jpg";
import shopify from "../../public/images/shopify.jpg";
import gettyimages from "../../public/images/gettyimages.jpg";
import google from "../../public/images/google.jpg";
import berocca from "../../public/images/berocca.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Ourclients = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    //autoplaySpeed:,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 }
      }
    ]
  };

  const logos = [
    bigeye,
    mxd,
    huawei,
    scotland,
    epic,
    shopify,
    gettyimages,
    google,
    berocca,
  ];

  return (
    <section className="relative border-b border-blue-500">
      <div className="max-w-7xl mx-auto border-l border-r border-blue-500">

        {/* Heading */}
        <div className="p-5 ">
          <h2 className="text-blue-600 font-bold text-xl">
            People we've made things for:
          </h2>
          <p className="text-blue-600 text-sm leading-6 mt-2">
            Over the years I've had the privilege to work with many 
            great people and companies in both design and photography.
          </p>
        </div>

        {/* Slider */}
        <div className="py-10 px-5">
          <Slider {...settings}>
            {logos.map((logo, index) => (
              <div key={index} className="flex justify-center">
                <Image
                  src={logo}
                  alt="client logo"
                  className="w-40 h-auto object-contain"
                />
              </div>
            ))}
          </Slider>
        </div>

      </div>
    </section>
  );
};

export default Ourclients;
