import { motion } from "framer-motion";

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        y: "-100vh",
        transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] }
      }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ivory overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/silk.png')" }} />

      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-8"
        >
          <svg width="80" height="120" viewBox="0 0 80 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              d="M40 10V110M15 40H65"
              stroke="#f5d142"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </svg>
        </motion.div>

        <div className="flex space-x-6">
          <motion.span
            initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ delay: 1, duration: 1 }}
            className="text-7xl md:text-9xl font-display text-maroon"
          >
            J
          </motion.span>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="text-4xl md:text-6xl text-gold self-center"
          >
            &
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ delay: 1.2, duration: 1 }}
            className="text-7xl md:text-9xl font-display text-maroon"
          >
            S
          </motion.span>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 1 }}
          className="mt-8 text-maroon/60 tracking-[0.4em] uppercase text-xs md:text-sm font-light"
        >
          A Union of Souls
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Preloader;
