// -----------------------------Start: 59_10---------------------------------------
// (5)st 
'use server';

import { serverMutation } from "../core/server";

export const createSubscription = async (subInfo) => {
    return serverMutation('/api/subscriptions', subInfo);
}
// (5)en the go to plans/success/page.jsx file 
// ---------------------End:59_10-(1) to () --------------------------------




