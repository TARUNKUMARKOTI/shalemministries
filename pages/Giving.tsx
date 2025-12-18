import React, { useState, useEffect } from 'react';
import { ORGANIZATION_NAME, RAZORPAY_KEY_ID } from '../constants';
import { ChevronDown, ArrowRight, CreditCard, Lock, CheckCircle, XCircle, X } from 'lucide-react';

// Razorpay types
declare global {
  interface Window {
    Razorpay: any;
  }
}

interface FormErrors {
  amount?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
}

const Giving: React.FC = () => {
  const [amount, setAmount] = useState('');
  const [fund, setFund] = useState('General offering');
  const [frequency, setFrequency] = useState('One time');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);
  const [modal, setModal] = useState<{ type: 'success' | 'failure' | 'error'; message: string } | null>(null);

  // Check if Razorpay is loaded
  useEffect(() => {
    const checkRazorpay = () => {
      if (window.Razorpay) {
        setRazorpayLoaded(true);
      } else {
        setTimeout(checkRazorpay, 100);
      }
    };
    checkRazorpay();
  }, []);

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
    if (errors.amount) {
      setErrors({ ...errors, amount: undefined });
    }
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Amount validation
    if (!amount || amount.trim() === '') {
      newErrors.amount = 'Please enter a donation amount';
    } else {
      const numAmount = parseFloat(amount);
      if (isNaN(numAmount) || numAmount <= 0) {
        newErrors.amount = 'Please enter a valid amount greater than 0';
      } else if (numAmount < 1) {
        newErrors.amount = 'Minimum donation amount is ₹1';
      }
    }

    // First name validation
    if (!firstName || firstName.trim() === '') {
      newErrors.firstName = 'First name is required';
    } else if (firstName.trim().length < 2) {
      newErrors.firstName = 'First name must be at least 2 characters';
    } else if (!/^[a-zA-Z\s'-]+$/.test(firstName.trim())) {
      newErrors.firstName = 'First name can only contain letters, spaces, hyphens, and apostrophes';
    }

    // Last name validation
    if (!lastName || lastName.trim() === '') {
      newErrors.lastName = 'Last name is required';
    } else if (lastName.trim().length < 2) {
      newErrors.lastName = 'Last name must be at least 2 characters';
    } else if (!/^[a-zA-Z\s'-]+$/.test(lastName.trim())) {
      newErrors.lastName = 'Last name can only contain letters, spaces, hyphens, and apostrophes';
    }

    // Email validation
    if (!email || email.trim() === '') {
      newErrors.email = 'Email address is required';
    } else if (!validateEmail(email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Note: For production, order creation should be done on your backend for security
  // For now, we're letting Razorpay create the order automatically (no order_id needed)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    if (!razorpayLoaded) {
      setModal({ type: 'error', message: 'Payment gateway is loading. Please wait a moment and try again.' });
      return;
    }

    setIsSubmitting(true);

    try {
      const amountInPaise = Math.round(parseFloat(amount) * 100); // Convert to paise (smallest currency unit)
      
      // Note: For production, create order on backend and pass order_id here
      // For now, Razorpay will create the order automatically
      const options = {
        key: RAZORPAY_KEY_ID,
        amount: amountInPaise,
        currency: 'INR',
        name: ORGANIZATION_NAME,
        description: `Donation - ${fund}`,
        // order_id: orderId, // Uncomment when you have backend order creation
        handler: function (response: any) {
          // Payment successful
          console.log('Payment successful:', response);
          
          // TODO: Verify payment signature on your backend
          // Example: await fetch('/api/verify-payment', { 
          //   method: 'POST', 
          //   body: JSON.stringify({ 
          //     razorpay_order_id: response.razorpay_order_id,
          //     razorpay_payment_id: response.razorpay_payment_id,
          //     razorpay_signature: response.razorpay_signature,
          //     amount: amountInPaise,
          //     donor: {
          //       firstName,
          //       lastName,
          //       email,
          //       fund,
          //       frequency
          //     }
          //   })
          // });

          // Show success message
          setModal({ 
            type: 'success', 
            message: `Thank you for your donation of ₹${amount}! Your contribution helps us continue our mission.` 
          });
          
          // Reset form
          setAmount('');
          setFirstName('');
          setLastName('');
          setEmail('');
          setErrors({});
          setIsSubmitting(false);
        },
        prefill: {
          name: `${firstName} ${lastName}`.trim(),
          email: email,
          contact: '', // You can add phone number field if needed
        },
        notes: {
          fund: fund,
          frequency: frequency,
          donor_name: `${firstName} ${lastName}`.trim(),
        },
        theme: {
          color: '#000000',
        },
        modal: {
          ondismiss: function() {
            // User closed the payment modal
            setIsSubmitting(false);
          }
        }
      };

      const razorpay = new window.Razorpay(options);
      
      razorpay.on('payment.failed', function (response: any) {
        // Payment failed
        console.error('Payment failed:', response.error);
        setModal({ 
          type: 'failure', 
          message: `Payment failed: ${response.error.description || 'Please try again or contact us for assistance.'}` 
        });
        setIsSubmitting(false);
      });

      razorpay.open();
    } catch (error) {
      console.error('Error initiating payment:', error);
      setModal({ 
        type: 'error', 
        message: 'An error occurred while processing your payment. Please try again or contact us for assistance.' 
      });
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black pt-32 pb-20 px-4 animate-fade-in flex flex-col items-center justify-center transition-colors duration-200">
      
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-black dark:text-white">{ORGANIZATION_NAME}</h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Secure Donation</p>
      </div>

      {/* Donation Card */}
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white dark:bg-black rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden transition-colors duration-200">
        
        {/* Amount Section */}
        <div className="p-8 pb-4 text-center bg-gray-50/50 dark:bg-black/50 border-b border-gray-100 dark:border-gray-700">
          <div className="flex justify-center items-center gap-1">
            <span className={`text-4xl font-bold transition-all ${amount ? 'text-black dark:text-white' : 'text-gray-300 dark:text-gray-600'}`}>
              ₹
            </span>
            <input
              type="text"
              value={amount}
              onChange={handleAmountChange}
              placeholder="0"
              className="bg-transparent text-left text-6xl font-bold text-black dark:text-white placeholder-gray-200 dark:placeholder-gray-600 focus:outline-none py-2 caret-black dark:caret-white"
              style={{ width: amount ? `${amount.length * 0.7 + 0.2}em` : '1.5ch' }}
              autoFocus
            />
          </div>
          <div className="mt-2 text-xs text-gray-400 dark:text-gray-500 font-medium uppercase tracking-wider">INR</div>
          {errors.amount && (
            <p className="mt-2 text-xs text-red-500">{errors.amount}</p>
          )}
        </div>

        {/* Configuration Fields */}
        <div className="p-8 space-y-6">
          
          {/* Fund Selector */}
          <div className="relative group">
            <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-2">Fund</label>
            <div className="relative">
              <select 
                value={fund}
                onChange={(e) => setFund(e.target.value)}
                className="w-full appearance-none bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-lg py-3 px-4 text-base font-medium text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white focus:ring-1 focus:ring-black dark:focus:ring-white transition-all cursor-pointer shadow-sm"
              >
                <option>General offering</option>
                <option>Percentage giving</option>
                <option>Building Initiative</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 dark:text-gray-500">
                <ChevronDown size={16} />
              </div>
            </div>
          </div>

          {/* Frequency Selector */}
          <div className="relative group">
            <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-2">Frequency</label>
            <div className="relative">
              <select 
                value={frequency}
                onChange={(e) => setFrequency(e.target.value)}
                className="w-full appearance-none bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-lg py-3 px-4 text-base font-medium text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white focus:ring-1 focus:ring-black dark:focus:ring-white transition-all cursor-pointer shadow-sm"
              >
                <option>One time</option>
                <option>Regularly</option>
              </select>
               <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 dark:text-gray-500">
                <ChevronDown size={16} />
              </div>
            </div>
          </div>

          {/* Personal Info */}
          <div className="space-y-4 pt-2">
            <h3 className="text-sm font-bold text-black dark:text-white border-b border-gray-100 dark:border-gray-700 pb-2">Personal Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input 
                  type="text" 
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                    if (errors.firstName) {
                      setErrors({ ...errors, firstName: undefined });
                    }
                  }}
                  className={`w-full py-3 px-4 bg-gray-50 dark:bg-black border rounded-lg focus:bg-white dark:focus:bg-gray-800 focus:outline-none transition-colors placeholder-gray-400 dark:placeholder-gray-500 text-black dark:text-white text-sm ${
                    errors.firstName ? 'border-red-500 focus:border-red-500' : 'border-gray-200 dark:border-gray-700 focus:border-black dark:focus:border-white'
                  }`}
                />
                {errors.firstName && (
                  <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>
                )}
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Last name"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                    if (errors.lastName) {
                      setErrors({ ...errors, lastName: undefined });
                    }
                  }}
                  className={`w-full py-3 px-4 bg-gray-50 dark:bg-black border rounded-lg focus:bg-white dark:focus:bg-gray-800 focus:outline-none transition-colors placeholder-gray-400 dark:placeholder-gray-500 text-black dark:text-white text-sm ${
                    errors.lastName ? 'border-red-500 focus:border-red-500' : 'border-gray-200 dark:border-gray-700 focus:border-black dark:focus:border-white'
                  }`}
                />
                {errors.lastName && (
                  <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>
                )}
              </div>
            </div>
            <div>
              <input 
                type="email" 
                placeholder="Email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email) {
                    setErrors({ ...errors, email: undefined });
                  }
                }}
                className={`w-full py-3 px-4 bg-gray-50 dark:bg-black border rounded-lg focus:bg-white dark:focus:bg-gray-800 focus:outline-none transition-colors placeholder-gray-400 dark:placeholder-gray-500 text-black dark:text-white text-sm ${
                  errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-200 dark:border-gray-700 focus:border-black dark:focus:border-white'
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">{errors.email}</p>
              )}
            </div>
          </div>

          {/* Payment Security Info */}
          <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
            <div className="flex items-center justify-center space-x-2 text-gray-500 dark:text-gray-400 text-xs">
              <Lock size={14} />
              <span>Secure payment powered by Razorpay</span>
              <CreditCard size={14} />
            </div>
            <p className="text-center text-[10px] text-gray-400 dark:text-gray-500 mt-2">
              All major cards, UPI, Netbanking, and wallets accepted
            </p>
          </div>

        </div>

        {/* Action Button */}
        <div className="p-8 pt-2">
          <button 
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-black dark:bg-white text-white dark:text-black py-4 rounded-lg font-bold text-lg tracking-wide hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors flex items-center justify-center shadow-lg shadow-gray-200 dark:shadow-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>{isSubmitting ? 'Processing...' : (amount ? `Give ₹${amount}` : 'Give')}</span>
            {!isSubmitting && <ArrowRight size={20} className="ml-2 opacity-60 dark:opacity-80" />}
          </button>
        </div>
      </form>

      {/* Footer Info */}
      <div className="mt-8 text-center text-xs text-gray-400 dark:text-gray-500">
        <p className="flex items-center justify-center gap-1"><Lock size={12}/> Your donation is secure and encrypted.</p>
        <p className="mt-2">&copy; {new Date().getFullYear()} {ORGANIZATION_NAME}</p>
      </div>

      {/* Modal */}
      {modal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in"
          onClick={() => setModal(null)}
        >
          <div 
            className="bg-white dark:bg-black rounded-xl shadow-2xl max-w-md w-full p-8 relative animate-fade-in border border-gray-100 dark:border-gray-700 transition-colors duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setModal(null)}
              className="absolute top-4 right-4 text-gray-400 dark:text-gray-500 hover:text-black dark:hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            {/* Icon and Content */}
            <div className="text-center">
              {modal.type === 'success' ? (
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle size={32} className="text-green-600" />
                  </div>
                </div>
              ) : (
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                    <XCircle size={32} className="text-red-600" />
                  </div>
                </div>
              )}

              <h3 className={`text-2xl font-bold mb-4 ${modal.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                {modal.type === 'success' ? 'Payment Successful!' : modal.type === 'failure' ? 'Payment Failed' : 'Error'}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                {modal.message}
              </p>

              <button
                onClick={() => setModal(null)}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  modal.type === 'success' 
                    ? 'bg-green-600 text-white hover:bg-green-700' 
                    : 'bg-red-600 text-white hover:bg-red-700'
                }`}
              >
                {modal.type === 'success' ? 'Continue' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Giving;