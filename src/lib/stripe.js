// // -----------------------------Start: 59_7---------------------------------------
// // (6)st https://docs.stripe.com/checkout/quickstart?client=next
// import 'server-only'

// import Stripe from 'stripe'

// export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
// // (6)en then go to success/page.jsx file and add the code from stripe documentation

// // ---------------------End:59_7-(1) to () --------------------------------
// -----------------------------Start: 59_8---------------------------------------
// https://docs.stripe.com/checkout/quickstart?client=next
import 'server-only'

import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

// (4) st
export const PLAN_PRICE_ID = {
    'seeker_pro': 'price_1TjFYDCFwzlylue3BdcuPuaz',//FROM STRIPE DASHBOARD>PRODUCTS>INSPECT>DEFAULT_PRICE
    'seeker_premium': 'price_1TjZ9BCFwzlylue3FJkVZdNB',//FROM STRIPE DASHBOARD>PRODUCTS>INSPECT>DEFAULT_PRICE
    // (8)
    'recruiter_growth': 'price_1TjZAWCFwzlylue3zuQjyOI1',//FROM STRIPE DASHBOARD>PRODUCTS>INSPECT>DEFAULT_PRICE  
    // (9) then go to plan/page.jsx file
     'recruiter_enterprise': 'price_1TjZ9vCFwzlylue3FlJaNw1a',//FROM STRIPE DASHBOARD>PRODUCTS>INSPECT>DEFAULT_PRICE 

}
// (4) en then go to plans/page.jsx

// ---------------------End:59_8-(1) to () --------------------------------