"use client"
import React, { useEffect, useState } from 'react';

export default function BubbleLoader() {
  // State to control the visibility of the transition.
  // It's initially true to show the transition on component mount.
  const [visible, setVisible] = useState(true);

  // useEffect hook to manage the timer for hiding the transition.
  // It runs once on component mount (due to empty dependency array []).
  useEffect(() => {
    // Set a timeout to change the 'visible' state to false after 2000ms (2 seconds).
    const timer = setTimeout(() => setVisible(false), 2000);

    // Cleanup function: This runs when the component unmounts or before the
    // effect runs again. It clears the timeout to prevent memory leaks.
    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures this effect runs only once on mount.

  // If 'visible' is false, the component returns null, effectively hiding itself
  // from the DOM and stopping its rendering.
  if (!visible) return null;

  // Define distinct style objects for each bubble, applying different animations.
  // Each animation will have a unique translation at the 100% mark,
  // guiding the bubbles to the specific marked positions from the image.
  const bubbleStyle1 = { animation: 'shrinkMove1 1s ease-in-out forwards' };
  const bubbleStyle2 = { animation: 'shrinkMove2 1.5s ease-in-out forwards' };
  const bubbleStyle3 = { animation: 'shrinkMove3 2s ease-in-out forwards' };


  return (
    <>
   
      <style>{`
@keyframes shrinkMove1 {
  0%   { transform: scale(1) translate(0, 0); opacity: 1; }
  100% { transform: scale(0) translate(40vw, -60vh); opacity: 1; 
  }
}

@keyframes shrinkMove2 {
  0%   { transform: scale(1) translate(0, 0); opacity: 1; }
  100% { transform: scale(0) translate(25vw, -30vh); opacity: 1; }
}
@keyframes shrinkMove3 {
  0%   { transform: scale(1) translate(0, 0); opacity: 1; }
  100% { transform: scale(0) translate(5vw, -35vh); opacity: 1; }
}




`}</style>




      {/*
        Main container for the bubble transition.
        - fixed inset-0: Positions the div to cover the entire viewport.
        - z-[9999]: Ensures it's on top of almost all other content.
        - bg-purple-800: Sets a solid deep purple background.
        - flex justify-center items-center: Centers the bubbles within the container.
        - overflow-hidden: Prevents scrollbars if the bubbles temporarily extend beyond bounds.
      */}
      <div className="fixed inset-0 z-[9999] bg-transparent flex justify-center items-center overflow-hidden">
        {/*
          Individual bubble elements, each with a unique animation style.
          - absolute: Allows precise positioning within the parent container.
          - rounded-full: Makes them perfectly circular.
          - bg-purple-500: Sets the bubble's color.
          - w-[150vmax] h-[150vmax]: Ensures they are large enough to cover the screen initially.
          - shadow-2xl shadow-purple-400/70: Adds a large, diffused shadow for a soft edge.
          - top/left: Initial positions adjusted to ensure they are visible and distinct
            at the start, and then move towards the marked final locations.
          - style={...}: Applies the distinct animation to each bubble.
        */}
        <div
          className="absolute rounded-full bg-[#5205f9] w-[60vmax] h-[60vmax]"
          style={{ top: '20%', left: '-20%', zIndex: 1, ...bubbleStyle1 }}
        />

        <div
          className="absolute rounded-full bg-[#5205f9] w-[60vmax] h-[60vmax]"
          style={{ top: '-20%', left: '40%', zIndex: 2, ...bubbleStyle2 }}
        />

        <div
          className="absolute rounded-full bg-[#5205f9] w-[60vmax] h-[60vmax]"
          style={{ top: '30%', left: '50%', zIndex: 1, ...bubbleStyle3 }}
        />



      </div>
    </>
  );
}