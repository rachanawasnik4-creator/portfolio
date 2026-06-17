import { motion } from "framer-motion";

const projects = [
  {
    title: "🌿 VedaModern",
    description:
      "Premium Ayurveda eCommerce platform with modern UI, product catalog, shopping experience and responsive design.",
    tech: "React • TypeScript • Tailwind CSS",
    github: "https://github.com/rachanawasnik4-creator",
  },
  {
    title: "🎬 NXTFLIX",
    description:
      "Movie streaming platform featuring trending movies, ratings, categories and responsive layouts using APIs.",
    tech: "React • TMDB API • TypeScript",
    github: "https://github.com/rachanawasnik4-creator",
  },
  {
    title: "📅 AppointmentHub AI",
    description:
      "Smart appointment booking platform for doctors, salons, gyms and consultants with scheduling automation.",
    tech: "React • Node.js • MongoDB",
    github: "https://github.com/rachanawasnik4-creator",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="py-32 px-8 bg-[#050816] text-white"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">
          <p className="text-purple-400 uppercase tracking-widest mb-4">
            Portfolio
          </p>

          <h2 className="text-5xl font-bold">
            Featured Projects
          </h2>

          <p className="text-gray-400 mt-4">
            Real-world applications I've designed and developed
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              className="
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                rounded-3xl
                p-8
                hover:border-purple-500
                transition-all
                duration-300
              "
            >

              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-7 mb-6">
                {project.description}
              </p>

              <div className="text-purple-400 text-sm mb-6">
                {project.tech}
              </div>

              <div className="flex gap-3">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    px-4
                    py-2
                    bg-purple-600
                    rounded-lg
                    hover:bg-purple-700
                    transition
                  "
                >
                  GitHub
                </a>

                <button
                  className="
                    px-4
                    py-2
                    border
                    border-purple-500
                    rounded-lg
                    hover:bg-purple-500/10
                    transition
                  "
                >
                  Live Demo
                </button>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;