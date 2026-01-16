import express from 'express';
import { requireAuth } from '../middleware/requireAuth.js';
import { createCheckoutSession } from '../controllers/checkoutController.js';


export const checkoutRouter = express.Router();

checkoutRouter.post('/create-session', createCheckoutSession);







