// -----------------------------Start: 57_3---------------------------------------
// (1)st
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';
import React from 'react';

const DashboardLayout = ({children}) => {
    return (
        // <div>
        // (11)
        <div className="flex min-h-screen">
            {/* (8) then go go to DashboardSidebar*/}
            <DashboardSidebar/>
            {/* (2) then create dashboard/recruiter/page.jsx*/}
            {/* <div>{children}</div> */}
            {/* (12) then go to dahsboard/DashboardSidebar*/}
            <div className="flex-1">{children}</div>
        </div>
    );
};

export default DashboardLayout;
// (1)en
// ---------------------End:57_3-(1) to () --------------------------------
