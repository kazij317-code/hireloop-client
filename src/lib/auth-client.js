// // -----------------------------Start: 56_5---------------------------------------
// // (9)st import from doc
// import { createAuthClient } from "better-auth/react"
// export const authClient = createAuthClient({
//     /** The base URL of the server (optional if you're using the same domain) */
//     baseURL: "http://localhost:3000"
// })

// export const { signIn, signUp, useSession } = createAuthClient()


// // (9)en then (start: 56_6)

// // ---------------------End:56_5-(1) to () --------------------------------
// // -----------------------------Start: 56_6---------------------------------------
// import { createAuthClient } from "better-auth/react"
// export const authClient = createAuthClient({
//     /** The base URL of the server (optional if you're using the same domain) */
//     // baseURL: "http://localhost:3000"
//     // (1) then go to .env file
//     baseURL: process.env.BETTER_AUTH_URL
// })

// export const { signIn, signUp, useSession } = createAuthClient()
// // ---------------------End:56_6-(1) to () --------------------------------
// -----------------------------Start: 56_8---------------------------------------
import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    
    baseURL: process.env.BETTER_AUTH_URL
})

// export const { signIn, signUp, useSession } = createAuthClient()
// (1) then go to Navbar.js
export const { signIn, signUp, signOut, useSession } = createAuthClient()
// ---------------------End:56_8-(1) to () --------------------------------