import { motion } from "motion/react";
const BasicButton = () => {
  return (
    <div
      className="[perspective::1000px] [transform-style:preserve-3d] h-screen w-full bg-neutral-900 flex items-center justify-center"
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)`,
        backgroundSize: `18px 18px`,
        backgroundRepeat: `repeat`,
      }}
    >
      <motion.button
        whileHover={{
          rotateX: 20,
          rotateY: 10,
          boxShadow: "0px 20px 50px rgba(255,255,255,0.2)",
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        style={{ translateZ: 100 }}
        className="relative group text-neutral-100 px-12 py-4 rounded-lg bg-black shadow-[0px_1px_2px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset]"
      >
        New Button
        <span className="absolute inset-x-0 bottom-px bg-gradient-to-r from-transparent via-red-700 to-transparent h-px w-3/5 mx-auto"></span>
        <span className="absolute inset-x-0 group-hover:opacity-100 opacity-0 bottom-px bg-gradient-to-r transition-opacity duration-300 from-transparent via-red-700 to-transparent h-[4px] w-full mx-auto blur-sm"></span>
      </motion.button>
    </div>
  );
};

export default BasicButton;
