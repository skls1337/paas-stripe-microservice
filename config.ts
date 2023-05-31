import dotenv from 'dotenv';
dotenv.config();
export const ENVS = {
  SUCCESS_URL: process.env.SUCCESS_URL,
  STRIPE_SECRET_API_KEY: process.env.STRIPE_SECRET_API_KEY,
};
