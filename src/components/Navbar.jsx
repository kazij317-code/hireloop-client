// -----------------------------Start: 56_2---------------------------------------
// // (4)st
// // import React from 'react';

// // const Navbar = () => {
// //     return (
// //         <div>

// //         </div>
// //     );
// // };
// // (5)st commit previous  import: https://heroui.com/en/docs/react/migration/navbar :With Mobile Menu (Simplified)
// // (7) then go to layout.js file
// 'use client'
// import { useState } from "react";
// import { Link, Button } from "@heroui/react";

// // function App() {
// // (6)
// function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
//       <header className="flex h-16 items-center justify-between px-6">
//         <div className="flex items-center gap-4">
//           <button
//             className="md:hidden"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             aria-label="Toggle menu"
//           >
//             <span className="sr-only">Menu</span>
//             <svg
//               className="h-6 w-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               {isMenuOpen ? (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               ) : (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               )}
//             </svg>
//           </button>
//           <div>Logo</div>
//         </div>
//         <ul className="hidden items-center gap-4 md:flex">
//           <li>
//             <Link href="#">Features</Link>
//           </li>
//           <li>
//             <Link href="#">Pricing</Link>
//           </li>
//         </ul>
//       </header>
//       {isMenuOpen && (
//         <div className="border-t border-separator md:hidden">
//           <ul className="flex flex-col gap-2 p-4">
//             <li>
//               <Link href="#" className="block py-2">
//                 Features
//               </Link>
//             </li>
//             <li>
//               <Link href="#" className="block py-2">
//                 Pricing
//               </Link>
//             </li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// }

// // (5)en

// export default Navbar;
// // (4)en

// ---------------------End:56_2-(1) to () --------------------------------
// // -----------------------------Start: 56_3--------------------------------------
// // (1)st AI Generated
// "use client";

// import { useState } from "react";
// import Link from "next/link";

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const navLinks = [
//     { name: "Browse Jobs", href: "/jobs" },
//     { name: "Company", href: "/company" },
//     { name: "Pricing", href: "/pricing" },
//   ];

//   return (
//     <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0B0B0F]/80 backdrop-blur-xl">
//       <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

//         {/* Left Side - Logo */}
//         <div className="flex items-center">
//           <Link
//             href="/"
//             className="flex items-center gap-2 transition-opacity hover:opacity-90"
//           >
//             {/* Logo Icon */}
//             <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-lg shadow-violet-500/20">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 fill="currentColor"
//                 className="h-5 w-5 text-white"
//               >
//                 <path d="M8 5v14l11-7z" />
//               </svg>
//             </div>

//             {/* Logo Text */}
//             {/* (2)st */}
//             {/* <div className="flex flex-col leading-none">
//               <span className="text-sm font-medium text-white/70">
//                 Hiring
//               </span>
//               <span className="text-lg font-bold tracking-wide text-white">
//                 Hero
//               </span>
//             </div> */}
//             {/* (2)en */}
//             {/* (3)st commit (2) */}
//             <div className="hidden leading-none sm:block">
//               <h1 className="text-lg font-bold text-white">
//                 Hire Loop
//               </h1>
//             </div>
//             {/* (3)en then create components/Footer */}

//           </Link>
//         </div>

//         {/* Right Side - Desktop Menu */}
//         <div className="hidden items-center gap-8 md:flex">

//           {/* Nav Links */}
//           <ul className="flex items-center gap-7">
//             {navLinks.map((link) => (
//               <li key={link.name}>
//                 <Link
//                   href={link.href}
//                   className="text-sm font-medium text-white/70 transition-colors duration-200 hover:text-white"
//                 >
//                   {link.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           {/* Vertical Divider */}
//           <div className="h-6 w-px bg-white/10" />

//           {/* Auth Buttons */}
//           <div className="flex items-center gap-3">
//             <Link
//               href="/signin"
//               className="text-sm font-semibold text-violet-400 transition-colors hover:text-violet-300"
//             >
//               Sign In
//             </Link>

//             <Link
//               href="/get-started"
//               className="rounded-xl bg-white px-5 py-2 text-sm font-semibold text-black transition-all duration-200 hover:scale-[1.02] hover:bg-white/90"
//             >
//               Get Started
//             </Link>
//           </div>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           type="button"
//           aria-label="Toggle Menu"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className="flex items-center justify-center rounded-lg p-2 text-white transition hover:bg-white/10 md:hidden"
//         >
//           {isMenuOpen ? (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={2}
//               stroke="currentColor"
//               className="h-6 w-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           ) : (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={2}
//               stroke="currentColor"
//               className="h-6 w-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           )}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`overflow-hidden border-t border-white/10 bg-[#0B0B0F] transition-all duration-300 md:hidden ${
//           isMenuOpen ? "max-h-[400px]" : "max-h-0 border-transparent"
//         }`}
//       >
//         <div className="space-y-1 px-4 py-4">

//           {/* Mobile Links */}
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               href={link.href}
//               className="block rounded-lg px-3 py-3 text-sm font-medium text-white/70 transition hover:bg-white/5 hover:text-white"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               {link.name}
//             </Link>
//           ))}

//           {/* Divider */}
//           <div className="my-3 h-px bg-white/10" />

//           {/* Mobile Auth Buttons */}
//           <div className="flex flex-col gap-3 pt-1">
//             <Link
//               href="/signin"
//               className="rounded-xl border border-violet-500/30 px-4 py-3 text-center text-sm font-semibold text-violet-400 transition hover:bg-violet-500/10"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Sign In
//             </Link>

//             <Link
//               href="/get-started"
//               className="rounded-xl bg-white px-4 py-3 text-center text-sm font-semibold text-black transition hover:bg-white/90"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Get Started
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }
// // (1)en

// // ---------------------End:56_3-(1) to () --------------------------------
// // -----------------------------Start: 56_7--------------------------------------
// "use client";

// import { useState } from "react";
// import Link from "next/link";

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const navLinks = [
//     { name: "Browse Jobs", href: "/jobs" },
//     { name: "Company", href: "/company" },
//     { name: "Pricing", href: "/pricing" },
//   ];

//   return (
//     <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0B0B0F]/80 backdrop-blur-xl">
//       <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

//         {/* Left Side - Logo */}
//         <div className="flex items-center">
//           <Link
//             href="/"
//             className="flex items-center gap-2 transition-opacity hover:opacity-90"
//           >
//             {/* Logo Icon */}
//             <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-lg shadow-violet-500/20">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 fill="currentColor"
//                 className="h-5 w-5 text-white"
//               >
//                 <path d="M8 5v14l11-7z" />
//               </svg>
//             </div>

//             {/* Logo Text */}

//             <div className="hidden leading-none sm:block">
//               <h1 className="text-lg font-bold text-white">
//                 Hire Loop
//               </h1>
//             </div>


//           </Link>
//         </div>

//         {/* Right Side - Desktop Menu */}
//         <div className="hidden items-center gap-8 md:flex">

//           {/* Nav Links */}
//           <ul className="flex items-center gap-7">
//             {navLinks.map((link) => (
//               <li key={link.name}>
//                 <Link
//                   href={link.href}
//                   className="text-sm font-medium text-white/70 transition-colors duration-200 hover:text-white"
//                 >
//                   {link.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           {/* Vertical Divider */}
//           <div className="h-6 w-px bg-white/10" />

//           {/* Auth Buttons */}
//           <div className="flex items-center gap-3">
//             <Link
//               // href="/signin"
//               // (2)
//               href="/auth/signin"
//               className="text-sm font-semibold text-violet-400 transition-colors hover:text-violet-300"
//             >
//               Sign In
//             </Link>

//             <Link
//               // href="/get-started"
//               // (3) then (start: 56_8)
//               href="/auth/signup"
//               className="rounded-xl bg-white px-5 py-2 text-sm font-semibold text-black transition-all duration-200 hover:scale-[1.02] hover:bg-white/90"
//             >
//               Get Started
//             </Link>
//           </div>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           type="button"
//           aria-label="Toggle Menu"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className="flex items-center justify-center rounded-lg p-2 text-white transition hover:bg-white/10 md:hidden"
//         >
//           {isMenuOpen ? (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={2}
//               stroke="currentColor"
//               className="h-6 w-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           ) : (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={2}
//               stroke="currentColor"
//               className="h-6 w-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           )}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`overflow-hidden border-t border-white/10 bg-[#0B0B0F] transition-all duration-300 md:hidden ${isMenuOpen ? "max-h-[400px]" : "max-h-0 border-transparent"
//           }`}
//       >
//         <div className="space-y-1 px-4 py-4">

//           {/* Mobile Links */}
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               href={link.href}
//               className="block rounded-lg px-3 py-3 text-sm font-medium text-white/70 transition hover:bg-white/5 hover:text-white"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               {link.name}
//             </Link>
//           ))}

//           {/* Divider */}
//           <div className="my-3 h-px bg-white/10" />

//           {/* Mobile Auth Buttons */}
//           <div className="flex flex-col gap-3 pt-1">
//             <Link
//               href="/signin"
//               className="rounded-xl border border-violet-500/30 px-4 py-3 text-center text-sm font-semibold text-violet-400 transition hover:bg-violet-500/10"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Sign In
//             </Link>

//             <Link
//               href="/get-started"
//               className="rounded-xl bg-white px-4 py-3 text-center text-sm font-semibold text-black transition hover:bg-white/90"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Get Started
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// // ---------------------End:56_7-(1) to () --------------------------------
// // -----------------------------Start: 56_8--------------------------------------
// "use client";

// import { useState } from "react";
// import Link from "next/link";
// // import { useSession } from "@/lib/auth-client";
// // (8)then (start: 56_9) got to StatsSection.jsx
// import { useSession, signOut } from "@/lib/auth-client";
// import { Button } from "@heroui/react";

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   // (2)st
//   const { data:session, isPending } = useSession();
//   // console.log("Session data in Navbar:", session, "Is pending:", isPending);
//   // (2)en
//   // (3) 
//   const user = session?.user;
// // (7)st
// const handleSignOut = async () => {
//   await signOut();
// }
// // (7)en 

//   const navLinks = [
//     { name: "Browse Jobs", href: "/jobs" },
//     { name: "Company", href: "/company" },
//     { name: "Pricing", href: "/pricing" },
//   ];

//   return (
//     <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0B0B0F]/80 backdrop-blur-xl">
//       <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

//         {/* Left Side - Logo */}
//         <div className="flex items-center">
//           <Link
//             href="/"
//             className="flex items-center gap-2 transition-opacity hover:opacity-90"
//           >
//             {/* Logo Icon */}
//             <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-lg shadow-violet-500/20">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 fill="currentColor"
//                 className="h-5 w-5 text-white"
//               >
//                 <path d="M8 5v14l11-7z" />
//               </svg>
//             </div>

//             {/* Logo Text */}

//             <div className="hidden leading-none sm:block">
//               <h1 className="text-lg font-bold text-white">
//                 Hire Loop
//               </h1>
//             </div>


//           </Link>
//         </div>

//         {/* Right Side - Desktop Menu */}
//         <div className="hidden items-center gap-8 md:flex">

//           {/* Nav Links */}
//           <ul className="flex items-center gap-7">
//             {navLinks.map((link) => (
//               <li key={link.name}>
//                 <Link
//                   href={link.href}
//                   className="text-sm font-medium text-white/70 transition-colors duration-200 hover:text-white"
//                 >
//                   {link.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           {/* Vertical Divider */}
//           <div className="h-6 w-px bg-white/10" />

//           {/* Auth Buttons */}
//           <div className="flex items-center gap-3">
//             {/* (4)st */}
//             {/* <Link
//               // href="/signin"
//               // (2)
//               href="/auth/signin"
//               className="text-sm font-semibold text-violet-400 transition-colors hover:text-violet-300"
//             >
//               Sign In
//             </Link> */}
//             {/* (4)en */}
//             {/* (5)st commit previous*/}
//             {
//               user ? 
//               <>
//               Hi, {user.name}!
//               {/* <Button variant="ghost">Sign Out</Button> */}
//               {/* (6) */}
//               <Button onClick ={handleSignOut} variant="ghost">Sign Out</Button>
//               </>
//               :
//               <Link
              
//               href="/auth/signin"
//               className="text-sm font-semibold text-violet-400 transition-colors hover:text-violet-300"
//             >
//               Sign In
//             </Link>
//             }
//             {/* (5)en */}


//             <Link
//               // href="/get-started"
//               // (3) then (start: 56_8)
//               href="/auth/signup"
//               className="rounded-xl bg-white px-5 py-2 text-sm font-semibold text-black transition-all duration-200 hover:scale-[1.02] hover:bg-white/90"
//             >
//               Get Started
//             </Link>
//           </div>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           type="button"
//           aria-label="Toggle Menu"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className="flex items-center justify-center rounded-lg p-2 text-white transition hover:bg-white/10 md:hidden"
//         >
//           {isMenuOpen ? (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={2}
//               stroke="currentColor"
//               className="h-6 w-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           ) : (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={2}
//               stroke="currentColor"
//               className="h-6 w-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           )}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`overflow-hidden border-t border-white/10 bg-[#0B0B0F] transition-all duration-300 md:hidden ${isMenuOpen ? "max-h-[400px]" : "max-h-0 border-transparent"
//           }`}
//       >
//         <div className="space-y-1 px-4 py-4">

//           {/* Mobile Links */}
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               href={link.href}
//               className="block rounded-lg px-3 py-3 text-sm font-medium text-white/70 transition hover:bg-white/5 hover:text-white"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               {link.name}
//             </Link>
//           ))}

//           {/* Divider */}
//           <div className="my-3 h-px bg-white/10" />

//           {/* Mobile Auth Buttons */}
//           <div className="flex flex-col gap-3 pt-1">
//             <Link
//               href="/signin"
//               className="rounded-xl border border-violet-500/30 px-4 py-3 text-center text-sm font-semibold text-violet-400 transition hover:bg-violet-500/10"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Sign In
//             </Link>

//             <Link
//               href="/get-started"
//               className="rounded-xl bg-white px-4 py-3 text-center text-sm font-semibold text-black transition hover:bg-white/90"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Get Started
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }
// // ---------------------End:56_8-(1) to () --------------------------------
// // -----------------------------Start: 57_2--------------------------------------
// "use client";

// import { useState } from "react";
// import Link from "next/link";

// import { useSession, signOut } from "@/lib/auth-client";
// import { Button } from "@heroui/react";

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const { data:session, isPending } = useSession();
//   // (6)then (start: 57_3) create app/dashboard/layout.jsx
//   console.log("Session data in Navbar:", session, "Is pending:", isPending);
   
//   const user = session?.user;

// const handleSignOut = async () => {
//   await signOut();
// }


//   const navLinks = [
//     { name: "Browse Jobs", href: "/jobs" },
//     { name: "Company", href: "/company" },
//     { name: "Pricing", href: "/pricing" },
//   ];

//   return (
//     <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0B0B0F]/80 backdrop-blur-xl">
//       <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

//         {/* Left Side - Logo */}
//         <div className="flex items-center">
//           <Link
//             href="/"
//             className="flex items-center gap-2 transition-opacity hover:opacity-90"
//           >
//             {/* Logo Icon */}
//             <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-lg shadow-violet-500/20">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 fill="currentColor"
//                 className="h-5 w-5 text-white"
//               >
//                 <path d="M8 5v14l11-7z" />
//               </svg>
//             </div>

//             {/* Logo Text */}

//             <div className="hidden leading-none sm:block">
//               <h1 className="text-lg font-bold text-white">
//                 Hire Loop
//               </h1>
//             </div>


//           </Link>
//         </div>

//         {/* Right Side - Desktop Menu */}
//         <div className="hidden items-center gap-8 md:flex">

//           {/* Nav Links */}
//           <ul className="flex items-center gap-7">
//             {navLinks.map((link) => (
//               <li key={link.name}>
//                 <Link
//                   href={link.href}
//                   className="text-sm font-medium text-white/70 transition-colors duration-200 hover:text-white"
//                 >
//                   {link.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           {/* Vertical Divider */}
//           <div className="h-6 w-px bg-white/10" />

//           {/* Auth Buttons */}
//           <div className="flex items-center gap-3">
            
//             {
//               user ? 
//               <>
//               Hi, {user.name}!
//               {/* <Button variant="ghost">Sign Out</Button> */}
//               {/* (6) */}
//               <Button onClick ={handleSignOut} variant="ghost">Sign Out</Button>
//               </>
//               :
//               <Link
              
//               href="/auth/signin"
//               className="text-sm font-semibold text-violet-400 transition-colors hover:text-violet-300"
//             >
//               Sign In
//             </Link>
//             }
            


//             <Link
            
//               href="/auth/signup"
//               className="rounded-xl bg-white px-5 py-2 text-sm font-semibold text-black transition-all duration-200 hover:scale-[1.02] hover:bg-white/90"
//             >
//               Get Started
//             </Link>
//           </div>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           type="button"
//           aria-label="Toggle Menu"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className="flex items-center justify-center rounded-lg p-2 text-white transition hover:bg-white/10 md:hidden"
//         >
//           {isMenuOpen ? (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={2}
//               stroke="currentColor"
//               className="h-6 w-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           ) : (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={2}
//               stroke="currentColor"
//               className="h-6 w-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           )}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`overflow-hidden border-t border-white/10 bg-[#0B0B0F] transition-all duration-300 md:hidden ${isMenuOpen ? "max-h-[400px]" : "max-h-0 border-transparent"
//           }`}
//       >
//         <div className="space-y-1 px-4 py-4">

//           {/* Mobile Links */}
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               href={link.href}
//               className="block rounded-lg px-3 py-3 text-sm font-medium text-white/70 transition hover:bg-white/5 hover:text-white"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               {link.name}
//             </Link>
//           ))}

//           {/* Divider */}
//           <div className="my-3 h-px bg-white/10" />

//           {/* Mobile Auth Buttons */}
//           <div className="flex flex-col gap-3 pt-1">
//             <Link
//               href="/signin"
//               className="rounded-xl border border-violet-500/30 px-4 py-3 text-center text-sm font-semibold text-violet-400 transition hover:bg-violet-500/10"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Sign In
//             </Link>

//             <Link
//               href="/get-started"
//               className="rounded-xl bg-white px-4 py-3 text-center text-sm font-semibold text-black transition hover:bg-white/90"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Get Started
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }
// // ---------------------End:57_2-(1) to () --------------------------------
// // -----------------------------Start: 58_4--------------------------------------
// "use client";

// import { useState } from "react";
// import Link from "next/link";

// import { useSession, signOut } from "@/lib/auth-client";
// import { Button } from "@heroui/react";

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   // const { data:session, isPending } = useSession();
//   // (1)
//   const { data: session } = useSession();
//   // (2)commit then go to recruiter/company/page.jsx
//   // console.log("Session data in Navbar:", session, "Is pending:", isPending);
   
//   const user = session?.user;

// const handleSignOut = async () => {
//   await signOut();
// }


//   const navLinks = [
//     { name: "Browse Jobs", href: "/jobs" },
//     { name: "Company", href: "/company" },
//     { name: "Pricing", href: "/pricing" },
//   ];

//   return (
//     <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0B0B0F]/80 backdrop-blur-xl">
//       <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

//         {/* Left Side - Logo */}
//         <div className="flex items-center">
//           <Link
//             href="/"
//             className="flex items-center gap-2 transition-opacity hover:opacity-90"
//           >
//             {/* Logo Icon */}
//             <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-lg shadow-violet-500/20">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 fill="currentColor"
//                 className="h-5 w-5 text-white"
//               >
//                 <path d="M8 5v14l11-7z" />
//               </svg>
//             </div>

//             {/* Logo Text */}

//             <div className="hidden leading-none sm:block">
//               <h1 className="text-lg font-bold text-white">
//                 Hire Loop
//               </h1>
//             </div>


//           </Link>
//         </div>

//         {/* Right Side - Desktop Menu */}
//         <div className="hidden items-center gap-8 md:flex">

//           {/* Nav Links */}
//           <ul className="flex items-center gap-7">
//             {navLinks.map((link) => (
//               <li key={link.name}>
//                 <Link
//                   href={link.href}
//                   className="text-sm font-medium text-white/70 transition-colors duration-200 hover:text-white"
//                 >
//                   {link.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           {/* Vertical Divider */}
//           <div className="h-6 w-px bg-white/10" />

//           {/* Auth Buttons */}
//           <div className="flex items-center gap-3">
            
//             {
//               user ? 
//               <>
//               Hi, {user.name}!
              
//               <Button onClick ={handleSignOut} variant="ghost">Sign Out</Button>
//               </>
//               :
//               <Link
              
//               href="/auth/signin"
//               className="text-sm font-semibold text-violet-400 transition-colors hover:text-violet-300"
//             >
//               Sign In
//             </Link>
//             }
            
//             <Link
            
//               href="/auth/signup"
//               className="rounded-xl bg-white px-5 py-2 text-sm font-semibold text-black transition-all duration-200 hover:scale-[1.02] hover:bg-white/90"
//             >
//               Get Started
//             </Link>
//           </div>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           type="button"
//           aria-label="Toggle Menu"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className="flex items-center justify-center rounded-lg p-2 text-white transition hover:bg-white/10 md:hidden"
//         >
//           {isMenuOpen ? (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={2}
//               stroke="currentColor"
//               className="h-6 w-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           ) : (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={2}
//               stroke="currentColor"
//               className="h-6 w-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           )}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`overflow-hidden border-t border-white/10 bg-[#0B0B0F] transition-all duration-300 md:hidden ${isMenuOpen ? "max-h-[400px]" : "max-h-0 border-transparent"
//           }`}
//       >
//         <div className="space-y-1 px-4 py-4">

//           {/* Mobile Links */}
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               href={link.href}
//               className="block rounded-lg px-3 py-3 text-sm font-medium text-white/70 transition hover:bg-white/5 hover:text-white"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               {link.name}
//             </Link>
//           ))}

//           {/* Divider */}
//           <div className="my-3 h-px bg-white/10" />

//           {/* Mobile Auth Buttons */}
//           <div className="flex flex-col gap-3 pt-1">
//             <Link
//               href="/signin"
//               className="rounded-xl border border-violet-500/30 px-4 py-3 text-center text-sm font-semibold text-violet-400 transition hover:bg-violet-500/10"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Sign In
//             </Link>

//             <Link
//               href="/get-started"
//               className="rounded-xl bg-white px-4 py-3 text-center text-sm font-semibold text-black transition hover:bg-white/90"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Get Started
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }
// // ---------------------End:58_4-(1) to () --------------------------------
// // -----------------------------Start: 58_7--------------------------------------
// "use client";

// import { useState } from "react";
// import Link from "next/link";

// import { useSession, signOut } from "@/lib/auth-client";
// import { Button } from "@heroui/react";

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);


//   const { data: session } = useSession();

//   // console.log("Session data in Navbar:", session, "Is pending:", isPending);
   
//   const user = session?.user;

// const handleSignOut = async () => {
//   await signOut();
// }


//   const navLinks = [
//     { name: "Browse Jobs", href: "/jobs" },
//     // { name: "Company", href: "/company" },
//     // (2) then go to jobs/JobCard.jsx
//     { name: "Companies", href: "/companies" },
//     { name: "Pricing", href: "/pricing" },
//   ];

//   return (
//     <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0B0B0F]/80 backdrop-blur-xl">
//       <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

//         {/* Left Side - Logo */}
//         <div className="flex items-center">
//           <Link
//             href="/"
//             className="flex items-center gap-2 transition-opacity hover:opacity-90"
//           >
//             {/* Logo Icon */}
//             <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-lg shadow-violet-500/20">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 fill="currentColor"
//                 className="h-5 w-5 text-white"
//               >
//                 <path d="M8 5v14l11-7z" />
//               </svg>
//             </div>

//             {/* Logo Text */}

//             <div className="hidden leading-none sm:block">
//               <h1 className="text-lg font-bold text-white">
//                 Hire Loop
//               </h1>
//             </div>


//           </Link>
//         </div>

//         {/* Right Side - Desktop Menu */}
//         <div className="hidden items-center gap-8 md:flex">

//           {/* Nav Links */}
//           <ul className="flex items-center gap-7">
//             {navLinks.map((link) => (
//               <li key={link.name}>
//                 <Link
//                   href={link.href}
//                   className="text-sm font-medium text-white/70 transition-colors duration-200 hover:text-white"
//                 >
//                   {link.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           {/* Vertical Divider */}
//           <div className="h-6 w-px bg-white/10" />

//           {/* Auth Buttons */}
//           <div className="flex items-center gap-3">
            
//             {
//               user ? 
//               <>
//               Hi, {user.name}!
              
//               <Button onClick ={handleSignOut} variant="ghost">Sign Out</Button>
//               </>
//               :
//               <Link
              
//               href="/auth/signin"
//               className="text-sm font-semibold text-violet-400 transition-colors hover:text-violet-300"
//             >
//               Sign In
//             </Link>
//             }
            
//             <Link
            
//               href="/auth/signup"
//               className="rounded-xl bg-white px-5 py-2 text-sm font-semibold text-black transition-all duration-200 hover:scale-[1.02] hover:bg-white/90"
//             >
//               Get Started
//             </Link>
//           </div>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           type="button"
//           aria-label="Toggle Menu"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className="flex items-center justify-center rounded-lg p-2 text-white transition hover:bg-white/10 md:hidden"
//         >
//           {isMenuOpen ? (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={2}
//               stroke="currentColor"
//               className="h-6 w-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           ) : (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={2}
//               stroke="currentColor"
//               className="h-6 w-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           )}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`overflow-hidden border-t border-white/10 bg-[#0B0B0F] transition-all duration-300 md:hidden ${isMenuOpen ? "max-h-[400px]" : "max-h-0 border-transparent"
//           }`}
//       >
//         <div className="space-y-1 px-4 py-4">

//           {/* Mobile Links */}
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               href={link.href}
//               className="block rounded-lg px-3 py-3 text-sm font-medium text-white/70 transition hover:bg-white/5 hover:text-white"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               {link.name}
//             </Link>
//           ))}

//           {/* Divider */}
//           <div className="my-3 h-px bg-white/10" />

//           {/* Mobile Auth Buttons */}
//           <div className="flex flex-col gap-3 pt-1">
//             <Link
//               href="/signin"
//               className="rounded-xl border border-violet-500/30 px-4 py-3 text-center text-sm font-semibold text-violet-400 transition hover:bg-violet-500/10"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Sign In
//             </Link>

//             <Link
//               href="/get-started"
//               className="rounded-xl bg-white px-4 py-3 text-center text-sm font-semibold text-black transition hover:bg-white/90"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Get Started
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }
// // ---------------------End:58_7-(1) to () --------------------------------
// -----------------------------Start: 59_6--------------------------------------
"use client";

import { useState } from "react";
import Link from "next/link";

import { useSession, signOut } from "@/lib/auth-client";
import { Button } from "@heroui/react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const { data: session } = useSession();

  // console.log("Session data in Navbar:", session, "Is pending:", isPending);
   
  const user = session?.user;

const handleSignOut = async () => {
  await signOut();
}


  const navLinks = [
    { name: "Browse Jobs", href: "/jobs" },
    
    { name: "Companies", href: "/companies" },
    // { name: "Pricing", href: "/pricing" },
    // (1) then create stipe account and see docs:https://docs.stripe.com/get-started/use-cases> Payments>Build a payments page>Quickstart guides>Create a Stripe-hosted checkout page>Next.js>Preview>.env>copy inside .env and then go to .env file
    { name: "Pricing", href: "/plans" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0B0B0F]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Left Side - Logo */}
        <div className="flex items-center">
          <Link
            href="/"
            className="flex items-center gap-2 transition-opacity hover:opacity-90"
          >
            {/* Logo Icon */}
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-lg shadow-violet-500/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5 text-white"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>

            {/* Logo Text */}

            <div className="hidden leading-none sm:block">
              <h1 className="text-lg font-bold text-white">
                Hire Loop
              </h1>
            </div>


          </Link>
        </div>

        {/* Right Side - Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">

          {/* Nav Links */}
          <ul className="flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-white/70 transition-colors duration-200 hover:text-white"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Vertical Divider */}
          <div className="h-6 w-px bg-white/10" />

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            
            {
              user ? 
              <>
              Hi, {user.name}!
              
              <Button onClick ={handleSignOut} variant="ghost">Sign Out</Button>
              </>
              :
              <Link
              
              href="/auth/signin"
              className="text-sm font-semibold text-violet-400 transition-colors hover:text-violet-300"
            >
              Sign In
            </Link>
            }
            
            <Link
            
              href="/auth/signup"
              className="rounded-xl bg-white px-5 py-2 text-sm font-semibold text-black transition-all duration-200 hover:scale-[1.02] hover:bg-white/90"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Toggle Menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center justify-center rounded-lg p-2 text-white transition hover:bg-white/10 md:hidden"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-[#0B0B0F] transition-all duration-300 md:hidden ${isMenuOpen ? "max-h-[400px]" : "max-h-0 border-transparent"
          }`}
      >
        <div className="space-y-1 px-4 py-4">

          {/* Mobile Links */}
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block rounded-lg px-3 py-3 text-sm font-medium text-white/70 transition hover:bg-white/5 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          {/* Divider */}
          <div className="my-3 h-px bg-white/10" />

          {/* Mobile Auth Buttons */}
          <div className="flex flex-col gap-3 pt-1">
            <Link
              href="/signin"
              className="rounded-xl border border-violet-500/30 px-4 py-3 text-center text-sm font-semibold text-violet-400 transition hover:bg-violet-500/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign In
            </Link>

            <Link
              href="/get-started"
              className="rounded-xl bg-white px-4 py-3 text-center text-sm font-semibold text-black transition hover:bg-white/90"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
// ---------------------End:59_6-(1) to () --------------------------------
