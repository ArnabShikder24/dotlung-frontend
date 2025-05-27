"use client";
import { useState } from "react";
import DotImage from "../../assets/images/work-with-Dot.png";
import girl1 from "../../assets/images/bg-sphere.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { PathNames } from "../../routes/index.route";
import DotSection from "../../components/DotSection";
import SectionHeader from "../../components/SectionHeader";
import AccordionItem from "../../components/AccordionItem";
import NavigationArrowRight from "../../components/NavigationArrowRight";
import AnimatedLineVertical from "../../components/AnimatedLineVertical";
import RevealOnScroll from "../../components/RevealOnScroll";
import RevealOnScrollSpan from "../../components/RevealOnScrollSpan";

const LearnWithDot = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  const tableItems = [
  { 
    width: "95%", 
    title: "Universitat de Barcelona", 
    content: "Founded in 1450, Universitat de Barcelona is one of the oldest and most prestigious academic institutions in Spain, known for its excellent programs in humanities, sciences, and arts."
  },
  { 
    width: "87%", 
    title: "Toulouse Business School", 
    content: "A triple-accredited business school established in 1903, offering innovative programs focused on sustainable business practices, entrepreneurship, and global management."
  },
  { 
    width: "92%", 
    title: "ESdesign Barcelona", 
    content: "A specialized design school in the heart of Barcelona focusing on graphic design, digital design, and creative direction with strong industry connections."
  },
  { 
    width: "78%", 
    title: "Instituto Europeo de Design", 
    content: "IED is an international network of design schools with a campus in Barcelona that offers programs in fashion, visual communication, and product design with an innovative methodology."
  },
  { 
    width: "90%", 
    title: "Geneva Business School", 
    content: "A dynamic international business school with campuses in Barcelona, Geneva, and Madrid, offering practical business education with a focus on digital innovation."
  },
  { 
    width: "76%", 
    title: "BAU, College of Arts & Design", 
    content: "A center for higher education in design located in Barcelona's Poblenou district, featuring experimental approaches to design thinking and creative practices."
  },
  { 
    width: "83%", 
    title: "Barreira Arte + Diseño", 
    content: "A leading educational institution that combines traditional arts with modern design disciplines to create innovative programs that bridge art, design, and technology."
  }
  ];
  // State to track which accordion item is currently open
  const [activeIndex, setActiveIndex] = useState(0);

  // Toggle accordion function
  const toggleAccordion = (index: number | null) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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
      <div className="flex flex-col justify-between lg:justify-start lg:flex-row lg:items-center font-gilroy h-[100vh] lg:h-auto mt-0 md:mt-12">
        <div className="flex-1 flex justify-center items-center lg:flex-none">
          <RevealOnScroll className="-z-10">
            <Image
              className="w-full scale-[1.2] md:scale-100 md:w-[980px] -z-20"
              src={DotImage}
              alt="Dotlung"
            />
          </RevealOnScroll>
        </div>
        <div
          className="h-auto lg:w-[510px] lg:-ml-40"
        >
          <div className="z-10 text-left max-w-2xl px-6">
            <RevealOnScroll>
              <h1 className="text-[2.5rem] lg:text-[4.9rem] font-bold uppercase leading-[38px] lg:leading-[75px] -z-10">
                LEARN <br /> WITH DOT
              </h1>
            </RevealOnScroll>
            <p className="font-caslon lg:text-2xl mt-6 lg:mt-8" style={{ lineHeight: "1.5" }}>
              <RevealOnScroll>
                <p className="text-secondary italic">
                  Magical minds develop strong dragon fire.
                </p>{" "}
              </RevealOnScroll>
              <RevealOnScroll>
                <p>Step-by-step I show you the way to become the</p>
              </RevealOnScroll>
              <RevealOnScroll>
                <p>best version of you!</p>
              </RevealOnScroll>
            </p>
            <p className="uppercase items-center mt-2 lg:mt-10 py-3 text-white font-light font-gilroy" style={{ fontSize: "12px" }}>
              <RevealOnScrollSpan>
                Explore
              </RevealOnScrollSpan>
              <RevealOnScroll>
                <AnimatedLineVertical />
              </RevealOnScroll>
            </p>
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-center">
        <div
          className="relative h-screen w-[1100px] flex items-center justify-center"
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

          <p className="absolute mx-5 lg:mx-0 lg:left-10 top-[21%] max-w-[32rem] font-caslon text-[1.375rem] lg:text-[1.75rem]">
            <span className="italic text-secondary mr-1">
              <RevealOnScrollSpan>
                Make your mind magic.
              </RevealOnScrollSpan>
            </span>
              <RevealOnScrollSpan>It’s not just your mind</RevealOnScrollSpan>
              <RevealOnScrollSpan>by itself, but without understanding the</RevealOnScrollSpan>
              <RevealOnScrollSpan>concepts of online, you will not fully</RevealOnScrollSpan>
              <RevealOnScrollSpan>appreciate what you can accomplish utilising</RevealOnScrollSpan>
              <RevealOnScrollSpan>the digital landscape.</RevealOnScrollSpan>
          </p>

          <div className="absolute mx-5 mt-10 md:mt-0 lg:mx-0 lg:right-0 top-[350px] md:top-[40%] lg:top-1/2 max-w-[500px] text-sm md:text-base leading-relaxed font-asty">
            <RevealOnScrollSpan>I have been teaching social media, online marketing, digital design</RevealOnScrollSpan>
            <RevealOnScrollSpan>and more at several institutions based in Barcelona, including</RevealOnScrollSpan>
            <RevealOnScrollSpan>Universitat de Barcelona, Toulouse Business School, ESdesign</RevealOnScrollSpan>
            <RevealOnScrollSpan>Es-cuela Superior de Diseño de Barcelona, and more. My teaching</RevealOnScrollSpan>
            <RevealOnScrollSpan>is not just in the classroom, as I love to share my knowledge with</RevealOnScrollSpan>
            <RevealOnScrollSpan>my clients in order for them to share the great message of social! I</RevealOnScrollSpan>
            <RevealOnScrollSpan>also create learning communities online between many of my</RevealOnScrollSpan>
            <RevealOnScrollSpan>clients, in order to leverage all the great things we can learn from</RevealOnScrollSpan>
            <RevealOnScrollSpan>each. So yes, I teach, but I also facilitate, led and direct you in the</RevealOnScrollSpan>
            <RevealOnScrollSpan>best ways to become your own fabulous unicorns!</RevealOnScrollSpan>
          </div>
        </div>
      </div>

      <RevealOnScroll>
        <SectionHeader title="TEACHING ENGAGEMENTS" />
      </RevealOnScroll>

      <div className="flex mx-5 lg:justify-center mt-16 overflow-hidden lg:ml-[320px]">
        <div className="text-white text-2xl max-w-[500px]">
          {tableItems.map((item, index) => (
          <AccordionItem
            key={index}
            item={item}
            isActive={activeIndex === index}
            onToggle={() => toggleAccordion(index)}
          />
        ))}
        </div>
      </div>

      <RevealOnScroll>
        <>
        {/* Mobile View (below md) */}
        <div className="flex flex-col items-center justify-center md:hidden my-24 font-gilroy">
          <div className="grid grid-cols-3 grid-rows-2 w-[350px] h-[120px] border border-white relative">
            {/* Top Left Triangle */}
            <div className="border-r border-white col-span-1 row-span-1 relative flex items-start justify-start h-full
                before:content-[''] before:absolute before:w-[111%] before:h-[1px] before:bg-white before:rotate-[-27.5deg] before:top-1/2 before:left-[-5%]" />

            {/* Top Right - Link */}
            <div
              className="flex items-center justify-center px-3 text-[0.75rem] text-secondary font-bold col-span-2 row-span-1 relative z-10 transition-colors hover:text-secondary"
            >
              DATE & LOCATION
            </div>

            {/* Bottom Left - Link */}
            <div
              className="border-t border-r border-white text-[0.75rem] col-span-2 row-span-1 relative flex items-start justify-start "
            >
              <div className="flex items-center justify-center px-3 text-secondary font-bold relative z-10 text-left h-full w-full transition-colors hover:text-secondary">
                <span className="ml-2 block">SPEAKING ENGAGEMENTS</span>
              </div>
            </div>

            {/* Bottom Right Triangle */}
            <div className="border-t border-white col-span-1 row-span-1 relative flex items-end justify-end h-full
              before:content-[''] before:absolute before:w-[111%] before:h-[1px] before:bg-white before:rotate-[26.5deg] before:top-1/2 before:left-[-5%]" />
          </div>
        </div>

        {/* Desktop View (md and up) */}
        <div className="md:flex items-center justify-center font-gilroy mt-24 mb-14 hidden relative">
          <div className="max-w-3xl flex-1 mx-5 lg:mx-20 text-[0.75rem]">
            <div className="relative">
              <div className="border border-white flex w-full">
                {/* Bottom Left Text */}
                <div
                  className="w-[30%] lg:w-[25%] whitespace-nowrap px-6 py-3 text-secondary transition-colors text-center border-r border-white"
                >
                  DATE & LOCATION
                </div>

                {/* Middle Line */}
                <div className="w-[40%] lg:w-[20%] relative">
                  <div className="absolute w-[101%] h-[1px] bg-white transform -rotate-[14.5deg] top-1/2 -translate-y-1/2 z-10"></div>
                  <div className="h-full" />
                </div>

                {/* Top Right Text */}
                <div className="relative w-[30%] lg:w-[55%]">
                  <div
                    className="block px-6 py-3 whitespace-nowrap text-secondary transition-colors text-start border-l border-white"
                  >
                    SPEAKING ENGAGEMENTS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>

      </RevealOnScroll>

      <div className="text-white flex flex-col items-center py-10 px-6">
        <div className="max-w-3xl w-full">
          {events.map((event, index) => (
            <RevealOnScroll
              key={index}
            >
              <div
                className="lg:flex justify-between items-center border-b-[0.8px] border-white/50 py-4"
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
                  <NavigationArrowRight />
                </div>
              </div>
          </RevealOnScroll>
          ))}
          <RevealOnScroll>
            <div className="flex justify-end">
                <div className="flex items-center justify-between w-[50%] py-4 text-center text-white/60 text-sm uppercase">
                  <h1 className="font-gilroy">Previous Events</h1> <NavigationArrowRight />
                </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>

      <div className="text-white flex items-center justify-center mt-40 px-6">
        <div className="max-w-3xl w-full grid grid-cols-1 md:grid-cols-2 gap-1 items-start">
          <div className="-mt-10">
            <RevealOnScroll>
              <p className="text-secondary font-caslon italic text-lg">Share — Learn — Network</p>
            </RevealOnScroll>
            <RevealOnScroll>
              <h1 className="text-[2.5rem] md:text-[4rem] leading-[40px] md:leading-[65px] font-gilroy font-extrabold mt-2">
                SOCIAL <br /> MEDIA <br /> MONDAYS
              </h1>
            </RevealOnScroll>
            <RevealOnScroll>
              <p className="text-secondary uppercase font-extrabold font-gilroy text-sm mt-3">
                Live from Facebook Playground Tel Aviv
              </p>
            </RevealOnScroll>
          </div>

          <div className="relative mt-10 md:-mt-10">
            <p className="text-white text-[.875rem] md:text-[1rem] font-asty">
              <RevealOnScrollSpan>Dragons meet other Dragons! I bring the fire to start your week with</RevealOnScrollSpan>
              <RevealOnScrollSpan>Facebook Live where you’ll spend time with me and others who can</RevealOnScrollSpan>
              <RevealOnScrollSpan>help you develop your powerful core for digital superiority!</RevealOnScrollSpan>
            </p>
            <div className="absolute top-10 right-10 w-4 h-4 bg-white/20 rounded-full"></div>
            <div className="absolute bottom-10 left-10 w-6 h-6 bg-white/20 rounded-full"></div>
            <div className="mt-6 md:mt-0 w-full flex justify-end">
              <div className="absolute -top-[160px] -right-4 md:top-20 md:-right-0 md:relative w-[230px] h-[230px] md:w-[380px] md:h-[380px]">
                <RevealOnScrollSpan>
                  <Image
                    src={girl1}
                    alt="Speaker"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full -mt-20 -z-40"
                  />
              </RevealOnScrollSpan>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <RevealOnScroll>
        <DotSection
          topRightText="TRAVEL & EAT WITH DOT"
          topRightLink={PathNames.travelEat}
          bottomLeftText="WORK WITH DOT"
          bottomLeftLink={PathNames.workWithDot}
        />
      </RevealOnScroll>
    </div>
  );
};

export default LearnWithDot;