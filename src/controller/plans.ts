import { NextFunction } from 'express';
import asyncHandler from '../middleware/async.middleware';
import { ENVS } from '../../config';

const stripe = require('stripe')(ENVS.STRIPE_SECRET_API_KEY);

export const payPlan = asyncHandler(
  async (req: any, res: any, next: NextFunction) => {
    const session = await stripe.checkout.sessions.create({
      success_url: ENVS.SUCCESS_URL,
      cancel_url: ENVS.SUCCESS_URL,
      payment_method_types: ['card'],
      line_items: [{ price: req.body.priceId, quantity: 1 }],
      mode: 'subscription',
    });

    res.send({
      statusCode: 200,
      body: JSON.stringify(session),
    });
  }
);
