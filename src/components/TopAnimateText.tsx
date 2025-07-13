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
  
  // const svgs = [
  //   (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       width={16}
  //       height={16}
  //       fill="#fff"
  //       viewBox="0 0 16 16"
  //       className="bi bi-book-fill"
  //     >
  //       <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
  //     </svg>
  //   ),
  //   (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       width={16}
  //       height={16}
  //       fill="#fff"
  //       viewBox="0 0 16 16"
  //       className="bi bi-lightning-fill"
  //     >
  //       <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641z" />
  //     </svg>
  //   )
  // ];


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
        <Link href={links[index]} target="_blank">
          {titles[index]}
        </Link>
      </p>
    </div>
  );
}
