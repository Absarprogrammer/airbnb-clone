import * as Icons from 'lucide-react';
import { categories } from '../data/mockData';

const Categories = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="pt-32 md:pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white dark:bg-slate-900 z-40 sticky top-0 md:top-20 transition-colors duration-300 shadow-sm border-b border-gray-100 dark:border-slate-800">
      <div className="flex space-x-8 overflow-x-auto py-4 hide-scrollbar">
        {categories.map((item, index) => {
          const IconComponent = Icons[item.icon] || Icons.HelpCircle;
          const isActive = activeCategory === item.label;
          
          return (
            <div 
              key={index} 
              onClick={() => setActiveCategory(item.label === activeCategory ? '' : item.label)}
              className={`group flex flex-col items-center justify-center min-w-max cursor-pointer gap-2 pb-2 border-b-2 transition-all duration-300 ${isActive ? 'border-gray-900 dark:border-white text-gray-900 dark:text-white' : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:border-gray-300 dark:hover:border-slate-600'}`}
            >
              <div className="group-hover:scale-110 transition-transform duration-300">
                <IconComponent size={24} />
              </div>
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
