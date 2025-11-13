"use client";

import { motion } from "motion/react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import { APP_COLORS } from "@/app/const";
import { useColor } from "../hooks/useColor";

function Hero() {
  const { backgroundImage, border, boxShadow } = useColor();

  return (
    <motion.section
      className="relative flex min-h-dvh items-center justify-center py-24 text-white/80 md:py-0"
      style={{
        backgroundImage,
      }}
    >
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={500} factor={2} fade speed={2} />
        </Canvas>
      </div>

      {/* Radial background for balance */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 4, ease: "easeInOut" }}
        style={{
          background: `radial-gradient(circle , ${APP_COLORS[0]}, transparent 70%)`,
        }}
        className="pointer-events-none absolute inset-0 rounded-full blur-3xl"
      />

      <div className="z-10 mx-auto flex max-w-3xl flex-col items-center gap-12 text-center">
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-2 rounded-xl border border-gray-700/40 bg-gray-400/40 px-3 py-1 text-sm font-semibold">
            Available for new projects
          </p>
          <p className="text-4xl font-bold md:text-5xl">Hi, I am</p>
          <p className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
            Maziar Jamali Alem
          </p>
          <p className="mt-4 max-w-[400px] text-base">
            Front-End Developer passionate about creating interactive and
            engaging web experiences.
          </p>

          <div className="mt-6 flex flex-col gap-6 md:flex-row">
            <motion.a
              href="/files/Maziar_ja_CV.pdf"
              download
              style={{ border, boxShadow }}
              className="flex cursor-pointer items-center gap-2 rounded-full px-3 py-2 text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload className="text-lg" />
              Download CV
            </motion.a>
            <motion.button
              className="flex cursor-pointer items-center gap-2 rounded-full border border-white/30 px-3 py-2 text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                document
                  .getElementById("portfolio")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Projects
              <FiArrowRight />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Hero;
