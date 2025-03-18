"use client";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import blog1 from "../../../assets/images/blog1.png";
import blog2 from "../../../assets/images/blog2.png";
import ImageCarousel from "../../../components/ImageCarousel";
import image1 from "../../../assets/images/g1.png";
import image2 from "../../../assets/images/g2.png";
import ImageGallery from "../../../components/ImageGallery";
import BlogFooter from "../../../components/BlogFooter";
import Link from "next/link";
// import Blog1 from "../../../../public/Dotlungimages/Dotlungimages/blog1.png";

const BlogPage = () => {
  const carouselImages = [
    {
      src: blog1,
      alt: "Person with unicorn headband in a crowd"
    },
    {
      src: blog2,
      alt: "City view with buildings"
    },
    {
      src: blog1,
      alt: "Person with unicorn headband in a crowd"
    },
    {
      src: blog2,
      alt: "City view with buildings"
    }
  ];
  const galleryImages = [
    {
      src: blog2,
      alt: "Two friends holding drinks"
    },
    {
      src: image1,
      alt: "Person with unicorn headband in a crowd"
    },
    {
      src: image2,
      alt: "City view with buildings and bridges"
    },
  ];
  // const posts = [
  //   {
  //     date: "11.02.2018",
  //     tag: "#learnwithdot",
  //     title: "Ladies, Wine, Barcelona.",
  //     description:
  //       "But not on their own. I create strong online identities & communities and develop kickass.",
  //     link: "/blog/1",
  //     image: Blog1,
  //   },
  //   {
  //     date: "11.02.2018",
  //     tag: "#travelwithdot",
  //     title: "Ladies, Wine, Barcelona.",
  //     description:
  //       "But not on their own. I create strong online identities & communities and develop kickass.",
  //     link: "/blog/2",
  //     image: Blog1,
  //   },
  //   {
  //     date: "10.02.2018",
  //     tag: "#workwithdot",
  //     title: "Ladies, Wine, Barcelona.",
  //     description:
  //       "But not on their own. I create strong online identities & communities and develop kickass.",
  //     link: "/blog/3",
  //     image: Blog1,
  //   },
  // ];
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchPost() {
      try {
        const res = await fetch(
          `https://dotlung.com/wp-json/wp/v2/posts?slug=${id}&_embed`
        );
        const data = await res.json();
        if (data.length > 0) {
          const fetchedPost = data[0];
          setPost(fetchedPost);
  
          fetchRelatedPosts(fetchedPost.tags, fetchedPost.id);
        }
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    }
  
    if (id) fetchPost();
  }, [id]);
  

  async function fetchRelatedPosts(tags, currentPostId) {
    try {
      if (tags && tags.length > 1) {
        const tagQuery = tags.join(",");
        const res = await fetch(
          `https://dotlung.com/wp-json/wp/v2/posts?tags=${tagQuery}&exclude=${currentPostId}&per_page=3&_embed`
        );
        const data = await res.json();
        setRelatedPosts(data);
        console.log(tags);
      } else {
        // Optional: Fallback if no tags - maybe fetch latest posts
        const res = await fetch(
          `https://dotlung.com/wp-json/wp/v2/posts?exclude=${currentPostId}&per_page=3&_embed`
        );
        const data = await res.json();
        setRelatedPosts(data);
        console.log(currentPostId);
      }
    } catch (error) {
      console.error("Error fetching related posts:", error);
    }
  }
  
  // if (id) fetchPost();

  if (loading) return <p className="text-white">Loading...</p>;
  if (!post) return <p className="text-white">Post not found</p>;
  return (
    <>
      <div className="lg:w-[1100px] mx-auto px-4 py-10 mt-20">
        <div className="flex items-center justify-between font-caslon text-sm border-b-2 border-secondary pb-4">
          <p>{new Date(post.date).toLocaleDateString()}</p>
          <p className="cursor-pointer" onClick={() => router.back()}>BACK TO BLOG</p>
        </div>
        <div className="lg:flex justify-between mt-10">
          <p className="font-asty text-secondary">#{post.tags?.[0] || "blog"}</p>
          <p className="font-asty lg:w-[530px] text-2xl lg:text-3xl" >
            <span className="italic text-secondary">{post.title.rendered}</span> 
            <span dangerouslySetInnerHTML={{__html:post.excerpt.rendered}}/>
          </p>
        </div>

        {/* <div className="flex justify-center mt-20">
          <Image className="w-[90%]" src={post.featured_media} alt={post.title.rendered} />
        </div> */}
        {post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
        <div className="flex justify-center mt-20">
          <Image
            src={post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url}
            alt={post.title.rendered}
            width={800}
            height={800}
          />
        </div>
      )}
        <div className="lg:flex justify-between mt-20">
          <p className="font-asty lg:w-[350px] text-2xl">
            <span className="italic text-secondary">{post.title.rendered}</span> <span dangerouslySetInnerHTML={{__html:post.excerpt.rendered}}/>
          </p>
          <p className="font-asty lg:w-[600px] mt-5 lg:mt-0"><span dangerouslySetInnerHTML={{ __html: post.content.rendered }} /></p>
        </div>
      </div>
      <ImageCarousel images={carouselImages} />
      <div className="lg:w-[1100px] mx-auto px-4 pb-8">
        <div className="lg:flex justify-between mt-20">
          <p className="font-asty lg:w-[350px] text-2xl mt-10">
            <span className="italic text-secondary">Ladies, Wine, Barcelona.</span> But not on their own. I create strong online identities & communities and develop kickass
          </p>
          <div className="lg:w-[600px] mt-5 lg:mt-0 font-asty">
            <p className="uppercase font-asty text-xs mb-5 text-secondary">SIENNA</p>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit.</p>
            <p className="mt-5">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit.</p>
          </div>
        </div>
      </div>
      <ImageGallery images={galleryImages} />
      <div className="w-[100%] lg:w-[1100px] mx-auto px-4 pb-8">
        <div className="lg:flex justify-between my-20">
          <p className="font-asty lg:w-[350px] text-2xl">
            
          </p>
          <div className="lg:w-[600px] font-asty">
            <p className="uppercase font-asty text-xs mb-5 text-secondary">SANTA MARIA</p>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit.</p>
          </div>
        </div>
        <BlogFooter />
        <div className="flex items-center justify-center font-gilroy mt-32 mb-32">
          <div className="max-w-3xl flex-1 lg:mx-20 text-xs">
            <div className="relative">
              <div className="border border-white flex w-full">
                <Link
                  href="#"
                  className="w-[30%] lg:w-1/4 px-6 py-3 text-white hover:text-orange-500 transition-colors text-center border-r border-white"
                >
                  PREVIOUS POST
                </Link>

                <div className="w-[40%] lg:w-1/2 relative">
                  <div className="absolute w-full h-[1px] bg-white transform -rotate-[5.8deg] top-1/2 -translate-y-1/2 z-10"></div>
                  <div className="h-full" />
                </div>

                <div className="relative w-[30%] lg:w-1/4">
                  <Link
                    href="#"
                    className="block px-6 py-3 text-white hover:text-orange-500 transition-colors text-center border-l border-white"
                  >
                    NEXT POST
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 mb-20">
            {relatedPosts.map((post, index) => (
              <article
                key={index}
                className="grid md:grid-cols-2 items-center gap-4"
              >
                <div className="lg:flex justify-center items-center border-b-2 border-secondary">
                  <div>
                    <div className="text-sm opacity-80 flex justify-between ">
                      <p>{new Date(post.date).toLocaleDateString()}</p>
                      <p className="text-secondary">{post.tags?.[0]}</p>
                    </div>
                    <a href={`/blog/${post.slug}`}className="block mt-2">
                      <span className="text-2xl  italic text-secondary">
                      {post.title.rendered}{" "}
                      </span>
                      <span className="text-white text-lg mt-1" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}/>
                      
                    </a>
                    <a
                      href={`/blog/${post.slug}`}
                      className="text-white text-sm inline-block mt-3 font-bold"
                    >
                      Read more →
                    </a>
                  </div>
                </div>

                {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url &&(
                  <figure className="relative w-full">
                    <a href={`/blog/${post.slug}`}>
                      <Image
                        src={post._embedded["wp:featuredmedia"][0].source_url}
                        alt={post.title.rendered}
                        width={500}
                        height={500}
                        className="w-[100%]"
                        // fill
                        style={{ objectFit: "cover", }}
                      />
                    </a>
                  </figure>
                )}
              </article>
            ))}
          </div>
        {/* <div className="mt-10 mb-20">
          {relatedPosts.map((post, index) => (
            <article key={index} className="grid md:grid-cols-2 items-center gap-4">
              <div className="flex justify-center items-center border-b-2 border-secondary" style={{ height: "100%" }}>
                <div>
                  <div className="text-sm opacity-80 flex justify-between pr-5">
                    <p>{new Date(post.date).toLocaleDateString()}</p>
                    <p className="text-secondary">
                      {/* Show first tag name or tag id */}
                      {/* #{post.tags?.[0]} */}
                    {/* </p>
                  </div> */}

                  {/* <a href={`/blog/${post.slug}`} className="block mt-2">
                    <span className="text-2xl italic text-secondary">
                      {post.title.rendered}
                    </span>

                    {/* Excerpt */}
                    {/* <div
                      className="text-white text-lg mt-1"
                      dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                    />
                  </a> */}

                  {/* <a href={`/blog/${post.slug}`} className="text-white text-sm inline-block mt-3 font-bold">
                    Read more →
                  </a>
                </div>
              </div> */} 

              {/* Featured Image */}
              {/* {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
                <figure className="relative w-full">
                  <a href={`/blog/${post.slug}`}>
                    <Image
                      src={post._embedded["wp:featuredmedia"][0].source_url}
                      alt={post.title.rendered}
                      width={500}
                      height={500}
                      style={{ objectFit: "cover" }}
                    />
                  </a>
                </figure>
              )}
            </article>
          ))}
        </div>  */}

      </div>
    </>
  );
};

export default BlogPage;