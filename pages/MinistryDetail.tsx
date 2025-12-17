import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { MINISTRIES, EMAIL, PHONE } from '../constants';
import Button from '../components/Button';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const MinistryDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const ministry = MINISTRIES.find(m => m.id === id);
  const primaryPhone = PHONE.split(',')[0].trim();
  const primaryPhoneTel = primaryPhone.replace(/[^0-9+]/g, '');
  
  // Check if user came from ministries page
  const fromMinistries = (location.state as { from?: string })?.from === '/ministries';
  const backPath = fromMinistries ? '/ministries' : '/';
  const backText = fromMinistries ? 'Back to Ministries' : 'Back to Home';

  if (!ministry) {
    return (
      <div className="pt-32 pb-20 container mx-auto px-6 text-center animate-fade-in">
        <h1 className="text-4xl font-bold mb-4">Ministry Not Found</h1>
        <Button onClick={() => navigate(backPath)} variant="outline">
          {backText}
        </Button>
      </div>
    );
  }

  return (
    <div className="pt-24 animate-fade-in min-h-screen bg-white">
      {/* Back Link */}
      <div className="container mx-auto px-6 py-8">
        <button 
          onClick={() => navigate(backPath)} 
          className="flex items-center text-xs font-bold text-gray-400 hover:text-black transition-colors uppercase tracking-widest group"
        >
          <ArrowLeft size={14} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          {backText}
        </button>
      </div>

      {/* Hero Image */}
      <div className="w-full h-[40vh] md:h-[50vh] overflow-hidden bg-gray-100 relative">
        <img 
          src={ministry.imageUrl} 
          alt={ministry.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white text-center px-4">{ministry.title.toUpperCase()}</h1>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Main Content */}
          <div className="lg:col-span-2 text-center lg:text-left">
            <h2 className="text-3xl font-bold mb-6">About this Ministry</h2>
            <div className="prose prose-lg text-gray-600 mb-8">
              <p className="lead text-xl text-black font-medium mb-6">{ministry.description}</p>
              <p className="leading-relaxed">
                {ministry.longDescription}
              </p>
              <p className="mt-4 leading-relaxed">
                Through this ministry, we have seen countless lives transformed by the power of God's love. Our commitment is to serve with excellence, love with authenticity, and impact our community and beyond for the glory of God. We invite you to be part of what God is doing through this vital work.
              </p>
            </div>

            <div className="mt-12 p-8 bg-gray-50 border border-gray-100 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Why Join?</h3>
                <ul className="space-y-3">
                    <li className="flex items-start justify-center lg:justify-start">
                        <CheckCircle className="w-5 h-5 text-black mr-3 mt-1 shrink-0" />
                        <span className="text-gray-600">Grow deeper in your relationship with God.</span>
                    </li>
                    <li className="flex items-start justify-center lg:justify-start">
                        <CheckCircle className="w-5 h-5 text-black mr-3 mt-1 shrink-0" />
                        <span className="text-gray-600">Build lasting friendships with like-minded people.</span>
                    </li>
                    <li className="flex items-start justify-center lg:justify-start">
                        <CheckCircle className="w-5 h-5 text-black mr-3 mt-1 shrink-0" />
                        <span className="text-gray-600">Serve the community and make a tangible difference.</span>
                    </li>
                </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
             <div className="bg-black text-white p-8 rounded-lg shadow-xl text-center lg:text-left">
                <h3 className="text-xl font-bold mb-4">Get Involved</h3>
                <p className="text-gray-300 text-sm mb-6">
                    Ready to take the next step? We would love to have you join us.
                </p>
                <div className="mt-4">
                     <p className="text-sm text-gray-400 mb-2">Speak to a leader:</p>
                     <a href={`tel:${primaryPhoneTel}`} className="text-sm font-bold text-white border-b border-white pb-0.5 hover:opacity-80 transition-opacity">Contact Us</a>
                </div>
             </div>

             <div className="border border-gray-200 p-8 rounded-lg text-center lg:text-left">
                <h4 className="font-bold mb-2">Have Questions?</h4>
                <p className="text-gray-500 text-sm mb-4">
                    If you have any questions about the {ministry.title} ministry, feel free to reach out.
                </p>
                <a href={`mailto:${EMAIL}`} className="text-sm font-bold border-b border-black pb-0.5 hover:opacity-70 transition-opacity">
                    Email Us
                </a>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MinistryDetail;