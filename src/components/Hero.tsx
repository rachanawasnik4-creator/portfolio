import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#050816]">

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-600/20 blur-[180px] rounded-full" />

      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-purple-500 text-purple-300 mb-8">
            🚀 Available For Freelance Projects
          </div>

          <p className="text-purple-400 text-lg mb-4">
            Hi, I'm Rachana 👋
          </p>

          <h1 className="text-6xl lg:text-7xl font-bold leading-tight text-white">
            Full Stack
            <br />
            Developer &
            <br />
            <span className="text-purple-500">
              AI Builder
            </span>
          </h1>

          <p className="text-gray-400 text-lg mt-8 max-w-xl leading-8">
            I build modern websites, SaaS products and AI-powered
            applications that help businesses grow faster.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-10">

            <a
              href="#contact"
              className="px-8 py-4 rounded-xl bg-purple-600 hover:bg-purple-700 transition"
            >
              Hire Me
            </a>

            <a
              href="#projects"
              className="px-8 py-4 rounded-xl border border-purple-500 hover:bg-purple-500/10 transition"
            >
              Projects
            </a>

          </div>

          {/* Stats */}
          <div className="flex gap-12 mt-12">

            <div>
              <h3 className="text-3xl font-bold text-purple-400">
                3+
              </h3>
              <p className="text-gray-400">
                Projects
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-purple-400">
                100%
              </h3>
              <p className="text-gray-400">
                Responsive
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-purple-400">
                React
              </h3>
              <p className="text-gray-400">
                Expert
              </p>
            </div>

          </div>

          {/* Social Links */}
          <div className="flex gap-6 mt-10 text-3xl">

            <a
              href="https://github.com/rachanawasnik4-creator"
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/rachana-wasnik-8aa5a81a7/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-400 transition"
            >
              <FaLinkedin />
            </a>

          </div>

        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >

          <div className="relative">

            <div className="absolute inset-0 bg-purple-600 blur-[100px] opacity-50 rounded-full" />

            <img
              src={profile}
              alt="Rachana Wasnik"
              className="
                relative
                w-[380px]
                h-[380px]
                object-cover
                rounded-full
                border-4
                border-purple-500
              "
            />

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;