import React, { useState } from 'react';
import { ORGANIZATION_NAME } from '../constants';
import { ChevronDown, ArrowRight, CreditCard, Lock } from 'lucide-react';

const Giving: React.FC = () => {
  const [amount, setAmount] = useState('');
  const [fund, setFund] = useState('General offering');
  const [frequency, setFrequency] = useState('One time');

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numbers and decimal point
    const value = e.target.value.replace(/[^0-9.]/g, '');
    
    // Prevent multiple decimals
    if ((value.match(/\./g) || []).length > 1) return;
    
    // Limit to 2 decimal places
    if (value.includes('.')) {
      const parts = value.split('.');
      if (parts[1].length > 2) return;
    }

    setAmount(value);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20 px-4 animate-fade-in flex flex-col items-center justify-center">
      
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-black">{ORGANIZATION_NAME}</h1>
        <p className="text-gray-500 text-sm mt-1">Secure Donation</p>
      </div>

      {/* Donation Card */}
      <div className="w-full max-w-lg bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        
        {/* Amount Section */}
        <div className="p-8 pb-4 text-center bg-gray-50/50 border-b border-gray-100">
          <div className="flex justify-center items-center gap-1">
            <span className={`text-4xl font-bold transition-all ${amount ? 'text-black' : 'text-gray-300'}`}>
              ₹
            </span>
            <input
              type="text"
              value={amount}
              onChange={handleAmountChange}
              placeholder="0"
              className="bg-transparent text-left text-6xl font-bold text-black placeholder-gray-200 focus:outline-none py-2 caret-black"
              style={{ width: amount ? `${amount.length * 0.7 + 0.2}em` : '1.5ch' }}
              autoFocus
            />
          </div>
          <div className="mt-2 text-xs text-gray-400 font-medium uppercase tracking-wider">INR</div>
        </div>

        {/* Configuration Fields */}
        <div className="p-8 space-y-6">
          
          {/* Fund Selector */}
          <div className="relative group">
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Fund</label>
            <div className="relative">
              <select 
                value={fund}
                onChange={(e) => setFund(e.target.value)}
                className="w-full appearance-none bg-white border border-gray-200 rounded-lg py-3 px-4 text-base font-medium text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all cursor-pointer shadow-sm"
              >
                <option>General offering</option>
                <option>Percentage giving</option>
                <option>Building Initiative</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <ChevronDown size={16} />
              </div>
            </div>
          </div>

          {/* Frequency Selector */}
          <div className="relative group">
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Frequency</label>
            <div className="relative">
              <select 
                value={frequency}
                onChange={(e) => setFrequency(e.target.value)}
                className="w-full appearance-none bg-white border border-gray-200 rounded-lg py-3 px-4 text-base font-medium text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all cursor-pointer shadow-sm"
              >
                <option>One time</option>
                <option>Regularly</option>
              </select>
               <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <ChevronDown size={16} />
              </div>
            </div>
          </div>

          {/* Personal Info */}
          <div className="space-y-4 pt-2">
            <h3 className="text-sm font-bold text-black border-b border-gray-100 pb-2">Personal Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="First name"
                className="w-full py-3 px-4 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-black focus:outline-none transition-colors placeholder-gray-400 text-black text-sm"
              />
              <input 
                type="text" 
                placeholder="Last name"
                className="w-full py-3 px-4 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-black focus:outline-none transition-colors placeholder-gray-400 text-black text-sm"
              />
            </div>
            <input 
              type="email" 
              placeholder="Email address"
              className="w-full py-3 px-4 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-black focus:outline-none transition-colors placeholder-gray-400 text-black text-sm"
            />
          </div>

          {/* Payment Method Section */}
          <div className="space-y-4 pt-4">
             <div className="flex justify-between items-center border-b border-gray-100 pb-2">
               <h3 className="text-sm font-bold text-black">Payment Method</h3>
               <div className="flex space-x-1 text-gray-400">
                 <CreditCard size={16} />
                 <Lock size={16} />
               </div>
             </div>
             
             <div className="space-y-4">
                <div className="relative">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1 block">Card number</label>
                  <input 
                    type="text" 
                    placeholder="1234 1234 1234 1234"
                    className="w-full py-3 px-4 bg-white border border-gray-200 rounded-lg focus:border-black focus:outline-none transition-colors placeholder-gray-300 text-black font-mono text-sm"
                  />
                  <p className="text-[10px] text-gray-400 mt-1.5 leading-tight">
                    Supported cards include Visa, Mastercard, American Express, Diners Club, Discover, and JCB.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1 block">Expiration date</label>
                    <input 
                      type="text" 
                      placeholder="MM / YY"
                      className="w-full py-3 px-4 bg-white border border-gray-200 rounded-lg focus:border-black focus:outline-none transition-colors placeholder-gray-300 text-black font-mono text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1 block">Security code</label>
                    <input 
                      type="text" 
                      placeholder="CVC"
                      className="w-full py-3 px-4 bg-white border border-gray-200 rounded-lg focus:border-black focus:outline-none transition-colors placeholder-gray-300 text-black font-mono text-sm"
                    />
                    <p className="text-[10px] text-gray-400 mt-1.5 leading-tight">3-digit code on back of card</p>
                  </div>
                </div>

                <div>
                   <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1 block">Country</label>
                   <div className="relative">
                    <select className="w-full appearance-none bg-white border border-gray-200 rounded-lg py-3 px-4 text-sm font-medium text-black focus:outline-none focus:border-black transition-all cursor-pointer">
                      <option>India</option>
                      <option>United States</option>
                      <option>Canada</option>
                      <option>United Kingdom</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                      <ChevronDown size={14} />
                    </div>
                  </div>
                </div>
             </div>
          </div>

        </div>

        {/* Action Button */}
        <div className="p-8 pt-2">
          <button className="w-full bg-black text-white py-4 rounded-lg font-bold text-lg tracking-wide hover:bg-gray-800 transition-colors flex items-center justify-center shadow-lg shadow-gray-200">
            <span>{amount ? `Give ₹${amount}` : 'Give'}</span>
            <ArrowRight size={20} className="ml-2 opacity-60" />
          </button>
        </div>
      </div>

      {/* Footer Info */}
      <div className="mt-8 text-center text-xs text-gray-400">
        <p className="flex items-center justify-center gap-1"><Lock size={12}/> Your donation is secure and encrypted.</p>
        <p className="mt-2">&copy; {new Date().getFullYear()} {ORGANIZATION_NAME}</p>
      </div>

    </div>
  );
};

export default Giving;