import { stripe } from '@/lib/stripe'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405)
    }

    const { priceId } = req.body

    if (!priceId) {
        return res.status(400)
    }

    const checkoutSession = await stripe.checkout.sessions.create({
        mode: 'payment',
        success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: process.env.NEXT_URL,
        line_items: [
            {
                quantity: 1,
                price: priceId
            }
        ]
    })

    return res.status(201).json({ checkoutUrl: checkoutSession.url })
}
