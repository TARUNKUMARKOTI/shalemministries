import React, { useState, useEffect } from 'react';
import { NavLink as RouterNavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NAV_LINKS, ORGANIZATION_NAME } from '../constants';

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
    // Enable/disable body scroll when menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
       document.body.style.overflow = 'unset';
    };
  }, [location, isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

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
          <div className="md:hidden z-50">
            <button 
              onClick={toggleMenu} 
              className="text-black focus:outline-none p-2 -mr-2"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-40 md:hidden transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-8 pt-32 justify-between">
          
          {/* Menu Items */}
          <div className="flex flex-col space-y-6">
            {NAV_LINKS.map((link, index) => (
              <RouterNavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => `
                  text-4xl font-extrabold tracking-tighter flex items-center justify-between group
                  ${isActive ? 'text-black' : 'text-gray-300 hover:text-gray-500'}
                  transition-colors duration-300
                `}
                onClick={() => setIsOpen(false)}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <span>{link.label}</span>
                <ArrowRight size={24} className={`transform transition-transform ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} />
              </RouterNavLink>
            ))}
          </div>

          {/* Bottom Info */}
          <div className="border-t border-gray-100 pt-8 pb-8">
            <p className="text-gray-400 text-xs uppercase tracking-widest mb-4 font-bold">Get Connected</p>
            <div className="flex flex-col space-y-2">
               <a href="#" className="text-lg font-medium text-black">Instagram</a>
               <a href="#" className="text-lg font-medium text-black">YouTube</a>
               <a href="#" className="text-lg font-medium text-black">Facebook</a>
            </div>
            <p className="text-gray-300 text-xs mt-8">© {new Date().getFullYear()} {ORGANIZATION_NAME}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;