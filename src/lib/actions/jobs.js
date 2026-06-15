// // -----------------------------Start: 57_8---------------------------------------
// // (2)st (https://nextjs.org/docs/app/getting-started/mutating-data)
// 'use server'
// // (4)
// const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
// export const createJob = async (newJobData) => {
//     // const res = await fetch()
//     // (5)st
//     const res = await fetch(`${baseUrl}/api/jobs`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newJobData),
//     });

//     return res.json();
//     // (5)en then go to jobs/new/page.jsx file
// }

// // (2)en then go to .env
// // ---------------------End:57_8-(1) to () --------------------------------
// -----------------------------Start: 58_3---------------------------------------
'use server'

import { serverMutation } from "../core/server";

// (18)st commit (17)
export const createJob = async (newJobData) => {
    return serverMutation('/api/jobs', newJobData);
}
// (18)en then (start: 58_4) then go to Navbar.jsx

// (17)st
// const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
// export const createJob = async (newJobData) => {

//     const res = await fetch(`${baseUrl}/api/jobs`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newJobData),
//     });

//     return res.json();

// }
// (17) en 
// ---------------------End:58_3-(1) to () --------------------------------
