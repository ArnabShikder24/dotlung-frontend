import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import MouseFollower from "../components/MouseFollower";
import MainLayout from "../layout/MainLayout";

export const metadata: Metadata = {
  title: "Dot Lung - Mother of social media dragons",
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
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
