import { useState, useRef } from "react";
import { Music, Music2, Pause, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div 
      className="fixed bottom-10 right-10 z-50 flex items-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <audio 
        ref={audioRef} 
        loop 
       
      />
      
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="mr-4 bg-maroon/90 backdrop-blur-md px-4 py-2 rounded-full border border-gold/30 shadow-2xl"
          >
            <p className="text-gold text-[10px] uppercase tracking-widest font-bold whitespace-nowrap">
              {isPlaying ? "Playing: Eternal Love" : "Listen to Our Theme"}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={togglePlay}
        className={`relative w-20 h-20 rounded-full flex items-center justify-center shadow-[0_15px_35px_rgba(0,0,0,0.4)] transition-all overflow-hidden ${
          isPlaying ? "bg-gold" : "bg-maroon"
        }`}
      >
        {/* Vinyl Record Texture */}
        <div className="absolute inset-0 opacity-20 border-[4px] border-black/10 rounded-full" />
        <div className="absolute inset-4 border-[1px] border-black/5 rounded-full" />
        <div className="absolute inset-8 border-[1px] border-black/5 rounded-full" />
        
        {/* Animated Spin for Vinyl */}
        {isPlaying && (
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-black/20 pointer-events-none"
          />
        )}

        <div className="relative z-10">
          {isPlaying ? (
            <Pause className="text-maroon w-8 h-8" />
          ) : (
            <Play className="text-gold w-8 h-8 ml-1" />
          )}
        </div>

        {/* Shimmer Effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
      </motion.button>
    </div>
  );
};

export default AudioPlayer;
