import type { Metadata } from "next";
import React from "react";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Work With dot - Dot Lung",
  description: "Dotlung",
};

export default function WorkLayout({
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
