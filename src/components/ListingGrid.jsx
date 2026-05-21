import { useState, useEffect } from 'react';
import ListingCard from './ListingCard';
import { listings } from '../data/mockData';
import { motion } from 'framer-motion';

const SkeletonCard = () => (
  <div className="flex flex-col gap-3 animate-pulse">
    <div className="bg-gray-200 dark:bg-gray-800 rounded-xl aspect-square"></div>
    <div>
      <div className="flex justify-between items-start mb-2">
        <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/2"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/6"></div>
      </div>
      <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-2/3 mb-2"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/4"></div>
    </div>
  </div>
);

const ListingGrid = ({ activeCategory, searchQuery, onCardClick, toggleFavorite, favorites }) => {
  const [loading, setLoading] = useState(true);
  const [filteredListings, setFilteredListings] = useState([]);

  useEffect(() => {
    // Simulate network delay for skeleton loader
    setLoading(true);
    const timer = setTimeout(() => {
      let filtered = listings;
      
      if (activeCategory) {
        filtered = filtered.filter(l => l.category === activeCategory);
      }
      
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(l => 
          l.title.toLowerCase().includes(query) || 
          l.location.toLowerCase().includes(query)
        );
      }
      
      setFilteredListings(filtered);
      setLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [activeCategory, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-screen">
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 gap-y-10">
          {[...Array(8)].map((_, i) => <SkeletonCard key={i} />)}
        </div>
      ) : filteredListings.length > 0 ? (
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 gap-y-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredListings.map((listing) => (
            <ListingCard 
              key={listing.id} 
              listing={listing} 
              onCardClick={onCardClick}
              toggleFavorite={toggleFavorite}
              isFavorite={favorites.includes(listing.id)}
            />
          ))}
        </motion.div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">No exact matches</h2>
          <p className="text-gray-500 dark:text-gray-400">Try changing or removing some of your filters or adjusting your search area.</p>
        </div>
      )}
    </div>
  );
};

export default ListingGrid;
