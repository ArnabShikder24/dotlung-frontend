import React from 'react';
import { cn } from '../lib/cn';

type NavigationArrowProps = {
  direction: 'left' | 'right';
  className?: string;
};

const NavigationArrow: React.FC<NavigationArrowProps> = ({ direction, className }) => {
  const baseClass = cn('w-7 h-7 fill-[#f14336]', className);

  const paths = {
    right: "M322.2,349.7c-3.1-3.1-3-8,0-11.3l66.4-74.4H104c-4.4,0-8-3.6-8-8c0-4.4,3.6-8,8-8h284.6l-66.3-74.4c-2.9-3.4-3.2-8.1-0.1-11.2c3.1-3.1,8.5-3.3,11.4-0.1c0,0,79.2,87,80,88s2.4,2.8,2.4,5.7s-1.6,4.9-2.4,5.7s-80,88-80,88c-1.5,1.5-3.6,2.3-5.7,2.3C325.8,352,323.8,351.2,322.2,349.7z",
    left: "M189.8,349.7c3.1-3.1,3-8,0-11.3l-66.4-74.4H408c4.4,0,8-3.6,8-8c0-4.4-3.6-8-8-8H123.4l66.3-74.4c2.9-3.4,3.2-8.1,0.1-11.2c-3.1-3.1-8.5-3.3-11.4-0.1c0,0-79.2,87-80,88s-2.4,2.8-2.4,5.7s1.6,4.9,2.4,5.7s80,88,80,88c1.5,1.5,3.6,2.3,5.7,2.3C186.2,352,188.2,351.2,189.8,349.7z"
  };

  return (
    <svg
      className={baseClass}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d={paths[direction]} />
    </svg>
  );
};

export default NavigationArrow;
