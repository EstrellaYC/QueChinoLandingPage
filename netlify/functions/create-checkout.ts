// netlify/functions/create-checkout.ts
import { Handler } from '@netlify/functions';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-01-28.clover',
});

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { 
      statusCode: 405, 
      body: JSON.stringify({ error: 'Method Not Allowed' }) 
    };
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'mxn',
            product_data: {
              name: 'Curso grabado Nivel Basico',
              description: '40hrs Curso completo de video grabado de Chino Mandarin, acceso permanente',
            },
            unit_amount: 300000,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.URL}/cancel`,
      invoice_creation: {
        enabled: true,
        invoice_data: {
          description: 'Compra de curso grabado Nivel Basico',
        },
      },
    });

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      // 直接返回 URL
      body: JSON.stringify({ url: session.url }),
    };
  } catch (error) {
    console.error('Stripe Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error al crear la sesión de pago' }),
    };
  }
};