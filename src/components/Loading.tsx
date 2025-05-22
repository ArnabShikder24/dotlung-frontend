"use client";
import React, { useState, useEffect } from 'react';
// import Image from 'next/image'; // Removed as it causes compilation issues in this environment
// import Logo from "../../public/assets/svgs/logo.svg"; // Removed direct SVG import

// Main Preloader component
const Loading = () => {
  // State to control the overall visibility of the preloader
  const [isLoading, setIsLoading] = useState(true);
  // State to control the opacity of the preloader for fade out
  const [preloaderOpacity, setPreloaderOpacity] = useState(1);
  // State to control the opacity of the logo
  const [logoOpacity, setLogoOpacity] = useState(1);
  // State to control the width of the progress bar
  const [progressBarWidth, setProgressBarWidth] = useState(0);

  useEffect(() => {
    // Start the progress bar animation almost immediately
    const progressTimer = setTimeout(() => {
      setProgressBarWidth(100);
    }, 10); // Start progress bar animation after 10ms

    // Start fading out the logo and the entire preloader simultaneously
    const fadeOutStartDelay = 500; // Start fading out at 0.5 seconds

    const logoFadeTimer = setTimeout(() => {
      setLogoOpacity(0);
    }, fadeOutStartDelay);

    const preloaderFadeTimer = setTimeout(() => {
      setPreloaderOpacity(0);
    }, fadeOutStartDelay);

    // Completely hide the preloader after all fade animations complete (at 1 second)
    const preloaderHideTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Hide component after 1000ms (1 second)

    // Clean up timers to prevent memory leaks
    return () => {
      clearTimeout(progressTimer);
      clearTimeout(logoFadeTimer);
      clearTimeout(preloaderFadeTimer);
      clearTimeout(preloaderHideTimer);
    };
  }, []);

  // If isLoading is false, don't render anything
  if (!isLoading) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center bg-[#5205f9] z-[99999] transition-opacity duration-500 ease-out" // Changed duration to 500ms
      style={{ opacity: preloaderOpacity }}
    >
      {/* Logo with fade out animation */}
      <img
        className="mb-3 transition-opacity duration-500 ease-out" // Duration 500ms
        src="/assets/svgs/logo.svg" // Direct path to the SVG in the public directory
        alt="loader"
        style={{ opacity: logoOpacity }}
      />

      {/* Line Progress Bar */}
      <div className="w-14 h-[1.5px] rounded-full overflow-hidden">
        <div
          className="h-full bg-white rounded-full transition-all ease-out duration-[990ms]" // Changed duration to 990ms
          style={{ width: `${progressBarWidth}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Loading;