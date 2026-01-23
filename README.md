Spiral Sounds — Full-Stack E-commerce App

A full-stack e-commerce web app built with Node.js, Express, SQLite, and Stripe Checkout.
The project focuses on backend fundamentals, session-based auth, and real payment flow integration.

⸻

Tech Stack
	•	Backend: Node.js, Express, SQLite, express-session
	•	Frontend: Vanilla JavaScript, HTML, CSS
	•	Payments: Stripe Checkout

⸻

Key Features
	•	Session-based authentication (login / logout / protected routes)
	•	Product catalog with genre filtering and search
	•	Database-backed cart (per-user state, quantity tracking)
	•	Stripe Checkout with line items generated from database cart data
	•	Cart cleared only after successful payment

⸻

Stripe Checkout Flow (Core Focus)
	1.	User initiates checkout
	2.	Backend fetches cart items from SQLite
	3.	Cart items are converted into Stripe line_items
	4.	Stripe Checkout Session is created server-side
	5.	User is redirected to Stripe-hosted checkout
	6.	On success:
	•	User returns to /checkout/success
	•	Cart is cleared via backend middleware
	7.	On cancel:
	•	Cart remains unchanged

This flow is fully server-driven and avoids hardcoded pricing or client-side payment logic.

⸻

Why This Project

This project was built to solidify understanding of:
	•	Session-based auth (not tokens)
	•	Backend-driven state management
	•	Real payment flows with Stripe
	•	Middleware, routing, and request lifecycle
	•	Clean separation between frontend and backend logic

⸻

Running Locally
npm install
node server.js

Environment variables required:
SPIRAL_SESSION_SECRET=your_session_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
CLIENT_URL=http://localhost:8000

Notes

The Stripe checkout flow (session creation, database-driven line items, and post-payment cart clearing) was implemented independently to deeply understand real-world payment handling.
