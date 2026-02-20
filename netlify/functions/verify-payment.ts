import { Handler } from '@netlify/functions';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-01-28.clover',
});

// 从环境变量获取课程链接
const COURSE_LINK = process.env.COURSE_GOOGLE_DRIVE_LINK;

export const handler: Handler = async (event) => {
  // 只允许 GET 请求
  if (event.httpMethod !== 'GET') {
    return { 
      statusCode: 405, 
      body: JSON.stringify({ error: 'Method Not Allowed' }) 
    };
  }

  const sessionId = event.queryStringParameters?.session_id;

  if (!sessionId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Missing session_id' }),
    };
  }

  try {
    // 从 Stripe 获取会话信息
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    // 检查付款状态
    if (session.payment_status === 'paid') {
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          success: true,
          link: COURSE_LINK,
          customerEmail: session.customer_details?.email,
          amountTotal: session.amount_total,
        }),
      };
    } else {
      return {
        statusCode: 402,
        body: JSON.stringify({ 
          success: false, 
          error: 'Payment not completed' 
        }),
      };
    }
  } catch (error) {
    console.error('Verification Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to verify payment' }),
    };
  }
};