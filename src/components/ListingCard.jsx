import { useState } from 'react';
import { Heart, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ListingCard = ({ listing, onCardClick, toggleFavorite, isFavorite }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % listing.images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + listing.images.length) % listing.images.length);
  };

  return (
    <motion.div 
      className="group cursor-pointer flex flex-col gap-3 relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      onClick={() => onCardClick(listing)}
    >
      <div className="relative aspect-square overflow-hidden rounded-xl shadow-sm group-hover:shadow-xl group-hover:shadow-rose-500/10 transition-all duration-300">
        {/* Favorite Button */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(listing.id);
          }}
          className="absolute top-3 right-3 z-10 text-white hover:scale-110 transition-transform duration-200"
        >
          <Heart size={24} className={isFavorite ? "fill-rose-500 text-rose-500" : "fill-black/30"} />
        </button>

        {/* Carousel */}
        <div className="w-full h-full relative">
          <AnimatePresence initial={false}>
            <motion.img
              key={currentImageIndex}
              src={listing.images[currentImageIndex]}
              alt={listing.title}
              className="absolute w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence>
        </div>

        {/* Carousel Controls */}
        <div className="absolute inset-0 flex items-center justify-between p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button 
            onClick={prevImage}
            className="bg-white/80 hover:bg-white rounded-full p-1 shadow-sm text-gray-800 transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={nextImage}
            className="bg-white/80 hover:bg-white rounded-full p-1 shadow-sm text-gray-800 transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
        
        {/* Carousel Indicators */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
          {listing.images.map((_, idx) => (
            <div 
              key={idx}
              className={`w-1.5 h-1.5 rounded-full transition-all ${idx === currentImageIndex ? 'bg-white scale-110' : 'bg-white/50'}`}
            />
          ))}
        </div>
      </div>

      <div>
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 truncate pr-4">{listing.location}</h3>
          <div className="flex items-center gap-1 text-sm font-medium text-gray-900 dark:text-gray-100">
            <Star size={14} className="fill-current" />
            <span>{listing.rating}</span>
          </div>
        </div>
        <p className="text-gray-500 dark:text-gray-400 text-sm truncate">{listing.title}</p>
        <div className="mt-1 flex items-baseline gap-1">
          <span className="font-semibold text-gray-900 dark:text-gray-100">${listing.price}</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">night</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ListingCard;
