import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const UnfoldingTransition = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0.1, 0.4], [80, 0]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.1, 0.5], [0.85, 1]);
  const skewY = useTransform(scrollYProgress, [0.1, 0.4], [5, 0]);

  return (
    <div ref={containerRef} className="relative min-h-[120vh] bg-maroon perspective-2000 flex items-center justify-center py-20 md:py-32 overflow-hidden">
      {/* Decorative Gold Elements */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20" />
      
      <motion.div
        style={{
          rotateX,
          skewY,
          opacity,
          scale,
          boxShadow: "0 60px 120px -30px rgba(0,0,0,0.8)",
        }}
        className="relative w-full max-w-6xl aspect-[4/5] md:aspect-video mx-4 md:mx-10 rounded-2xl overflow-hidden border-[1px] border-gold/40 shadow-2xl"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/portrait.jpg')" }}
        />
        
        {/* Paper Grain Overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] opacity-10 pointer-events-none" />
        
        {/* Gradient Shadow */}
        <div className="absolute inset-0 bg-gradient-to-t from-maroon via-transparent to-black/40" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <h2 className="text-ivory font-cursive text-4xl md:text-7xl lg:text-8xl mb-4 md:mb-6 drop-shadow-2xl">
              An Eternal Promise
            </h2>
            <div className="h-[1px] w-16 md:w-32 bg-gold mx-auto mb-6 md:mb-8" />
            <div className="space-y-6">
              <p className="text-ivory/90 font-serif italic text-lg md:text-2xl lg:text-3xl max-w-4xl mx-auto leading-relaxed px-4">
                "Love is patient, love is kind. It does not envy, it does not boast, it is not proud."
              </p>
              <p className="text-ivory/80 font-serif text-base md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed px-4">
                "സ്നേഹം ദീർഘമായി ക്ഷമിക്കുന്നു; സ്നേഹം ദയ കാണിക്കുന്നു; സ്നേഹം ഈർഷ്യപ്പെടുന്നില്ല; സ്നേഹം നിഗളിക്കുന്നില്ല."
              </p>
              <span className="text-gold mt-4 block not-italic font-display text-xs md:text-sm uppercase tracking-[0.4em]">1 Corinthians 13:4 | 1 കൊരിന്ത്യർ 13:4</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Scroll Indicator for Transition */}
      <motion.div 
        style={{ opacity: useTransform(scrollYProgress, [0.4, 0.5], [1, 0]) }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <p className="text-gold/40 uppercase tracking-[0.5em] text-[10px] mb-4">Continue scrolling</p>
      </motion.div>
    </div>
  );
};

export default UnfoldingTransition;
