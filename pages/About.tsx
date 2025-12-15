import React from 'react';
import { ORGANIZATION_NAME } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pt-24 animate-fade-in">
      {/* Header */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6">OUR STORY</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Building a legacy of faith, hope, and love in our city and beyond.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://picsum.photos/800/1000?grayscale" 
                alt="Community" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">The Mission</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Based on Matthew 28:19, "Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit." 
                  We exist to see people far from God raised to life in Christ.
                </p>
              </div>
              
              <div className="h-px bg-gray-200 w-full" />

              <div>
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  To be a church that is known for its generosity, its community, and its unwavering commitment to the Bible. We envision a place where everyone is welcome, and everyone can find a home.
                </p>
              </div>

              <div className="h-px bg-gray-200 w-full" />

              <div>
                <h2 className="text-3xl font-bold mb-4">Core Values</h2>
                <ul className="space-y-4">
                  {[
                    "Jesus is the Center",
                    "People are the Priority",
                    "Generosity is our Privilege",
                    "Service is our Calling"
                  ].map((val, i) => (
                    <li key={i} className="flex items-center text-lg text-black font-medium">
                      <span className="w-2 h-2 bg-black mr-4 rounded-full"></span>
                      {val}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section Placeholder */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-16 tracking-tight">LEADERSHIP</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             {[1, 2, 3].map((item) => (
               <div key={item} className="flex flex-col items-center">
                 <div className="w-64 h-64 bg-gray-800 mb-6 overflow-hidden">
                   <img src={`https://picsum.photos/400/400?grayscale&random=${item + 10}`} alt="Leader" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
                 </div>
                 <h3 className="text-xl font-bold">John Doe</h3>
                 <p className="text-gray-400 text-sm tracking-wide uppercase mt-2">Lead Pastor</p>
               </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;