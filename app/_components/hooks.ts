"use client";

import { useEffect, useState } from "react";

export function useScreen() {
  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => {
    const updateDimensions = () => {
      setIsMobile(window.innerWidth < 769);
    };

    window.addEventListener("resize", updateDimensions);
    updateDimensions();

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  return isMobile;
}
