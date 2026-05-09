import { motion } from "framer-motion";
import Countdown from "react-countdown";

const FlipUnit = ({ value, labelEn, labelMl }) => (
  <div className="flex flex-col items-center mx-1 md:mx-3">
    <div className="relative group overflow-hidden">
      <motion.div 
        key={value}
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="bg-maroon text-gold w-14 h-16 md:w-20 md:h-24 rounded-lg flex items-center justify-center text-2xl md:text-4xl font-display shadow-[0_10px_20px_rgba(0,0,0,0.4)] border border-gold/20"
      >
        {value.toString().padStart(2, "0")}
      </motion.div>
      <div className="absolute inset-x-0 top-1/2 h-[1px] bg-black/40 shadow-sm" />
    </div>
    <div className="mt-3 flex flex-col items-center">
      <span className="text-maroon/60 font-serif uppercase tracking-widest text-[10px] md:text-xs font-bold">{labelEn}</span>
      <span className="text-maroon/40 font-serif text-[8px] md:text-[10px]">{labelMl}</span>
    </div>
  </div>
);

const renderer = ({ days, hours, minutes, seconds }) => (
  <div className="flex justify-center items-center py-6">
    <FlipUnit value={days} labelEn="Days" labelMl="ദിവസം" />
    <FlipUnit value={hours} labelEn="Hours" labelMl="മണിക്കൂർ" />
    <FlipUnit value={minutes} labelEn="Mins" labelMl="മിനിറ്റ്" />
    <FlipUnit value={seconds} labelEn="Secs" labelMl="സെക്കൻഡ്" />
  </div>
);

const EventDetails = () => {
  const engagementDate = new Date("2026-06-04T00:00:00");
  const weddingDate = new Date("2026-06-08T00:00:00");

  return (
    <section className="py-32 px-4 bg-ivory relative overflow-hidden">
      {/* Decorative floral texture in background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-maroon/5 rounded-full -mr-32 -mt-32 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full -ml-32 -mb-32 blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="space-y-4"
          >
            <p className="text-rose-gold font-cursive text-3xl mb-2">
              The Countdown to Forever
            </p>
            <p className="text-rose-gold/60 font-serif text-xl md:text-2xl italic">
              അവർ ഒന്നാകുന്നു… ✨
ദൈവം ചേർത്ത രണ്ടു ഹൃദയങ്ങൾ. 💖
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="mt-6 space-y-2"
          >
            <h2 className="text-5xl md:text-7xl font-display text-maroon">
              Our Sacred Union
            </h2>
            <h3 className="text-2xl md:text-4xl font-serif text-maroon/40 italic">
              വിവാഹ ശുശ്രൂഷ ✨
            </h3>
          </motion.div>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "150px" }}
            className="h-1 bg-gold mx-auto mt-8" 
          />
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          {/* Engagement Card */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="relative glass p-8 md:p-10 rounded-[3rem] border-gold/30 shadow-gold group"
          >
            <div className="absolute -top-6 left-10 px-6 py-2 bg-maroon text-gold font-display text-sm rounded-full tracking-widest border border-gold/40 flex flex-col items-center">
              <span>The Engagement</span>
              <span className="text-[10px] opacity-60">വിവാഹനിശ്ചയം</span>
            </div>
            <div className="text-center mt-4">
              <h3 className="text-3xl font-display text-maroon mb-2">04 . 06 . 2026</h3>
              <p className="text-maroon/50 font-serif italic mb-6">Thursday | വ്യാഴാഴ്ച</p>
              <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/30 to-transparent my-8" />
              <Countdown date={engagementDate} renderer={renderer} />
            </div>
          </motion.div>

          {/* Wedding Card */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="relative glass p-8 md:p-10 rounded-[3rem] border-gold/30 shadow-gold group"
          >
            <div className="absolute -top-6 left-10 px-6 py-2 bg-maroon text-gold font-display text-sm rounded-full tracking-widest border border-gold/40 flex flex-col items-center">
              <span>The Wedding</span>
              <span className="text-[10px] opacity-60">വിവാഹം</span>
            </div>
            <div className="text-center mt-4">
              <h3 className="text-3xl font-display text-maroon mb-2">08 . 06 . 2026</h3>
              <p className="text-maroon/50 font-serif italic mb-6">Monday | തിങ്കളാഴ്ച</p>
              <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/30 to-transparent my-8" />
              <Countdown date={weddingDate} renderer={renderer} />
            </div>
          </motion.div>
        </div>

        {/* Live Stream Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 text-center"
        >
          <div className="glass p-10 md:p-16 rounded-[4rem] border-gold/30 max-w-4xl mx-auto relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent pointer-events-none" />
            
            <motion.div
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-flex items-center space-x-2 px-4 py-1 bg-red-600/10 text-red-600 rounded-full text-xs font-bold tracking-widest uppercase mb-6"
            >
              <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
              <span>Live Streaming</span>
            </motion.div>

            <h3 className="text-3xl md:text-5xl font-display text-maroon mb-4">Divyanasios Media</h3>
            <p className="text-maroon/60 font-serif text-lg md:text-xl mb-10 max-w-2xl mx-auto italic">
              "Witness our sacred journey from anywhere in the world." <br />
              <span className="text-maroon/40">ഞങ്ങളുടെ വിശുദ്ധ ചടങ്ങുകൾ തത്സമയം കാണുവാൻ</span>
            </p>

            <motion.a
              whileHover={{ scale: 1.05, shadow: "0 20px 40px rgba(212, 175, 55, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              href="#" // User will provide link later or update it
              className="inline-flex items-center space-x-4 px-12 py-5 bg-maroon text-gold font-display rounded-full border border-gold/30 tracking-widest text-sm font-bold uppercase transition-all"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span>Join Live Stream</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventDetails;
