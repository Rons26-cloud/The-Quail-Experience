# Advanced Features & Backend Integration

## Part 1: Firebase Authentication (Partner Portal)

### Why Firebase?
- Zero-backend infrastructure needed
- Secure authentication out of the box
- Real-time database options
- Easy integration with React
- Generous free tier

### Setup

```bash
npm install firebase
```

Create `src/services/firebase.js`:

```javascript
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  return signInWithPopup(auth, googleProvider);
};

export const logout = () => {
  return signOut(auth);
};
```

Create `src/context/AuthContext.jsx`:

```javascript
import React, { createContext, useState, useEffect } from 'react';
import { auth } from '../services/firebase';
import { onAuthStateChanged } from 'firebase/auth';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, error }}>
      {children}
    </AuthContext.Provider>
  );
}
```

Use in components:

```jsx
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { signInWithGoogle, logout } from '../services/firebase';

export default function PartnerPortal() {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      {!user ? (
        <button onClick={signInWithGoogle}>Sign In with Google</button>
      ) : (
        <>
          <p>Welcome, {user.displayName}!</p>
          <button onClick={logout}>Logout</button>
        </>
      )}
    </>
  );
}
```

---

## Part 2: Google Sheets API (Farmer Data Collection)

### Why Google Sheets?
- Familiar interface for data entry
- Real-time collaboration
- Free & no backend needed
- Perfect for small teams

### Setup

1. **Enable Google Sheets API**
   - Go to Google Cloud Console
   - Create new project
   - Enable "Google Sheets API"
   - Create API key (public key for frontend)

2. **Create Google Sheet**
   - Share publicly or restrict access
   - Note the Sheet ID from URL

### Implementation

Create `src/services/sheetsApi.js`:

```javascript
const SHEETS_API_KEY = import.meta.env.VITE_SHEETS_API_KEY;
const SHEET_ID = import.meta.env.VITE_SHEET_ID;
const RANGE = 'Sheet1!A:Z'; // Adjust as needed

export const getSheetData = async () => {
  try {
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${SHEETS_API_KEY}`
    );
    const data = await response.json();
    
    // Convert to JSON
    const headers = data.values[0];
    const rows = data.values.slice(1);
    
    return rows.map(row => {
      const obj = {};
      headers.forEach((header, idx) => {
        obj[header] = row[idx] || '';
      });
      return obj;
    });
  } catch (error) {
    console.error('Error fetching sheets:', error);
    throw error;
  }
};

export const appendToSheet = async (values) => {
  try {
    // For append, you'll need backend authentication
    // Frontend can't write directly to sheets for security
    
    // Instead, use Google Forms + Apps Script webhook
    // Or call your backend API which handles the append
  } catch (error) {
    console.error('Error appending to sheet:', error);
    throw error;
  }
};
```

Use in Dashboard:

```jsx
import { useEffect, useState } from 'react';
import { getSheetData } from '../services/sheetsApi';

export default function LiveDashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sheetData = await getSheetData();
        setData(sheetData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    
    // Refresh every 5 minutes
    const interval = setInterval(fetchData, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return <div>Loading data...</div>;

  return (
    <div>
      {/* Render data */}
    </div>
  );
}
```

---

## Part 3: Backend API Setup (Node.js/Express)

### For Form Submissions & Email

```bash
npm install express cors dotenv nodemailer mongoose
```

Create `server/index.js`:

```javascript
import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173'
}));

// Email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, company, inquiryType, message } = req.body;

    // Validate
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Save to database (optional)
    // await ContactForm.create({ name, email, company, inquiryType, message });

    // Send email notification
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.NOTIFY_EMAIL,
      subject: `New ${inquiryType} Inquiry from ${name}`,
      html: `
        <h2>New Inquiry Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Type:</strong> ${inquiryType}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    // Send confirmation to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'We received your inquiry - Global Quail Production',
      html: `
        <h2>Thank You for Your Inquiry</h2>
        <p>Hi ${name},</p>
        <p>We've received your inquiry and our partnerships team will be in touch within 24 hours.</p>
        <p>Best regards,<br>Global Quail Production Team</p>
      `
    });

    res.json({ success: true, message: 'Inquiry received' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to send inquiry' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

### Environment Variables (`.env`)

```
VITE_API_URL=http://localhost:5000

# Firebase
VITE_FIREBASE_API_KEY=your_key
VITE_FIREBASE_AUTH_DOMAIN=your_domain
VITE_FIREBASE_PROJECT_ID=your_project_id

# Google Sheets
VITE_SHEETS_API_KEY=your_key
VITE_SHEET_ID=your_sheet_id

# Backend
PORT=5000
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
NOTIFY_EMAIL=admin@company.com
FRONTEND_URL=http://localhost:5173
```

---

## Part 4: SMS Notifications (Twilio)

For farmer alerts about production issues:

```bash
npm install twilio
```

```javascript
import twilio from 'twilio';

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export const sendSMS = async (phoneNumber, message) => {
  try {
    const result = await client.messages.create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phoneNumber
    });
    return result.sid;
  } catch (error) {
    console.error('SMS Error:', error);
    throw error;
  }
};
```

---

## Part 5: Stripe Integration (Payments)

For subscription or procurement services:

```bash
npm install @stripe/react-stripe-js stripe
```

```jsx
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

export default function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { token } = await stripe.createToken(elements.getElement(CardElement));
    
    // Send token to backend
    const response = await fetch('/api/payment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: token.id, amount: 10000 })
    });

    setLoading(false);
  };

  return (
    <Elements stripe={stripePromise}>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button disabled={!stripe || loading}>
          {loading ? 'Processing...' : 'Pay'}
        </button>
      </form>
    </Elements>
  );
}
```

---

## Part 6: Analytics & Tracking

### Google Analytics 4

```bash
npm install @react-ga/react-ga4
```

```jsx
import ReactGA from 'react-ga4';

// Initialize
ReactGA.initialize(import.meta.env.VITE_GA_ID);

// Track page views
ReactGA.send('pageview');

// Track events
const trackEvent = (category, action, label) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label
  });
};
```

### Hotjar (Session Recording)

```html
<!-- Add to public/index.html -->
<script>
  (function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:1234567,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
  })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
</script>
```

---

## Part 7: Webhooks & Real-time Updates

For IoT sensor data from farm equipment:

```javascript
// Endpoint to receive sensor data
app.post('/api/sensor-data', async (req, res) => {
  try {
    const { deviceId, temperature, humidity, timestamp } = req.body;

    // Save to database
    await SensorData.create({
      deviceId,
      temperature,
      humidity,
      timestamp: new Date(timestamp)
    });

    // Check for anomalies
    if (temperature > 28 || temperature < 18) {
      // Alert farmers
      await sendSMS(farmerPhone, `⚠️ Temperature alert: ${temperature}°C`);
    }

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

---

## Part 8: Environment Variables (.env.example)

```
# Frontend
VITE_API_URL=http://localhost:5000
VITE_GA_ID=G-XXXXXXXXXX

# Firebase
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=

# Google Sheets
VITE_SHEETS_API_KEY=
VITE_SHEET_ID=

# Stripe
VITE_STRIPE_PUBLIC_KEY=

# Backend (never commit to frontend .env)
PORT=5000
NODE_ENV=development

# Email (Gmail with app password)
EMAIL_USER=
EMAIL_PASSWORD=
NOTIFY_EMAIL=

# Twilio SMS
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
TWILIO_PHONE_NUMBER=

# Frontend URL for CORS
FRONTEND_URL=http://localhost:5173
```

---

## Deployment Checklist

### Before Going Live

- [ ] All environment variables secured in platform (not in repo)
- [ ] Database backups configured
- [ ] Email notifications tested
- [ ] Stripe/Payments tested in sandbox mode
- [ ] SMS tested with real phone number
- [ ] Analytics configured and tracking
- [ ] Error monitoring (Sentry) setup
- [ ] SSL certificate installed
- [ ] CORS properly configured
- [ ] Rate limiting enabled
- [ ] DDOS protection enabled
- [ ] Database indexed for performance
- [ ] Cache headers configured
- [ ] CDN for static assets configured

### Production Deployment

**Vercel (Recommended for Frontend)**
```bash
vercel deploy --prod
```

**Heroku (Backend)**
```bash
heroku create your-app-name
git push heroku main
```

**Supabase (Database + Auth)**
- Postgres database included
- Vector search for advanced features
- Real-time subscriptions

---

This setup provides an enterprise-grade infrastructure for your quail farming business! 🚀
