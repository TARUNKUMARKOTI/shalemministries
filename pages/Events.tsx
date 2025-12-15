import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UPCOMING_EVENTS } from '../constants';
import Button from '../components/Button';
import { MapPin, Clock, Calendar as CalendarIcon } from 'lucide-react';

const Events: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-24 animate-fade-in">
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6">EVENTS</h1>
          <p className="text-xl text-gray-600 font-light max-w-2xl">
            Stay up to date with everything happening at 2819 Church.
          </p>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="space-y-12">
            {UPCOMING_EVENTS.map((event) => (
              <div key={event.id} className="bg-white group hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col md:flex-row cursor-pointer" onClick={() => navigate(`/events/${event.id}`)}>
                <div className="md:w-2/5 h-64 md:h-auto overflow-hidden">
                  <img 
                    src={event.imageUrl} 
                    alt={event.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale"
                  />
                </div>
                <div className="p-8 md:p-12 md:w-3/5 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4 text-xs font-bold tracking-widest text-gray-400 uppercase">
                    <div className="flex items-center"><CalendarIcon size={14} className="mr-2"/> {event.date}</div>
                    <div className="flex items-center"><Clock size={14} className="mr-2"/> {event.time}</div>
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-4">{event.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {event.description}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center text-sm text-gray-500 font-medium">
                      <MapPin size={16} className="mr-2" />
                      {event.location}
                    </div>
                    <Button 
                      variant="outline" 
                      className="!py-2 !px-6 text-xs"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/events/${event.id}`);
                      }}
                    >
                      DETAILS
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;