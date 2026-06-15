// // -----------------------------Start: 57_3---------------------------------------
// // (3)st
// import React from 'react';

// const page = () => {
//     return (
//         <div>
//             <h2>I am a Recruiter</h2>
//         </div>
//     );
// };

// export default page;
// // (3)en then create components/dashboard/DashboardSidebar.jsx
// // ---------------------End:57_3-(1) to () --------------------------------
// -----------------------------Start: 57_4---------------------------------------
// (4)
'use client';
import { useSession } from '@/lib/auth-client';
import React from 'react';
// (8)
// import { Briefcase, Persons, Flash, CircleCheck } from '@gravity-ui/icons';
// (11) then (start: 57_5) create recruiter/jobs/page.jsx
import { Briefcase, Persons, Thunderbolt, CircleCheck } from '@gravity-ui/icons';
import { DashboardStats } from '@/components/dashboard/DashboardStats';
// (1)st
// const page = () => {
//     return (
//         <div>
//             <h2>I am a Recruiter</h2>
//         </div>
//     );
// };

// export default page;
// (1)en
// (2)st commit (1)
const RecruiterDashboardHomePage = () => {
    // (3)st
    const {data: session, isPending} = useSession();

    if(isPending){
        return <div>Loading...</div>
    }
// (9)st
const recruiterStats = [
        { title: "Total Job Posts", value: "48", icon: Briefcase },
        { title: "Total Applicants", value: "1,284", icon: Persons },
        { title: "Active Jobs", value: "18", icon: Thunderbolt },
        { title: "Jobs Closed", value: "32", icon: CircleCheck },
    ];
// (9)en

    const user = session?.user;
    console.log("Session data in RecruiterDashboardHomePage:", session);
    // (3)en
    
    return (
        <div>
            {/* <h2>I am a Recruiter</h2> */}
            {/* (5) create dashboard/StatCard.jsx */}
            <h2 className="text-2xl font-bold">Welcome back, {user?.name}</h2>
            {/* (10) */}
            <DashboardStats statsData={recruiterStats}/>
        </div>
    );
};

export default RecruiterDashboardHomePage;
// (2)en

// ---------------------End:57_4-(1) to () --------------------------------
