import { motion } from "motion/react";
import { STACK_ITEMS } from "../const";
import { useColor } from "../hooks/useColor";

function Stack() {
  const { backgroundImage } = useColor(true);

  return (
    <motion.section
      id="stack"
      style={{ backgroundImage }}
      className="px-4 py-32"
    >
      <motion.div
        className="mx-auto max-w-[1200px] text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="mb-16 text-center text-5xl font-bold"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Tech <span className="text-gray-300">Stack</span>
        </motion.h2>
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-4">
          {STACK_ITEMS.map((item, index) => (
            <motion.div
              key={index}
              className="group rounded-xl border border-gray-800 p-6 transition-all duration-300 hover:border-gray-500/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-gray-500/40 to-gray-500/40 blur-xl transition-colors duration-300 group-hover:border group-hover:border-gray-500/50" />
                  <div className="relative rounded-xl border border-gray-800 bg-gray-900/50 p-4 transition-colors duration-300 group-hover:border-gray-500/20">
                    {
                      <item.icon
                        style={{ color: item.color }}
                        className="h-12 w-12"
                      />
                    }
                  </div>
                </div>
                <h3 className="text-xl font-semibold">{item.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}

export default Stack;
