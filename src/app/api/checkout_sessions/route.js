// // -----------------------------Start: 59_6---------------------------------------
// // (5)st from stripe documentation: https://docs.stripe.com/checkout/quickstart?client=next>app/api/checkout_sessions/route.js
// import { NextResponse } from 'next/server'
// import { headers } from 'next/headers'

// import { stripe } from '../../../lib/stripe'

// export async function POST() {
//   try {
//     const headersList = await headers()
//     const origin = headersList.get('origin')

//     // Create Checkout Sessions from body params.
//     const session = await stripe.checkout.sessions.create({
//       line_items: [
//         {
//           // Provide the exact Price ID (for example, price_1234) of the product you want to sell
//           price: '{{PRICE_ID}}',
//           quantity: 1,
//         },
//       ],
//     //   mode: 'payment',
//     // (6) then (start:59.7) create plans/success/page.jsx 
//       mode: 'subscription',
//       success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
//     });
//     return NextResponse.redirect(session.url, 303)
//   } catch (err) {
//     return NextResponse.json(
//       { error: err.message },
//       { status: err.statusCode || 500 }
//     )
//   }
// }
// // (5)en and then Define a product to sell>Recurring

// // ---------------------End:59_6-(1) to () --------------------------------
// // -----------------------------Start: 59_7---------------------------------------
// import { NextResponse } from 'next/server'
// import { headers } from 'next/headers'

// import { stripe } from '../../../lib/stripe'
// import { getUserSession } from '@/lib/core/session'
// import { PLAN_PRICE_ID } from '@/lib/stripe'

// // export async function POST() {
// // (11)
// export async function POST(request) {
//   try {
//     const headersList = await headers()
//     const origin = headersList.get('origin')
//     // (12)st
//     const formData = await request.formData()
//     const planId = formData.get('plan_id')
//     // (12)en
//     // (13)
//     const priceId= PLAN_PRICE_ID[planId]
//     // (16)
//     const user = await getUserSession()


//     // Create Checkout Sessions from body params.
//     const session = await stripe.checkout.sessions.create({
//       // (15)
//       // customer_email: 'customer@example.com',
//       // (17) then check to checkout with this: 4242424242424242  and go to success/page.jsx file and add the code from stripe documentation
//       customer_email: user?.email,

//       line_items: [
//         {
//           // Provide the exact Price ID (for example, price_1234) of the product you want to sell
//           // price: '{{PRICE_ID}}',
//           // (9) from: https://dashboard.stripe.com/acct_1TjEQaCFwzlylue3/test/products/prod_Uigw7m1BwcHIT9>prod_Uigw7m1BwcHIT9>inspect>"default_price": "price_1TjFYDCFwzlylue3BdcuPuaz", and check to checkout with this: 4242424242424242. then (start:59.8) create plan to sripte and then go to plans/page.jsx file
//           // price: 'price_1TjFYDCFwzlylue3BdcuPuaz',
//           // (14)
//           price: priceId,
//           quantity: 1,
//         },
//       ],

//       mode: 'subscription',
//       // success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
//       // (2) then go to plans/page.jsx
//       success_url: `${origin}/plans/success?session_id={CHECKOUT_SESSION_ID}`,
//     });
//     return NextResponse.redirect(session.url, 303)
//   } catch (err) {
//     return NextResponse.json(
//       { error: err.message },
//       { status: err.statusCode || 500 }
//     )
//   }
// }

// // ---------------------End:59_7-(1) to () --------------------------------
// -----------------------------Start: 59_10---------------------------------------
import { NextResponse } from 'next/server'
import { headers } from 'next/headers'

import { stripe } from '../../../lib/stripe'
import { PLAN_PRICE_ID } from '@/lib/stripe'
import { getUserSession } from '@/lib/core/session'

export async function POST(request) {
    try {
        const headersList = await headers()
        const origin = headersList.get('origin')

        const formData = await request.formData()
        const planId = formData.get('plan_id')
        const priceId = PLAN_PRICE_ID[planId];

        const user = await getUserSession();

        // Create Checkout Sessions from body params.
        const session = await stripe.checkout.sessions.create({
            customer_email: user?.email,
            line_items: [
                {
                    // Provide the exact Price ID (for example, price_1234) of the product you want to sell
                    price: priceId,
                    quantity: 1,
                },
            ],
            mode: 'subscription',
            // (1) then goto plans/success/page.jsx file and add the code from stripe documentation
            metadata: { planId },
            success_url: `${origin}/plans/success?session_id={CHECKOUT_SESSION_ID}`,
        });
        return NextResponse.redirect(session.url, 303)
    } catch (err) {
        return NextResponse.json(
            { error: err.message },
            { status: err.statusCode || 500 }
        )
    }
}
// ---------------------End:59_10-(1) to () --------------------------------