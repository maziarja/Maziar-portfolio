"use client";
import { useState } from "react";
import { AnimatePresence, motion, useMotionValue } from "motion/react";
import { PROJECTS } from "@/app/const";
import { useColor } from "../hooks/useColor";
import Image from "next/image";
import { TiArrowSortedDown } from "react-icons/ti";
import { MdPlayArrow } from "react-icons/md";

function Portfolio() {
  const { backgroundImage, boxShadow } = useColor(true);
  const [selectedProject, setSelectedProject] = useState(PROJECTS[0]);
  const [showProjectDetails, setShowProjectDetails] = useState(false);
  const image = useMotionValue(PROJECTS[0].image);

  return (
    <motion.section
      id="portfolio"
      style={{ backgroundImage }}
      className="backgroundImage min-h-[85vh] bg-black py-32 text-white"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 lg:grid-cols-2">
        <div>
          <h2 className="mb-14 text-5xl font-bold">
            Selected <span className="text-gray-300">projects</span>
          </h2>

          <div className="flex flex-col gap-4 lg:gap-0">
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
                  role="button"
                  onClick={() =>
                    setShowProjectDetails((show) =>
                      selectedProject.id === project.id ? !show : true,
                    )
                  }
                  className={`mb-4 cursor-pointer text-2xl font-semibold transition-colors duration-300 group-hover:text-gray-500 sm:text-3xl ${
                    selectedProject.id === project.id ? "text-gray-300" : ""
                  }`}
                >
                  {showProjectDetails && selectedProject.id === project.id ? (
                    <TiArrowSortedDown className="inline-block lg:hidden" />
                  ) : (
                    <MdPlayArrow className="inline-block lg:hidden" />
                  )}{" "}
                  {project.title}
                </h3>
                {selectedProject.id === project.id && showProjectDetails && (
                  <div className="my-4 hidden border-b-2 border-gray-300 lg:block"></div>
                )}
                {selectedProject.id === project.id && showProjectDetails && (
                  <p
                    className={`ml-4 text-gray-400 transition-all duration-500 ease-in-out lg:ml-0 ${
                      selectedProject.id === project.id
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  >
                    {project.description}
                  </p>
                )}
                {selectedProject.id === project.id && showProjectDetails && (
                  <motion.div
                    key={selectedProject.id}
                    className="my-2 flex items-center justify-center p-4 sm:p-12 lg:hidden"
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
                <div className="mt-3 ml-4 flex items-center gap-4 lg:ml-0">
                  {selectedProject.id === project.id && showProjectDetails && (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={selectedProject.liveUrl}
                      className="rounded-lg border-1 px-2 py-1 transition-all duration-300 hover:ring hover:ring-white lg:border-0"
                    >
                      View live
                    </a>
                  )}
                  {selectedProject.id === project.id && showProjectDetails && (
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
            {showProjectDetails && (
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
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
}

export default Portfolio;
