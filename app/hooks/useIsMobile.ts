"use client";

import { useEffect, useState } from "react";

export function useIsMobile(breakPoints = 640) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < breakPoints);
    checkIsMobile();

    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, [breakPoints]);

  return isMobile;
}
