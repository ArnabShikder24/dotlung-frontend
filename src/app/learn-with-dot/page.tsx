"use client";
import { useState } from "react";
import DotImage from "../../assets/images/work-with-Dot.png";
import girl1 from "../../assets/images/Asset 1.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { PathNames } from "../../routes/index.route";
import Link from "next/link";
import DotSection from "../../components/DotSection";

const LearnWithDot = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };
  const tableItems = [
    { width: "160%", title: "Universitat de Barcelona" },
    { width: "190%", title: "Toulouse Business School" },
    { width: "180%", title: "ESdesign Barcelona" },
    { width: "170%", title: "La Salle" },
  ];

  const events = [
    { date: "05 APRIL 2018", location: "MILAN", name: "Digital Design Days" },
    { date: "22 SEPTEMBER 2018", location: "ATHENS", name: "Digitized Athens" },
    { date: "12 MAY 2018", location: "BARCELONA", name: "OFFF - Barcelona" },
    { date: "05 APRIL 2018", location: "LONDON", name: "Digital Design Days" },
    { date: "05 APRIL 2018", location: "LONDON", name: "Digitized Athens" },
    { date: "05 APRIL 2018", location: "LONDON", name: "OFFF - Barcelona" },
    { date: "05 APRIL 2018", location: "LONDON", name: "Digitized Athens" },
    { date: "05 APRIL 2018", location: "LONDON", name: "OFFF - Barcelona" },
  ];

  return (
      <div className="container mx-auto overflow-hidden mt-20 md:mt-0">
        <div className="lg:flex items-end mx-5 lg:mx-0">
          <Image
            className="w-[980px]"
            src={DotImage}
            alt="dot Image"
          />
          <div className="lg:-ml-40 lg:w-[380px] mx-auto">
            <h1 className="text-[60px] lg:text-[80px] font-extrabold font-gilroy leading-[70px] lg:leading-[85px]">
            LEARN <br /> WITH DOT
            </h1>
            <p className="font-caslon text-lg mt-5 mb-14">
              <span className="italic text-secondary">
                Magical minds develop strong dragon fire.
              </span>{" "} <br />
                Step-by-step I show you the way to become the best dragon version of you!
            </p>
            <p className="font-gilroy text-sm">EXPLORE</p>
            <div className="w-[1px] h-24 bg-secondary ml-6 mt-5" />
          </div>
        </div>
      
        <div className="flex items-center justify-center">
          <div
            className="relative h-screen w-[1000px] flex items-center justify-center overflow-hidden"
            onMouseMove={handleMouseMove}
          >
            <motion.div
              className="absolute w-[200px] h-[200px] lg:w-[500px] lg:h-[500px] bg-[#e74c3c] rounded-full"
              animate={{
                x: mousePosition.x / 10 - 50,
                y: mousePosition.y / 10 - 50,
              }}
              transition={{ type: "spring", stiffness: 100, damping: 10 }}
            />

            <div className="absolute mx-5 lg:mx-0 lg:left-10 top-1/4 max-w-md font-caslon">
              <p className="text-2xl mt-2">
              <span className="text-2xl italic text-secondary">
                Make your mind magic.
              </span> It&apos;s not just your mind by itself, but without <br />
              understanding the concepts of online, you will not fully appreciate what you can accomplish utilising the digital landscape.
              </p>
            </div>

            <div className="absolute pt-4 lg:pt-0 mx-5 lg:mx-0 lg:right-10 top-1/2 max-w-sm">
              <p className="text-sm leading-relaxed font-asty">
                I have been teaching social media, online marketing, digital design and more at several institutions based in Barcelona, including Universitat de Barcelona, Toulouse Business School, ESdesign Escuela Superior de Diseño de Barcelona, and more. My teaching is not just in the classroom, as I love to share my knowledge with my clients in order for them to share the great message of social! I also create learning communities online between many of my clients, in order to leverage all the great things we can learn from each. So yes, I teach, but I also facilitate, led and direct you in the best ways to become your own fabulous unicorns!
              </p>
            </div>
          </div>
        </div>
    
        <div className="flex items-center justify-center font-gilroy mt-32">
          <div className="max-w-3xl flex-1 mx-5 lg:mx-20 text-xs">
            <div className="relative">
              <div className="border border-white flex w-full">
                <div className="w-3/4 relative">
                  <div className="absolute w-full h-[1px] bg-white transform -rotate-[3.9deg] top-1/2 -translate-y-1/2 z-10"></div>
                  <div className="h-full" />
                </div>

                <div className="relative w-[40%] lg:w-[30%]">
                  <p className="block px-6 py-3 text-white hover:text-orange-500 transition-colors text-center border-l border-white">
                  TEACHING ENGAGEMENTS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex mx-5 lg:justify-center mt-16 overflow-hidden">
          <div className="text-white text-2xl font-serif">
            {tableItems.map((data, index) => (
              <div key={index} className="mb-4 relative">
                  <span className="block pb-2  cursor-pointer lg:hover:text-secondary">{data.title}</span>
                  <div
                  className="border-b-[1px] border-secondary absolute top-4"
                  style={{
                      width: data.width,
                  }}
                  ></div>
              </div>
            ))}
          </div>
        </div>
            
        <div className="md:flex items-center justify-center font-gilroy mt-44 hidden">
          <div className="max-w-4xl flex-1 mx-5 lg:mx-20 text-xs">
            <div className="relative">
              <div className="border border-white flex w-full">
                <a
                  href="#"
                  className="w-[30%] px-6 py-3 text-white hover:text-orange-500 transition-colors text-center border-r border-white"
                >
                  DATE & LOCATION
                </a>

                <div className="w-1/2 relative">
                  <div className="absolute w-full h-[1px] bg-white transform -rotate-[5.8deg] top-1/2 -translate-y-1/2 z-10"></div>
                  <div className="h-full" />
                </div>

                <div className="relative w-[50%]">
                  <a
                    href="#"
                    className="block px-6 py-3 text-white hover:text-orange-500 transition-colors text-start border-l border-white"
                  >
                    SPEAKING ENGAGEMENTS
                  </a>
                </div>
              </div>
            </div>
          </div>
      </div>
      <DotSection />

      <div className="text-white min-h-screen flex flex-col items-center py-10 px-6">
        <div className="max-w-4xl w-full">
          {events.map((event, index) => (
            <div
              key={index}
              className="lg:flex justify-between items-center border-b border-white/50 py-4"
            >
              <div className="flex items-center gap-10 lg:w-[30%]">
                <span
                  className={`w-2 h-2 rounded-full ${
                    index < 4 ? "bg-secondary" : "bg-gray-400"
                  }`}
                ></span>
                <span className="text-sm font-gilroy font-semibold">
                  {event.date} - {event.location}
                </span>
              </div>
              <div className="lg:w-[50%] mt-8 lg:mt-0 flex items-center justify-between">
                <span className="text-2xl font-caslon">{event.name}</span>
                <span className="text-xl font-bold text-secondary">→</span>
              </div>
            </div>
          ))}
          <div className="flex justify-end">
            <div className="flex items-center justify-between w-[50%] py-4 text-center text-white/60 text-sm uppercase">
              <h1 className="font-gilroy">Previous Events</h1> <span className="text-xl font-bold text-secondary">→</span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-white min-h-screen flex items-center justify-center px-6">
        <div className="max-w-3xl w-full grid grid-cols-1 md:grid-cols-2 gap-1 items-start">
          <div className="-mt-10">
            <p className="text-secondary font-caslon italic text-lg">Every Monday — 11.30</p>
            <h1 className="text-5xl md:text-[70px] font-gilroy font-extrabold mt-2">
              SOCIAL <br /> MEDIA <br /> MONDAYS
            </h1>
            <p className="text-secondary uppercase font-extrabold font-asty text-sm mt-3">
              Every Monday going live on Facebook!
            </p>
          </div>

          <div className="relative">
            <p className="text-white text-lg font-asty">
              Dragons meet other Dragons! I bring the fire to start your week with
              Facebook Live where you’ll spend time with me and others who can
              help you develop your powerful core for digital superiority!
            </p>
            <div className="absolute top-10 right-10 w-4 h-4 bg-white/20 rounded-full"></div>
            <div className="absolute bottom-10 left-10 w-6 h-6 bg-white/20 rounded-full"></div>
            <div className="mt-6 md:mt-0 w-full flex justify-end">
              <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
                <Image
                  src={girl1}
                  alt="Speaker"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full opacity-80 -mt-20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-center font-gilroy mt-20 mb-32">
        <div className="max-w-3xl flex-1 mx-5 lg:mx-20 text-xs">
          <div className="relative">
            <div className="border border-white flex w-full">
              <Link
                href={PathNames.travelEat}
                className="w-1/4 px-6 py-3 text-white hover:text-orange-500 transition-colors text-center border-r border-white"
              >
                TRAVEL & EAT WITH DOT
              </Link>

              <div className="w-1/2 relative">
                <div className="absolute w-full h-[1px] bg-white transform -rotate-[5.8deg] top-1/2 -translate-y-1/2 z-10"></div>
                <div className="h-full" />
              </div>

              <div className="relative w-[20%] lg:w-1/4">
                <Link
                  href={PathNames.learnWithDot}
                  className="block px-6 py-3 text-white hover:text-orange-500 transition-colors text-center border-l border-white"
                >
                  LEARN WITH DOT
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default LearnWithDot;