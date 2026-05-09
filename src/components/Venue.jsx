import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

const Venue = () => {
  return (
    <section className="py-32 px-4 bg-maroon relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-ivory to-transparent opacity-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <span className="text-gold font-cursive text-3xl">Our Sacred Space</span>
          <h2 className="text-5xl md:text-7xl font-display text-ivory">The Venues</h2>
          <div className="w-24 h-1 bg-gold mx-auto" />
          <p className="text-ivory/60 font-serif text-xl italic mt-4">വിശുദ്ധ വിവാഹ വേദി</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Engagement Venue */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass rounded-[3rem] overflow-hidden border-gold/20 flex flex-col"
          >
            <div className="p-8 md:p-12 space-y-8 flex-grow">
              <div className="space-y-4">
                <span className="text-gold font-display text-sm uppercase tracking-widest px-4 py-1 bg-gold/10 rounded-full border border-gold/20">The Engagement</span>
                <h3 className="text-3xl md:text-4xl font-display text-ivory">St. George Orthodox Valiyapally Auditorium</h3>
                <p className="text-ivory/40 font-serif text-lg">Adakathode Road, Kelakam</p>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-gold/20 p-4 rounded-2xl shrink-0">
                  <MapPin className="text-gold w-6 h-6" />
                </div>
                <p className="text-ivory/70 font-serif text-lg italic">
                 സെൻ്റ്.ജോർജ് ഓർത്തഡോക്സ് ചർച്ച് ഓഡിറ്റോറിയം, അടയ്ക്കാത്തോട് റോഡ്, കേളകം
                </p>
              </div>

              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://maps.google.com/?q=St.+George+Orthodox+Valiyapally+Auditorium+Kelakam" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 px-8 py-4 bg-gold text-maroon font-display rounded-full transition-all uppercase tracking-widest text-xs font-bold"
              >
                <Navigation size={16} />
                <span>Navigate to Venue</span>
              </motion.a>
            </div>
            <div className="h-64 grayscale sepia brightness-50 contrast-125 saturate-[0.2]">
              <iframe
                title="Engagement Venue Map"
                width="100%"
                height="100%"
                frameBorder="0"
                src="https://maps.google.com/maps?width=100%&height=300&hl=en&q=St.+George+Orthodox+Valiyapally+Auditorium+Kelakam&t=&z=14&ie=UTF8&iwloc=B&output=embed"
              ></iframe>
            </div>
          </motion.div>

          {/* Wedding Venue */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass rounded-[3rem] overflow-hidden border-gold/20 flex flex-col"
          >
            <div className="p-8 md:p-12 space-y-8 flex-grow">
              <div className="space-y-4">
                <span className="text-gold font-display text-sm uppercase tracking-widest px-4 py-1 bg-gold/10 rounded-full border border-gold/20">The Wedding</span>
                <h3 className="text-3xl md:text-4xl font-display text-ivory">St. Thomas Orthodox Valiya Pally</h3>
                <p className="text-ivory/40 font-serif text-lg">Omalloor, Pathanamthitta, Kerala</p>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-gold/20 p-4 rounded-2xl shrink-0">
                  <MapPin className="text-gold w-6 h-6" />
                </div>
                <p className="text-ivory/70 font-serif text-lg italic">
                  സെൻ്റ്. തോമസ് ഓർത്തഡോക്സ് വലിയ പള്ളി, ഓമല്ലൂർ, പത്തനംതിട്ട
                </p>
              </div>

              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://maps.google.com/?q=St.+Thomas+Orthodox+Valiya+Pally+Omalloor" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 px-8 py-4 bg-gold text-maroon font-display rounded-full transition-all uppercase tracking-widest text-xs font-bold"
              >
                <Navigation size={16} />
                <span>Navigate to Venue</span>
              </motion.a>
            </div>
            <div className="h-64 grayscale sepia brightness-50 contrast-125 saturate-[0.2]">
              <iframe
                title="Wedding Venue Map"
                width="100%"
                height="100%"
                frameBorder="0"
                src="https://maps.google.com/maps?width=100%&height=300&hl=en&q=St.+Thomas+Orthodox+Valiya+Pally+Omalloor&t=&z=14&ie=UTF8&iwloc=B&output=embed"
              ></iframe>
            </div>
          </motion.div>
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-ivory/80 font-serif leading-relaxed text-xl italic text-center mt-20 max-w-4xl mx-auto"
        >
          "Where two or three are gathered in my name, there am I among them." <br />
          <span className="text-gold/60 mt-2 block">"രണ്ടോ മൂന്നോ പേർ എന്റെ നാമത്തിൽ ഒത്തുചേരുന്നിടത്ത് ഞാൻ അവരുടെ മദ്ധ്യേ ഉണ്ട്."</span>
        </motion.p>
      </div>
    </section>
  );
};

export default Venue;
