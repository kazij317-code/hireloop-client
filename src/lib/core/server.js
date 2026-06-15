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

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
// (2)st
export const serverFetch = async (path) => {
    const res = await fetch(`${baseUrl}${path}`);
    // handle 401, 404, 403
    return res.json();
}
// (2)en then go to api/companies.js

export const serverMutation = async (path, data) => {
   
    const res = await fetch(`${baseUrl}${path}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
                             
        body: JSON.stringify(data),                            
    });

    // handle 401, 404, 403

    return res.json();
   
}

// ---------------------End:58_5-(1) to () --------------------------------