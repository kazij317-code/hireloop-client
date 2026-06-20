// // -----------------------------Start: 58_3---------------------------------------
// // (12)st copy from companies.js
// const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

// // export const createCompany = async (newCompanyData) => {
//     // (13)
// export const serverMutation = async (path, data) => {
   
//     // const res = await fetch(`${baseUrl}/api/companies`, {
//     // (14)
//     const res = await fetch(`${baseUrl}${path}`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         // body: JSON.stringify(newCompanyData), 
//         // (15) then go to lib/actions/companies.js file                          
//         body: JSON.stringify(data),                            
//     });

//     // handle 401, 404, 403

//     return res.json();
   
// }
// // (12)en
// // ---------------------End:58_3-(1) to () --------------------------------
// -----------------------------Start: 58_5---------------------------------------

// const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
// // (2)st
// export const serverFetch = async (path) => {
//     const res = await fetch(`${baseUrl}${path}`);
//     // handle 401, 404, 403
//     return res.json();
// }
// // (2)en then go to api/companies.js

// export const serverMutation = async (path, data) => {
   
//     const res = await fetch(`${baseUrl}${path}`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
                             
//         body: JSON.stringify(data),                            
//     });

//     // handle 401, 404, 403

//     return res.json();
   
// }

// ---------------------End:58_5-(1) to () --------------------------------
// const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;


// export const serverFetch = async (path) => {
//     const res = await fetch(`${baseUrl}${path}`);
//     // handle 401, 404, 403
//     return res.json();
// }


// export const serverMutation = async (path, data, method = 'POST') => {
//     const res = await fetch(`${baseUrl}${path}`, {
//         method: method,
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//     });

//     // handle 401, 404, 403

//     return res.json();
// }

// -----------------------------Start: 61---------------------------------------

import { redirect } from "next/navigation";
import { getUserToken } from "./session";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const authHeader = async () => {
    const token = await getUserToken();
    const header = token ? {
        authorization: `Bearer ${token}`
    } : {};
    return header;
}

export const serverFetch = async (path) => {
    const res = await fetch(`${baseUrl}${path}`);
    
    return handleStatusCode(res);
}

export const protectedFetch = async (path) => {
    const res = await fetch(`${baseUrl}${path}`,
        {
            headers: await authHeader()
        }
    );

    // handle 401, 403

    return handleStatusCode(res);
}


export const serverMutation = async (path, data, method = 'POST') => {
    const res = await fetch(`${baseUrl}${path}`, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            ... await authHeader()
        },
        body: JSON.stringify(data),
    });


    return handleStatusCode(res);
}


// handle 401, 404, 403
const handleStatusCode = res => {
    if (res.status === 401) {
        redirect('/unauthorized')
    }
    else if (res.status === 403) {
        redirect('/forbidden');
    }

    return res.json()
}
// ---------------------End:61-(1) to () --------------------------------