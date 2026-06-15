// // -----------------------------Start: 58_7---------------------------------------
// // (4)st
// import JobCard from "@/components/jobs/JobCard";
// import { getJobs } from "@/lib/api/jobs";

// const sampleData = {
//   _id: {
//     $oid: "6a20319eaf8692fc9374958d",
//   },
//   jobTitle: "Cloud Solutions Architect",
//   companyName: "Microsoft",
//   companyLogo: "https://i.ibb.co/kVBxB7cD/microsoft.png",
//   jobType: "full-time",
//   minSalary: "160000",
//   maxSalary: "220000",
//   location: "USA",
//   responsibilities: "Design enterprise cloud solutions.",
//   requirements: "Azure, AWS, architecture design",
//   benefits: "Stock options",
//   isRemote: false,
// };

// // export default function Page() {
// // (6)
// export default async function Page() {
//     // (7)
//     const jobs = await getJobs()



//   return (
//     <div className="p-8 bg-zinc-950 min-h-screen flex justify-center items-center">
//       {/* (8) */}
//       <h2>jobs: {jobs.length}</h2>
//       {/* <JobCard job={sampleData} /> */}
//       {/* (9) then (start: 58_8) */}
//       <JobCard job={jobs[10]} />
//     </div>
//   );
// }
// // (4)en then go to lib/api/jobs
// // ---------------------End:58_7-(1) to () --------------------------------
// -----------------------------Start: 58_8---------------------------------------
// (9)st

// import JobCard from "@/components/jobs/JobCard";
// import { getJobs } from "@/lib/api/jobs";
// // (6) st commit it
// // const sampleData = {
// //     _id: {
// //         $oid: "6a20319eaf8692fc9374958d",
// //     },
// //     jobTitle: "Cloud Solutions Architect",
// //     companyName: "Microsoft",
// //     companyLogo: "https://i.ibb.co/kVBxB7cD/microsoft.png",
// //     jobType: "full-time",
// //     minSalary: "160000",
// //     maxSalary: "220000",
// //     location: "USA",
// //     responsibilities: "Design enterprise cloud solutions.",
// //     requirements: "Azure, AWS, architecture design",
// //     benefits: "Stock options",
// //     isRemote: false,
// // };
// // (6)en

// // export default async function Page() {
// // (7) then create components/jobs/JobListingContainer.jsx
// export default async function JobsPage() {

//     const jobs = await getJobs()
// // (1)st
// //     return (
// //         <div className="p-8 bg-zinc-950 min-h-screen flex justify-center items-center">

// //             <h2>jobs: {jobs.length}</h2>

// //             <JobCard job={jobs[10]} />
// //         </div>
// //     );
// // (1)en
// // (2)st commit (1) and import code form AI
// return (
//   <div className="w-full min-h-screen bg-zinc-950 p-6 md:p-12 text-white">
//     {/* Optional Page Header */}
//     <div className="max-w-7xl mx-auto mb-10">
//       <h1 className="text-4xl font-bold tracking-tight">Open Positions</h1>
//       <p className="text-zinc-400 mt-2">Discover your next engineering challenge.</p>
//     </div>

//     {/* 3-Column Grid Layout */}
//     {/* (3) */}
//     {/* <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
//       {jobs && jobs.map((jobItem) => {
//         // Fallback key using MongoDB _id layout or array index
//         const uniqueKey = jobItem._id?.$oid || jobItem._id || Math.random().toString();

//         return (
//           <JobCard
//             key={uniqueKey}
//             job={jobItem}
//           />
//         );
//       })}
//     </div> */}
//     {/* (3) */}
//     {/* (4) commit (3) */}
//     <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
// {jobs && jobs.map((jobItem) => <JobCard
//             key={jobItem._id}
//             job={jobItem}
//           />)}
//     </div>
//     {/* (4) then create components/jobs/JobFilters.jsx */}
//   </div>
// );
// // (2)en
// }
// (9)en
// (10)st commit (9)
import JobListingContainer from "@/components/jobs/JobListingContainer";
import { getJobs } from "@/lib/api/jobs";

export default async function Page() {
  // Fetched server-side on the initial request
  const jobs = await getJobs();

  return (
    <div className="w-full min-h-screen bg-zinc-950 p-6 md:p-12 text-white">
      <div className="max-w-7xl mx-auto mb-10">
        <h1 className="text-4xl font-bold tracking-tight">Open Positions</h1>
        <p className="text-zinc-400 mt-2">Discover your next engineering challenge.</p>
      </div>

      {/* Pass data to the Client Wrapper to handle filtering interactivity */}
      <JobListingContainer initialJobs={jobs || []} />
    </div>
  );
}
// (10)en
// ---------------------End:58_8-(1) to () --------------------------------