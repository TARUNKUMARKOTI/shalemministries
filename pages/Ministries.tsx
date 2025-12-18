import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MINISTRIES } from '../constants';
import Button from '../components/Button';

const Ministries: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-24 animate-fade-in bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6">MINISTRIES</h1>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            Extending love, hope, and compassion to every corner of our community.
          </p>
        </div>
      </section>

      {/* Ministries List */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="space-y-12">
            {MINISTRIES.map((ministry) => (
              <div 
                key={ministry.id} 
                className="bg-white group hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col md:flex-row cursor-pointer" 
                onClick={() => navigate(`/ministries/${ministry.id}`, { state: { from: '/ministries' } })}
              >
                <div className="md:w-2/5 h-64 md:h-auto overflow-hidden">
                  <img 
                    src={ministry.imageUrl} 
                    alt={ministry.title} 
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 md:p-12 md:w-3/5 flex flex-col justify-center text-center md:text-left">
                  <div className="mb-4 flex justify-center md:justify-start">
                    <div className="text-black opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                      {ministry.icon && React.cloneElement(ministry.icon as React.ReactElement, { size: 32, strokeWidth: 1 })}
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-4">{ministry.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {ministry.description}
                  </p>
                  
                  <div className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-end gap-4 md:gap-0 mt-auto">
                    <Button 
                      variant="outline" 
                      className="!py-2 !px-6 text-xs"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/ministries/${ministry.id}`, { state: { from: '/ministries' } });
                      }}
                    >
                      LEARN MORE
                    </Button>
                  </div>
                </div>
              </div>
            ))}
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