"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CarouselProps {
  images: {
    src: any;
    alt: string;
  }[];
}

const ImageCarousel: React.FC<CarouselProps> = ({ images }) => {
  const sliderRef = useRef<Slider>(null);

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
                className="rounded-xl object-cover shadow-2xl"
                sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 33vw"
                priority={idx < 3}
              />
            </div>
          </div>
        ))}
      </Slider>
      
      {/* Custom Navigation */}
      <div className="flex items-center justify-center gap-8 mt-8">
        <button
          onClick={() => sliderRef.current?.slickPrev()}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-orange-500 bg-transparent transition-colors duration-200 hover:bg-orange-500/10 hover:border-orange-600"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} className="text-orange-500 group-hover:text-orange-600 transition-colors duration-200" />
        </button>
        <div className="flex gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => sliderRef.current?.slickGoTo(idx)}
              className="w-2 h-2 rounded-full bg-white/30 hover:bg-white/60 transition-all duration-300"
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        <button
          onClick={() => sliderRef.current?.slickNext()}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-orange-500 bg-transparent transition-colors duration-200 hover:bg-orange-500/10 hover:border-orange-600"
          aria-label="Next slide"
        >
          <ChevronRight size={20} className="text-orange-500 group-hover:text-orange-600 transition-colors duration-200" />
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;