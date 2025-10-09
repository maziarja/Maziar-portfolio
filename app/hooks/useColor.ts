"use client";

import { useEffect } from "react";
import { useMotionTemplate, useMotionValue } from "motion/react";
import { animate } from "motion";
import { APP_COLORS } from "../const";

export const useColor = (upSideDown = false) => {
  const color = useMotionValue(APP_COLORS[0]);
  useEffect(() => {
    animate(color, APP_COLORS, {
      duration: 10,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% ${upSideDown ? "100%" : "0%"}, #000 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return { backgroundImage, border, boxShadow };
};
