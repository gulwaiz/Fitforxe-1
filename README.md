# Fitforxe (Full-Stack) — Netlify + Render Ready

## Structure
- backend/ (Express API, Mongo optional, Stripe/Razorpay placeholders)
- frontend/ (React + Tailwind via CDN, pages: Home, Pricing, About, Contact, Dashboard)

## Run in Codespaces
1) Backend
   cd backend
   cp .env.example .env   # paste your MongoDB URI etc.
   npm install
   npm start
   # Make port 5000 public; open /api/health

2) Frontend
   cd ../frontend
   cp .env.example .env
   # set REACT_APP_BACKEND_URL to your backend public URL ending with /api
   npm install
   npm start
   # Make port 3000 public

## Deploy
- Backend → Render
    Root directory: backend
    Build: npm install
    Start: npm start
    Env: MONGODB_URI, STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET, RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET, CORS_ORIGIN
- Frontend → Netlify
    Base directory: frontend
    Build command: npm run build
    Publish directory: build
    Env: REACT_APP_BACKEND_URL=https://<your-render-domain>/api
