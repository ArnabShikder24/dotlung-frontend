import type { Metadata } from "next";
import React from "react";
import Footer from "../../components/Footer";
import ShapeBg from "../../components/ShapeBg";

export const metadata: Metadata = {
  title: "Travel / Eat With Dot",
  description: "Dotlung",
};

export default function TravelLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ShapeBg />
      {children}
      <Footer />
    </>
  );
}
