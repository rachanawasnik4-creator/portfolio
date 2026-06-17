import { motion } from "framer-motion";

function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          top-20
          left-20
          w-72
          h-72
          bg-purple-600/20
          rounded-full
          blur-3xl
        "
      />

      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          bottom-20
          right-20
          w-96
          h-96
          bg-blue-600/20
          rounded-full
          blur-3xl
        "
      />

    </div>
  );
}

export default Background;