// -----------------------------Start: 58_4---------------------------------------

import { headers } from "next/headers"
import { auth } from "../auth"

// (8)st
export const getUserSession = async () => {
    const session = await auth.api.getSession({
        headers: await headers() //some endpoints might require headers
    })

    return session?.user || null;
}
// (8)en then go to company/page.jsx
// ---------------------End:58_4-(1) to () --------------------------------