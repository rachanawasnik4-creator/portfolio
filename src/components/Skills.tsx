import { motion } from "framer-motion";

const skills = [
  "React",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "MongoDB",
  "GitHub",
];

function Skills() {
  return (
    <section id="skills" className="py-32 px-8">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-20">
          Tech Stack
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                scale: 1.05,
                y: -10,
              }}
              className="
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                rounded-3xl
                p-8
                text-center
                hover:border-purple-500
                transition-all
              "
            >
              <h3 className="text-xl font-semibold">
                {skill}
              </h3>
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;
