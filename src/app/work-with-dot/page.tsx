"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import DotImage from "../../assets/images/work-with-Dot.png";
import { PathNames } from "../../routes/index.route";
import DotSection from "../../components/DotSection";
import SectionHeader from "../../components/SectionHeader";
import RevealOnScroll from "../../components/RevealOnScroll";
import RevealOnScrollSpan from "../../components/RevealOnScrollSpan";
import AccordionItem from "../../components/AccordionItem";
import AnimatedLineVertical from "../../components/AnimatedLineVertical";

const WorkWithDot = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  const items = [
    {
      width: "95%",
      title: "Meta Viewpoints",
      content:
        "Launched Instagram profile. Created Facebook Ads Campaign for 12 countries. Lowered Cost Per Install by 35% with geo-localization content strategy. Lead community management strategy and implementation.",
      links: [
        {
          title: "Viewpoints",
          url: "https://viewpoints.fb.com/",
        },
        {
          title: "Instagram",
          url: "https://www.instagram.com/metaviewpoints/",
        },
        {
          title: "YouTube",
          url: "http://www.youtube.com/user/YouTube",
        },
      ],
    },
    {
      width: "80%",
      title: "Wix Playground",
      content:
        "Wix provides a world-class platform to over 150 million users in 190 countries, empowering everyone to express themselves and build their online presence. Whether you’re an entrepreneur, designer, developer, musician, photographer or restaurant owner, you’ll find specialized features to create a professional website and manage your business. With Wix Playground we created the social media strategy and Instagram account launch to showcase Wix Design Studio!",
      links: [
        {
          title: "Wix Playground",
          url: "https://www.wix.com/playground/",
        },
        {
          title: "Wix Academy",
          url: "https://www.wix.com/playground/academy",
        },
        {
          title: "Instagram",
          url: "http://instagram.com/wixplayground",
        },
      ],
    },
    {
      width: "87%",
      title: "Mixtiles Art",
      content:
        "Your favorite art shop on the net! Mixtiles Art is the easiest and most affordable way to decorate with art! Discover unique art and support rising artists from around the world. High quality framed art prints all come with Mixtiles' patent sticky-on frames that last forever.",
      links: [
        {
          title: "Mixtiles Art",
          url: "http://mixtiles.com/art",
        },
        {
          title: "Instagram",
          url: "http://instagram.com/mixtiles_art",
        },
      ],
    },
    {
      width: "66%", 
      title: "OFFF",
      content:
        "OFFF is a community inviting all those who are eager to learn to participate and get inspired in a three-day journey of conferences, workshops, activities and performances. What is it about exactly? It’s a combination of Offline/Online designers, Motion Designers, Thinkers, Sound Designers, Graphic Designers, Theorists, Developers, Professionals, Students… Putting the titles aside, OFFF is made for the curious.",
      links: [
        {
          title: "WEBSITE",
          url: "http://offf.barcelona/",
        },
        {
          title: "FACEBOOK",
          url: "https://www.facebook.com/OFFFevents",
        },
        {
          title: "INSTAGRAM",
          url: "https://www.instagram.com/offfest/",
        },
      ],
    },
    {
      width: "90%", 
      title: "Motionographer",
      content:
        "Motionographer is a source of inspiration for designers, animators and storytellers sharing work from studios, freelancers, and students. It features stories giving readers a deep understanding of the work and industry. Motionographer is not just about motion design, it’s about inspiring those involved in the industry!",
      links: [
        {
          title: "WEBSITE",
          url: "http://motionographer.com/",
        },
        {
          title: "FACEBOOK",
          url: "https://www.facebook.com/motionographer",
        },
      ],
    },
    {
      width: "75%",
      title: "F5",
      content:
        "F5 IS A CREATIVITY FESTIVAL EXPLORING THE INTERSECTION OF DESIGN, ART & TECHNOLOGY. F5 brings together the thinkers and doers that are breaking ground and shaping new standards in media and design. It’s an essential meeting point for future-minded individuals with the power to create lasting change.",
      links: [
        { title: "WEBSITE", url: "http://f5fest.com/" },
        { title: "INSTAGRAM", url: "http://instagram.com/f5fest" },
        { title: "FACEBOOK", url: "http://fb.me/f5fest" },
      ],
    },
    {
      width: "82%",
      title: "Sonar+D",
      content:
        "Sónar+D is an international congress that explores how creativity is changing our present and imagining new futures, in collaboration with researchers, innovators and business leaders.",
      links: [
        { title: "WEBSITE", url: "https://sonarplusd.com/" },
        { title: "FACEBOOK", url: "https://www.facebook.com/sonarplusd" },
        { title: "INSTAGRAM", url: "https://www.instagram.com/sonarplusd/" },
      ],
    },
    {
      width: "70%",
      title: "Off at Forum",
      content:
        "Off at Forum — Barcelona's official Off Sonar parties at Parc del Forum with headliners like Circoloco, Diynamic Outdoor, Afterlife, A:rpia:r , Ricardo Villalobos, SecretSundaze, Soul Clap & Wolf + Lamb , Crewlove and many more.",
      links: [
        { title: "FACEBOOK", url: "https://www.facebook.com/offatforum/" },
      ],
    },
    {
      width: "93%",
      title: "ESdesign Barcelona",
      content:
        "Formamos a profesionales para convertirles en motor del cambio que les permita la trasformación del entorno y la generación de nuevos espacios, desarrollando la creatividad y la innovación.",
      links: [
        { title: "ESdesign Website", url: "https://www.esdesignbarcelona.com/" },
        { title: "ESdesign Instagram", url: "http://instagram.com/esdesignbarcelona" },
      ],
    },
    {
      width: "68%",
      title: "Digital Design Days",
      content:
        "Digital Design Days is a 3-day event offering exclusive conferences, the third edition of Offf Milano, professional workshops, digital showcases & installations, a party and many networking activities.",
      links: [
        { title: "WEBSITE", url: "http://ddd.it/" },
        { title: "FACEBOOK", url: "https://www.facebook.com/digitaldesigndays" },
        { title: "INSTAGRAM", url: "https://www.instagram.com/digitaldesigndays/" },
      ],
    },
    {
      width: "85%",
      title: "Nipple Magazine",
      content:
        "We launched the world's first Instastory Nipple Exhibition to fight gender inequality on Instagram.",
      links: [
        { title: "Nipple Magazine", url: "http://instagram.com/nipplemagazine" },
        {
          title: "Stop Nipple Censorship Campaign",
          url: "http://stopnipplecensorship.org/",
        },
      ],
    },
    {
      width: "78%",
      title: "Ladies, Wine & Design Barcelona",
      content:
        "Ladies, Wine & Design was started by Jessica Walsh after writing this article as an initiative to foster women creativity. Only a tiny percent of creative directors are women, and LW&D wants to help change this through mentorship circles, portfolio reviews, and creative meet-ups.",
      links: [
        { title: "WEBSITE", url: "http://ladieswinedesign.com/" },
        { title: "INSTAGRAM", url: "https://www.instagram.com/ladieswinedesignbcn/" },
      ],
    },
    {
      width: "91%",
      title: "Catalunya Cannabis",
      content:
        "Catalunya Canabis is a private members club based in Barcelona sharing the culture of Canabis in a more exclusive environment focusing on experiential opportunities including food, beverages, locations, and the combination of those elements.",
      links: [
        { title: "INSTAGRAM", url: "http://instagram.com/catalunyacannabis/" },
      ],
    },
    {
      width: "73%",
      title: "Paper Sessions by OCB",
      content:
        "OCB's Paper Sessions — a virtual concert venue to enjoy eclectic music all year long. Paper Sessions is a YouTube channel for livestream concerts with new artists every month hosted by OCB.",
      links: [
        { title: "WEBSITE", url: "http://ocbpapersessions.com/" },
        { title: "FACEBOOK", url: "https://www.facebook.com/OCBsessions/" },
        { title: "INSTAGRAM", url: "https://www.instagram.com/ocbsessions/" },
      ],
    },
    {
      width: "60%",
      title: "Wok to Walk",
      content: "Global Social Media Strategy across 200 franchises.",
      links: [],
    },
  ];

  // State to track which accordion item is currently open
  const [activeIndex, setActiveIndex] = useState(0);

  // Toggle accordion function
  const toggleAccordion = (index: number | null) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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
                WORK <br /> WITH DOT
              </h1>
            </RevealOnScroll>
              <p className="font-caslon lg:text-2xl mt-6 lg:mt-8" style={{ lineHeight: "1.5" }}>
                <RevealOnScrollSpan>
                  <span className="text-secondary italic">
                    Mythical digital magic.
                  </span>{" "}
                </RevealOnScrollSpan>
                <RevealOnScrollSpan>
                  <span>I have worked worldwide</span>
                </RevealOnScrollSpan>
                <RevealOnScrollSpan>
                  <span>weaving wonders for top brands, events, and</span>
                </RevealOnScrollSpan>
                <RevealOnScrollSpan>
                  <span>concepts.</span>
                </RevealOnScrollSpan>
              </p>
            <p className="uppercase items-center mt-2 lg:mt-10 py-3 text-white font-light font-gilroy" style={{ fontSize: "12px" }}>
              <RevealOnScroll>
                Explore
              </RevealOnScroll>
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
            <p className="absolute mx-5 lg:mx-0 lg:left-10 top-[22%] max-w-[30rem] font-caslon text-[1.375rem] lg:text-[1.75rem]">
                <span className="italic text-secondary mr-1">
                  <RevealOnScrollSpan>
                    Together 
                  </RevealOnScrollSpan>
                </span>
                  <RevealOnScrollSpan>
                    we can make mythical digital magic.
                  </RevealOnScrollSpan>
                  <RevealOnScrollSpan>
                    I create dominant and in demand online
                  </RevealOnScrollSpan>
                  <RevealOnScrollSpan>
                    identities and communities by developing
                  </RevealOnScrollSpan>
                  <RevealOnScrollSpan>
                    kick ass campaigns utilizing unique content
                  </RevealOnScrollSpan>
                  <RevealOnScrollSpan>
                    specific to your brand ethos.
                  </RevealOnScrollSpan>
            </p>
            <div className="absolute mx-5 mt-10 md:mt-0 lg:mx-0 lg:right-0 top-[350px] md:top-[40%] lg:top-1/2 max-w-[500px] text-sm md:text-base leading-relaxed font-asty">
              <RevealOnScrollSpan>The digital world can be a difficult one to navigate.</RevealOnScrollSpan>
              <RevealOnScrollSpan>Sometimes you need that unicorn to guide you through the good and the bad to enhance, target, and execute your best strategy.</RevealOnScrollSpan>
              <RevealOnScrollSpan>This is where I thrive.</RevealOnScrollSpan>
              <RevealOnScrollSpan>I’ve run campaigns for agencies, headed up social media teams for a variety of companies, and have initiated my own start-ups in graphic design, video production, and more.</RevealOnScrollSpan>
              <RevealOnScrollSpan>I can not only lend my expertise and experience, but I’ve walked the walk, not just talked the talk!</RevealOnScrollSpan>
            </div>
        </div>
      </div>
          
      <RevealOnScroll>
        <SectionHeader title="PROJECTS" />
      </RevealOnScroll>

      <div className="flex mx-5 lg:justify-center mt-16 overflow-hidden lg:ml-[320px]">
        <div className="text-white text-2xl max-w-[500px]">
          {items.map((item, index) => (
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
        <DotSection
          topRightText="LEARN WITH DOT"
          topRightLink={PathNames.learnWithDot}
          bottomLeftText="TRAVEL & EAT WITH DOT"
          bottomLeftLink={PathNames.travelEat}
        />
      </RevealOnScroll>
    </div>
  );
};

export default WorkWithDot;
