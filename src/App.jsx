import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Preloader from "./components/Preloader";
import Hero from "./components/Hero";
import UnfoldingTransition from "./components/UnfoldingTransition";
import EventDetails from "./components/EventDetails";
import Venue from "./components/Venue";
import ParticlesBackground from "./components/ParticlesBackground";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: "ease-out-cubic",
    });

    // Sync loading state
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative bg-silk min-h-screen">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>

      <ParticlesBackground />
      
      {!isLoading && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <Hero />
          <UnfoldingTransition />
          <EventDetails />
          <Venue />
          
          <footer className="relative py-24 bg-maroon overflow-hidden">
            <div className="absolute inset-0 opacity-[0.05]" 
                 style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/silk.png')" }} />
            
            <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="space-y-8"
              >
                <div className="flex justify-center items-center space-x-6">
                  <div className="h-[1px] w-12 bg-gold/50" />
                  <p className="text-gold font-display text-4xl md:text-6xl tracking-widest">J & S</p>
                  <div className="h-[1px] w-12 bg-gold/50" />
                </div>
                
                <p className="text-ivory font-cursive text-3xl md:text-4xl opacity-80">
                  Together with our families, we request the honor of your presence.
                </p>
                
                <div className="flex flex-col items-center space-y-4 pt-8">
                  <p className="text-gold/60 font-serif italic text-lg">#JerinWedsSneha</p>
                  <div className="h-12 w-px bg-gradient-to-b from-gold/50 to-transparent" />
                  <p className="text-ivory/40 text-[10px] uppercase tracking-[0.5em]">2026 . 06 . 08</p>
                </div>
              </motion.div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
          </footer>
        </motion.div>
      )}
    </main>
  );
}

export default App;
