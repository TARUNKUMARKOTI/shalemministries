import React, { useState, useEffect } from 'react';
import { NavLink as RouterNavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NAV_LINKS, ORGANIZATION_NAME, SOCIAL_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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
    scrolled && !isOpen ? 'bg-white/95 backdrop-blur-sm border-b border-gray-100 py-4' : 'bg-transparent py-6'
  }`;

  const linkClasses = (isActive: boolean) => `
    text-sm font-bold tracking-wide transition-all duration-200 border-b-2 pb-1
    ${isActive ? 'text-black border-black' : 'text-black border-transparent hover:border-gray-300'}
  `;

  return (
    <>
      <nav className={navClasses}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <RouterNavLink 
            to="/" 
            className={`text-2xl font-bold tracking-tighter z-50 transition-colors duration-300 ${isOpen ? 'text-black' : 'text-black'}`}
            onClick={() => setIsOpen(false)}
          >
            {ORGANIZATION_NAME}
          </RouterNavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            {NAV_LINKS.map((link) => (
              <RouterNavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => linkClasses(isActive)}
              >
                {link.label.toUpperCase()}
              </RouterNavLink>
            ))}
          </div>

          {/* Mobile Toggle Button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden z-[60] text-black focus:outline-none p-3 -mr-2 relative cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
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
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-[45] md:hidden transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] ${
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
                    ${isActive ? 'text-black bg-gray-50' : 'text-gray-700 hover:text-black hover:bg-gray-50'}
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
            <div className="border-t border-gray-200 pt-6 pb-6 mt-auto">
              <p className="text-gray-500 text-xs uppercase tracking-widest mb-3 font-semibold">Get Connected</p>
              <div className="flex flex-col space-y-2">
                 <a 
                   href={SOCIAL_LINKS.instagram} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="text-base font-medium text-gray-700 hover:text-black transition-colors"
                   onClick={() => setIsOpen(false)}
                 >
                   Instagram
                 </a>
                 <a 
                   href={SOCIAL_LINKS.youtube} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="text-base font-medium text-gray-700 hover:text-black transition-colors"
                   onClick={() => setIsOpen(false)}
                 >
                   YouTube
                 </a>
                 <a 
                   href={SOCIAL_LINKS.facebook} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="text-base font-medium text-gray-700 hover:text-black transition-colors"
                   onClick={() => setIsOpen(false)}
                 >
                   Facebook
                 </a>
              </div>
              <p className="text-gray-400 text-xs mt-6">© {new Date().getFullYear()} {ORGANIZATION_NAME}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;