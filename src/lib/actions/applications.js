// -----------------------------Start: 59_3---------------------------------------
// (7)st
'use server'

import { serverMutation } from "../core/server";

export const submitApplication = async(applicationData) => {
    return serverMutation('/api/applications', applicationData);
}
// (7)en then go to apply/JobApply.jsx file
// ---------------------End:59_3-(1) to () --------------------------------
