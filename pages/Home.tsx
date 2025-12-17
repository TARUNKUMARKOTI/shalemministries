import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { MINISTRIES, UPCOMING_EVENTS, ORGANIZATION_NAME, SOCIAL_LINKS } from '../constants';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const scrollToNext = () => {
    const nextSection = document.getElementById('welcome-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center md:items-center justify-center overflow-hidden pt-8 md:pt-0">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero.jpeg" 
            alt="Church Gathering" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/30" /> 
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-7xl font-extrabold tracking-tighter mb-6 leading-tight">
            LOVE GOD.<br/>LOVE PEOPLE.<br/>MAKE DISCIPLES.
          </h1>
          <p className="text-lg md:text-xl font-light mb-10 tracking-wide opacity-90">
            Welcome to a community where you belong. Join us this Sunday.
          </p>
          <div className="flex justify-center">
            <Button 
              variant="outline-white"
              className="px-10 py-4 text-base font-bold tracking-wider border-2 hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
              onClick={() => window.open(SOCIAL_LINKS.youtube, '_blank', 'noopener,noreferrer')}
            >
              WATCH ONLINE
            </Button>
          </div>
        </div>

        {/* Floating Down Arrow */}
        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-white hover:text-gray-200 transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} className="drop-shadow-lg" />
        </button>
      </section>

      {/* Welcome / Brief About */}
      <section id="welcome-section" className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-sm font-bold tracking-widest uppercase mb-4 text-gray-500">Who We Are</h2>
          <h3 className="text-2xl md:text-4xl font-bold text-black mb-8 tracking-tight">
            We are a church that believes in the transformative power of the Gospel.
          </h3>
          <p className="text-gray-600 leading-relaxed text-lg mb-10">
            At {ORGANIZATION_NAME}, our mission is simple: Go therefore and make disciples of all nations. 
            We are dedicated to building a community that reflects the love of Christ in everything we do.
          </p>
          <Button variant="outline" onClick={() => navigate('/about')}>
            LEARN MORE ABOUT US
          </Button>
        </div>
      </section>

      {/* Ministries Grid */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Our Ministries</h2>
            <p className="text-gray-500">Serving the church, the children, and the world.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {MINISTRIES.map((min) => (
              <div 
                key={min.id} 
                className="bg-white p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 group cursor-pointer hover:-translate-y-1"
                onClick={() => navigate(`/ministries/${min.id}`)}
              >
                <div className="mb-6 text-black">
                  <div className="group-hover:scale-110 transition-transform duration-300 origin-left">
                    {min.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-3">{min.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{min.description}</p>
                <div className="mt-6 flex items-center text-sm font-semibold underline decoration-transparent group-hover:decoration-black transition-all">
                  Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Teaser */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 text-center md:text-left">
            <div>
              <h2 className="text-4xl font-bold tracking-tight mb-2">Happening Soon</h2>
              <p className="text-gray-400">Mark your calendars for what's coming up.</p>
            </div>
            <Button variant="outline-white" className="mt-6 md:mt-0" onClick={() => navigate('/events')}>
              VIEW ALL EVENTS
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {UPCOMING_EVENTS.slice(0, 3).map((evt) => (
              <div 
                key={evt.id} 
                className="group cursor-pointer"
                onClick={() => navigate(`/events/${evt.id}`)}
              >
                <div className="overflow-hidden mb-6 aspect-[4/3]">
                  <img 
                    src={evt.imageUrl} 
                    alt={evt.title} 
                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold tracking-widest text-gray-400 mb-2 uppercase">{evt.date}</span>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-gray-300 transition-colors">{evt.title}</h3>
                  <p className="text-gray-500 text-sm">{evt.location} • {evt.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;