import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#1a0101]">
      {/* Background with deeper blur for elegance */}
      <div 
        className="absolute inset-0 bg-cover bg-center ken-burns opacity-50 blur-[2px]"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      />
      
      {/* Luxurious Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.8)_100%)]" />
      
      {/* Animated Decorative Corners */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 2 }}
        className="absolute inset-10 md:inset-20 border-[1px] border-gold/20 pointer-events-none"
      >
        <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-gold/50" />
        <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-gold/50" />
        <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-gold/50" />
        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-gold/50" />
      </motion.div>

      <div className="relative z-10 text-center px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="mb-12"
        >
          <p className="text-gold font-cursive text-3xl md:text-5xl lg:text-6xl mb-4 drop-shadow-2xl">
            With the Blessings of the Almighty
          </p>
          <div className="h-[1px] w-24 bg-gold/50 mx-auto" />
        </motion.div>
        
        <div className="relative py-10">
          {/* Animated Glow behind names */}
          <motion.div 
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute inset-0 bg-gold/10 blur-3xl rounded-full"
          />

          <motion.div
            initial={{ opacity: 0, filter: "blur(20px)", scale: 0.9 }}
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            transition={{ duration: 2, delay: 1.2 }}
            className="space-y-6 md:space-y-10"
          >
            <h1 className="text-6xl sm:text-8xl md:text-[10rem] lg:text-[13rem] font-display text-shimmer leading-none tracking-tight drop-shadow-[0_10px_50px_rgba(0,0,0,0.8)]">
              Dn. Jerin Kappil
            </h1>

            <div className="flex items-center justify-center space-x-6 py-4">
              <div className="h-[2px] w-12 md:w-24 bg-gradient-to-r from-transparent to-gold" />
              <span className="text-gold text-4xl md:text-7xl font-cursive">&</span>
              <div className="h-[2px] w-12 md:w-24 bg-gradient-to-l from-transparent to-gold" />
            </div>

            <h1 className="text-6xl sm:text-8xl md:text-[10rem] lg:text-[13rem] font-display text-shimmer leading-none tracking-tight drop-shadow-[0_10px_50px_rgba(0,0,0,0.8)]">
              Sneha Anil
            </h1>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 3 }}
          className="mt-20 md:mt-32"
        >
          <p className="text-ivory/60 font-serif italic text-xl md:text-2xl mb-12">
            The celebration of our eternal love journey.
          </p>
          
          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center"
          >
            <div className="w-[1px] h-20 bg-gradient-to-b from-gold to-transparent" />
            <p className="mt-4 text-gold/40 uppercase tracking-[0.8em] text-[10px] font-bold">
              Unfold the Scroll
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
