import React from 'react';
import NavigationArrow from './NavigationArrow';

interface SectionHeaderProps {
  title: string;
  icon?: boolean
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, icon = false }) => {
  return (
    <div className="flex justify-center mx-5">
      <header
        className="max-w-3xl page-accordions__header"
        style={{ opacity: 1, transform: 'matrix(1, 0, 0, 1, 0, 0)' }}
      >
        <span className="page-accordions__header__box">
          <svg
            className="oblique-line"
            viewBox="0 0 300 52"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            fill="#fff"
          >
            <rect
              transform="rotate(-9.5 150 26.5)"
              x="-25"
              y="26"
              width="350"
              height="1"
              fillRule="evenodd"
              fill="#fff"
            />
          </svg>
        </span>
        <p className="flex items-center whitespace-nowrap px-6 py-3 text-[0.8125rem] text-white font-gilroy hover:text-secondary transition-colors uppercase text-center border-l border-white relative">
          {title}
          {icon &&
            <NavigationArrow direction="right" className="ml-2 text-secondary md:absolute md:top-2 md:-right-4" />
          }
        </p>
      </header>
    </div>
  );
};

export default SectionHeader;
