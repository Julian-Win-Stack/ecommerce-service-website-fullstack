import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { requireAuth } from '../middleware/requireAuth.js';
import { createCheckoutSession } from '../controllers/checkoutController.js';
import { deleteAll } from '../middleware/deleteAll.js';

export const checkoutRouter = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __rootdir = path.join(__dirname, '..');

checkoutRouter.post('/create-session',requireAuth, createCheckoutSession);

checkoutRouter.get('/success', deleteAll, (req,res)=>{
    res.sendFile(path.join(__rootdir, 'public', 'paymentSuccess.html'));
});

checkoutRouter.get('/cancel', (req,res)=>{
    res.sendFile(path.join(__rootdir, 'public', 'paymentCancel.html'));
});








