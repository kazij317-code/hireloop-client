// -----------------------------Start: 59_1---------------------------------------
// (1)st
import { getUserSession } from '@/lib/core/session';
import { redirect } from 'next/navigation';
import React from 'react';

// const ApplyPage = () => {
// (6)
// const ApplyPage = async () => {
// (9)
const ApplyPage = async ({ params }) => {
    // (10) then (start: 59_2) 
    const { id } = await params;
    // (5)
    const user = await getUserSession();

    // (7)st
    if (!user) {
        // redirect('/auth/signin')
        // (8)
        redirect(`/auth/signin?redirect=/jobs/${id}/apply`);
    }
    // (7)en then check

    return (
        <div>
            <h2>Apply for this Job</h2>
        </div>
    );
};

export default ApplyPage;
// (1)en then go to [id]/page.jsx
// ---------------------End:59_1-(1) to () --------------------------------
