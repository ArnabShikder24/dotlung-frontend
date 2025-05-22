"use client";

import React, { useEffect, useState } from "react";
import { PathNames } from "../routes/index.route";
import Navbar from "../components/Navbar";
import { usePathname } from "next/navigation";
import ShapeBg from "../components/ShapeBg";
import Loading from "../components/Loading";
import BubbleLoader from "../components/BubbleLoader";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const path = usePathname();

  const hiddenPaths = [PathNames.contact];
  const hideNavbar = hiddenPaths.includes(path);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!hideNavbar && <Navbar />}
      <ShapeBg />
      {children}
      <Loading />
      {showLoader && <BubbleLoader />}
    </>
  );
};

export default MainLayout;
