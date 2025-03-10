"use client";

import React from "react";
import { PathNames } from "../routes/index.route";
import Navbar from "../components/Navbar";
import { usePathname } from "next/navigation";
import ShapeBg from "../components/ShapeBg";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const path = usePathname();

  const hiddenPaths = [PathNames.contact];
  const hideNavbar = hiddenPaths.includes(path);

  return (
    <>
      {!hideNavbar && <Navbar />}
      <ShapeBg />
      {children}
    </>
  );
};

export default MainLayout;
