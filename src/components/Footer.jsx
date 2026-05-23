import { Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 mt-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100">Support</h4>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li className="hover:underline cursor-pointer hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Help Center</li>
              <li className="hover:underline cursor-pointer hover:text-gray-900 dark:hover:text-gray-100 transition-colors">AirCover</li>
              <li className="hover:underline cursor-pointer hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Anti-discrimination</li>
              <li className="hover:underline cursor-pointer hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Disability support</li>
              <li className="hover:underline cursor-pointer hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Cancellation options</li>
            </ul>
          </div>
          
          <div className="space-y-4 border-t md:border-t-0 border-gray-200 dark:border-slate-800 pt-8 md:pt-0">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100">Hosting</h4>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li className="hover:underline cursor-pointer hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Airbnb your home</li>
              <li className="hover:underline cursor-pointer hover:text-gray-900 dark:hover:text-gray-100 transition-colors">AirCover for Hosts</li>
              <li className="hover:underline cursor-pointer hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Hosting resources</li>
              <li className="hover:underline cursor-pointer hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Community forum</li>
              <li className="hover:underline cursor-pointer hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Hosting responsibly</li>
            </ul>
          </div>

          <div className="space-y-4 border-t md:border-t-0 border-gray-200 dark:border-slate-800 pt-8 md:pt-0">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100">Airbnb</h4>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li className="hover:underline cursor-pointer hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Newsroom</li>
              <li className="hover:underline cursor-pointer hover:text-gray-900 dark:hover:text-gray-100 transition-colors">New features</li>
              <li className="hover:underline cursor-pointer hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Careers</li>
              <li className="hover:underline cursor-pointer hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Investors</li>
              <li className="hover:underline cursor-pointer hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Gift cards</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-2 gap-y-1 text-sm text-gray-600 dark:text-gray-400">
            <span>© 2024 Airbnb, Inc.</span>
            <span className="hidden sm:inline">·</span>
            <span className="hover:underline cursor-pointer hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Terms</span>
            <span className="hidden sm:inline">·</span>
            <span className="hover:underline cursor-pointer hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Sitemap</span>
            <span className="hidden sm:inline">·</span>
            <span className="hover:underline cursor-pointer hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Privacy</span>
            <span className="hidden sm:inline">·</span>
            <span className="hover:underline cursor-pointer hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Your Privacy Choices</span>
          </div>
          
          <div className="flex items-center space-x-6 text-sm font-medium text-gray-900 dark:text-gray-100">
            <button className="flex items-center space-x-2 hover:underline">
              <Globe size={18} />
              <span>English (US)</span>
            </button>
            <button className="hover:underline">₹ INR</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
