// // -----------------------------Start: 56_6---------------------------------------
// // (4)st
// // import React from 'react';

// // const page = () => {
// //     return (
// //         <div>

// //         </div>
// //     );
// // };

// // export default page;
// // (4)en

// // (5)st commit (4) and import from AI
// "use client";

// import { useState } from "react";
// import { Card, Button, Link, TextField, Label, InputGroup, Input, FieldError } from "@heroui/react";
// import { Eye, EyeSlash, Person, At, ShieldKeyhole } from "@gravity-ui/icons";
// import { signUp } from "@/lib/auth-client";

// export default function SignupPage() {
//     // Form fields
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     // UI States
//     const [isVisible, setIsVisible] = useState(false);
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState("");
//     const [success, setSuccess] = useState("");

//     const toggleVisibility = () => setIsVisible(!isVisible);

//     const handleSignup = async (e) => {
//         e.preventDefault();

//         setError("");
//         setSuccess("");
//         setIsLoading(true);

//         try {
//             const { data, error: authError } = await signUp.email({
//                 email,
//                 password,
//                 name,
//                 callbackURL: "/",
//             });

//             if (authError) {
//                 setError(authError.message || "Something went wrong during signup.");
//             } else {
//                 setSuccess("Account created successfully! Welcome.");
//                 setName("");
//                 setEmail("");
//                 setPassword("");
//             }
//         } catch (err) {
//             setError("An unexpected network error occurred.");
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     return (
//         <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-zinc-950 px-4">
//             <Card className="w-full max-w-md p-6 shadow-sm border border-zinc-200 dark:border-zinc-800">

//                 {/* Header Container */}
//                 <div className="flex flex-col items-center justify-center gap-1 pb-6 border-b border-zinc-100 dark:border-zinc-800 mb-6 text-center">
//                     <h1 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">Create an account</h1>
//                     <p className="text-sm text-zinc-600 dark:text-zinc-400">Fill in the fields below to get started</p>
//                 </div>

//                 {/* Form Body */}
//                 <form onSubmit={handleSignup} className="flex flex-col gap-5">

//                     {/* Name Field */}
//                     <TextField isRequired name="name" className="flex flex-col gap-1.5">
//                         <Label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Name</Label>
//                         <InputGroup className="flex items-center gap-2 border border-zinc-200 dark:border-zinc-800 rounded-xl px-3 bg-zinc-50 dark:bg-zinc-900 focus-within:border-primary transition-colors">
//                             <Person className="text-zinc-400 pointer-events-none" size={16} />
//                             <Input
//                                 type="text"
//                                 placeholder="Enter your full name"
//                                 value={name}
//                                 onChange={(e) => setName(e.target.value)}
//                                 className="w-full bg-transparent py-2 text-sm outline-none border-none text-zinc-900 dark:text-zinc-100"
//                             />
//                         </InputGroup>
//                     </TextField>

//                     {/* Email Field */}
//                     <TextField isRequired name="email" type="email" className="flex flex-col gap-1.5">
//                         <Label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Email Address</Label>
//                         <InputGroup className="flex items-center gap-2 border border-zinc-200 dark:border-zinc-800 rounded-xl px-3 bg-zinc-50 dark:bg-zinc-900 focus-within:border-primary transition-colors">
//                             <At className="text-zinc-400 pointer-events-none" size={16} />
//                             <Input
//                                 placeholder="you@example.com"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 className="w-full bg-transparent py-2 text-sm outline-none border-none text-zinc-900 dark:text-zinc-100"
//                             />
//                         </InputGroup>
//                     </TextField>

//                     {/* Password Field */}
//                     <TextField isRequired name="password" className="flex flex-col gap-1.5">
//                         <Label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Password</Label>
//                         <InputGroup className="flex items-center gap-2 border border-zinc-200 dark:border-zinc-800 rounded-xl px-3 bg-zinc-50 dark:bg-zinc-900 focus-within:border-primary transition-colors">
//                             <ShieldKeyhole className="text-zinc-400 pointer-events-none" size={16} />
//                             <Input
//                                 type={isVisible ? "text" : "password"}
//                                 placeholder="Choose a password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 className="w-full bg-transparent py-2 text-sm outline-none border-none text-zinc-900 dark:text-zinc-100"
//                             />
//                             <button
//                                 className="focus:outline-none text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition"
//                                 type="button"
//                                 onClick={toggleVisibility}
//                                 aria-label="toggle password visibility"
//                             >
//                                 {isVisible ? <EyeSlash size={18} /> : <Eye size={18} />}
//                             </button>
//                         </InputGroup>
//                     </TextField>

//                     {/* Dynamic Status Badges */}
//                     {error && (
//                         <div className="p-3.5 text-xs font-medium rounded-xl bg-red-100/60 dark:bg-red-950/50 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-900">
//                             <span className="font-semibold">Error:</span> {error}
//                         </div>
//                     )}

//                     {success && (
//                         <div className="p-3.5 text-xs font-medium rounded-xl bg-emerald-100/60 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-900">
//                             <span className="font-semibold">Success:</span> {success}
//                         </div>
//                     )}

//                     {/* Action Button */}
//                     <Button
//                         type="submit"
//                         color="primary"
//                         className="w-full font-semibold rounded-xl text-sm h-12"
//                         isLoading={isLoading}
//                         isDisabled={isLoading}
//                     >
//                         Sign Up
//                     </Button>

//                     {/* Navigation Option */}
//                     <div className="text-center pt-4 border-t border-zinc-100 dark:border-zinc-800 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
//                         Already have an account?{" "}
//                         <Link href="/auth/signin" className="font-medium cursor-pointer text-sm text-blue-600 dark:text-blue-400">
//                             Sign in instead
//                         </Link>
//                     </div>

//                 </form>
//             </Card>
//         </div>
//     );
// }
// // (5)en then (start: 56_7) and create auth/signin/page.jsx 

// // ---------------------End:56_6-(1) to () --------------------------------
// // -----------------------------Start: 57_2---------------------------------------
// "use client";

// import { useState } from "react";
// import { Card, Button, Link, TextField, Label, InputGroup, Input, FieldError, RadioGroup, Radio } from "@heroui/react";
// import { Eye, EyeSlash, Person, At, ShieldKeyhole } from "@gravity-ui/icons";
// import { signUp } from "@/lib/auth-client";

// export default function SignupPage() {
//     // Form fields
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     // (3)
//     const [role, setRole] =useState("seeker");

//     // UI States
//     const [isVisible, setIsVisible] = useState(false);
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState("");
//     const [success, setSuccess] = useState("");

//     const toggleVisibility = () => setIsVisible(!isVisible);

//     const handleSignup = async (e) => {
//         e.preventDefault();

//         setError("");
//         setSuccess("");
//         setIsLoading(true);

//         try {
//             const { data, error: authError } = await signUp.email({
//                 email,
//                 password,
//                 name,
//                 // (5) then check do signup and see mongodb and then go to Navbar 
//                 role,
//                 callbackURL: "/",
//             });

//             if (authError) {
//                 setError(authError.message || "Something went wrong during signup.");
//             } else {
//                 setSuccess("Account created successfully! Welcome.");
//                 setName("");
//                 setEmail("");
//                 setPassword("");
//             }
//         } catch (err) {
//             setError("An unexpected network error occurred.");
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     return (
//         <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-zinc-950 px-4">
//             <Card className="w-full max-w-md p-6 shadow-sm border border-zinc-200 dark:border-zinc-800">

//                 {/* Header Container */}
//                 <div className="flex flex-col items-center justify-center gap-1 pb-6 border-b border-zinc-100 dark:border-zinc-800 mb-6 text-center">
//                     <h1 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">Create an account</h1>
//                     <p className="text-sm text-zinc-600 dark:text-zinc-400">Fill in the fields below to get started</p>
//                 </div>

//                 {/* Form Body */}
//                 <form onSubmit={handleSignup} className="flex flex-col gap-5">

//                     {/* Name Field */}
//                     <TextField isRequired name="name" className="flex flex-col gap-1.5">
//                         <Label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Name</Label>
//                         <InputGroup className="flex items-center gap-2 border border-zinc-200 dark:border-zinc-800 rounded-xl px-3 bg-zinc-50 dark:bg-zinc-900 focus-within:border-primary transition-colors">
//                             <Person className="text-zinc-400 pointer-events-none" size={16} />
//                             <Input
//                                 type="text"
//                                 placeholder="Enter your full name"
//                                 value={name}
//                                 onChange={(e) => setName(e.target.value)}
//                                 className="w-full bg-transparent py-2 text-sm outline-none border-none text-zinc-900 dark:text-zinc-100"
//                             />
//                         </InputGroup>
//                     </TextField>

//                     {/* Email Field */}
//                     <TextField isRequired name="email" type="email" className="flex flex-col gap-1.5">
//                         <Label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Email Address</Label>
//                         <InputGroup className="flex items-center gap-2 border border-zinc-200 dark:border-zinc-800 rounded-xl px-3 bg-zinc-50 dark:bg-zinc-900 focus-within:border-primary transition-colors">
//                             <At className="text-zinc-400 pointer-events-none" size={16} />
//                             <Input
//                                 placeholder="you@example.com"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 className="w-full bg-transparent py-2 text-sm outline-none border-none text-zinc-900 dark:text-zinc-100"
//                             />
//                         </InputGroup>
//                     </TextField>

//                     {/* Password Field */}
//                     <TextField isRequired name="password" className="flex flex-col gap-1.5">
//                         <Label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Password</Label>
//                         <InputGroup className="flex items-center gap-2 border border-zinc-200 dark:border-zinc-800 rounded-xl px-3 bg-zinc-50 dark:bg-zinc-900 focus-within:border-primary transition-colors">
//                             <ShieldKeyhole className="text-zinc-400 pointer-events-none" size={16} />
//                             <Input
//                                 type={isVisible ? "text" : "password"}
//                                 placeholder="Choose a password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 className="w-full bg-transparent py-2 text-sm outline-none border-none text-zinc-900 dark:text-zinc-100"
//                             />
//                             <button
//                                 className="focus:outline-none text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition"
//                                 type="button"
//                                 onClick={toggleVisibility}
//                                 aria-label="toggle password visibility"
//                             >
//                                 {isVisible ? <EyeSlash size={18} /> : <Eye size={18} />}
//                             </button>
//                         </InputGroup>
//                     </TextField>
//                     {/* (1)st from heroui radiogroup horizontal Orientation*/}
//                     {/* <div className="flex flex-col gap-4">
//                         <Label>Subscription plan</Label>
//                         <RadioGroup defaultValue="pro" name="plan-orientation" orientation="horizontal">
//                             <Radio value="starter">
//                                 <Radio.Control>
//                                     <Radio.Indicator />
//                                 </Radio.Control>
//                                 <Radio.Content>
//                                     <Label>Starter</Label>
//                                     <Description>For side projects</Description>
//                                 </Radio.Content>
//                             </Radio>
//                             <Radio value="pro">
//                                 <Radio.Control>
//                                     <Radio.Indicator />
//                                 </Radio.Control>
//                                 <Radio.Content>
//                                     <Label>Pro</Label>
//                                     <Description>Advanced reporting</Description>
//                                 </Radio.Content>
//                             </Radio>
//                             <Radio value="teams">
//                                 <Radio.Control>
//                                     <Radio.Indicator />
//                                 </Radio.Control>
//                                 <Radio.Content>
//                                     <Label>Teams</Label>
//                                     <Description>Up to 10 teammates</Description>
//                                 </Radio.Content>
//                             </Radio>
//                         </RadioGroup>
//                     </div> */}
//                     {/* (1)en */}
//                     {/* (2)st commit (1)*/}
//                     {/* Role Selection */}
//                     <div className="flex flex-col gap-4">
//                         <Label>Subscription plan</Label>

//                         {/* <RadioGroup defaultValue="seeker" name="role" orientation="horizontal"> */}
//                         {/* (4) */}
//                         <RadioGroup defaultValue="seeker" name="role" onChange={value => setRole(value)} orientation="horizontal">
//                             <Radio value="seeker">
//                                 <Radio.Control>
//                                     <Radio.Indicator />
//                                 </Radio.Control>
//                                 <Radio.Content>
//                                     <Label>Job Seeker</Label>
//                                 </Radio.Content>
//                             </Radio>
//                             <Radio value="recruiter">
//                                 <Radio.Control>
//                                     <Radio.Indicator />
//                                 </Radio.Control>
//                                 <Radio.Content>
//                                     <Label>Recruiter</Label>
//                                 </Radio.Content>
//                             </Radio>
//                         </RadioGroup>
//                     </div>
//                     {/* (2)en */}
//                     {/* Dynamic Status Badges */}
//                     {error && (
//                         <div className="p-3.5 text-xs font-medium rounded-xl bg-red-100/60 dark:bg-red-950/50 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-900">
//                             <span className="font-semibold">Error:</span> {error}
//                         </div>
//                     )}

//                     {success && (
//                         <div className="p-3.5 text-xs font-medium rounded-xl bg-emerald-100/60 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-900">
//                             <span className="font-semibold">Success:</span> {success}
//                         </div>
//                     )}

//                     {/* Action Button */}
//                     <Button
//                         type="submit"
//                         color="primary"
//                         className="w-full font-semibold rounded-xl text-sm h-12"
//                         isLoading={isLoading}
//                         isDisabled={isLoading}
//                     >
//                         Sign Up
//                     </Button>

//                     {/* Navigation Option */}
//                     <div className="text-center pt-4 border-t border-zinc-100 dark:border-zinc-800 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
//                         Already have an account?{" "}
//                         <Link href="/auth/signin" className="font-medium cursor-pointer text-sm text-blue-600 dark:text-blue-400">
//                             Sign in instead
//                         </Link>
//                     </div>

//                 </form>
//             </Card>
//         </div>
//     );
// }
// // ---------------------End:57_2-(1) to () --------------------------------
// // -----------------------------Start: 59_2---------------------------------------
// "use client";

// import { useState } from "react";
// import { Card, Button, Link, TextField, Label, InputGroup, Input, FieldError, RadioGroup, Radio } from "@heroui/react";
// import { Eye, EyeSlash, Person, At, ShieldKeyhole } from "@gravity-ui/icons";
// import { signUp } from "@/lib/auth-client";
// import { useRouter, useSearchParams } from "next/navigation";


// export default function SignupPage() {
//     // Form fields
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [role, setRole] = useState("seeker");
// // (10)
//     const router = useRouter();
//     // (7)st
//     const searchParams = useSearchParams();
//     const redirectTo = searchParams.get("redirect") || "/";
//     // (7)en

//     // UI States
//     const [isVisible, setIsVisible] = useState(false);
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState("");
//     const [success, setSuccess] = useState("");

//     const toggleVisibility = () => setIsVisible(!isVisible);

//     const handleSignup = async (e) => {
//         e.preventDefault();

//         setError("");
//         setSuccess("");
//         setIsLoading(true);

//         try {
//             const { data, error: authError } = await signUp.email({
//                 email,
//                 password,
//                 name,
//                 role,
//                 // (9)commit
//                 // callbackURL: "/",
//             });

//             if (authError) {
//                 setError(authError.message || "Something went wrong during signup.");
//             } else {
//                 setSuccess("Account created successfully! Welcome.");
//                 setName("");
//                 setEmail("");
//                 setPassword("");
//                 // (11) then check and after go to jobs/[id]/apply/page.jsx
//                 router.push(redirectTo)

//             }
//         } catch (err) {
//             setError("An unexpected network error occurred.");
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     return (
//         <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-zinc-950 px-4">
//             <Card className="w-full max-w-md p-6 shadow-sm border border-zinc-200 dark:border-zinc-800">

//                 {/* Header Container */}
//                 <div className="flex flex-col items-center justify-center gap-1 pb-6 border-b border-zinc-100 dark:border-zinc-800 mb-6 text-center">
//                     <h1 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">Create an account</h1>
//                     <p className="text-sm text-zinc-600 dark:text-zinc-400">Fill in the fields below to get started</p>
//                 </div>

//                 {/* Form Body */}
//                 <form onSubmit={handleSignup} className="flex flex-col gap-5">

//                     {/* Name Field */}
//                     <TextField isRequired name="name" className="flex flex-col gap-1.5">
//                         <Label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Name</Label>
//                         <InputGroup className="flex items-center gap-2 border border-zinc-200 dark:border-zinc-800 rounded-xl px-3 bg-zinc-50 dark:bg-zinc-900 focus-within:border-primary transition-colors">
//                             <Person className="text-zinc-400 pointer-events-none" size={16} />
//                             <Input
//                                 type="text"
//                                 placeholder="Enter your full name"
//                                 value={name}
//                                 onChange={(e) => setName(e.target.value)}
//                                 className="w-full bg-transparent py-2 text-sm outline-none border-none text-zinc-900 dark:text-zinc-100"
//                             />
//                         </InputGroup>
//                     </TextField>

//                     {/* Email Field */}
//                     <TextField isRequired name="email" type="email" className="flex flex-col gap-1.5">
//                         <Label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Email Address</Label>
//                         <InputGroup className="flex items-center gap-2 border border-zinc-200 dark:border-zinc-800 rounded-xl px-3 bg-zinc-50 dark:bg-zinc-900 focus-within:border-primary transition-colors">
//                             <At className="text-zinc-400 pointer-events-none" size={16} />
//                             <Input
//                                 placeholder="you@example.com"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 className="w-full bg-transparent py-2 text-sm outline-none border-none text-zinc-900 dark:text-zinc-100"
//                             />
//                         </InputGroup>
//                     </TextField>

//                     {/* Password Field */}
//                     <TextField isRequired name="password" className="flex flex-col gap-1.5">
//                         <Label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Password</Label>
//                         <InputGroup className="flex items-center gap-2 border border-zinc-200 dark:border-zinc-800 rounded-xl px-3 bg-zinc-50 dark:bg-zinc-900 focus-within:border-primary transition-colors">
//                             <ShieldKeyhole className="text-zinc-400 pointer-events-none" size={16} />
//                             <Input
//                                 type={isVisible ? "text" : "password"}
//                                 placeholder="Choose a password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 className="w-full bg-transparent py-2 text-sm outline-none border-none text-zinc-900 dark:text-zinc-100"
//                             />
//                             <button
//                                 className="focus:outline-none text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition"
//                                 type="button"
//                                 onClick={toggleVisibility}
//                                 aria-label="toggle password visibility"
//                             >
//                                 {isVisible ? <EyeSlash size={18} /> : <Eye size={18} />}
//                             </button>
//                         </InputGroup>
//                     </TextField>

//                     {/* Role Selection */}
//                     <div className="flex flex-col gap-4">
//                         <Label>Subscription plan</Label>

//                         {/* <RadioGroup defaultValue="seeker" name="role" orientation="horizontal"> */}

//                         <RadioGroup defaultValue="seeker" name="role" onChange={value => setRole(value)} orientation="horizontal">
//                             <Radio value="seeker">
//                                 <Radio.Control>
//                                     <Radio.Indicator />
//                                 </Radio.Control>
//                                 <Radio.Content>
//                                     <Label>Job Seeker</Label>
//                                 </Radio.Content>
//                             </Radio>
//                             <Radio value="recruiter">
//                                 <Radio.Control>
//                                     <Radio.Indicator />
//                                 </Radio.Control>
//                                 <Radio.Content>
//                                     <Label>Recruiter</Label>
//                                 </Radio.Content>
//                             </Radio>
//                         </RadioGroup>
//                     </div>

//                     {/* Dynamic Status Badges */}
//                     {error && (
//                         <div className="p-3.5 text-xs font-medium rounded-xl bg-red-100/60 dark:bg-red-950/50 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-900">
//                             <span className="font-semibold">Error:</span> {error}
//                         </div>
//                     )}

//                     {success && (
//                         <div className="p-3.5 text-xs font-medium rounded-xl bg-emerald-100/60 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-900">
//                             <span className="font-semibold">Success:</span> {success}
//                         </div>
//                     )}

//                     {/* Action Button */}
//                     <Button
//                         type="submit"
//                         color="primary"
//                         className="w-full font-semibold rounded-xl text-sm h-12"
//                         isLoading={isLoading}
//                         isDisabled={isLoading}
//                     >
//                         Sign Up
//                     </Button>

//                     {/* Navigation Option */}
//                     <div className="text-center pt-4 border-t border-zinc-100 dark:border-zinc-800 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
//                         Already have an account?{" "}
//                         <Link
//                             // href="/auth/signin"
//                             // (8) 
//                             href={`/auth/signin?redirect=${redirectTo}`}
//                             className="font-medium cursor-pointer text-sm text-blue-600 dark:text-blue-400">
//                             Sign in instead
//                         </Link>
//                     </div>

//                 </form>
//             </Card>
//         </div>
//     );
// }
// // ---------------------End:59_2-(1) to () --------------------------------
// -----------------------------Start: 59_9---------------------------------------
"use client";

import { useState } from "react";
import { Card, Button, Link, TextField, Label, InputGroup, Input, FieldError, RadioGroup, Radio } from "@heroui/react";
import { Eye, EyeSlash, Person, At, ShieldKeyhole } from "@gravity-ui/icons";
import { signUp } from "@/lib/auth-client";
import { useRouter, useSearchParams } from "next/navigation";


export default function SignupPage() {
    // Form fields
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("seeker");

    const router = useRouter();

    const searchParams = useSearchParams();
    const redirectTo = searchParams.get("redirect") || "/";


    // UI States
    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const toggleVisibility = () => setIsVisible(!isVisible);

    const handleSignup = async (e) => {
        e.preventDefault();

        setError("");
        setSuccess("");
        setIsLoading(true);

        // (2)
        const plan = role === 'seeker' ? 'seeker_free' : 'recruiter_free';

        try {
            const { data, error: authError } = await signUp.email({
                email,
                password,
                name,
                role,
                // (3) then signup new jobseeker account and check inside mongodb and create new collection named plans and insert three AI Generated plan and then go to server
                plan
                
                
            });

            if (authError) {
                setError(authError.message || "Something went wrong during signup.");
            } else {
                setSuccess("Account created successfully! Welcome.");
                setName("");
                setEmail("");
                setPassword("");
                
                router.push(redirectTo)

            }
        } catch (err) {
            setError("An unexpected network error occurred.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-zinc-950 px-4">
            <Card className="w-full max-w-md p-6 shadow-sm border border-zinc-200 dark:border-zinc-800">

                {/* Header Container */}
                <div className="flex flex-col items-center justify-center gap-1 pb-6 border-b border-zinc-100 dark:border-zinc-800 mb-6 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">Create an account</h1>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">Fill in the fields below to get started</p>
                </div>

                {/* Form Body */}
                <form onSubmit={handleSignup} className="flex flex-col gap-5">

                    {/* Name Field */}
                    <TextField isRequired name="name" className="flex flex-col gap-1.5">
                        <Label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Name</Label>
                        <InputGroup className="flex items-center gap-2 border border-zinc-200 dark:border-zinc-800 rounded-xl px-3 bg-zinc-50 dark:bg-zinc-900 focus-within:border-primary transition-colors">
                            <Person className="text-zinc-400 pointer-events-none" size={16} />
                            <Input
                                type="text"
                                placeholder="Enter your full name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full bg-transparent py-2 text-sm outline-none border-none text-zinc-900 dark:text-zinc-100"
                            />
                        </InputGroup>
                    </TextField>

                    {/* Email Field */}
                    <TextField isRequired name="email" type="email" className="flex flex-col gap-1.5">
                        <Label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Email Address</Label>
                        <InputGroup className="flex items-center gap-2 border border-zinc-200 dark:border-zinc-800 rounded-xl px-3 bg-zinc-50 dark:bg-zinc-900 focus-within:border-primary transition-colors">
                            <At className="text-zinc-400 pointer-events-none" size={16} />
                            <Input
                                placeholder="you@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-transparent py-2 text-sm outline-none border-none text-zinc-900 dark:text-zinc-100"
                            />
                        </InputGroup>
                    </TextField>

                    {/* Password Field */}
                    <TextField isRequired name="password" className="flex flex-col gap-1.5">
                        <Label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Password</Label>
                        <InputGroup className="flex items-center gap-2 border border-zinc-200 dark:border-zinc-800 rounded-xl px-3 bg-zinc-50 dark:bg-zinc-900 focus-within:border-primary transition-colors">
                            <ShieldKeyhole className="text-zinc-400 pointer-events-none" size={16} />
                            <Input
                                type={isVisible ? "text" : "password"}
                                placeholder="Choose a password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-transparent py-2 text-sm outline-none border-none text-zinc-900 dark:text-zinc-100"
                            />
                            <button
                                className="focus:outline-none text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition"
                                type="button"
                                onClick={toggleVisibility}
                                aria-label="toggle password visibility"
                            >
                                {isVisible ? <EyeSlash size={18} /> : <Eye size={18} />}
                            </button>
                        </InputGroup>
                    </TextField>

                    {/* Role Selection */}
                    <div className="flex flex-col gap-4">
                        <Label>Subscription plan</Label>

                        {/* <RadioGroup defaultValue="seeker" name="role" orientation="horizontal"> */}

                        <RadioGroup defaultValue="seeker" name="role" onChange={value => setRole(value)} orientation="horizontal">
                            <Radio value="seeker">
                                <Radio.Control>
                                    <Radio.Indicator />
                                </Radio.Control>
                                <Radio.Content>
                                    <Label>Job Seeker</Label>
                                </Radio.Content>
                            </Radio>
                            <Radio value="recruiter">
                                <Radio.Control>
                                    <Radio.Indicator />
                                </Radio.Control>
                                <Radio.Content>
                                    <Label>Recruiter</Label>
                                </Radio.Content>
                            </Radio>
                        </RadioGroup>
                    </div>

                    {/* Dynamic Status Badges */}
                    {error && (
                        <div className="p-3.5 text-xs font-medium rounded-xl bg-red-100/60 dark:bg-red-950/50 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-900">
                            <span className="font-semibold">Error:</span> {error}
                        </div>
                    )}

                    {success && (
                        <div className="p-3.5 text-xs font-medium rounded-xl bg-emerald-100/60 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-900">
                            <span className="font-semibold">Success:</span> {success}
                        </div>
                    )}

                    {/* Action Button */}
                    <Button
                        type="submit"
                        color="primary"
                        className="w-full font-semibold rounded-xl text-sm h-12"
                        isLoading={isLoading}
                        isDisabled={isLoading}
                    >
                        Sign Up
                    </Button>

                    {/* Navigation Option */}
                    <div className="text-center pt-4 border-t border-zinc-100 dark:border-zinc-800 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                        Already have an account?{" "}
                        <Link
                             
                            href={`/auth/signin?redirect=${redirectTo}`}
                            className="font-medium cursor-pointer text-sm text-blue-600 dark:text-blue-400">
                            Sign in instead
                        </Link>
                    </div>

                </form>
            </Card>
        </div>
    );
}
// ---------------------End:59_9-(1) to () --------------------------------
// ----------------------------
// use this my assignment:

// "use client";

// import { authClient } from "@/lib/auth-client";
// import Link from "next/link";
// import React, { useState } from "react";
// import toast from "react-hot-toast";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { useRouter } from "next/navigation";

// import {
//   Button,
//   Card,
//   FieldError,
//   Form,
//   Input,
//   Label,
//   TextField,
//   Description,
//   Separator,
// } from "@heroui/react";

// import GoogleLogin from "@/components/GoogleLogin";

// const SignupClient = () => {
//   const router = useRouter();

//   const [isShowPassword, setIsShowPassword] = useState(false);

//   const handleRegisterFunc = async (e) => {
//     e.preventDefault();

//     const formData = Object.fromEntries(new FormData(e.currentTarget));

//     const { name, image, email, password } = formData;

//     const { data: res, error } = await authClient.signUp.email({
//       name,
//       email,
//       password,
//       image,

//       // Default user fields
//       role: "user",
//       isBlocked: false,
//       isPremium: false,

//       callbackURL: "/",
//     });

//     if (error) {
//       toast.error(error.message);
//       return;
//     }

//     if (res) {
//       toast.success("Signup successfully");

//       e.target.reset();

//       await authClient.signOut();

//       router.push("/auth/signin");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-[#0b1120] dark:via-[#111827] dark:to-[#1e1b4b] transition-all duration-500">
//       <div className="w-full max-w-md">
//         <Card className="backdrop-blur-xl bg-white/70 dark:bg-white/5 border border-white/30 dark:border-white/10 shadow-2xl rounded-3xl p-8 transition-all duration-300">
//           {/* Header */}
//           <div className="text-center mb-7">
//             <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
//               Create Account
//             </h1>

//             <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
//               Create your account to get started.
//             </p>
//           </div>

//           {/* Form */}
//           <Form
//             onSubmit={handleRegisterFunc}
//             className="flex flex-col gap-4"
//           >
//             <TextField isRequired name="name" type="text">
//               <Label>Full Name</Label>
//               <Input
//                 placeholder="Enter your name"
//                 className="rounded-xl h-12 mt-1"
//               />
//               <FieldError />
//             </TextField>

//             <TextField isRequired name="image" type="url">
//               <Label>Photo URL</Label>
//               <Input
//                 placeholder="Paste your image URL"
//                 className="rounded-xl h-12 mt-1"
//               />
//               <FieldError />
//             </TextField>

//             <TextField isRequired name="email" type="email">
//               <Label>Email Address</Label>
//               <Input
//                 placeholder="Enter your email"
//                 className="rounded-xl h-12 mt-1"
//               />
//               <FieldError />
//             </TextField>

//             <TextField isRequired minLength={6} name="password">
//               <Label>Password</Label>

//               <div className="relative mt-1">
//                 <Input
//                   type={isShowPassword ? "text" : "password"}
//                   placeholder="Enter password"
//                   className="rounded-xl h-12 pr-10"
//                 />

//                 <span
//                   onClick={() =>
//                     setIsShowPassword(!isShowPassword)
//                   }
//                   className="absolute right-4 top-4 cursor-pointer text-gray-500 hover:text-purple-600"
//                 >
//                   {isShowPassword ? (
//                     <FaEye />
//                   ) : (
//                     <FaEyeSlash />
//                   )}
//                 </span>
//               </div>

//               <Description>
//                 Minimum 6 characters.
//               </Description>

//               <FieldError />
//             </TextField>

//             <Button
//               type="submit"
//               className="w-full h-12 mt-3 rounded-xl text-white font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 cursor-pointer"
//             >
//               Create Account
//             </Button>
//           </Form>

//           {/* Login */}
//           <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
//             Already have an account?{" "}
//             <Link
//               href="/login"
//               className="text-purple-600 font-semibold hover:underline"
//             >
//               Login
//             </Link>
//           </p>

//           {/* Divider */}
//           <div className="flex items-center gap-4 my-6">
//             <Separator className="flex-1" />
//             <span className="text-xs uppercase text-gray-400 font-semibold">
//               Or
//             </span>
//             <Separator className="flex-1" />
//           </div>

//           {/* Google Login */}
//           <div className="border rounded-xl p-1 hover:shadow-md transition">
//             <GoogleLogin />
//           </div>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default SignupClient;


// --------------------





