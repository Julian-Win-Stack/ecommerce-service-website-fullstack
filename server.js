import express from 'express'
import dotenv from "dotenv";
dotenv.config();
import { productsRouter } from './routes/products.js'
import { authRouter } from './routes/auth.js'
import { meRouter } from './routes/me.js'
import { cartRouter } from './routes/cart.js' 
import { checkoutRouter } from './routes/checkout.js'; 
import session from 'express-session'
import path from 'path';
import { fileURLToPath } from 'url';

const app = express() 
const PORT = 8000
const secret = process.env.SPIRAL_SESSION_SECRET

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/checkout/success', (req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'paymentSuccess.html'));
})

app.get('/checkout/cancel', (req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'paymentCancel.html'));
})

app.use(express.json()) 

app.use(session({
  secret: secret,
  resave: false, 
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: false,
    sameSite: 'lax'
  }
}))

app.use(express.static('public'))

app.use('/api/products', productsRouter)

app.use('/api/auth/me', meRouter)

app.use('/api/auth', authRouter)

app.use('/api/cart', cartRouter)

app.use('/api/checkout', checkoutRouter);


 
app.listen(PORT, () => { 
  console.log(`Server running at http://localhost:${PORT}`)
}).on('error', (err) => {
  console.error('Failed to start server:', err)
}) 