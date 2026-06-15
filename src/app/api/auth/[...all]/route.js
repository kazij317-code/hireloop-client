// -----------------------------Start: 56_5---------------------------------------
// (8)st import from doc
import { auth } from "@/lib/auth"; // path to your auth file
import { toNextJsHandler } from "better-auth/next-js";

export const { POST, GET } = toNextJsHandler(auth);
// (8)en then create lib/auth-client.js

// ---------------------End:56_5-(1) to () --------------------------------