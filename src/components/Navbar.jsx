import { useState, useEffect } from 'react';
import { Search, Globe, Menu, User, Moon, Sun, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ toggleDarkMode, isDarkMode, setSearchQuery }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg shadow-sm border-b border-gray-200 dark:border-slate-800' : 'bg-white dark:bg-slate-900'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center cursor-pointer group">
              <span className="text-2xl font-bold text-rose-500 flex items-center gap-1">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-rose-500 group-hover:-rotate-12 transition-transform duration-300"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                <span className="hidden lg:block ml-1 tracking-tight">airbnb</span>
              </span>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-md mx-6">
              <div className="flex items-center w-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-full p-2 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer">
                <button className="flex-1 text-sm font-medium px-4 text-left text-gray-900 dark:text-gray-100">
                  Anywhere
                </button>
                <div className="h-6 border-l border-gray-300 dark:border-slate-600"></div>
                <button className="flex-1 text-sm font-medium px-4 text-left text-gray-900 dark:text-gray-100">
                  Any week
                </button>
                <div className="h-6 border-l border-gray-300 dark:border-slate-600"></div>
                <input 
                  type="text" 
                  placeholder="Search..." 
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 text-sm text-gray-500 dark:text-gray-400 bg-transparent outline-none px-4 w-full"
                />
                <div className="bg-rose-500 p-2 rounded-full text-white hover:bg-rose-600 transition-colors">
                  <Search size={16} />
                </div>
              </div>
            </div>

            {/* Right Menu */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <button className="hidden sm:block text-sm font-medium px-4 py-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors text-gray-900 dark:text-gray-100">
                Airbnb your home
              </button>
              <button className="hidden sm:block p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors text-gray-900 dark:text-gray-100">
                <Globe size={18} />
              </button>
              <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors text-gray-900 dark:text-gray-100">
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <div 
                onClick={() => setIsMobileMenuOpen(true)}
                className="flex items-center space-x-2 border border-gray-200 dark:border-slate-700 rounded-full p-2 cursor-pointer hover:shadow-md transition-shadow bg-white dark:bg-slate-800"
              >
                <Menu size={18} className="text-gray-500 dark:text-gray-400 ml-1" />
                <div className="bg-gray-500 text-white rounded-full p-1">
                  <User size={18} />
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile Search Bar */}
          <div className="md:hidden pb-4">
            <div className="flex items-center w-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-full p-2 shadow-sm hover:shadow-md transition-shadow">
               <div className="pl-3 text-gray-500 dark:text-gray-400">
                 <Search size={20} />
               </div>
               <input 
                  type="text" 
                  placeholder="Where to?" 
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 text-sm font-medium bg-transparent outline-none px-4 py-1 text-gray-900 dark:text-gray-100"
                />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-64 bg-white dark:bg-slate-900 z-[70] shadow-2xl flex flex-col"
            >
              <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-slate-800">
                <span className="font-bold text-gray-900 dark:text-white">Menu</span>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <X size={20} className="text-gray-900 dark:text-white" />
                </button>
              </div>
              <div className="p-4 flex flex-col gap-4 text-gray-900 dark:text-gray-100 font-medium">
                <button className="text-left py-2 hover:text-rose-500 transition-colors">Sign up</button>
                <button className="text-left py-2 hover:text-rose-500 transition-colors border-b border-gray-200 dark:border-slate-800 pb-4">Log in</button>
                <button className="text-left py-2 hover:text-rose-500 transition-colors">Airbnb your home</button>
                <button className="text-left py-2 hover:text-rose-500 transition-colors">Help Center</button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
