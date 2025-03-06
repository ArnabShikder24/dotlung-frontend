"use client";

import React from "react";
import { PathNames } from "../routes/index.route";
import Navbar from "../components/Navbar";
import { usePathname } from "next/navigation";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const path = usePathname();

  const hiddenPaths = [PathNames.contact];
  const hideNavbar = hiddenPaths.includes(path);

  return (
    <>
      {!hideNavbar && <Navbar />}
      {children}
    </>
  );
};

export default MainLayout;
