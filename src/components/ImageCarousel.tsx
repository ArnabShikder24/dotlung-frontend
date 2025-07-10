"use client";

import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
}

const ImageCarousel: React.FC<CarouselProps> = ({ images }) => {
  const sliderRef = useRef<Slider>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "15%",
    slidesToShow: 3,
    speed: 500,
    arrows: false,
    focusOnSelect: true,
    autoplay: false,
    pauseOnHover: true,
    afterChange: (index: number) => setCurrentIndex(index),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerPadding: "10%",
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "25%",
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerPadding: "15%",
        }
      }
    ]
  };

  return (
    <div className="relative w-screen max-w-none overflow-visible py-12 left-1/2 right-1/2 -translate-x-1/2">
      <style jsx global>{`
        .slick-slide {
          transition: all 0.4s ease-in-out;
          opacity: 0.6;
          transform: scale(0.85);
          z-index: 1;
          padding: 0 10px;
        }
        
        .slick-center {
          opacity: 1 !important;
          transform: scale(1) !important;
          z-index: 10;
        }
        
        .slick-slide > div {
          height: 100%;
        }
        
        .slick-track {
          display: flex;
          align-items: center;
        }
        
        .slick-slide:not(.slick-center) {
          filter: blur(1px);
        }
        
        .slick-slide.slick-center {
          filter: none;
        }
      `}</style>
      
      <Slider ref={sliderRef} {...settings}>
        {images.map((img, idx) => (
          <div key={idx} className="px-2">
            <div className="relative aspect-square w-full max-w-[400px] mx-auto">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover shadow-2xl"
                sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 33vw"
                priority={idx < 3}
              />
            </div>
          </div>
        ))}
      </Slider>
      
      {/* Custom Navigation */}
      <div className="flex items-center justify-center gap-20 mt-10">
        {/* Pagination Indicators */}
        <div className="flex justify-center items-center gap-2">
          <span className="text-white text-sm">
            {String(currentIndex + 1).padStart(2, '0')}
          </span>
          <span className="h-px w-20 bg-secondary"></span>
          <span className="text-white text-sm">
            {String(images.length).padStart(2, '0')}
          </span>
        </div>
        <div className="mt-8 flex items-center gap-5">
          {/* Navigation Buttons */}
          <button 
            onClick={() => sliderRef.current?.slickPrev()} 
            className="-translate-y-1/2  hover:bg-opacity-50 rounded-full p-2 text-secondary shadow-lg z-20 transition-all duration-300"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={() => sliderRef.current?.slickNext()} 
            className=" -translate-y-1/2 hover:bg-opacity-50 rounded-full p-2 text-secondary shadow-lg z-20 transition-all duration-300"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;