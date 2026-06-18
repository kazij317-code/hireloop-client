// -----------------------------Start: 59_4---------------------------------------

import { serverFetch } from "../core/server"

// (2)st
export const getApplicationsByApplicant = async (applicantId) => {
    return serverFetch(`/api/applications?applicantId=${applicantId}`);
} 
// (2)en then go to apply/page.jsx
// ---------------------End:59_4-(1) to () --------------------------------