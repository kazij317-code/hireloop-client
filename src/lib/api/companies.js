// -----------------------------Start: 58_5---------------------------------------

// import { serverFetch } from "../core/server";
// import { getUserSession } from "../core/session";

// // (1)st

// // (5)commit then go to company/page.jsx
// // const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

// export const getRecruiterCompany = async (recruiterId) => {
//     // (3)st
//     // const res = await fetch(`${baseUrl}/api/companies?recruiterId=${recruiterId}`);
//     // return res.json();
//     // (3)en
//     // (4) commit (3)
//         return serverFetch(`/api/my/companies?recruiterId=${recruiterId}`);
    
// }
// // (1)en then go to core/server
// // (15)st
// export const getLoggedInRecruiterCompany = async () => {
//     const user = await getUserSession();
//     return getRecruiterCompany(user?.id);
// }
// // (15)en then go to new/page.jsx file
// ---------------------End:58_5-(1) to () --------------------------------
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

// -----------------------------Start: 61---------------------------------------
import { protectedFetch, serverFetch } from "../core/server";
import { getUserSession } from "../core/session";

export const getCompanies = async () => {
    return protectedFetch(`/api/companies`);
}

export const getRecruiterCompany = async (recruiterId) => {
    return serverFetch(`/api/my/companies?recruiterId=${recruiterId}`);
}

export const getLoggedInRecruiterCompany = async () => {
    const user = await getUserSession();
    return getRecruiterCompany(user?.id);
}
// ---------------------End:61-(1) to () --------------------------------