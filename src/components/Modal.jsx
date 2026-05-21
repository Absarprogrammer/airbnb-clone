import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, Heart } from 'lucide-react';

const Modal = ({ isOpen, onClose, listing }) => {
  if (!isOpen || !listing) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="bg-white dark:bg-slate-900 w-full max-w-5xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col relative"
        >
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-800">
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
            >
              <X size={20} className="text-gray-900 dark:text-gray-100" />
            </button>
            <div className="flex space-x-4">
              <button className="flex items-center space-x-2 text-sm font-medium underline px-2 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-gray-100">
                <Heart size={16} /> <span>Save</span>
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="overflow-y-auto p-6 space-y-6">
            <h1 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">{listing.title}</h1>
            
            <div className="flex items-center space-x-2 text-sm font-medium text-gray-900 dark:text-gray-100">
              <Star size={16} className="fill-current" />
              <span>{listing.rating}</span>
              <span className="text-gray-500">·</span>
              <span className="underline">{listing.location}</span>
            </div>

            {/* Images Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 rounded-xl overflow-hidden h-[400px]">
              <div className="h-full w-full relative overflow-hidden group">
                <img src={listing.images[0]} alt="Main" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="hidden md:grid grid-cols-2 grid-rows-2 gap-2 h-full">
                {listing.images.slice(1, 5).map((img, idx) => (
                  <div key={idx} className="relative h-full w-full overflow-hidden group">
                    <img src={img} alt={`Thumbnail ${idx}`} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                  </div>
                ))}
                {Array(Math.max(0, 4 - (listing.images.length - 1))).fill(0).map((_, idx) => (
                   <div key={`fallback-${idx}`} className="bg-gray-200 dark:bg-gray-800 w-full h-full"></div>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="flex flex-col md:flex-row gap-8 pt-4">
              <div className="flex-1 space-y-6 text-gray-900 dark:text-gray-100">
                <div className="border-b border-gray-200 dark:border-gray-800 pb-6">
                  <h2 className="text-xl font-semibold">Entire home hosted by Airbnb</h2>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">4 guests · 2 bedrooms · 2 beds · 1 bath</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">About this space</h3>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                    Enjoy a premium stay at this beautifully designed property. Featuring modern amenities, stunning views, and easy access to local attractions. Perfect for a relaxing getaway. The attention to detail will ensure you have a wonderful time whether you are here for a short trip or a long stay.
                  </p>
                </div>
              </div>

              {/* Price Box */}
              <div className="w-full md:w-1/3">
                <div className="border border-gray-200 dark:border-slate-800 rounded-2xl p-6 shadow-xl sticky top-6 bg-white dark:bg-slate-900">
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">${listing.price}</span>
                    <span className="text-gray-500 dark:text-gray-400">night</span>
                  </div>
                  <button className="w-full bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                    Reserve
                  </button>
                  <p className="text-center text-sm text-gray-500 mt-4">You won't be charged yet</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default Modal;
