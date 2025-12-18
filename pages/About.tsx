import React from 'react';
import { ORGANIZATION_NAME, EMAIL, PHONE } from '../constants';
import { Heart, Users, Home, Globe, BookOpen, Mail, Phone as PhoneIcon } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-24 animate-fade-in">
      {/* Header */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6">ABOUT US</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Serving communities with love, compassion, and the Word of God.
          </p>
        </div>
      </section>

      {/* What We Are */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img 
                src="/images/logo1.jpeg" 
                alt="Shalem Ministries Logo" 
                className="w-48 md:w-64 h-auto object-contain"
              />
            </div>
            
            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">What is Shalem Ministries?</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Shalem Ministries is a faith-based organization dedicated to serving communities through various ministries that address the physical, spiritual, and emotional needs of people across all ages and walks of life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">What We Do</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Through our diverse ministries, we serve children, pastors, churches, elderly, and those in need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 border border-gray-100 text-center md:text-left group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
              <div className="mb-4 flex justify-center md:justify-start">
                <div className="text-black group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-gray-700 transition-colors">Children's Ministry</h3>
              <p className="text-gray-600 leading-relaxed">
                We conduct programs like Vacation Bible School (VBS) and help children learn and study their books in simple and engaging ways. We also distribute books and clothing to support their growth and well-being.
              </p>
            </div>

            <div className="bg-white p-8 border border-gray-100 text-center md:text-left group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
              <div className="mb-4 flex justify-center md:justify-start">
                <div className="text-black group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-gray-700 transition-colors">Pastor's Ministry</h3>
              <p className="text-gray-600 leading-relaxed">
                We focus on encouraging and strengthening pastors through the Word of God, along with distributing clothing and essential support to help them in their ministry work.
              </p>
            </div>

            <div className="bg-white p-8 border border-gray-100 text-center md:text-left group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
              <div className="mb-4 flex justify-center md:justify-start">
                <div className="text-black group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-gray-700 transition-colors">Church Ministry</h3>
              <p className="text-gray-600 leading-relaxed">
                We partner with and support local churches through practical help, resources, and ministry assistance to strengthen the body of Christ.
              </p>
            </div>

            <div className="bg-white p-8 border border-gray-100 text-center md:text-left group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
              <div className="mb-4 flex justify-center md:justify-start">
                <div className="text-black group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-gray-700 transition-colors">Old Age Ministry</h3>
              <p className="text-gray-600 leading-relaxed">
                We serve elderly individuals by providing medicines and hospital support, with the help of young volunteers who assist and care for them with love and respect.
              </p>
            </div>

            <div className="bg-white p-8 border border-gray-100 md:col-span-2 text-center md:text-left group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
              <div className="mb-4 flex justify-center md:justify-start">
                <div className="text-black group-hover:scale-110 transition-transform duration-300">
                  <Home className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-gray-700 transition-colors">Orphanage Home</h3>
              <p className="text-gray-600 leading-relaxed">
                We provide a loving home, education, and hope to destitute children. Our orphanage is a sanctuary for children who have lost their parents or are in desperate need of care, offering them a safe environment, nutritious food, quality education, and the love of a family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="text-center lg:text-left p-8 rounded-lg group hover:bg-gray-50 transition-all duration-300 hover:shadow-lg cursor-pointer">
              <h2 className="text-3xl font-bold mb-4 group-hover:text-gray-700 transition-colors">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                Based on Matthew 28:19, "Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit."
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                We exist to serve communities with the love of Christ, meeting both spiritual and practical needs. Through our various ministries, we aim to make disciples, care for the vulnerable, and support those who serve God's people.
              </p>
            </div>
            
            <div className="text-center lg:text-left p-8 rounded-lg group hover:bg-gray-50 transition-all duration-300 hover:shadow-lg cursor-pointer">
              <h2 className="text-3xl font-bold mb-4 group-hover:text-gray-700 transition-colors">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                To be a ministry organization known for its compassion, generosity, and unwavering commitment to serving others in the name of Christ.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                We envision a community where children are nurtured, pastors are strengthened, churches are supported, elderly are cared for, and those in need find hope and help through the love of God.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tighter mb-4">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Jesus is the Center of everything we do",
              "People are our Priority - from children to elderly",
              "Service is our Calling - we serve with love and compassion",
              "Generosity is our Privilege - we give freely as we have received",
              "Community is our Strength - we partner with churches and pastors",
              "Excellence in all we do - serving with integrity and dedication"
            ].map((val, i) => (
              <div key={i} className="flex items-start bg-white p-6 border border-gray-100 group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer rounded-lg">
                <span className="w-2 h-2 bg-black mr-4 mt-2 rounded-full flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></span>
                <span className="text-lg text-black font-medium group-hover:text-gray-700 transition-colors">{val}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Leadership</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated leaders guiding Shalem Ministries forward.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Founder */}
            <div className="bg-white p-8 border border-gray-100 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer rounded-lg">
              <div className="w-64 h-64 mx-auto mb-6 overflow-hidden rounded-full bg-gray-100 group-hover:ring-4 ring-gray-200 transition-all duration-300">
                <img 
                  src="/images/Founder.jpeg" 
                  alt="Rev. Dr. M. Johnson" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-gray-700 transition-colors">Rev. Dr. M. Johnson</h3>
              <p className="text-gray-600 font-medium mb-1">Founder & Evangelist</p>
              <p className="text-sm text-gray-500">Shalem Ministries & J&J Foundation</p>
            </div>

            {/* Administrative Director */}
            <div className="bg-white p-8 border border-gray-100 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer rounded-lg">
              <div className="w-64 h-64 mx-auto mb-6 overflow-hidden rounded-full bg-gray-100 group-hover:ring-4 ring-gray-200 transition-all duration-300">
                <img 
                  src="/images/AministrativeDirector.jpeg" 
                  alt="M. Vijayavani" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-gray-700 transition-colors">M. Vijayavani</h3>
              <p className="text-gray-600 font-medium mb-1">Administrative Director</p>
              <p className="text-sm text-gray-500">Shalem Ministries & J&J Foundation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We'd love to hear from you. Whether you want to learn more about our ministries, get involved, or need support, we're here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Email Card */}
            <a 
              href={`mailto:${EMAIL}`}
              className="bg-white p-6 md:p-8 border border-gray-200 rounded-xl hover:shadow-xl hover:border-black transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex items-center justify-center md:justify-start mb-4">
                <div className="bg-black group-hover:bg-gray-800 p-3 rounded-lg transition-colors duration-300">
                  <Mail className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2">Email Us</h3>
              <p className="text-base md:text-lg text-black font-medium break-all group-hover:text-gray-700 transition-colors">
                {EMAIL}
              </p>
            </a>

            {/* Phone Card */}
            <div className="bg-white p-6 md:p-8 border border-gray-200 rounded-xl hover:shadow-xl hover:border-black transition-all duration-300 group hover:-translate-y-1">
              <div className="flex items-center justify-center md:justify-start mb-4">
                <div className="bg-black group-hover:bg-gray-800 p-3 rounded-lg transition-colors duration-300">
                  <PhoneIcon className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">Call Us</h3>
              <div className="space-y-3">
                {PHONE.split(',').map((phone, index) => {
                  const trimmedPhone = phone.trim();
                  const phoneTel = trimmedPhone.replace(/[^0-9+]/g, '');
                  return (
                    <a 
                      key={index}
                      href={`tel:${phoneTel}`}
                      className="block bg-gray-50 hover:bg-black hover:text-white p-3 rounded-lg text-base md:text-lg text-black font-medium transition-all duration-300 hover:shadow-md"
                    >
                      {trimmedPhone}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;