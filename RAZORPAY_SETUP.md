# Razorpay Payment Integration Setup Guide

This guide will help you set up Razorpay payment integration for the donation form.

## Prerequisites

1. A Razorpay account (Sign up at https://razorpay.com/)
2. Access to Razorpay Dashboard

## Setup Steps

### 1. Get Your Razorpay API Keys

1. Log in to your Razorpay Dashboard: https://dashboard.razorpay.com/
2. Go to **Settings** → **API Keys**
3. Generate a new Key ID and Key Secret (if you haven't already)
4. Copy your **Key ID** (starts with `rzp_test_` for test mode or `rzp_live_` for live mode)

### 2. Configure Environment Variables

Create a `.env` file in the root of your project:

```env
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id_here
```

Or update the constant in `constants.tsx`:

```typescript
export const RAZORPAY_KEY_ID = "your_razorpay_key_id_here";
```

### 3. Backend Setup (Required for Production)

**IMPORTANT:** For security, order creation and payment verification MUST be done on your backend server, not in the frontend.

#### Create Order Endpoint

Create a backend API endpoint (e.g., `/api/create-order`) that:

1. Receives the donation amount
2. Creates an order using Razorpay API
3. Returns the order ID to the frontend

Example (Node.js/Express):

```javascript
const Razorpay = require('razorpay');

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

app.post('/api/create-order', async (req, res) => {
  const { amount } = req.body;
  
  const options = {
    amount: amount * 100, // Convert to paise
    currency: 'INR',
    receipt: `receipt_${Date.now()}`,
  };
  
  try {
    const order = await razorpay.orders.create(options);
    res.json({ orderId: order.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

#### Verify Payment Endpoint

Create a backend API endpoint (e.g., `/api/verify-payment`) that:

1. Receives payment response from Razorpay
2. Verifies the payment signature
3. Saves donation details to your database
4. Sends confirmation email to donor

Example (Node.js/Express):

```javascript
const crypto = require('crypto');

app.post('/api/verify-payment', async (req, res) => {
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
    amount,
    donor
  } = req.body;
  
  // Verify signature
  const text = `${razorpay_order_id}|${razorpay_payment_id}`;
  const generated_signature = crypto
    .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
    .update(text)
    .digest('hex');
  
  if (generated_signature === razorpay_signature) {
    // Payment verified - Save to database
    // Send confirmation email
    // etc.
    
    res.json({ success: true, message: 'Payment verified' });
  } else {
    res.status(400).json({ success: false, message: 'Invalid signature' });
  }
});
```

### 4. Update Frontend Code

Update the `createOrder` function in `pages/Giving.tsx`:

```typescript
const createOrder = async (amount: number): Promise<string> => {
  const response = await fetch('/api/create-order', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ amount: amount / 100 }), // Convert paise to rupees
  });
  
  const data = await response.json();
  return data.orderId;
};
```

Update the payment handler to verify on backend:

```typescript
handler: async function (response: any) {
  // Verify payment on backend
  const verifyResponse = await fetch('/api/verify-payment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      razorpay_order_id: response.razorpay_order_id,
      razorpay_payment_id: response.razorpay_payment_id,
      razorpay_signature: response.razorpay_signature,
      amount: amountInPaise,
      donor: {
        firstName,
        lastName,
        email,
        fund,
        frequency
      }
    })
  });
  
  const verifyData = await verifyResponse.json();
  
  if (verifyData.success) {
    // Show success message
    // Reset form
  } else {
    // Handle error
  }
}
```

## Testing

### Test Mode

1. Use test API keys (starts with `rzp_test_`)
2. Use Razorpay test cards:
   - **Success:** 4111 1111 1111 1111
   - **Failure:** 4000 0000 0000 0002
   - **CVV:** Any 3 digits
   - **Expiry:** Any future date

### Live Mode

1. Switch to live API keys (starts with `rzp_live_`)
2. Complete KYC verification in Razorpay Dashboard
3. Test with real payment methods

## Security Best Practices

1. **Never expose your Key Secret** in frontend code
2. **Always verify payments on backend** before confirming to user
3. **Use HTTPS** in production
4. **Store API keys** in environment variables
5. **Log all transactions** for audit purposes
6. **Implement rate limiting** on payment endpoints

## Support

- Razorpay Documentation: https://razorpay.com/docs/
- Razorpay Support: support@razorpay.com

## Current Implementation Status

⚠️ **Note:** The current implementation uses a mock order creation for demonstration purposes. You MUST implement backend order creation and payment verification before going live.




