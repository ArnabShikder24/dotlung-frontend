"use client";

import { useState, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { StaticImageData } from 'next/image';

interface CarouselProps {
  images: {
    src: StaticImageData;
    alt: string;
  }[];
}

const ImageCarousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const goToSlide = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    // Handle circular navigation
    let newIndex = index;
    if (index < 0) newIndex = images.length - 1;
    if (index >= images.length) newIndex = 0;
    
    setCurrentIndex(newIndex);
    
    // Reset animation flag after transition completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const goToPrevious = () => {
    goToSlide(currentIndex - 1);
  };

  const goToNext = () => {
    goToSlide(currentIndex + 1);
  };

  return (
    <div className="w-full overflow-hidden py-12">
      <div 
        ref={carouselRef}
        className="flex items-center justify-center w-full px-12"
      >
        {/* Previous Image (Partially Visible) */}
        <div className="relative mx-4 transform transition-all duration-500 cursor-pointer opacity-60 hover:opacity-80"
             onClick={goToPrevious}>
          <Image 
            src={images[(currentIndex - 1 + images.length) % images.length].src}
            alt="Previous image"
            className="rounded-md"
            width={500}
            height={600}
          />
        </div>
        
        {/* Current Image (Centered and Larger) */}
        <div className="relative mx-6 transform transition-all duration-500 z-10">
          <Image 
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="rounded-md"
            width={900}
            height={1000}
            priority
          />
        </div>
        
        {/* Next Image (Partially Visible) */}
        <div className="relative mx-4 transform transition-all duration-500 cursor-pointer opacity-60 hover:opacity-80"
             onClick={goToNext}>
          <Image 
            src={images[(currentIndex + 1) % images.length].src}
            alt="Next image"
            className="rounded-md"
            width={500}
            height={600}
          />
        </div>
      </div>
      
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
            onClick={goToPrevious} 
            className="-translate-y-1/2  hover:bg-opacity-50 rounded-full p-2 text-secondary shadow-lg z-20 transition-all duration-300"
            disabled={isAnimating}
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={goToNext} 
            className=" -translate-y-1/2 hover:bg-opacity-50 rounded-full p-2 text-secondary shadow-lg z-20 transition-all duration-300"
            disabled={isAnimating}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;