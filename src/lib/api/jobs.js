// // -----------------------------Start: 57_9---------------------------------------
// // (2)
// const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
// // (1)st
// // export const getCompanyJobs = async (companyId) => {
//     // (3)
// export const getCompanyJobs = async (companyId, status = 'active') => {
//     // const res = await fetch(`${baseUrl}/api/jobs?companyId=${companyId}`);
//     // (4)st
//     const res = await fetch(`${baseUrl}/api/jobs?companyId=${companyId}&status=${status}`);
//     return res.json();
//     // (4)en then go to server
// }
// // (1)en
// // ---------------------End:57_9-(1) to () --------------------------------



// // -----------------------------Start: 58_7---------------------------------------
// import { serverFetch } from "../core/server";
// const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

// // (5)st
// export const getJobs = async () =>{
//     return serverFetch('/api/jobs');
// }
// // (5)en then go to app/jobs/page.jsx

// export const getCompanyJobs = async (companyId, status = 'active') => {

//     const res = await fetch(`${baseUrl}/api/jobs?companyId=${companyId}&status=${status}`);
//     return res.json();
   
// }

// // ---------------------End:58_7-(1) to () --------------------------------
// -----------------------------Start: 58_9---------------------------------------
import { serverFetch } from "../core/server";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;


export const getJobs = async () =>{
    return serverFetch('/api/jobs');
}

// (8)st
export const getJobById = async (jobId) => {
    return serverFetch(`/api/jobs/${jobId}`);
}
// (8)en then go to jobs/[id]/page.jsx

export const getCompanyJobs = async (companyId, status = 'active') => {

    const res = await fetch(`${baseUrl}/api/jobs?companyId=${companyId}&status=${status}`);
    return res.json();
   
}

// ---------------------End:58_9-(1) to () --------------------------------
