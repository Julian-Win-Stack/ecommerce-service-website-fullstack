import dotenv from "dotenv";
dotenv.config();
import { getDBConnection } from "../db/db.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function createCheckoutSession(req,res) {
    try{
        const session = await stripe.checkout.sessions.create({
            mode: 'payment',
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {name : 'Demo Song'},
                        unit_amount: 499,
                    },
                    quantity: 1, 
                }
            ],
            success_url: `${process.env.CLIENT_URL}/checkout/success`,
            cancel_url: `${process.env.CLIENT_URL}/checkout/cancel`,
        });

        console.log('Stripe session url:', session.url);
        return res.json({url: session.url});

    }catch(err){
        console.error(err);
        return res.status(500).json({error: 'Fetch failed. Please try again.'});
    }
}