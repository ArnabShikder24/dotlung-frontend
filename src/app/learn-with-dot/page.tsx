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
import Link from "next/link";

const LearnWithDot = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  const tableItems = [
    {
      width: "95%",
      title: "Universitat de Barcelona",
      content:
        "University of Barcelona is a public university located in the city of Barcelona, Catalonia in Spain. With 75 undergraduate programs, 353 graduate programs and 96 doctorate programs to over 54,000 students, UB is considered to be the best university in Spain in the QS World University Rankings of 2018, which ranked the university 156th overall in the world.",
      links: [
        {
          title: "WEBSITE",
          url: "http://www.ub.edu/web/ub/ca/",
        },
      ],
    },
    {
      width: "80%",
      title: "Toulouse Business School",
      content:
        "Toulouse Business School(TBS) was founded in 1903 by the Toulouse Chamber of Commerce and Industry, the school's initial vocation was to respond to the needs of the local business community for able business administrators. TBS is one of the oldest well-known universities in France, it is affiliated to the French elite education system Grandes Ecoles. TBS is a famous aristocratic business school, which enjoys a high reputation in the European traditional uppertendom.",
      links: [
        {
          title: "WEBSITE",
          url: "http://www.tbs-education.fr/en",
        },
      ],
    },
    {
      width: "87%",
      title: "ESdesign Barcelona",
      content:
        "The School of Design of Barcelona (ESdesign) is an institution created with the aim of responding to the need for training of design professionals, with the ability to anticipate trends, analyze emerging situations and social needs, providing the most innovative solutions. ESdesign’s vision is to be the online design school of international reference, offering the best quality at the forefront of design and online training. Their mission is to train professionals and turn them into an engine of change that allows them to transform the environment, and generators of new spaces, developing creativity, innovation, entrepreneurship and design quality.",
      links: [
        {
          title: "WEBSITE",
          url: "https://www.esdesignbarcelona.com/es",
        },
      ],
    },
    {
      width: "66%",
      title: "Instituto Europeo de Design",
      content:
        "The Istituto Europeo di Design (IED) was born in Milan 50 years ago as a private institution specialized in the field of education and research on design and communication. Today, IED is an international network in continuous expansion, with seats in Milan, Rome, Florence, Turin, Venice, Como, Cagliari, Madrid, Barcelona, Sao Paulo and Rio de Janeiro. Its main interest, all throughout these years, has been to become a global reference of quality in the education and popularization of design and culture at international level. Around 10,000 people from about 90 different countries study at IED every year.",
      links: [
        {
          title: "WEBSITE",
          url: "https://www.ied.edu/",
        },
      ],
    },
    {
      width: "90%",
      title: "Geneva Business School",
      content:
        "GBS has developed into a leader in Swiss quality education with a purpose to educate future business leaders. With an international approach and passion for excellence in business, our goal at GBS is to help students reach their full potential and build real business connections, as they become future leaders.",
      links: [
        {
          title: "WEBSITE",
          url: "https://gbsge.com/",
        },
      ],
    },
  ];
  // State to track which accordion item is currently open
  const [activeIndex, setActiveIndex] = useState(0);

  // Toggle accordion function
  const toggleAccordion = (index: number | null) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const events = [
    {
      "date": "25 FEBRUARY 2020",
      "location": "Tel Aviv",
      "name": "Content Israel",
      "url": "http://contentisrael.com/"
    },
    {
      "date": "27 JANUARY 2020",
      "location": "Soho House",
      "name": "How to Win at Instagram",
      "url": "https://dotlung.com/blog/work-with-dot/how-to-win-at-instagram/"
    },
    {
      "date": "11 OCTOBER 2019",
      "location": "Milan",
      "name": "Digital Design Days Italy",
      "url": "http://ddd.it/"
    },
    {
      "date": "12 SEPTEMBER 2019",
      "location": "Stavanger",
      "name": "Social Media Days Norway",
      "url": "https://socialmediadays.no/"
    },
    {
      "date": "6 JUNE 2019",
      "location": "Bergen",
      "name": "Social Media Days Norway",
      "url": "https://bergen.socialmediadays.no/"
    },
    {
      "date": "2 JUNE 2019",
      "location": "Tel Aviv",
      "name": "Digital & Affiliate Marketing International Expo Israel",
      "url": "https://www.dmiexpo.com/"
    },
    {
      "date": "28 MAY 2019",
      "location": "Mumbai",
      "name": "Promax Asia",
      "url": "http://www.promaxasia.tv/"
    },
    {
      "date": "21 MAY 2019",
      "location": "Barcelona",
      "name": "Creative.Net",
      "url": "https://thecreative.net/welcome"
    },
    {
      "date": "20 MAY 2019",
      "location": "Barcelona",
      "name": "Imagin Cafe",
      "url": "https://www.imagin.cafe/web/guest/agenda"
    },
    {
      "date": "10 MAY 2019",
      "location": "Malaga",
      "name": "I-COM Global Summit",
      "url": "https://www.i-com.org/"
    },
    {
      "date": "5 MAY 2019",
      "location": "Thessaloniki",
      "name": "Thessaloniki Design Week",
      "url": "#"
    },
    {
      "date": "3 APRIL 2019",
      "location": "Barcelona",
      "name": "Entrepreneur Business Live",
      "url": "#"
    },
    {
      "date": "25 MARCH 2019",
      "location": "Amsterdam",
      "name": "Promax Europe 2019",
      "url": "https://www.promax.org/events/current-events/promaxbda-europe-conference-2019"
    },
    {
      "date": "20 MARCH 2019",
      "location": "San Diego",
      "name": "Social Media Marketing World",
      "url": "https://www.socialmediaexaminer.com/smmworld/"
    },
    {
      "date": "17 MARCH 2019",
      "location": "Tel Aviv",
      "name": "UX Salon 2019",
      "url": "http://uxsalon.com/"
    },
    {
      "date": "15 FEBRUARY 2019",
      "location": "Geneva",
      "name": "Digital Design Days - Switzerland",
      "url": "http://ddd.ge/"
    },
    {
      "date": "24 NOVEMBER 2018",
      "location": "Antwerp",
      "name": "Us By Night",
      "url": "https://www.usbynight.be/venue/"
    },
    {
      "date": "8 NOVEMBER 2018",
      "location": "London",
      "name": "SalesForce.org The Connected Non Profit UK",
      "url": "http://www.salesforce.org/events/"
    },
    {
      "date": "7 NOVEMBER 2018",
      "location": "London",
      "name": "Entrepreneur Business Live",
      "url": "https://www.eventbrite.co.uk/e/entrepreneur-business-live-november-18-tickets-50214891091?aff=erelexpmlt"
    },
    {
      "date": "7 NOVEMBER 2018",
      "location": "Lisbon",
      "name": "Women in Tech Awards",
      "url": "https://women-in-tech.org/award-categories/"
    },
    {
      "date": "29 OCTOBER 2018",
      "location": "Barcelona",
      "name": "David Carson Live on Social Media Mondays!",
      "url": "https://www.facebook.com/events/488643024927057/"
    },
    {
      "date": "23 OCTOBER 2018",
      "location": "Barcelona",
      "name": "SalesForce.org Higher Ed Summit Horizons",
      "url": "http://www.salesforce.org/events/higher-ed-summit-horizons-2018/"
    },
    {
      "date": "4 OCTOBER 2018",
      "location": "Barcelona",
      "name": "FuckUp Nights Barcelona",
      "url": "https://www.conferize.com/fuckupnightsbarcelona1018/register"
    },
    {
      "date": "18 SEPTEMBER 2018",
      "location": "Barcelona",
      "name": "Digital Marketing Strategy for Crowdfunding @RoadAhead",
      "url": "https://business.facebook.com/events/183389675645238/"
    },
    {
      "date": "24 JULY 2018",
      "location": "Barcelona",
      "name": "IGTV y el futuro del Instagram @RoadAhead",
      "url": "https://roadahead.typeform.com/to/pHMbE9"
    },
    {
      "date": "13 JULY 2018",
      "location": "Lisbon",
      "name": "Kinnernet Portugal",
      "url": "http://kinnernet.pt/"
    },
    {
      "date": "27 JUNE 2018",
      "location": "Barcelona",
      "name": "Ladies, Wine & Design @ Galleria Cromo",
      "url": "http://ladieswinedesign.com/"
    },
    {
      "date": "21 JUNE 2018",
      "location": "Anaheim",
      "name": "VidCon 2018 @ Anaheim Convention Center",
      "url": "http://vidcon.com/"
    },
    {
      "date": "14 JUNE 2018",
      "location": "Barcelona",
      "name": "Off at Forum @ Parc del Forum",
      "url": "http://offatforum.com/"
    },
    {
      "date": "12 JUNE 2018",
      "location": "New York",
      "name": "Pop Up F5 @ Hilton Midtown",
      "url": "https://www.popupf5.com/"
    },
    {
      "date": "11 JUNE 2018",
      "location": "New York",
      "name": "2018 PromaxBDA Conference",
      "url": "https://promaxbda.org/events/current-events/promaxbda-the-conference-2018"
    },
    {
      "date": "2 JUNE 2018",
      "location": "Tokyo",
      "name": "Motion Plus Design",
      "url": "http://motion-plus-design.com/meetuptokyo2018/"
    },
    {
      "date": "28 MAY 2018",
      "location": "Barcelona",
      "name": "David Carson @ Escuela Superior de Diseño de Barcelona",
      "url": "https://www.esdesignbarcelona.com/es/eventos/conferencia-david-carson-en-esdesign"
    },
    {
      "date": "24 MAY 2018",
      "location": "Barcelona",
      "name": "Ladies, Wine & Design: Paloma Rincón & Ms. Balloon",
      "url": "https://ladieswinedesign.com/barcelona"
    },
    {
      "date": "12 APRIL 2018",
      "location": "Barcelona",
      "name": "Comunicació Gastronómica @Universitat Abat Oliba",
      "url": "https://www.uaoceu.es/"
    },
    {
      "date": "9 APRIL 2018",
      "location": "Barcelona",
      "name": "LAB ESdesign",
      "url": "http://esdesignbarcelona.com/"
    },
    {
      "date": "3 APRIL 2018",
      "location": "Barcelona",
      "name": "Influencer Marketing for Brands with Brittany Kystle",
      "url": "http://road.com.es/"
    },
    {
      "date": "21 MARCH 2018",
      "location": "Barcelona",
      "name": "Ladies, Wine & Design: Cecilia Tham & Laura Fernandez, Future Funded",
      "url": "http://ladieswinedesign.com/"
    },
    {
      "date": "16 MARCH 2018",
      "location": "Milan",
      "name": "Digital Design Days @ Megawatt Court",
      "url": "http://ddd.it/"
    },
    {
      "date": "14 MARCH 2018",
      "location": "Barcelona",
      "name": "Build a Powerful YouTube Channel with Chris Do",
      "url": "https://www.thefutur.com/"
    },
    {
      "date": "13 MARCH 2018",
      "location": "Barcelona",
      "name": "Social Media Trends Research @ IED",
      "url": "https://iedbarcelona.es/"
    },
    {
      "date": "10 MARCH 2018",
      "location": "Madrid",
      "name": "The Futur Madrid @neoland",
      "url": "https://www.thefutur.com/"
    },
    {
      "date": "6 MARCH 2018",
      "location": "Sitges",
      "name": "Digital 1 to 1",
      "url": "http://digital1to1spain.clubecommerce.com/"
    },
    {
      "date": "27 FEBRUARY 2018",
      "location": "Barcelona",
      "name": "Ladies, Wine & Design: Ane Guerra, Domestic Streamers",
      "url": "http://ladieswinedesign.com/"
    },
    {
      "date": "20 JANUARY 2018",
      "location": "Santa Monica",
      "name": "Tai Lopez's Private Mentor Conference",
      "url": "http://tailopez.com/"
    }
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
              className="flex items-center justify-center px-3 text-[0.75rem] text-secondary font-bold col-span-2 row-span-1 relative z-10 transition-colors hover:text-secondary uppercase"
            >
              DATE & LOCATION
            </div>

            {/* Bottom Left - Link */}
            <div
              className="border-t border-r border-white text-[0.75rem] col-span-2 row-span-1 relative flex items-start justify-start "
            >
              <div className="flex items-center justify-center px-3 text-secondary font-bold relative z-10 text-left h-full w-full transition-colors hover:text-secondary uppercase">
                <span className="ml-2 block uppercase">SPEAKING ENGAGEMENTS</span>
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
                  className="w-[30%] lg:w-[25%] whitespace-nowrap px-6 py-3 text-secondary transition-colors text-center border-r border-white uppercase"
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
                    className="block px-6 py-3 whitespace-nowrap text-secondary transition-colors text-start border-l border-white uppercase"
                  >
                    Upcoming Events
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
              <Link
                href={event.url}
                target="_blank"
                className="lg:flex justify-between items-center border-b-[0.8px] border-white/50 py-4"
              >
                <div className="flex items-center gap-10 lg:w-[40%]">
                  <div
                    className={`w-1.5 h-1.5 block rounded-full ml-2 ${
                      index < 4 ? "bg-secondary" : "bg-gray-400"
                    }`}
                  ></div>
                  <span className="text-sm font-gilroy font-semibold whitespace-nowrap">
                    {event.date} - {event.location}
                  </span>
                </div>
                <div className="lg:w-[50%] mt-8 lg:mt-0 flex items-center justify-between">
                  <span className="text-2xl font-caslon">{event.name}</span>
                  <NavigationArrowRight />
                </div>
              </Link>
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