// -----------------------------Start: 59_9---------------------------------------

import { serverFetch } from "../core/server";

// (6)st
export const getPlanById = async (planId) => {
    return serverFetch(`/api/plans?plan_id=${planId}`);
}
// (6)en then go to jobs/[id]/apply/page.jsx file
// ---------------------End:59_9-(1) to () --------------------------------