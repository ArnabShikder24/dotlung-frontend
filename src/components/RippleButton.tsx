"use client"
import Link from "next/link";
import { useState, useEffect } from "react";

// Fixed RippleButton component that works with Tailwind
const RippleButton = ({ 
  href = "#", 
  children, 
  className = '',
  rippleColor1 = 'bg-secondary', // First ripple color
  rippleColor2 = 'bg-primary', // Second ripple color
  transitionTime = 700, // Time in ms before navigation happens
  onClick = () => {}
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  // Function to handle the ripple effect and navigation
  const handleRippleTransition = (e) => {
    if (isAnimating) return;
    
    // Get click position
    const clickX = e.clientX;
    const clickY = e.clientY;
    
    // Start animation
    setIsAnimating(true);
    
    // Create ripple overlay if it doesn't exist
    let rippleOverlay = document.getElementById('ripple-overlay');
    if (!rippleOverlay) {
      rippleOverlay = document.createElement('div');
      rippleOverlay.id = 'ripple-overlay';
      rippleOverlay.className = 'fixed top-0 left-0 w-screen h-screen pointer-events-none z-[120] overflow-hidden';
      document.body.appendChild(rippleOverlay);
    }
    
    // Calculate maximum distance to farthest corner
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    const corners = [
      { x: 0, y: 0 },
      { x: windowWidth, y: 0 },
      { x: 0, y: windowHeight },
      { x: windowWidth, y: windowHeight }
    ];
    
    let maxDistance = 0;
    corners.forEach(corner => {
      const dx = corner.x - clickX;
      const dy = corner.y - clickY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      maxDistance = Math.max(maxDistance, distance);
    });
    
    // Size the ripple to cover the screen with some margin
    const rippleSize = maxDistance * 2.1;
    
    // Create first ripple
    const ripple1 = document.createElement('div');
    ripple1.className = `absolute rounded-full transform scale-0 ${rippleColor1} z-[120]`;
    ripple1.style.width = `${rippleSize}px`;
    ripple1.style.height = `${rippleSize}px`;
    ripple1.style.left = `${clickX - rippleSize/2}px`;
    ripple1.style.top = `${clickY - rippleSize/2}px`;
    ripple1.style.transformOrigin = 'center center';
    ripple1.style.animation = `rippleExpand ${transitionTime/1000}s cubic-bezier(0.4, 0.0, 0.2, 1) forwards`;
    
    // Create second ripple
    const ripple2 = document.createElement('div');
    ripple2.className = `absolute rounded-full transform scale-0 ${rippleColor2} z-[120]`;
    ripple2.style.width = `${rippleSize}px`;
    ripple2.style.height = `${rippleSize}px`;
    ripple2.style.left = `${clickX - rippleSize/2}px`;
    ripple2.style.top = `${clickY - rippleSize/2}px`;
    ripple2.style.transformOrigin = 'center center';
    ripple2.style.animation = `rippleExpand ${transitionTime/1000}s cubic-bezier(0.4, 0.0, 0.2, 1) forwards`;
    ripple2.style.animationDelay = `${transitionTime * 0.7/1000}s`;
    
    // Add ripples to overlay
    rippleOverlay.appendChild(ripple1);
    rippleOverlay.appendChild(ripple2);
    
    // Show ripple origin indicator
    const clickIndicator = document.createElement('div');
    clickIndicator.className = 'fixed w-5 h-5 rounded-full z-[120] pointer-events-none';
    clickIndicator.style.left = `${clickX}px`;
    clickIndicator.style.top = `${clickY}px`;
    clickIndicator.style.transform = 'translate(-50%, -50%)';
    clickIndicator.style.animation = 'pulse 0.2s ease-out';
    document.body.appendChild(clickIndicator);
    
    // For demo, simulate navigation with a page fade-out effect
    setTimeout(() => {
      document.body.style.transition = 'opacity 0.3s ease';
      document.body.style.opacity = '1';
      
      setTimeout(() => {
        document.body.style.opacity = '1';
        // In a real app, this is where router.push(href) would happen
        console.log(`Navigating to: ${href}`);
      }, 400);
    }, transitionTime * 0.75);
    
    // Clean up animations
    setTimeout(() => {
      if (rippleOverlay) {
        if (ripple1.parentNode === rippleOverlay) {
          rippleOverlay.removeChild(ripple1);
        }
        if (ripple2.parentNode === rippleOverlay) {
          rippleOverlay.removeChild(ripple2);
        }
      }
      if (clickIndicator.parentNode) {
        clickIndicator.parentNode.removeChild(clickIndicator);
      }
      setIsAnimating(false);
    }, transitionTime * 2);
  };

  useEffect(() => {
    // Add keyframe animation to the document if it doesn't exist
    if (typeof document !== 'undefined' && !document.getElementById('ripple-keyframes')) {
      const style = document.createElement('style');
      style.id = 'ripple-keyframes';
      style.innerHTML = `
        @keyframes rippleExpand {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        @keyframes pulse {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
        }
      `;
      document.head.appendChild(style);
    }
    
    // Clean up on unmount
    return () => {
      if (typeof document !== 'undefined') {
        const rippleOverlay = document.getElementById('ripple-overlay');
        if (rippleOverlay && rippleOverlay.childNodes.length === 0 && rippleOverlay.parentNode) {
          rippleOverlay.parentNode.removeChild(rippleOverlay);
        }
      }
    };
  }, []);

  return (
    <Link
      href={href}
      className={`${className}`}
      onClick={(e) => {
        onClick();
        handleRippleTransition(e);
      }}
    >
      {children}
    </Link>
  );
};

export default RippleButton;