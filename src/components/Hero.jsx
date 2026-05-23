import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="pt-[104px] pb-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative rounded-3xl overflow-hidden h-[60vh] min-h-[450px] w-full flex items-center justify-center shadow-2xl group"
      >
        {/* Premium Background Image - Indian Destination */}
        <div 
          className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-[20s] ease-linear"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=2000&q=80')" }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative z-10 text-center px-4 flex flex-col items-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight max-w-3xl drop-shadow-2xl">
            Not sure where to go? Perfect.
          </h1>
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(225, 29, 72, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-rose-600 font-bold px-10 py-5 rounded-full transition-all duration-300 shadow-xl text-lg flex items-center gap-2 group/btn"
          >
            <span>I'm flexible</span>
            <span className="group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
