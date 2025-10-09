import { motion } from "motion/react";
import { GoArrowUpRight } from "react-icons/go";

function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-[1200px] px-4 py-32 text-white"
    >
      <motion.div
        className="md: lg:gird-cols-2 grid gap-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="space-y-12">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-7xl font-bold text-gray-300"
          >
            Get in <span className="text-gray-500">touch</span>
          </motion.h2>

          <motion.div
            className="space-y-8 rounded-2xl p-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="space-y-2">
              <p className="text-lg text-gray-300">Email</p>
              <a
                href="mailto:maziar.ja@gmail.com"
                className="flex items-center gap-2 text-2xl font-semibold transition duration-300 hover:text-gray-400 md:text-3xl lg:text-4xl"
              >
                maziar.ja@gmail.com
                <GoArrowUpRight className="text-gray-500" />
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
