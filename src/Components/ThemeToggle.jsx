
import { useContext } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeProvider';


const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="relative group">
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 transition-transform duration-300 transform hover:scale-110 shadow-md"
        aria-label="Toggle Theme"
      >
        {theme === 'dark' ? (
          <FaSun className="text-yellow-500 w-6 h-6 transition-transform duration-500 rotate-180" />
        ) : (
          <FaMoon className="text-gray-700 w-6 h-6 transition-transform duration-500 rotate-180" />
        )}
      </button>
      {/* Tooltip */}
      <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </span>
    </div>
  );
};

export default ThemeToggle;
