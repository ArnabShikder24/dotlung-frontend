"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import blog1 from "../../../assets/images/blog1.png";
import blog2 from "../../../assets/images/blog2.png";
import ImageCarousel from "../../../components/ImageCarousel";
import image1 from "../../../assets/images/g1.png";
import image2 from "../../../assets/images/g2.png";
import ImageGallery from "../../../components/ImageGallery";
import BlogFooter from "../../../components/BlogFooter";
import NavigationArrow from "../../../components/NavigationArrow";
import RippleButton from "../../../components/RippleButton";
import RevealOnScroll from "../../../components/RevealOnScroll";
import DotSection from "../../../components/DotSection";

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

  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState([]);
  // need to change
  const nextBlogPath = relatedPosts[0]?.slug;
  
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
      } else {
        // Optional: Fallback if no tags - maybe fetch latest posts
        const res = await fetch(
          `https://dotlung.com/wp-json/wp/v2/posts?exclude=${currentPostId}&per_page=3&_embed`
        );
        const data = await res.json();
        setRelatedPosts(data);
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
        <div className="flex items-center justify-between font-caslon text-sm border-b border-secondary pb-4">
          <p className="font-gilroy text-white text-[.625rem] md:text-[0.75rem] font-bold">{new Date(post.date).toLocaleDateString()}</p>
          <RippleButton href="/blog" className="font-gilroy text-[.625rem] md:text-[0.85rem] cursor-pointer hover:text-secondary flex items-center"><NavigationArrow direction="left" className="mr-2 text-secondary" /> BACK TO BLOG</RippleButton>
        </div>
        <div className="lg:flex justify-between mt-10">
          <p className="text-secondary font-caslon italic text-[1.125rem] md:text-[1.1875rem]">#{post.tags?.[0] || "blog"}</p>
          <div className="lg:w-[530px]" >
            <p className="text-[1.25rem] md:text-[1.5rem] font-caslon mb-4 leading-[1.5] md:leading-[1.3]">{post.title.rendered}</p> 
            <p className="text-[1.25rem] md:text-[1.5rem] font-caslon mb-4 leading-[1.5] md:leading-[1.3]" dangerouslySetInnerHTML={{__html:post.excerpt.rendered}}/>
          </div>
        </div>

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
          <div className="font-asty lg:w-[350px] text-[1.25rem] md:text-[1.5rem]">
            <p className="font-caslon mb-4 leading-[1.5] md:leading-[1.3] text-secondary">{post.title.rendered}</p> <span className="font-caslon" dangerouslySetInnerHTML={{__html:post.excerpt.rendered}}/>
          </div>
          <p className="font-asty lg:w-[600px] leading-6 mt-5 lg:mt-0"><span dangerouslySetInnerHTML={{ __html: post.content.rendered }} /></p>
        </div>
      </div>
      <ImageCarousel images={carouselImages} />
      <div className="lg:w-[1100px] mx-auto px-4 pb-8">
        <div className="lg:flex justify-between mt-20">
          <p className="lg:w-[350px] mt-10 text-[1.06rem] md:text-[1.75rem] text-secondary italic font-caslon">
            <span className=" mb-4 leading-[1.5] md:leading-[1.3] ">Ladies, Wine, Barcelona.</span> But not on their own. I create strong online identities & communities and develop kickass
          </p>
          <div className="lg:w-[600px] mt-5 lg:mt-0 font-asty">
            <p className="font-asty leading-6">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit.</p>
            <p className="mt-5 font-asty leading-6">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit.</p>
          </div>
        </div>
      </div>
      <ImageGallery images={galleryImages} />
      <div className="w-[100%] lg:w-[1100px] mx-auto px-4 pb-8">
        <div className="lg:flex justify-between my-20">
          <p className="lg:w-[350px] mt-10 text-[1.06rem] md:text-[1.75rem] text-secondary italic font-caslon">
            <span className="mb-4 leading-[1.5] md:leading-[1.3] ">Ladies, Wine, Barcelona.</span> But not on their own. I create strong online identities & communities and develop kickass
          </p>
          <div className="lg:w-[600px]">
            <p className="font-asty leading-6">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit.</p>
          </div>
        </div>
        <BlogFooter />
        <RevealOnScroll>
          <DotSection
            bottomLeftText="PREVIOUS POST"
            bottomLeftLink="#"
            topRightText="NEXT POST"
            topRightLink={`/blog/${nextBlogPath ?? nextBlogPath}`}
          />
        </RevealOnScroll>
        <div className="">
            {relatedPosts.map((post, index) => (
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
                    <RippleButton href={`/blog/${post.slug}`} className="block mt-2 mb-4">
                      <p className="text-[1.25rem] md:text-[1.5rem] font-caslon mb-4 leading-[1.5] md:leading-[1.3]">
                        {post.title.rendered}{" "}
                      </p>
                      <p className="text-[1.25rem] md:text-[1.5rem] font-caslon leading-[1.5] md:leading-[1.3]" dangerouslySetInnerHTML={{__html:post.excerpt.rendered}}/>
                      
                    </RippleButton>
                    <RippleButton
                      href={`/blog/${post.slug}`}
                      className="text-[0.75rem] flex items-center gap-2 font-gilroy mt-3 font-bold"
                    >
                      READ MORE{" "}<NavigationArrow direction="right" className="mr-2 text-secondary" />
                    </RippleButton>
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