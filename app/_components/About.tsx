"use client";
import { motion } from "motion/react";
import { useColor } from "../hooks/useColor";
import { SKILLS } from "@/app/const";

function About() {
  const { backgroundImage } = useColor();
  return (
    <motion.section
      id="about"
      style={{ backgroundImage }}
      className="overflow-x-clip px-6 py-32 text-white"
    >
      <motion.div
        className="relative mx-auto max-w-[1200px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16 w-full text-center text-5xl font-bold text-white"
        >
          About <span className="text-gray-300">Me</span>
        </motion.h2>

        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="space-y-6 rounded-lg border border-gray-800 p-6 transition-colors duration-300 hover:border-gray-500/50">
              <p className="text-2xl font-semibold text-gray-300">My Journey</p>
              <p className="text-lg leading-relaxed text-gray-300">
                I&#39;m a dedicated Front-End Developer who began learning web
                development in 2023. Since then, I&#39;ve completed over twenty
                projects — including several Frontend Mentor challenges — and
                developed multiple full-stack applications using Next.js and
                Mongoose. I take pride in transforming ideas into complete,
                responsive, and high-performing web experiences with clean,
                maintainable code.
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                I&#39;m passionate about continuous learning and exploring
                modern tools and frameworks that push the boundaries of
                what&#39;s possible on the web. My goal is to craft intuitive,
                visually engaging, and technically solid digital experiences
                that make an impact.
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                Based in Pasadena, California, I enjoy collaborating on creative
                web projects and connecting with teams that value design,
                innovation, and clean code.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {SKILLS.map((skill, index) => (
              <motion.div
                key={index}
                className="rounded-lg border border-gray-800 p-6 backdrop-blur-3xl transition-colors duration-300 hover:border-gray-500/50"
                initial={{ opacity: 0, y: 20 }}
                // check later on
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-gray-500/10 p-3 text-gray-300">
                    <skill.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold">
                      {skill.title}
                    </h3>
                    <p className="text-gray-400">{skill.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default About;
