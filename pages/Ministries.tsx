import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MINISTRIES } from '../constants';
import Button from '../components/Button';
import { MoveRight } from 'lucide-react';

const Ministries: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-24 animate-fade-in bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6">MINISTRIES</h1>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            Extending love, hope, and compassion to every corner of our community.
          </p>
        </div>
      </section>

      {/* Ministries List */}
      <section className="py-16 md:py-32">
        <div className="container mx-auto px-6">
          <div className="space-y-20 md:space-y-32">
            {MINISTRIES.map((ministry, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={ministry.id} 
                  className={`flex flex-col lg:flex-row gap-8 lg:gap-24 items-center group ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Image Container - Reduced width and height */}
                  <div className="w-full lg:w-5/12 relative">
                     <div 
                       className="relative aspect-video md:aspect-[3/2] overflow-hidden cursor-pointer bg-gray-100 shadow-sm"
                       onClick={() => navigate(`/ministries/${ministry.id}`, { state: { from: '/ministries' } })}
                     >
                       <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm text-black text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest shadow-sm">
                         0{index + 1}
                       </div>
                       <img 
                          src={ministry.imageUrl} 
                          alt={ministry.title} 
                          className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                       />
                     </div>
                  </div>

                  {/* Content Container */}
                  <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
                    <div className="mb-4 md:mb-6 opacity-60 group-hover:opacity-100 transition-opacity duration-500 text-black hidden md:block">
                      {ministry.icon && React.cloneElement(ministry.icon as React.ReactElement, { size: 40, strokeWidth: 1 })}
                    </div>
                    
                    <h2 
                      className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 cursor-pointer hover:text-gray-700 transition-colors"
                      onClick={() => navigate(`/ministries/${ministry.id}`, { state: { from: '/ministries' } })}
                    >
                      {ministry.title}
                    </h2>
                    
                    <p className="text-base md:text-lg text-gray-500 leading-relaxed mb-6 md:mb-8 max-w-lg font-light">
                      {ministry.description}
                    </p>
                    
                    <button 
                      onClick={() => navigate(`/ministries/${ministry.id}`, { state: { from: '/ministries' } })}
                      className="group/btn flex items-center text-xs font-bold tracking-[0.2em] uppercase border-b border-gray-300 pb-2 hover:border-black hover:text-black text-gray-500 transition-all"
                    >
                      Learn More
                      <MoveRight size={14} className="ml-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quote / Break Section */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h3 className="text-xl md:text-3xl font-serif italic text-gray-400 mb-6 leading-relaxed">
            "For even the Son of Man came not to be served but to serve, and to give his life as a ransom for many."
          </h3>
          <p className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-black">Mark 10:45</p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-white text-center">
         <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 md:mb-6">Want to get involved?</h2>
            <p className="text-gray-500 mb-10 max-w-lg mx-auto font-light text-base md:text-lg">
              There are many ways to serve. Join a team and make a difference today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 px-4">
              <Button onClick={() => navigate('/about')} className="w-full sm:w-auto">CONTACT US</Button>
              <Button variant="outline" onClick={() => navigate('/giving')} className="w-full sm:w-auto">SUPPORT US</Button>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Ministries;