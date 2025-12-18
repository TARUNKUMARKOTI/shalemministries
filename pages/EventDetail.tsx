import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { UPCOMING_EVENTS, MAP_URL } from '../constants';
import Button from '../components/Button';
import { MapPin, Clock, Calendar, ArrowLeft, Share2 } from 'lucide-react';

const EventDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const event = UPCOMING_EVENTS.find(e => e.id === id);

  const handleShare = async () => {
    const url = window.location.href;
    const shareData = {
      title: event?.title || 'Event',
      text: event?.description || '',
      url: url,
    };

    try {
      // Check if Web Share API is available (mobile devices)
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback: Copy to clipboard
        await navigator.clipboard.writeText(url);
        alert('Event link copied to clipboard!');
      }
    } catch (error) {
      // User cancelled or error occurred
      if (error instanceof Error && error.name !== 'AbortError') {
        // Fallback: Copy to clipboard if share fails
        try {
          await navigator.clipboard.writeText(url);
          alert('Event link copied to clipboard!');
        } catch (clipboardError) {
          console.error('Failed to copy to clipboard:', clipboardError);
        }
      }
    }
  };

  if (!event) {
    return (
      <div className="pt-32 pb-20 container mx-auto px-6 text-center animate-fade-in">
        <h1 className="text-4xl font-bold mb-4">Event Not Found</h1>
        <Button onClick={() => navigate('/events')} variant="outline">
          Back to Events
        </Button>
      </div>
    );
  }

  return (
    <div className="pt-24 animate-fade-in min-h-screen bg-white dark:bg-black transition-colors duration-200">
      {/* Back Link */}
      <div className="container mx-auto px-6 py-8">
        <button 
          onClick={() => navigate('/events')} 
          className="flex items-center text-xs font-bold text-gray-400 dark:text-gray-500 hover:text-black dark:hover:text-white transition-colors uppercase tracking-widest group"
        >
          <ArrowLeft size={14} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Events
        </button>
      </div>

      {/* Hero Image */}
      <div className="w-full h-[50vh] md:h-[60vh] overflow-hidden bg-gray-100 relative">
        <img 
          src={event.imageUrl} 
          alt={event.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="container mx-auto px-6 -mt-20 relative z-10 pb-20">
        <div className="bg-white dark:bg-black p-8 md:p-12 shadow-xl border border-gray-100 dark:border-gray-700 max-w-6xl mx-auto transition-colors duration-200">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Main Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start space-x-4 mb-6 text-xs font-bold tracking-widest text-black dark:text-white uppercase">
                 <span className="bg-black dark:bg-white text-white dark:text-black px-3 py-1">{event.date}</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-8 leading-tight text-black dark:text-white">
                {event.title}
              </h1>

              <div className="prose prose-lg text-gray-600 dark:text-gray-300 mb-8 max-w-none">
                <p className="lead text-xl text-black dark:text-white font-medium mb-6">{event.description}</p>
                <p>
                  At Shalem Ministries, we are committed to serving our community with love, compassion, and the love of Christ. Through our various ministries, we aim to make a tangible difference in the lives of those we serve, sharing God's love through practical acts of service and support.
                </p>
                <p className="mt-4">
                  We believe that ministry extends beyond the walls of the church, reaching into every area of need. Whether through education, support, resources, or care, we are dedicated to being the hands and feet of Jesus in our community.
                </p>
                <h3 className="text-2xl font-bold text-black dark:text-white mt-8 mb-4">Get Involved</h3>
                <p>
                  If you're interested in learning more about this ministry or would like to get involved, we welcome your participation. Together, we can make a greater impact and serve our community with excellence and love.
                </p>
              </div>
              
              <div className="pt-8 border-t border-gray-100 dark:border-gray-700 mt-12">
                 <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-black dark:text-white">Share Event</h3>
                 <div className="flex justify-center lg:justify-start space-x-4">
                    <button 
                      onClick={handleShare}
                      className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors cursor-pointer text-black dark:text-white"
                      aria-label="Share event"
                    >
                      <Share2 size={16} />
                    </button>
                 </div>
              </div>
            </div>

            {/* Sidebar / Info */}
            <div className="lg:w-80 shrink-0 space-y-8">
              <div className="bg-gray-50 dark:bg-black p-8 border border-gray-100 dark:border-gray-700 sticky top-32 transition-colors duration-200">
                <h3 className="text-sm font-bold uppercase tracking-widest mb-6 border-b border-gray-200 dark:border-gray-700 pb-2 text-black dark:text-white">Event Details</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start group">
                    <Calendar size={20} className="mr-4 mt-1 text-gray-400 dark:text-gray-500 group-hover:text-black dark:group-hover:text-white transition-colors" />
                    <div>
                      <span className="block text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">Date</span>
                      <span className="font-medium text-lg text-black dark:text-white">{event.date}</span>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <Clock size={20} className="mr-4 mt-1 text-gray-400 dark:text-gray-500 group-hover:text-black dark:group-hover:text-white transition-colors" />
                    <div>
                       <span className="block text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">Time</span>
                       <span className="font-medium text-lg text-black dark:text-white">{event.time}</span>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <MapPin size={20} className="mr-4 mt-1 text-gray-400 dark:text-gray-500 group-hover:text-black dark:group-hover:text-white transition-colors" />
                    <div>
                       <span className="block text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">Location</span>
                       <span className="font-medium text-lg text-black dark:text-white">{event.location}</span>
                       <a href={MAP_URL} target="_blank" rel="noreferrer" className="block text-xs text-gray-500 dark:text-gray-400 underline mt-2 hover:text-black dark:hover:text-white">View Map</a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-gray-500 dark:text-gray-400 italic">No registration required. Open to all.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;