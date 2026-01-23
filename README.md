# Spiral Sounds — Stripe Checkout Demo

A full-stack Node.js e-commerce project with session-based authentication, a database-backed cart, and a real Stripe Checkout payment flow.

## Why I Built This
To understand backend fundamentals and real payment flows — including session auth, server-side cart state, and Stripe Checkout — without relying on frontend frameworks.

## Features
- Session-based authentication (login / logout / protected routes)
- Product catalog with filtering and search
- Database-backed cart (per-user state, quantity tracking)
- Stripe Checkout with line items generated from database cart data
- Cart cleared only after successful payment
- Static frontend built with vanilla JavaScript

## Tech
- Node.js
- Express
- SQLite
- express-session
- Stripe Checkout
- Vanilla JavaScript
- HTML / CSS

## How It Works (High Level)
- Users authenticate via session cookies
- Products and cart state are stored in SQLite
- Checkout is initiated server-side
- Cart items are converted into Stripe `line_items`
- Stripe handles payment securely
- On success, the backend clears the user’s cart
- On cancel, the cart remains unchanged

## Run Locally
```bash
npm install
node server.js
