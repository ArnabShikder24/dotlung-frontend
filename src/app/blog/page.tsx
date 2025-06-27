"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Pagination from "../../components/Pagination";
import NavigationArrow from "../../components/NavigationArrow";
import RippleButton from "../../components/RippleButton";

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
        const res = await fetch("https://dotlung.com/wp-json/wp/v2/categories");
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

  // useEffect(() => {
  //   async function fetchPosts() {
  //     try {
  //       const res = await fetch(
  //         "https://dotlung.com/wp-json/wp/v2/posts?_embed"
          
  //       );
  //       const data = await res.json();
  //       setPosts(data);
  //     } catch (error) {
  //       console.error("Error fetching posts:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }

  //   fetchPosts();
  // }, []);
  useEffect(() => {
    async function fetchPosts() {
      setLoading(true);
      // If selectedCategory is "0", fetch all posts
      const categoryQuery = selectedCategory !== "0" ? `&categories=${selectedCategory}` : "";
      try {
        const res = await fetch(
          `https://dotlung.com/wp-json/wp/v2/posts?_embed&page=${currentPage}&per_page=5${categoryQuery}`
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
      {/* {posts.map((post) => (
        <article key={post.id} className="my-10 border-b border-secondary pb-4 lg:w-[525px] mb-[200px] relative">
          <div className="flex items-center justify-between text-secondary mb-2">
            <span className="font-gilroy text-white text-[.625rem] md:text-[0.75rem] font-bold">{new Date(post.date).toLocaleDateString()}</span>
            <span className="text-secondary font-caslon italic text-[1.125rem] md:text-[1.1875rem]">#{post.categories}</span>
          </div>
          <RippleButton href={`/blog/${post.slug}`}>
            <h2 className="text-[1.25rem] md:text-[1.5rem] font-caslon mb-4 leading-[1.5] md:leading-[1.3]">{post.title.rendered}</h2>
          </RippleButton>
          <p className="text-[1.25rem] md:text-[1.5rem] font-caslon leading-[1.5] md:leading-[1.3] mb-4" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
          <RippleButton href={`/blog/${post.slug}`} className="text-[0.75rem] flex items-center gap-2 font-gilroy mt-3 font-bold">
            READ MORE {" "}<NavigationArrow direction="right" className="mr-2 text-secondary" />
          </RippleButton>

          {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ? (
            <Image
              src={post._embedded["wp:featuredmedia"][0].source_url}
              width={450}
              height={300}
              alt={post.title.rendered}
              className="mt-4 absolute -right-[300px] -z-50 top-[150px]"
            />
          ) : (
            <p className="text-white">No Image Available</p>
          )}
        </article>
      ))} */}
      {/* {posts.map((post, index) => {
        const isOdd = index % 2 === 1;
        
        return (
          <article 
            key={post.id} 
            className={`my-10 border-b border-secondary pb-4 lg:w-[525px] mb-[250px] relative ${
              isOdd ? 'lg:ml-[300px]' : ''
            }`}
          >
            <div className="flex items-center justify-between text-secondary mb-2">
              <span className="font-gilroy text-white text-[.625rem] md:text-[0.75rem] font-bold">
                {new Date(post.date).toLocaleDateString()}
              </span>
              <span className="text-secondary font-caslon italic text-[1.125rem] md:text-[1.1875rem]">
                #{post.categories}
              </span>
            </div>
            
            <RippleButton href={`/blog/${post.slug}`}>
              <h2 className="text-[1.25rem] md:text-[1.5rem] font-caslon mb-4 leading-[1.5] md:leading-[1.3]">
                {post.title.rendered}
              </h2>
            </RippleButton>
            
            <p 
              className="text-[1.25rem] md:text-[1.5rem] font-caslon leading-[1.5] md:leading-[1.3] mb-4" 
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} 
            />
            
            <RippleButton 
              href={`/blog/${post.slug}`} 
              className="text-[0.75rem] flex items-center gap-2 font-gilroy mt-3 font-bold"
            >
              READ MORE <NavigationArrow direction="right" className="mr-2 text-secondary" />
            </RippleButton>

            {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ? (
              <Image
                src={post._embedded["wp:featuredmedia"][0].source_url}
                width={550}
                height={300}
                alt={post.title.rendered}
                className={`mt-4 absolute -z-50 top-[170px] ${
                  isOdd 
                    ? '-left-[300px]'  // Odd index: image on left
                    : '-right-[300px]' // Even index: image on right
                }`}
              />
            ) : (
              <p className="text-white">No Image Available</p>
            )}
          </article>
        );
      })} */}
      {
        posts.length === 0 && (
          <p className="text-white text-center mt-10 font-gilroy text-[1rem py-20">No posts available.</p>
        )}
      {posts.map((post, index) => {
        const isOdd = index % 2 === 1;
        console.log(post);
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

            <RippleButton
              href={`/blog/${post.slug}?category=${categoryTitle}`} 
              className="text-[0.75rem] flex items-center gap-2 font-gilroy mt-3 font-bold"
            >
              READ MORE <NavigationArrow direction="right" className="mr-2 text-secondary" />
            </RippleButton>

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


// "use client";

// import Image from "next/image";
// import BlogImage from "../../../public/Dotlungimages/Dotlungimages/blog1.png";
// import { useState } from "react";
// import Pagination from "../../components/Pagination";
// import Blog1 from "../../../public/Dotlungimages/Dotlungimages/blog1.png";
// import { PathNames } from "../../routes/index.route";
// import Link from "next/link";

// export default function FeaturedSection() {
//   const [isHovering, setIsHovering] = useState(false);

//   const menuItems = [
//     { title: "SHOW ALL" },

//     { title: "WORK WITH DOT" },
//     { title: "LEARN WITH DOT" },
//     { title: "TRAVEL / EAT WITH DOT" },
//   ];
//   const posts = [
//     {
//       date: "11.02.2018",
//       tag: "#learnwithdot",
//       title: "Ladies, Wine, Barcelona.",
//       description:
//         "But not on their own. I create strong online identities & communities and develop kickass.",
//       link: "/blog/1",
//       image: Blog1,
//     },
//     {
//       date: "11.02.2018",
//       tag: "#travelwithdot",
//       title: "Ladies, Wine, Barcelona.",
//       description:
//         "But not on their own. I create strong online identities & communities and develop kickass.",
//       link: "/blog/2",
//       image: Blog1,
//     },
//     {
//       date: "10.02.2018",
//       tag: "#workwithdot",
//       title: "Ladies, Wine, Barcelona.",
//       description:
//         "But not on their own. I create strong online identities & communities and develop kickass.",
//       link: "/blog/3",
//       image: Blog1,
//     },
//   ];

//   return (
//     <div className="container mx-auto max-w-3xl">
//       <div className="mt-24 flex justify-between">
//         <h1 className=" text-7xl">Blog</h1>
//         <div
//           className="relative w-1/4"
//           onMouseEnter={() => setIsHovering(true)}
//           onMouseLeave={() => setIsHovering(false)}
//         >
//           <a
//             href="#"
//             className="block px-6 py-3 text-white hover:text-secondary transition-colors text-center border border-white"
//           >
//             FILTER BY
//           </a>

//           {/* Dropdown Menu */}
//           {isHovering && (
//             <div className="absolute left-0 w-full z-20">
//               {menuItems.map((item, index) => (
//                 <div
//                   key={item.title}
//                   className={border border-white border-t-0 opacity-0
//                           ${index === 0 ? "animate-slide-in-1" : ""}
//                           ${index === 1 ? "animate-slide-in-2" : ""}
//                           ${index === 2 ? "animate-slide-in-3" : ""}}
//                 >
//                   <span className="block px-4 py-3 text-white hover:text-secondary transition-colors text-center text-xs">
//                     {item.title}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//       <div>
//         <div
//           className="container mx-auto max-w-3xl"
//           style={{ height: "32rem" }}
//         >
//           <div className="relative pb-40 pt-32" style={{ width: "30rem" }}>
//             <div
//               className=" text-white relative font-sans  border-secondary"
//               style={{ borderBottom: "1px solid #f64c3e", width: "29rem" }}
//             >
//               <div className="flex justify-between text-xs text-orange-400">
//                 <span>11.02.2018</span>
//                 <span className="text-secondary">#navelouibab</span>
//               </div>

//               <div className="mt-6">
//                 <span className="italic text-secondary text-lg mb-4">
//                   Ladies, Wine, Barcelona.{" "}
//                 </span>
//                 <span className="text-white text-xl leading-tight">
//                   But not on their own.I create
//                   <br />
//                   <span>strong online</span> identities & communities and
//                   develop
//                   <br />
//                   kickass campaigns.
//                 </span>
//               </div>

//               <a
//                 href="#"
//                 className="flex items-center mt-8 text-secondary font-semibold hover:underline uppercase tracking-wide mb-6"
//               >
//                 READ MORE
//                 <svg
//                   className="ml-2 w-5 h-5"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 512 512"
//                 >
//                   <path
//                     d="M322.2 349.7c-3.1-3.1-3-8 0-11.3l66.4-74.4H104c-4.4 0-8-3.6-8-8s3.6-8 8-8h284.6l-66.3-74.4c-2.9-3.4-3.2-8.1-.1-11.2 3.1-3.1 8.5-3.3 11.4-.1 0 0 79.2 87 80 88s2.4 2.8 2.4 5.7-1.6 4.9-2.4 5.7-80 88-80 88c-1.5 1.5-3.6 2.3-5.7 2.3-2.2 0-4.3-.8-5.7-2.3z"
//                     fill="currentColor"
//                   />
//                 </svg>
//               </a>
//             </div>
//             <Image
//               src={BlogImage}
//               width={450}
//               height={390}
//               className=" absolute top-28 left-80 -z-10"
//               alt="Blog image"
//             />
//           </div>
//         </div>

//         <div
//           className="container mx-auto max-w-3xl"
//           style={{ height: "32rem" }}
//         >
//           <div className="relative pb-40">
//             <div className="relative flex flex-row-reverse items-center">
//               {/* Text Section */}
//               <div
//                 className="text-white relative font-sans border-secondary"
//                 style={{ borderBottom: "1px solid #f64c3e", width: "29rem" }}
//               >
//                 <div className="flex justify-between text-xs text-orange-400">
//                   <span>11.02.2018</span>
//                   <span className="text-secondary">#travelwithdot</span>
//                 </div>

//                 <div className="mt-6">
//                   <span className="italic text-secondary text-lg mb-4">
//                     Ladies, Wine, Barcelona.{" "}
//                   </span>
//                   <span className="text-white text-xl leading-tight">
//                     But not on their own. I create
//                     <br />
//                     <span>strong online</span> identities & communities and
//                     develop
//                     <br />
//                     kickass campaigns.
//                   </span>
//                 </div>

//                 <a
//                   href="#"
//                   className="flex items-center mt-8 text-secondary font-semibold hover:underline uppercase tracking-wide mb-6"
//                 >
//                   READ MORE
//                   <svg
//                     className="ml-2 w-5 h-5"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 512 512"
//                   >
//                     <path
//                       d="M322.2 349.7c-3.1-3.1-3-8 0-11.3l66.4-74.4H104c-4.4 0-8-3.6-8-8s3.6-8 8-8h284.6l-66.3-74.4c-2.9-3.4-3.2-8.1-.1-11.2 3.1-3.1 8.5-3.3 11.4-.1 0 0 79.2 87 80 88s2.4 2.8 2.4 5.7-1.6 4.9-2.4 5.7-80 88-80 88c-1.5 1.5-3.6 2.3-5.7 2.3-2.2 0-4.3-.8-5.7-2.3z"
//                       fill="currentColor"
//                     />
//                   </svg>
//                 </a>
//               </div>

//               {/* Image Section */}
//               <Image
//                 src={BlogImage}
//                 width={450}
//                 height={390}
//                 className="absolute top-28 right-80 -z-10"
//                 alt="Blog image"
//               />
//             </div>
//           </div>
//         </div>
//         <div
//           className="container mx-auto max-w-3xl"
//           style={{ height: "32rem" }}
//         >
//           <div className="relative pb-40" style={{ width: "30rem" }}>
//             <div
//               className=" text-white relative font-sans  border-secondary"
//               style={{ borderBottom: "1px solid #f64c3e", width: "29rem" }}
//             >
//               <div className="flex justify-between text-xs text-orange-400">
//                 <span>11.02.2018</span>
//                 <span className="text-secondary">#navelouibab</span>
//               </div>

//               <div className="mt-6">
//                 <span className="italic text-secondary text-lg mb-4">
//                   Ladies, Wine, Barcelona.{" "}
//                 </span>
//                 <span className="text-white text-xl leading-tight">
//                   But not on their own.I create
//                   <br />
//                   <span>strong online</span> identities & communities and
//                   develop
//                   <br />
//                   kickass campaigns.
//                 </span>
//               </div>

//               <a
//                 href="#"
//                 className="flex items-center mt-8 text-secondary font-semibold hover:underline uppercase tracking-wide mb-6"
//               >
//                 READ MORE
//                 <svg
//                   className="ml-2 w-5 h-5"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 512 512"
//                 >
//                   <path
//                     d="M322.2 349.7c-3.1-3.1-3-8 0-11.3l66.4-74.4H104c-4.4 0-8-3.6-8-8s3.6-8 8-8h284.6l-66.3-74.4c-2.9-3.4-3.2-8.1-.1-11.2 3.1-3.1 8.5-3.3 11.4-.1 0 0 79.2 87 80 88s2.4 2.8 2.4 5.7-1.6 4.9-2.4 5.7-80 88-80 88c-1.5 1.5-3.6 2.3-5.7 2.3-2.2 0-4.3-.8-5.7-2.3z"
//                     fill="currentColor"
//                   />
//                 </svg>
//               </a>
//             </div>
//             <Image
//               src={BlogImage}
//               width={450}
//               height={390}
//               className=" absolute top-28 left-80 -z-10"
//               alt="Blog image"
//             />
//           </div>
//         </div>
//         <div>
//           <Pagination
//             currentPage={3}
//             totalPages={10}
//             onPageChange={(page) => console.log(page)}
//           />
//         </div>

//       <div className=" text-white py-10 px-6">
//         <section className="max-w-5xl mx-auto">
//           <header className="mb-6">
//             <h1 className="text-1xl font-bold text-center text-secondary">
//               TOP READS
//             </h1>
//           </header>

//           <div className="">
//             {posts.map((post, index) => (
//               <article
//                 key={index}
//                 className="grid md:grid-cols-2 items-center gap-4"
//               >
//                 <div className="flex justify-center items-center border-b-2 border-secondary" style={{height:'100%'}}>
//                   <div>
//                     <div className="text-sm opacity-80 flex justify-between  pr-5">
//                       <p>{post.date}</p>
//                       <p className="text-secondary">{post.tag}</p>
//                     </div>
//                     <a href={post.link} className="block mt-2">
//                       <span className="text-2xl  italic text-secondary">
//                         {post.title}{" "}
//                       </span>
//                       <span className="text-white text-lg mt-1">
//                         {post.description}
//                       </span>
//                     </a>
//                     <a
//                       href={post.link}
//                       className="text-white text-sm inline-block mt-3 font-bold"
//                     >
//                       Read more →
//                     </a>
//                   </div>
//                 </div>

//                 {post.image && (
//                   <figure className="relative w-full ">
//                     <a href={post.link}>
//                       <Image
//                         src={Blog1}
//                         alt={post.title}
//                         // fill
//                         style={{ objectFit: "cover", }}
//                       />
//                     </a>
//                   </figure>
//                 )}
//               </article>
//             ))}
//           </div>
//         </section>
//       </div>

//         <div className="flex items-center justify-center font-gilroy mt-32 mb-32">
//           <div className="flex-1  text-xs">
//             <div className="relative">
//               <div className="border border-white flex w-full">
//                 <Link
//                   href={PathNames.travelEat}
//                   className="w-1/4 px-6 py-3 text-white hover:text-secondary transition-colors text-center border-r border-white"
//                 >
//                   TRAVEL & EAT WITH DOT
//                 </Link>

//                 <div className="w-1/2 relative">
//                   <div className="absolute w-full h-[1px] bg-white transform -rotate-[5.8deg] top-1/2 -translate-y-1/2 z-10"></div>
//                   <div className="h-full" />
//                 </div>

//                 <div className="relative w-1/4">
//                   <Link
//                     href={PathNames.learnWithDot}
//                     className="block px-6 py-3 text-white hover:text-secondary transition-colors text-center border-l border-white"
//                   >
//                     LEARN WITH DOT
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }