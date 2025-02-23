"use client";
import { useState } from "react";
import DotImage from "../../assets/images/work-with-Dot.png";
import ShapeBg from "../../components/ShapeBg";
import Image from "next/image";
import { motion } from "framer-motion";
import Blog1 from "../../../public/Dotlungimages/Dotlungimages/blog1.png";
const TravelEat = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const posts = [
    {
      date: "11.02.2018",
      tag: "#learnwithdot",
      title: "Ladies, Wine, Barcelona.",
      description:
        "But not on their own. I create strong online identities & communities and develop kickass.",
      link: "/post-03/",
      image: Blog1,
    },
    {
      date: "11.02.2018",
      tag: "#travelwithdot",
      title: "Ladies, Wine, Barcelona.",
      description:
        "But not on their own. I create strong online identities & communities and develop kickass.",
      link: "/post-02/",
      image: Blog1,
    },
    {
      date: "10.02.2018",
      tag: "#workwithdot",
      title: "Ladies, Wine, Barcelona.",
      description:
        "But not on their own. I create strong online identities & communities and develop kickass.",
      link: "/post-01/",
      image: Blog1,
    },
  ];

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div className="container mx-auto">
      <ShapeBg />
      <div className="flex items-end">
        <Image className="w-[980px]" src={DotImage} alt="dot Image" />
        <div className="-ml-40">
          <h1 className="text-[80px] font-extrabold font-gilroy leading-[85px]">
            TRAVEL <br /> & EAT <br /> WITH DOT
          </h1>
          <p className="font-caslon text-lg w-[380px] mt-5 mb-14">
            <span className="italic text-secondary">
              I&apos;ve never been a fan of the empty selfie.
            </span>{" "}
            You go and stand in front of some place famous, take a photo, smile,
            and walk away. That&apos;s just not what travel is about!
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
            className="absolute w-[500px] h-[500px] bg-[#e74c3c] rounded-full"
            animate={{
              x: mousePosition.x / 10 - 50,
              y: mousePosition.y / 10 - 50,
            }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          />

          <div className="absolute left-10 top-1/4 max-w-md font-caslon">
            <p className="text-2xl mt-2">
              <span className="text-2xl italic text-secondary">
                Make your mind magic.
              </span>{" "}
              It&apos;s not just your mind by itself, but without <br />
              understanding the concepts of online, you will not fully
              appreciate what you can accomplish utilising the digital
              landscape.
            </p>
          </div>

          <div className="absolute right-10 top-1/2 max-w-sm">
            <p className="text-sm leading-relaxed font-asty">
              I have been teaching social media, online marketing, digital
              design and more at several institutions based in Barcelona,
              including Universitat de Barcelona, Toulouse Business School,
              ESdesign Escuela Superior de Diseño de Barcelona, and more. My
              teaching is not just in the classroom, as I love to share my
              knowledge with my clients in order for them to share the great
              message of social! I also create learning communities online
              between many of my clients, in order to leverage all the great
              things we can learn from each. So yes, I teach, but I also
              facilitate, led and direct you in the best ways to become your own
              fabulous unicorns!
            </p>
          </div>
        </div>
      </div>
      <div className=" text-white py-10 px-6">
        <section className="max-w-5xl mx-auto">
          <header className="mb-6">
            <h1 className="text-1xl font-bold text-center text-secondary">
              Latest Posts
            </h1>
          </header>

          <div className="">
            {posts.map((post, index) => (
              <article
                key={index}
                className="grid md:grid-cols-2 items-center gap-4"
              >
                <div className="flex justify-center items-center border-b-2 border-secondary" style={{height:'100%'}}>
                  <div>
                    <div className="text-sm opacity-80 flex justify-between  pr-5">
                      <p>{post.date}</p>
                      <p className="text-secondary">{post.tag}</p>
                    </div>
                    <a href={post.link} className="block mt-2">
                      <span className="text-2xl  italic text-secondary">
                        {post.title}{" "}
                      </span>
                      <span className="text-white text-lg mt-1">
                        {post.description}
                      </span>
                    </a>
                    <a
                      href={post.link}
                      className="text-white text-sm inline-block mt-3 font-bold"
                    >
                      Read more →
                    </a>
                  </div>
                </div>

                {post.image && (
                  <figure className="relative w-full ">
                    <a href={post.link}>
                      <Image
                        src={Blog1}
                        alt={post.title}
                        // fill
                        style={{ objectFit: "cover", }}
                      />
                    </a>
                  </figure>
                )}
              </article>
            ))}
          </div>
        </section>
      </div>
      <div className="flex items-center justify-center font-gilroy py-40">
        <div className="max-w-3xl flex-1 mx-20 text-xs">
          <div className="relative">
            <div className="border border-white flex w-full">
              <div className="w-3/4 relative">
                <div className="absolute w-full h-[1px] bg-white transform -rotate-[3.9deg] top-1/2 -translate-y-1/2 z-10"></div>
                <div className="h-full" />
              </div>

              <div className="relative w-1/4">
                <p className="block px-6 py-3 text-white hover:text-orange-500 transition-colors text-center border-l border-white">
                  Blog
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelEat;
