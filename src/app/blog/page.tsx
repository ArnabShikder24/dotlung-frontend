"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import Pagination from "../../components/Pagination";
import NavigationArrow from "../../components/NavigationArrow";

export default function FeaturedSection() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

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
      try {
        const res = await fetch(
          `https://dotlung.com/wp-json/wp/v2/posts?_embed&page=${currentPage}&per_page=5`
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
  }, [currentPage]);

  if (loading) return <p className="text-white">Loading...</p>;

  return (
    <div className="container mx-auto max-w-3xl py-20 px-5 lg:px-0 mt-14 md:mt-0">
      <h1 className="text-6xl md:text-7xl font-gilroy text-white">BLOG</h1>
      {posts.map((post) => (
        <article key={post.id} className="my-10 border-b border-secondary pb-4">
          <div className="flex items-center justify-between text-secondary mb-2">
            <span className="font-gilroy text-white text-[.625rem] md:text-[0.75rem] font-bold">{new Date(post.date).toLocaleDateString()}</span>
            <span className="text-secondary font-caslon italic text-[1.125rem] md:text-[1.1875rem]">#{post.categories}</span>
          </div>
          <Link href={`/blog/${post.slug}`}>
            <h2 className="text-[1.25rem] md:text-[1.5rem] font-caslon mb-4 leading-[1.5] md:leading-[1.3]">{post.title.rendered}</h2>
          </Link>
          <p className="text-[1.25rem] md:text-[1.5rem] font-caslon leading-[1.5] md:leading-[1.3] mb-4" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
          <Link href={`/blog/${post.slug}`} className="text-[0.75rem] flex items-center gap-2 font-gilroy mt-3 font-bold">
            READ MORE {" "}<NavigationArrow direction="right" className="mr-2 text-secondary" />
          </Link>

          {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ? (
            <Image
              src={post._embedded["wp:featuredmedia"][0].source_url}
              width={450}
              height={300}
              alt={post.title.rendered}
              className="mt-4"
            />
          ) : (
            <p className="text-white">No Image Available</p>
          )}
        </article>
      ))}
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