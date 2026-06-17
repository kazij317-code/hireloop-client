// // -----------------------------Start: 59_1---------------------------------------
// // (1)st
// import { getUserSession } from '@/lib/core/session';
// import { redirect } from 'next/navigation';
// import React from 'react';

// // const ApplyPage = () => {
// // (6)
// // const ApplyPage = async () => {
// // (9)
// const ApplyPage = async ({ params }) => {
//     // (10) then (start: 59_2) to to auth/signin/page.jsx
//     const { id } = await params;
//     // (5)
//     const user = await getUserSession();

//     // (7)st
//     if (!user) {
//         // redirect('/auth/signin')
//         // (8)
//         redirect(`/auth/signin?redirect=/jobs/${id}/apply`);
//     }
//     // (7)en then check

//     return (
//         <div>
//             <h2>Apply for this Job</h2>
//         </div>
//     );
// };

// export default ApplyPage;
// // (1)en then go to [id]/page.jsx
// // ---------------------End:59_1-(1) to () --------------------------------
// // -----------------------------Start: 59_2---------------------------------------

// import { getJobById } from '@/lib/api/jobs';
// import { getUserSession } from '@/lib/core/session';
// import { redirect } from 'next/navigation';
// import React from 'react';
// import JobApply from './JobApply';


// const ApplyPage = async ({ params }) => {

//     const { id } = await params;

//     const user = await getUserSession();


//     if (!user) {
//         redirect(`/auth/signin?redirect=/jobs/${id}/apply`);
//     }
//     // (12)
//     // console.log("User session found:", user);
//     // (13)st  commit (12)
//     if (user.role !== 'seeker') {
//         return (
//             <div className="w-full min-h-screen bg-zinc-950 flex flex-col justify-center items-center text-white p-6">
//                 <p className="text-zinc-400 text-lg">Only job seekers can apply for positions. Please sign in with a seeker account to proceed.</p>
//             </div>
//         );
//     }
//     // (13)en then check and after that create apply/JobApply.jsx

//     // (15)
//     const job = await getJobById(id);

    

//     return (
//         <div>
//             {/* <h2>Apply for this Job</h2> */}
//             {/* (16) */}
//             {/* <h2>Apply for {job.title}</h2> */}
//             {/* (20)commit (16) then (start:59.3) */}
//             {/* (17) then go to JobApply.jsx file */}
//             <JobApply job={job}/>
//         </div>
//     );
// };

// export default ApplyPage;

// // ---------------------End:59_2-(1) to () --------------------------------
// -----------------------------Start: 59_3---------------------------------------

import { getJobById } from '@/lib/api/jobs';
import { getUserSession } from '@/lib/core/session';
import { redirect } from 'next/navigation';
import React from 'react';
import JobApply from './JobApply';


const ApplyPage = async ({ params }) => {

    const { id } = await params;

    const user = await getUserSession();


    if (!user) {
        redirect(`/auth/signin?redirect=/jobs/${id}/apply`);
    }
    
    // console.log("User session found:", user);
    
    if (user.role !== 'seeker') {
        return (
            <div className="w-full min-h-screen bg-zinc-950 flex flex-col justify-center items-center text-white p-6">
                <p className="text-zinc-400 text-lg">Only job seekers can apply for positions. Please sign in with a seeker account to proceed.</p>
            </div>
        );
    }
    
    const job = await getJobById(id);

    return (
        <div>

            {/* <JobApply job={job}/> */}
            {/* (1) then go to JobApply.jsx file*/}
            <JobApply applicant ={user} job={job}/>
        </div>
    );
};

export default ApplyPage;

// ---------------------End:59_3-(1) to () --------------------------------
