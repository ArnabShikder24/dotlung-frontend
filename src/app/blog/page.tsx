"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Pagination from "../../components/Pagination";
import RippleButton from "../../components/RippleButton";
import ReadMoreLink from "../../components/ReadMoreLink";

export default function FeaturedSection() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isHovering, setIsHovering] = useState(false);  
  const [selectedCategory, setSelectedCategory] = useState("0");
  const [menuItems, setMenuItems] = useState([
    {title: "show all", id: "0"},
  ]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch("https://api.dotlung.com/wp-json/wp/v2/categories");
        const data = await res.json();

        const formattedItems = data.map(category => ({
          title: category.name.replace("&amp;", "&"),
          id: category.id,
        }));

        setMenuItems(prevItems => [
          ...prevItems,
          ...formattedItems
        ]);
        setSelectedCategory("0");
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }

    fetchCategories();
  }, []);

  useEffect(() => {
    async function fetchPosts() {
      setLoading(true);
      // If selectedCategory is "0", fetch all posts
      const categoryQuery = selectedCategory !== "0" ? `&categories=${selectedCategory}` : "";
      try {
        const res = await fetch(
          `https://api.dotlung.com/wp-json/wp/v2/posts?_embed&page=${currentPage}&per_page=5${categoryQuery}`
        );

        if (!res.ok) {
          throw new Error("Error fetching posts");
        }

        const data = await res.json();
        setPosts(data);
        setTotalPages(parseInt(res.headers.get("X-WP-TotalPages")) || 1);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, [currentPage, selectedCategory]);

  if (loading) return <p className="text-white">Loading...</p>;

  return (
    <div className="container mx-auto max-w-3xl pt-40 pb-20 px-5 lg:px-0 md:mt-0">
      <div className="flex items-center justify-between">
        <h1 className="text-6xl md:text-7xl font-gilroy text-white">BLOG</h1>
        <div
            className="relative min-w-[200px]"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <a
              href="#"
              className="px-6 py-3.5 text-white transition-colors text-center border border-white font-gilroy text-[0.75rem] flex items-center justify-center gap-3 uppercase whitespace-nowrap"
          >
            <div>
              FILTER BY {" "}
              <span className="text-secondary">
                {selectedCategory === "0"
                  ? ""
                  : menuItems.find(item => item.id === selectedCategory)?.title || ""}
              </span>
            </div>
            {
              !isHovering ? 
              <svg className="arrow-down w-3 h-3 text-secondary" fill="#f14336" viewBox="0 0 56 30" xmlns="http://www.w3.org/2000/svg" style={{ transform: "matrix(1, 0, 0, 1, 0, 0)" }}>
                <path d="M150,133.171573 L174.313708,108.857864 C175.094757,108.076816 176.361087,108.076816 177.142136,108.857864 C177.923184,109.638913 177.923184,110.905243 177.142136,111.686292 L151.686292,137.142136 C151.226398,137.602029 150.598256,137.79113 150,137.709439 C149.401744,137.79113 148.773602,137.602029 148.313708,137.142136 L122.857864,111.686292 C122.076816,110.905243 122.076816,109.638913 122.857864,108.857864 C123.638913,108.076816 124.905243,108.076816 125.686292,108.857864 L150,133.171573 Z" transform="translate(-122 -108)" fillRule="evenodd"></path>
                </svg> :
                <svg
                  className="arrow-down w-3 h-3 text-secondary"
                  fill="#f14336"
                  viewBox="0 0 56 30"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ transform: "matrix(-1, 0, 0, -1, 0, 0)" }}
                >
                  <path
                    d="M150,133.171573 L174.313708,108.857864 C175.094757,108.076816 176.361087,108.076816 177.142136,108.857864 C177.923184,109.638913 177.923184,110.905243 177.142136,111.686292 L151.686292,137.142136 C151.226398,137.602029 150.598256,137.79113 150,137.709439 C149.401744,137.79113 148.773602,137.602029 148.313708,137.142136 L122.857864,111.686292 C122.076816,110.905243 122.076816,109.638913 122.857864,108.857864 C123.638913,108.076816 124.905243,108.076816 125.686292,108.857864 L150,133.171573 Z"
                    transform="translate(-122 -108)"
                    fillRule="evenodd"
                  ></path>
                </svg>
            }
            </a>
            {/* Dropdown Menu */}
            {isHovering && (
              <div className="absolute left-0 w-full z-20">
                {menuItems.map((item, index) => (
                  <div
                    key={item.title}
                    className={`border border-white opacity-0 bg-primary cursor-pointer
                      ${index === 0 ? "animate-slide-in-1" : ""}
                      ${index === 1 ? "animate-slide-in-2" : ""}
                      ${index === 2 ? "animate-slide-in-3" : ""}
                      ${index === 3 ? "animate-slide-in-4" : ""}
                      ${index === 4 ? "animate-slide-in-5" : ""}
                    `}
                    onClick={() => {
                      setSelectedCategory(item.id);
                      setIsHovering(false);
                    }}
                  >
                    <span className={`block px-4 py-3.5 hover:text-secondary transition-colors text-center font-gilroy text-[.75rem] uppercase ${item.id === selectedCategory ? 'text-secondary' : ''}`}>
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

      </div>
      
      {
        posts.length === 0 && (
          <p className="text-white text-center mt-10 font-gilroy text-[1rem py-20">No posts available.</p>
        )}
      {posts.map((post, index) => {
        const isOdd = index % 2 === 1;
        const categoryTitle = menuItems.find(item => item.id === post.categories[0])?.title.replace(/\s+/g, "");
        return (
          <article 
            key={post.id} 
            className={`my-10 border-b border-secondary pb-4 w-full max-w-[525px] mb-8 md:mb-16 lg:mb-[250px] relative ${
              isOdd ? 'lg:ml-[300px]' : ''
            }`}
          >
            <div className="flex items-center justify-between text-secondary mb-2">
              <span className="font-gilroy text-white text-[.625rem] md:text-[0.75rem] font-bold">
                {new Date(post.date).toLocaleDateString()}
              </span>
              <span className="text-secondary font-caslon italic text-[1.125rem] md:text-[1.1875rem] lowercase">
                #{menuItems.find(item => item.id === post.categories[0])?.title.replace(/\s+/g, "") || "uncategorized"}
              </span>
            </div>
            
            <RippleButton href={`/blog/${post.slug}?category=${categoryTitle}`}>
              <h2 className="text-[1.25rem] md:text-[1.5rem] font-caslon mb-4 leading-[1.5] md:leading-[1.3]">
                {post.title.rendered}
              </h2>
            </RippleButton>
            
            <p 
              className="text-[1.25rem] md:text-[1.5rem] font-caslon leading-[1.5] md:leading-[1.3] mb-4" 
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} 
            />

            <ReadMoreLink href={`/blog/${post.slug}?category=${categoryTitle}`} />

            {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ? (
              <Image
                src={post._embedded["wp:featuredmedia"][0].source_url}
                width={550}
                height={350}
                alt={post.title.rendered}
                className={`mt-4 w-full h-auto rounded-lg sm:absolute sm:-z-50 sm:w-[300px] sm:h-[200px] md:w-[350px] md:h-[233px] lg:w-[550px] lg:h-[350px] object-cover ${
                  isOdd 
                    ? 'sm:top-[80px] md:top-[100px] lg:top-[150px] sm:-left-[150px] md:-left-[200px] lg:-left-[250px] xl:-left-[300px]'  // Odd index: image on left
                    : 'sm:top-[80px] md:top-[100px] lg:top-[150px] sm:-right-[150px] md:-right-[200px] lg:-right-[250px] xl:-right-[300px]' // Even index: image on right
                }`}
              />
            ) : (
              <p className="text-white">No Image Available</p>
            )}
          </article>
        );
      })}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}
