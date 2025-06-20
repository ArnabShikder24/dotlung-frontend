import type { Metadata } from "next";
import React from "react";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Learn with dot - Dot Lung",
  description: "Dotlung",
};

export default function LearnLayout({
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
