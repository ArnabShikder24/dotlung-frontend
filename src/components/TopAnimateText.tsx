import Link from "next/link";
import { useState, useEffect } from "react";

export default function TopAnimateText() {
  const titles = [
    "Plan Your Instagram Strategy",
    "Start Your Personal Brand"
  ];

  const links = [
    "https://www.domestika.org/en/courses/1102-instagram-strategy-for-business-growth",
    "https://www.domestika.org/en/courses/1487-personal-branding-strategy-for-social-media?atag=2d170f&utm_medium=affiliates&utm_source=dotlung_2d170f"
  ]
  
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // trigger fade out
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % titles.length);
        setFade(true); // trigger fade in
      }, 500); // fade out duration
    }, 5000); // switch every 5s

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-secondary h-[30px] w-full font-gilroy text-[14px] flex items-center justify-center overflow-hidden">
      <p
        className={`text-primary font-bold hover:text-white transition duration-500 cursor-pointer uppercase flex items-center gap-3 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          fill="#fff"
          viewBox="0 0 16 16"
          className="bi bi-lightning-fill"
        >
          <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641z" />
        </svg>
        <Link href={links[index]} target="_blank">
          {titles[index]}
        </Link>
      </p>
    </div>
  );
}
