// -----------------------------Start: 58_3---------------------------------------
// // (2)st
// 'use server'

// import { serverMutation } from "../core/server";


// // (16)st
// export const createCompany = async (newCompanyData) => {
//     return serverMutation('/api/companies', newCompanyData);
// }
// // (16)en then check to add Company Profile then go to lib/actions/jobs



// // const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

// // export const createCompany = async (newCompanyData) => {
   
// //     const res = await fetch(`${baseUrl}/api/companies`, {
// //         method: 'POST',
// //         headers: {
// //             'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify(newCompanyData),
// //     });

// //     return res.json();
   
// // }
// // (2)en then go to recruiter/company/page.jsx

// // (11)commit previous: and create lib/core/server.js
// ---------------------End:58_3-(1) to () --------------------------------
// import { serverFetch } from "../core/server";
// import { getUserSession } from "../core/session";

// export const getCompanies = async () => {
//     return serverFetch(`/api/companies`);
// }

// export const getRecruiterCompany = async (recruiterId) => {
//     return serverFetch(`/api/my/companies?recruiterId=${recruiterId}`);
// }

// export const getLoggedInRecruiterCompany = async () => {
//     const user = await getUserSession();
//     return getRecruiterCompany(user?.id);
// }

// ---------------------------------------------------
'use server'

import { revalidatePath } from "next/cache";
import { serverMutation } from "../core/server";

export const createCompany = async (newCompanyData) => {
    return serverMutation('/api/companies', newCompanyData);
}

export const updateCompany = async (id, data) => {
    const result = serverMutation(`/api/companies/${id}`, data, 'PATCH');
    revalidatePath('/dashboard/admin/companies');
    return result;
}




// const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

// export const createCompany = async (newCompanyData) => {
//     const res = await fetch(`${baseUrl}/api/companies`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newCompanyData),
//     });

//     return res.json();
// }