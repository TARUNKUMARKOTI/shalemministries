import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-24 animate-fade-in min-h-screen bg-white dark:bg-black transition-colors duration-200">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-9xl md:text-[12rem] font-extrabold text-gray-200 dark:text-gray-800 mb-4">404</h1>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-black dark:text-white">Page Not Found</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => navigate('/')}
              className="flex items-center"
            >
              <Home size={18} className="mr-2" />
              Go to Home
            </Button>
            <Button 
              variant="outline"
              onClick={() => navigate(-1)}
              className="flex items-center"
            >
              <ArrowLeft size={18} className="mr-2" />
              Go Back
            </Button>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-100 dark:border-gray-800">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">You might be looking for:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => navigate('/about')}
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:underline transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => navigate('/ministries')}
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:underline transition-colors"
              >
                Ministries
              </button>
              <button 
                onClick={() => navigate('/events')}
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:underline transition-colors"
              >
                Events
              </button>
              <button 
                onClick={() => navigate('/giving')}
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:underline transition-colors"
              >
                Giving
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;


