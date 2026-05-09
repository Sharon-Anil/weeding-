import { motion } from "framer-motion";
import Countdown from "react-countdown";

const FlipUnit = ({ value, label }) => (
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
    <span className="mt-3 text-maroon/60 font-serif uppercase tracking-widest text-[10px] md:text-xs font-bold">{label}</span>
  </div>
);

const renderer = ({ days, hours, minutes, seconds }) => (
  <div className="flex justify-center items-center py-6">
    <FlipUnit value={days} label="Days" />
    <FlipUnit value={hours} label="Hours" />
    <FlipUnit value={minutes} label="Mins" />
    <FlipUnit value={seconds} label="Secs" />
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
        <div className="text-center mb-24">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-rose-gold font-cursive text-3xl mb-4"
          >
            The Countdown to Forever
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-display text-maroon"
          >
            Our Sacred Union
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "150px" }}
            className="h-1 bg-gold mx-auto mt-6" 
          />
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Engagement Card */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="relative glass p-10 rounded-[3rem] border-gold/30 shadow-gold group"
          >
            <div className="absolute -top-6 left-10 px-6 py-2 bg-maroon text-gold font-display text-sm rounded-full tracking-widest border border-gold/40">
              The Engagement
            </div>
            <div className="text-center mt-4">
              <h3 className="text-3xl font-display text-maroon mb-2">04 . 06 . 2026</h3>
              <p className="text-maroon/50 font-serif italic mb-6">Thursday</p>
              <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/30 to-transparent my-8" />
              <Countdown date={engagementDate} renderer={renderer} />
            </div>
          </motion.div>

          {/* Wedding Card */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="relative glass p-10 rounded-[3rem] border-gold/30 shadow-gold group"
          >
            <div className="absolute -top-6 left-10 px-6 py-2 bg-maroon text-gold font-display text-sm rounded-full tracking-widest border border-gold/40">
              The Wedding
            </div>
            <div className="text-center mt-4">
              <h3 className="text-3xl font-display text-maroon mb-2">08 . 06 . 2026</h3>
              <p className="text-maroon/50 font-serif italic mb-6">Monday</p>
              <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/30 to-transparent my-8" />
              <Countdown date={weddingDate} renderer={renderer} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
