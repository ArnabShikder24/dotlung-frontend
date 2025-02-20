import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import Navbar from "../components/Navbar";
import MouseFollower from "../components/MouseFollower";

export const metadata: Metadata = {
  title: "Dotlung",
  description: "Dotlung",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <MouseFollower />
      <Navbar />
      {children}
      </body>
    </html>
  );
}
