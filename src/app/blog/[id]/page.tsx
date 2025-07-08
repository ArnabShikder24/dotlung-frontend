"use client";
import Image from "next/image";
import { useParams, useSearchParams } from "next/navigation";
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
import RevealOnScrollSpan from "../../../components/RevealOnScrollSpan";
import ReadMoreLink from "../../../components/ReadMoreLink";
import WordPressContentRenderer from "../../../components/WordPressContentRenderer";

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
  const searchParams = useSearchParams();
  const category = searchParams.get('category') || "uncategorized";
  
  useEffect(() => {
    async function fetchPost() {
      try {
        const res = await fetch(
          `https://api.dotlung.com/wp-json/wp/v2/posts?slug=${id}&_embed`
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
          `https://api.dotlung.com/wp-json/wp/v2/posts?tags=${tagQuery}&exclude=${currentPostId}&per_page=3&_embed`
        );
        const data = await res.json();
        setRelatedPosts(data);
      } else {
        // Optional: Fallback if no tags - maybe fetch latest posts
        const res = await fetch(
          `https://api.dotlung.com/wp-json/wp/v2/posts?exclude=${currentPostId}&per_page=3&_embed`
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
        <RevealOnScroll>
          <div className="flex items-center justify-between font-caslon text-sm border-b border-secondary pb-4">
            <p className="font-gilroy text-white text-[.625rem] md:text-[0.75rem] font-bold">{new Date(post.date).toLocaleDateString()}</p>
            <RippleButton href="/blog" className="font-gilroy text-[.625rem] md:text-[0.85rem] cursor-pointer hover:text-secondary flex items-center"><NavigationArrow direction="left" className="mr-2 text-secondary" /> BACK TO BLOG</RippleButton>
          </div>
        </RevealOnScroll>
        <WordPressContentRenderer 
          content={post.content.rendered}
          carouselImages={carouselImages}
          galleryImages={galleryImages}
        />
      </div>
      <div className="w-[100%] lg:w-[1100px] mx-auto px-4 pb-8">
        <RevealOnScroll>
          <BlogFooter />
        </RevealOnScroll>
        <RevealOnScroll>
          <DotSection
            bottomLeftText="PREVIOUS POST"
            bottomLeftLink="#"
            topRightText="NEXT POST"
            topRightLink={`/blog/${nextBlogPath ?? nextBlogPath}`}
          />
        </RevealOnScroll>
      </div>
    </>
  );
};

export default BlogPage;