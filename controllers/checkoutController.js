import dotenv from "dotenv";
dotenv.config();
import { getDBConnection } from "../db/db.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function createCheckoutSession(req,res) {
    try{
        const db = await getDBConnection();
        const userId = req.session.userId;
        const cartItems = await db.all(`
            SELECT P.title, P.price, CI.quantity FROM cart_items CI
            JOIN products P ON CI.product_id = P.id
            WHERE user_id = ?
            `, [userId]);
        
        const line_items = cartItems.map((item)=>{
            return {
                price_data: {
                currency: 'usd',
                product_data: {name : `${item.title}`},
                unit_amount: Math.round(item.price * 100),
                },
                quantity: Math.round(item.quantity), 
            }
        })

        const session = await stripe.checkout.sessions.create({
            mode: 'payment',
            line_items,
            success_url: `${process.env.CLIENT_URL}/checkout/success`,
            cancel_url: `${process.env.CLIENT_URL}/checkout/cancel`,
        });
        return res.json({url: session.url});

    }catch(err){
        console.error(err);
        return res.status(500).json({error: 'Fetch failed. Please try again.'});
    }
}