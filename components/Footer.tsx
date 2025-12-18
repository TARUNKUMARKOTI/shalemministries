import React from 'react';
import { ORGANIZATION_NAME, ADDRESS, MAP_URL, PHONE, EMAIL, SOCIAL_LINKS, NAV_LINKS } from '../constants';
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const phoneNumbers = PHONE.split(',').map(p => p.trim());

  return (
    <footer className="bg-black text-white pt-24 pb-12 border-t border-gray-900 font-sans">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Column (Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-3xl font-extrabold tracking-tighter text-white">{ORGANIZATION_NAME}</h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              We are a community devoted to following Jesus, loving our neighbors, and making disciples of all nations.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4 pt-2">
              <a 
                href={SOCIAL_LINKS.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 hover:bg-white text-gray-400 hover:text-black transition-all duration-300 hover:scale-110 border border-gray-800 hover:border-white"
              >
                <Instagram size={18} />
              </a>
              <a 
                href={SOCIAL_LINKS.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 hover:bg-white text-gray-400 hover:text-black transition-all duration-300 hover:scale-110 border border-gray-800 hover:border-white"
              >
                <Facebook size={18} />
              </a>
              <a 
                href={SOCIAL_LINKS.youtube} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 hover:bg-white text-gray-400 hover:text-black transition-all duration-300 hover:scale-110 border border-gray-800 hover:border-white"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Navigation (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-gray-600">Explore</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-400 hover:text-white transition-colors text-sm font-medium block w-fit">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Times (Span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-gray-600">Service Times</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <div className="flex items-start">
                  <span className="text-gray-400 w-24 shrink-0 font-medium">Sunday</span>
                  <div className="flex-1">
                    <span className="font-medium text-white block">9:30 AM – 1:00 PM</span>
                    <span className="text-gray-500 text-xs mt-1">Sunday Worship Service</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start">
                  <span className="text-gray-400 w-24 shrink-0 font-medium">Wednesday</span>
                  <div className="flex-1">
                    <span className="font-medium text-white block">10:00 AM – 12:00 PM</span>
                    <span className="text-gray-500 text-xs mt-1">Women's Fellowship & Prayer Service</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start">
                  <span className="text-gray-400 w-24 shrink-0 font-medium">Friday</span>
                  <div className="flex-1">
                    <span className="font-medium text-white block">10:00 AM – 2:00 PM</span>
                    <span className="text-gray-500 text-xs mt-1">Fasting Prayer Service</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start">
                  <span className="text-gray-400 w-24 shrink-0 font-medium">Saturday</span>
                  <div className="flex-1">
                    <span className="font-medium text-white block">7:00 PM – 9:00 PM</span>
                    <span className="text-gray-500 text-xs mt-1">Youth Service</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact (Span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-gray-600">Contact Us</h4>
            <div className="space-y-2">
              
              {/* Address */}
              <a 
                href={MAP_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-start space-x-4 text-gray-400 hover:text-white transition-colors p-3 -ml-3 rounded-lg hover:bg-gray-900/50"
              >
                <div className="bg-gray-900 group-hover:bg-white group-hover:text-black p-2 rounded-md transition-colors duration-300 mt-1">
                   <MapPin size={16} />
                </div>
                <div className="text-sm mt-2 flex flex-col">
                  <span className="font-medium text-white mb-1">Yernagdem</span>
                  <span className="flex items-center">
                    {ADDRESS}
                    <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity translate-y-1 group-hover:translate-y-0 duration-300" />
                  </span>
                </div>
              </a>

              {/* Email */}
              <a 
                href={`mailto:${EMAIL}`}
                className="group flex items-center space-x-4 text-gray-400 hover:text-white transition-colors p-3 -ml-3 rounded-lg hover:bg-gray-900/50"
              >
                 <div className="bg-gray-900 group-hover:bg-white group-hover:text-black p-2 rounded-md transition-colors duration-300">
                   <Mail size={16} />
                </div>
                <span className="text-sm break-all">{EMAIL}</span>
              </a>

              {/* Phone */}
              <div className="flex flex-col space-y-1">
                {phoneNumbers.map((num, idx) => (
                   <a 
                    key={idx}
                    href={`tel:${num.replace(/[^0-9+]/g, '')}`}
                    className="group flex items-center space-x-4 text-gray-400 hover:text-white transition-colors p-3 -ml-3 rounded-lg hover:bg-gray-900/50"
                  >
                    <div className="bg-gray-900 group-hover:bg-white group-hover:text-black p-2 rounded-md transition-colors duration-300">
                      <Phone size={16} />
                    </div>
                    <span className="text-sm">{num}</span>
                  </a>
                ))}
              </div>

            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-900 pt-8">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center mb-6">
            <p className="text-xs text-gray-600 mb-4 md:mb-0">&copy; {new Date().getFullYear()} {ORGANIZATION_NAME}. All rights reserved.</p>
          </div>
          
          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs text-gray-500 border-t border-gray-900 pt-6">
            <Link to="/terms-and-conditions" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-gray-700">•</span>
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-gray-700">•</span>
            <Link to="/refund-policy" className="hover:text-white transition-colors">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;