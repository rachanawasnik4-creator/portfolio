import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="py-32 px-8 bg-[#050816] text-white">

      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-purple-400 uppercase tracking-widest mb-4">
            About Me
          </p>

          <h2 className="text-5xl font-bold">
            Full Stack Developer &
            <span className="text-purple-500">
              {" "}AI Solutions Builder
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 text-lg leading-8">
              Hi, I'm Rachana Wasnik, a passionate Full Stack Developer
              focused on building modern web applications, AI-powered
              solutions and scalable digital products.

              I specialize in React, TypeScript, Tailwind CSS,
              JavaScript and modern frontend technologies while
              creating clean and engaging user experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="text-4xl font-bold text-purple-400">
                3+
              </h3>
              <p className="mt-3 text-gray-400">
                Projects Built
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="text-4xl font-bold text-purple-400">
                100%
              </h3>
              <p className="mt-3 text-gray-400">
                Responsive Design
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="text-4xl font-bold text-purple-400">
                React
              </h3>
              <p className="mt-3 text-gray-400">
                Frontend Expertise
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="text-4xl font-bold text-purple-400">
                AI
              </h3>
              <p className="mt-3 text-gray-400">
                Smart Solutions
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;