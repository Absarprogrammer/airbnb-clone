import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import ListingGrid from './components/ListingGrid';
import Modal from './components/Modal';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [selectedListing, setSelectedListing] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Check local storage or system preference on load
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => {
      const newMode = !prev;
      if (newMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return newMode;
    });
  };

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fId => fId !== id) : [...prev, id]
    );
  };

  const handleCardClick = (listing) => {
    setSelectedListing(listing);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedListing(null), 300); // Clear after animation
    document.body.style.overflow = 'unset';
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300 font-sans"
    >
      <Navbar 
        toggleDarkMode={toggleDarkMode} 
        isDarkMode={isDarkMode} 
        setSearchQuery={setSearchQuery} 
      />
      <main>
        <Hero />
        <Categories 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
        />
        <ListingGrid 
          activeCategory={activeCategory} 
          searchQuery={searchQuery}
          onCardClick={handleCardClick}
          toggleFavorite={toggleFavorite}
          favorites={favorites}
        />
      </main>
      <Footer />
      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        listing={selectedListing} 
      />
    </motion.div>
  );
}

export default App;
