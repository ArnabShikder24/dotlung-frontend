import type { Metadata } from "next";
import React from "react";
import Footer from "../../../components/Footer";

// Function to convert URL slug to readable title
function slugToTitle(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const title = slugToTitle(params.id);
  
  return {
    title: title,
    description: title,
  };
}

export default function SingleBlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
