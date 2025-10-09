"use client";
import { useState } from "react";
import { AnimatePresence, motion, useMotionValue } from "motion/react";
import { PROJECTS } from "@/app/const";
import { useColor } from "../hooks/useColor";
import Image from "next/image";

function Portfolio() {
  const { backgroundImage, boxShadow } = useColor(true);
  const [selectedProject, setSelectedProject] = useState(PROJECTS[0]);
  const image = useMotionValue(PROJECTS[0].image);

  return (
    <motion.section
      id="portfolio"
      style={{ backgroundImage }}
      className="backgroundImage min-h-[85vh] bg-black py-32 text-white"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 lg:grid-cols-2">
        <div>
          <h2 className="mb-10 text-6xl font-bold">
            Selected <span className="text-gray-300">projects</span>
          </h2>
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              onClick={() => {
                setSelectedProject(project);
                image.set(project.image);
              }}
              className="group mb-8"
            >
              <p className="mb-2 text-lg text-gray-300">{project.year}</p>
              <h3
                className={`cursor-pointer text-3xl font-semibold transition-colors duration-300 group-hover:text-gray-500 ${
                  selectedProject.id === project.id ? "text-gray-300" : ""
                }`}
              >
                {project.title}
              </h3>
              {selectedProject.id === project.id && (
                <div className="my-4 border-b-2 border-gray-300"></div>
              )}
              {selectedProject.id === project.id && (
                <p
                  className={`text-gray-400 transition-all duration-500 ease-in-out ${
                    selectedProject.id === project.id
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                >
                  {project.description}
                </p>
              )}
              {selectedProject.id === project.id && (
                <motion.div
                  key={selectedProject.id}
                  className="flex items-center justify-center p-6 lg:hidden lg:h-[650px]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <motion.a
                    style={{ boxShadow }}
                    className="cursor-pointer rounded-xl"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={selectedProject.liveUrl}
                  >
                    <Image
                      src={selectedProject.image.src}
                      alt={selectedProject.title}
                      className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"
                      width={800}
                      height={450}
                    />
                  </motion.a>
                </motion.div>
              )}
              <div className="mt-3 flex items-center gap-4">
                {selectedProject.id === project.id && (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={selectedProject.liveUrl}
                    className="rounded-lg border-1 px-2 py-1 transition-all duration-300 hover:ring hover:ring-white md:border-0"
                  >
                    View live
                  </a>
                )}
                {selectedProject.id === project.id && (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={selectedProject.codeUrl}
                    className="rounded-lg px-2 py-1 transition-all duration-300 hover:ring hover:ring-white"
                  >
                    View code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedProject.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="hidden items-center justify-center lg:flex lg:h-[650px]"
          >
            <a
              className="cursor-pointer rounded-xl"
              target="_blank"
              rel="noopener noreferrer"
              href={selectedProject.liveUrl}
            >
              <Image
                src={selectedProject.image.src}
                alt={selectedProject.title}
                className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"
                width={800}
                height={450}
              />
            </a>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
}

export default Portfolio;
