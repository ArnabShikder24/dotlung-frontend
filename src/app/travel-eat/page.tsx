"use client";
import { useEffect, useState } from "react";
import DotImage from "../../assets/images/work-with-Dot.png";
import Image from "next/image";
import { motion } from "framer-motion";

import Link from "next/link";
const TravelEat = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [recentPosts, setRecentPosts] = useState([]);

useEffect(() => {
  async function fetchRecentPosts() {
    try {
      const res = await fetch(
        "https://dotlung.com/wp-json/wp/v2/posts?per_page=5&_embed"
      );
      const data = await res.json();
      setRecentPosts(data);
    } catch (error) {
      console.error("Error fetching recent posts:", error);
    }
  }

  fetchRecentPosts();
}, []);


  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div className="container mx-auto">
      <div className="lg:flex items-end mx-5 lg:mx-0">
        <Image className="w-[980px]" src={DotImage} alt="dot Image" />
        <div className="lg:-ml-40 lg:w-[380px] mx-auto lg:pt-28">
          <h1 className="text-[60px] lg:text-[80px] font-extrabold font-gilroy leading-[85px]">
            TRAVEL <br /> & EAT <br /> WITH DOT
          </h1>
          <p className="font-caslon text-lg mt-5 mb-14">
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
              </span>{" "}
              It&apos;s not just your mind by itself, but without <br />
              understanding the concepts of online, you will not fully
              appreciate what you can accomplish utilising the digital
              landscape.
            </p>
          </div>

          <div className="absolute mx-5 lg:mx-0 lg:right-10 top-1/2 max-w-sm">
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
            {recentPosts.map((post, index) => (
              <article
                key={index}
                className="grid md:grid-cols-2 items-center gap-4"
              >
                <div className="flex justify-center items-center border-b-2 border-secondary" style={{height:'100%'}}>
                  <div>
                    <div className="text-sm opacity-80 flex justify-between  pr-5">
                      <p>{new Date(post.date).toLocaleDateString()}</p>
                      <p className="text-secondary">#{post.tags?.[0] || "blog"}</p>
                    </div>
                    <a href={post.link} className="block mt-2">
                      <span className="text-2xl  italic text-secondary">
                      {post.title.rendered}{" "}
                      </span>
                      <span className="text-white text-lg mt-1" dangerouslySetInnerHTML={{__html:post.excerpt.rendered}}/>
                      
                    </a>
                    <a
                      href={`/blog/${post.slug}`}
                      className="text-white text-sm inline-block mt-3 font-bold"
                    >
                      Read more →
                    </a>
                  </div>
                </div>

                {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
                  <figure className="relative w-full ">
                    <a href={`/blog/${post.slug}`}>
                      <Image
                          src={post._embedded["wp:featuredmedia"][0].source_url}
                          alt={post.title.rendered}
                          width={500}
                        height={500}
                        className="w-full"
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
        <div className="max-w-3xl flex-1 mx-5 lg:mx-20 text-xs">
          <div className="relative">
            <div className="border border-white flex w-full">
              <div className="w-3/4 relative">
                <div className="absolute w-full h-[1px] bg-white transform -rotate-[3.9deg] top-1/2 -translate-y-1/2 z-10"></div>
                <div className="h-full" />
              </div>

              <div className="relative w-[30%] lg:w-1/4">
                <Link href={'/blog'} className="block px-6 py-3 text-white hover:text-orange-500 transition-colors text-center border-l border-white">
                  Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelEat;
