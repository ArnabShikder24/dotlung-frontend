"use client";
import { useEffect, useState } from "react";
import DotImage from "../../assets/images/work-with-Dot.png";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
    <div className="container mx-auto mt-16 md:mt-0 overflow-x-hidden">
      <div className="flex flex-col justify-between lg:justify-start lg:flex-row lg:items-center font-gilroy h-[100vh] lg:h-auto mt-0 md:mt-12">
        <div className="flex-1 flex justify-center items-center lg:flex-none">
          <Image
            className="w-full scale-[1.2] md:scale-100 md:w-[980px] -z-20"
            src={DotImage}
            alt="Dotlung"
          />
        </div>
        <div
          className="h-auto lg:w-[510px] lg:-ml-40 lg:mt-10"
        >
          <div className="z-10 text-left max-w-2xl px-6">
            <h1 className="text-[2.5rem] lg:text-[4.9rem] font-bold uppercase leading-[38px] lg:leading-[75px] -z-10">
              TRAVEL <br /> & EAT <br /> WITH DOT
            </h1>
            <p className="font-caslon lg:text-2xl mt-6 lg:mt-8" style={{lineHeight:"1.5"}}>
              <p className="text-secondary italic">
                I’ve never been a fan of the empty selfie.
              </p>{" "}
                <p>You go
                  and stand in front of some place famous, take a
                  photo, smile, and walk away. That’s just not
                  what travel is about!</p>
            </p>
            <p className="uppercase items-center mt-2 lg:mt-10 py-3 text-white font-light font-gilroy" style={{fontSize:"12px"}}>
              Explore
              <span
                className="block w-[1px] h-24 bg-secondary ml-5 mt-3"
              ></span>
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
              Travel
            </span>{" "}
            allows you to become your best beast.
            Like the dragons from folklore, many of the
            best take parts of other animals to become
            the most powerful myth. Exposing yourself
            to new experiences can do the same for you!
          </p>

          <div className="absolute mx-5 mt-10 md:mt-0 lg:mx-0 lg:right-0 top-[350px] md:top-[40%] lg:top-1/2 max-w-[500px] text-sm md:text-base leading-relaxed font-asty">
            Everywhere I go, I immerse myself in the local culture, the local
            cuisine and get to the know what really makes that city, that
            village, that group, or that event tick. I want to try everything at
            least once and you should too! Some of my best experiences have
            been accidentally getting myself lost, asking someone for help,
            and finding that best out of the way restaurant, or an amazing
            cultural artifact, or maybe even seeing the usual history but from a
            different perspective. I may have been born in the United States,
            but I believe we should all be citizens of the world.
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
                    <div className="flex justify-between mb-5">
                      <p className="font-gilroy text-white text-[.625rem] md:text-[0.75rem] font-bold">{new Date(post.date).toLocaleDateString()}</p>
                      <p className="text-secondary font-caslon italic text-[1.125rem] md:text-[1.1875rem]">#{post.tags?.[0] || "blog"}</p>
                    </div>
                    <Link href={`/blog/${post.slug}`} className="block mt-2 mb-4">
                      <p className="text-[1.25rem] md:text-[1.5rem] font-caslon mb-4 leading-[1.5] md:leading-[1.3]">
                        {post.title.rendered}{" "}
                      </p>
                      <p className="text-[1.25rem] md:text-[1.5rem] font-caslon leading-[1.5] md:leading-[1.3]" dangerouslySetInnerHTML={{__html:post.excerpt.rendered}}/>
                      
                    </Link>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-[0.75rem] flex items-center gap-2 font-gilroy mt-3 font-bold"
                    >
                      READ MORE{" "}<ArrowRight size={16} className="mr-2 text-secondary" />
                    </Link>
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
                <Link href={'/blog'} className="block px-6 py-3 text-white hover:text-secondary transition-colors text-center border-l border-white">
                  BLOG
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
