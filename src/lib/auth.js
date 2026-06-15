// // -----------------------------Start: 56_5---------------------------------------
// // (2)st import from better-auth doc
// // import { betterAuth } from "better-auth";

// // export const auth = betterAuth({
// //   //...
// // });

// // (2)en then install: npm install mongodb @better-auth/mongo-adapter

// // (3)st commit (2) and import from better-auth doc 
// import { betterAuth } from "better-auth";
// import { MongoClient } from "mongodb";
// import { mongodbAdapter } from "better-auth/adapters/mongodb";

// // const client = new MongoClient("mongodb://localhost:27017/database");
// // (6)
// const client = new MongoClient(process.env.MONGO_DB_URI);
// const db = client.db();

// export const auth = betterAuth({
//     // (7) st
//     emailAndPassword: { 
//     enabled: true, 
//   }, 

//     // (7) en then create app/api/auth/[...all]/route.js
//   database: mongodbAdapter(db, {
//     // Optional: if you don't provide a client, database transactions won't be enabled.
//     client
//   }),
// });
// // (3)en then go to .env  
// // ---------------------End:56_5-(1) to () --------------------------------
// // -----------------------------Start: 56_6---------------------------------------
//  import { betterAuth } from "better-auth";
// import { MongoClient } from "mongodb";
// import { mongodbAdapter } from "better-auth/adapters/mongodb";


// const client = new MongoClient(process.env.MONGO_DB_URI);
// // const db = client.db();
// // (3) then create app/auth/signUp/page.js
// const db = client.db(process.env.AUTH_DB_NAME);

// export const auth = betterAuth({
    
//     emailAndPassword: { 
//     enabled: true, 
//   }, 

    
//   database: mongodbAdapter(db, {
//     // Optional: if you don't provide a client, database transactions won't be enabled.
//     client
//   }),
// });
  
// // ---------------------End:56_6-(1) to () --------------------------------
// -----------------------------Start: 57_1---------------------------------------
 import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";


const client = new MongoClient(process.env.MONGO_DB_URI);

const db = client.db(process.env.AUTH_DB_NAME);

export const auth = betterAuth({
    
    emailAndPassword: { 
    enabled: true, 
  }, 

    
  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client
  }),
  // (1)st
  user: {
       additionalFields: {
          role: {
              default: "seeker",              
            } 
        }
    }
  // (1)en then (start: 57_2) go to signup page
});
  
// ---------------------End:57_1-(1) to () --------------------------------

