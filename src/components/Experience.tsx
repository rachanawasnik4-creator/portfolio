import { motion } from "framer-motion";

function Experience() {
  return (
    <section
      id="experience"
      className="py-32 px-8 bg-[#070B1A] text-white"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-20">
          <p className="text-purple-400 uppercase tracking-widest mb-4">
            Experience
          </p>

          <h2 className="text-5xl font-bold">
            My Professional Journey
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            bg-white/5
            backdrop-blur-xl
            border
            border-white/10
            rounded-3xl
            p-10
          "
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">

            <div>
              <h3 className="text-3xl font-bold">
                Business Development Associate
              </h3>

              <p className="text-purple-400 mt-2">
                NxtWave
              </p>
            </div>

            <span className="text-gray-400 mt-4 md:mt-0">
              Present
            </span>
          </div>

          <p className="text-gray-400 mt-6 leading-8">
            Helping students choose future-ready technology careers,
            conducting career guidance sessions, understanding student
            aspirations, and supporting admission decisions.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">

            <span className="px-4 py-2 bg-purple-500/10 rounded-full text-purple-300">
              Communication
            </span>

            <span className="px-4 py-2 bg-purple-500/10 rounded-full text-purple-300">
              Sales
            </span>

            <span className="px-4 py-2 bg-purple-500/10 rounded-full text-purple-300">
              Career Guidance
            </span>

            <span className="px-4 py-2 bg-purple-500/10 rounded-full text-purple-300">
              Client Handling
            </span>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Experience;