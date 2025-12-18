import React, { useState, useEffect } from 'react';
import { NavLink as RouterNavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Moon, Sun } from 'lucide-react';
import { NAV_LINKS, ORGANIZATION_NAME, SOCIAL_LINKS } from '../constants';
import { useTheme } from '../contexts/ThemeContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close menu when route changes
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    // Enable/disable body scroll when menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
       document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(prev => !prev);
  };

  const navClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    scrolled && !isOpen ? 'bg-white/95 dark:bg-black/95 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800 py-4' : 'bg-white/95 dark:bg-black/95 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800 py-6'
  }`;

  const linkClasses = (isActive: boolean) => `
    text-sm font-bold tracking-wide transition-all duration-200 border-b-2 leading-none py-1
    ${isActive ? 'text-black dark:text-white border-black dark:border-white' : 'text-black dark:text-white border-transparent hover:border-gray-300 dark:hover:border-gray-600'}
  `;

  return (
    <>
      <nav className={navClasses}>
        <div className="container mx-auto px-6 flex justify-between items-center h-full min-h-full">
          {/* Logo */}
          <RouterNavLink 
            to="/" 
            className={`text-2xl font-bold tracking-tighter z-50 transition-colors duration-300 flex items-center leading-none text-black dark:text-white`}
            onClick={() => setIsOpen(false)}
          >
            {ORGANIZATION_NAME}
          </RouterNavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 h-full">
            {NAV_LINKS.map((link) => (
              <RouterNavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => `flex items-center h-full ${linkClasses(isActive)}`}
              >
                {link.label.toUpperCase()}
              </RouterNavLink>
            ))}
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-black dark:text-white transition-all duration-200"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile Menu Buttons */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Dark Mode Toggle - Mobile */}
            <button
              onClick={toggleTheme}
              className="z-[60] text-black dark:text-white focus:outline-none p-2 relative cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            {/* Menu Toggle Button */}
            <button 
              onClick={toggleMenu} 
              className="z-[60] text-black dark:text-white focus:outline-none p-3 -mr-2 relative cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
              style={{ 
                WebkitTapHighlightColor: 'transparent',
                touchAction: 'manipulation',
                userSelect: 'none',
                WebkitUserSelect: 'none',
                zIndex: 60
              }}
              aria-label="Toggle Menu"
              aria-expanded={isOpen}
              type="button"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white dark:bg-black z-[45] md:hidden transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        <div className="h-full overflow-y-auto pt-20">
          <div className="flex flex-col min-h-full px-6 py-6">
            
            {/* Menu Items */}
            <div className="flex flex-col space-y-1 mb-8">
              {NAV_LINKS.map((link, index) => (
                <RouterNavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) => `
                    text-lg font-bold tracking-wide flex items-center justify-between group py-3 px-2 rounded-md
                    ${isActive ? 'text-black dark:text-white bg-gray-50 dark:bg-gray-800' : 'text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800'}
                    transition-all duration-200
                  `}
                  onClick={() => setIsOpen(false)}
                  style={{ transitionDelay: `${index * 30}ms` }}
                >
                  <span className="uppercase">{link.label}</span>
                  <ArrowRight size={18} className={`transform transition-transform ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`} />
                </RouterNavLink>
              ))}
            </div>

            {/* Bottom Info */}
            <div className="border-t border-gray-200 dark:border-gray-800 pt-6 pb-6 mt-auto">
              <p className="text-gray-500 dark:text-gray-400 text-xs uppercase tracking-widest mb-3 font-semibold">Get Connected</p>
              <div className="flex flex-col space-y-2">
                 <a 
                   href={SOCIAL_LINKS.instagram} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="text-base font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                   onClick={() => setIsOpen(false)}
                 >
                   Instagram
                 </a>
                 <a 
                   href={SOCIAL_LINKS.youtube} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="text-base font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                   onClick={() => setIsOpen(false)}
                 >
                   YouTube
                 </a>
                 <a 
                   href={SOCIAL_LINKS.facebook} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="text-base font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                   onClick={() => setIsOpen(false)}
                 >
                   Facebook
                 </a>
              </div>
              <p className="text-gray-400 dark:text-gray-500 text-xs mt-6">© {new Date().getFullYear()} {ORGANIZATION_NAME}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;