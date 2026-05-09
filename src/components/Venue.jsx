import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

const Venue = () => {
  return (
    <section className="py-32 px-4 bg-maroon relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-ivory to-transparent opacity-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <span className="text-gold font-cursive text-3xl">Our Sacred Space</span>
              <h2 className="text-5xl md:text-7xl font-display text-ivory">The Venue</h2>
              <div className="w-20 h-1 bg-gold" />
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-6 p-8 glass rounded-3xl border-gold/20">
                <div className="bg-gold/20 p-4 rounded-2xl">
                  <MapPin className="text-gold w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-ivory mb-2">St. Thomas Orthodox Valiya Pally</h3>
                  <p className="text-ivory/60 font-serif text-lg">Omalloor, Pathanamthitta, Kerala</p>
                </div>
              </div>

              <p className="text-ivory/80 font-serif leading-relaxed text-xl italic">
                "Where two or three are gathered in my name, there am I among them."
              </p>

              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://maps.google.com/?q=St.+Thomas+Orthodox+Valiya+Pally+Omalloor" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 px-10 py-5 bg-gold text-maroon font-display rounded-full hover:shadow-[0_10px_30px_rgba(212,175,55,0.4)] transition-all uppercase tracking-widest text-sm font-bold"
              >
                <Navigation size={18} />
                <span>Navigate to Venue</span>
              </motion.a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.6)] border-4 border-gold/20"
          >
            {/* Styled Map Container */}
            <div className="absolute inset-0 grayscale sepia brightness-75 contrast-125 saturate-[0.2]">
              <iframe
                title="Venue Map"
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=St.+Thomas+Orthodox+Valiya+Pally+Omalloor&t=&z=15&ie=UTF8&iwloc=B&output=embed"
              ></iframe>
            </div>
            
            {/* Custom Overlay for Map Aesthetic */}
            <div className="absolute inset-0 bg-maroon/20 pointer-events-none" />
            
            {/* Animated Pin */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <div className="bg-maroon p-4 rounded-full border-2 border-gold shadow-2xl">
                <MapPin className="text-gold w-10 h-10" fill="currentColor" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Venue;
