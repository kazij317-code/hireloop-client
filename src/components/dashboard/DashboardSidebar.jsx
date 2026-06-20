// // -----------------------------Start: 57_3---------------------------------------
// // (4)st
// // import React from 'react';

// // const DashboardSidebar = () => {
// //     return (
// //         <div>

// //         </div>
// //     );
// // };

// // export default DashboardSidebar;
// // (4)en

// // (5)st commit (4) and import  Drawer menu from heroui
// // import type {ComponentType, SVGProps} from "react";

// // import {Bars, Bell, Envelope, Gear, House, Magnifier, Person} from "@gravity-ui/icons";
// // (9)
// import { LayoutSideContentLeft, Bell, Envelope, Gear, House, Magnifier, Person } from "@gravity-ui/icons";
// import { Button, Drawer } from "@heroui/react";

// // export function Navigation() {
// // (7)then go to dashboard/layout.jsx
// export function DashboardSidebar() {
//   //   const navItems: {icon: ComponentType<SVGProps<SVGSVGElement>>; label: string}[] = [
//   // (6)
//   const navItems = [
//     { icon: House, label: "Home" },
//     { icon: Magnifier, label: "Search" },
//     { icon: Bell, label: "Notifications" },
//     { icon: Envelope, label: "Messages" },
//     { icon: Person, label: "Profile" },
//     { icon: Gear, label: "Settings" },
//   ];

//   // (18)st import (17)
//   const navContent = <nav className="flex flex-col gap-1">
//     {navItems.map((item) => (
//       <button
//         key={item.label}
//         className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
//         type="button"
//       >
//         <item.icon className="size-5 text-muted" />
//         {item.label}
//       </button>
//     ))}
//   </nav>
//   // (18)en

//   return (
//     // (15)st
//     // <Drawer>
//     //   {/* <Button variant="secondary"> */}
//     //   {/* (14) */}
//     //   <Button className="lg:hidden" variant="secondary">
//     //     {/* <Bars /> */}
//     //     {/* (10) then go dashboard/layout.js*/}
//     //     <LayoutSideContentLeft />
//     //     {/* Menu */}
//     //     {/* (13) */}
//     //     Sidebar
//     //   </Button>
//     //   <Drawer.Backdrop>
//     //     <Drawer.Content placement="left">
//     //       <Drawer.Dialog>
//     //         <Drawer.CloseTrigger />
//     //         <Drawer.Header>
//     //           <Drawer.Heading>Navigation</Drawer.Heading>
//     //         </Drawer.Header>
//     //         <Drawer.Body>
//     //           <nav className="flex flex-col gap-1">
//     //             {navItems.map((item) => (
//     //               <button
//     //                 key={item.label}
//     //                 className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
//     //                 type="button"
//     //               >
//     //                 <item.icon className="size-5 text-muted" />
//     //                 {item.label}
//     //               </button>
//     //             ))}
//     //           </nav>
//     //         </Drawer.Body>
//     //       </Drawer.Dialog>
//     //     </Drawer.Content>
//     //   </Drawer.Backdrop>
//     // </Drawer>
//     // (15)en
//     // (16)st commit (15)
//     <>
//       {/* (20)st */}
//       <aside className="hidden w-64 shrink-0 border-r border-default p-4 lg:block">
//         {navContent}
//       </aside>
//       {/* (20)en then (start: 57_4) then recruiter/page.jsx */}
//       <Drawer>

//         <Button className="lg:hidden" variant="secondary">

//           <LayoutSideContentLeft />
//           {/* Menu */}

//           Sidebar
//         </Button>
//         <Drawer.Backdrop>
//           <Drawer.Content placement="left">
//             <Drawer.Dialog>
//               <Drawer.CloseTrigger />
//               <Drawer.Header>
//                 <Drawer.Heading>Navigation</Drawer.Heading>
//               </Drawer.Header>
//               <Drawer.Body>
//                 {/* (17)st*/}
//                 {/* <nav className="flex flex-col gap-1">
//                   {navItems.map((item) => (
//                     <button
//                       key={item.label}
//                       className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
//                       type="button"
//                     >
//                       <item.icon className="size-5 text-muted" />
//                       {item.label}
//                     </button>
//                   ))}
//                 </nav> */}
//                 {/* (17)en */}
//                 {/* (19)commit (17) */}
//                 {navContent}
//               </Drawer.Body>
//             </Drawer.Dialog>
//           </Drawer.Content>
//         </Drawer.Backdrop>
//       </Drawer>
//     </>
//     // (16)en
//   );
// }

// // (5)en
// // ---------------------End:57_3-(1) to () --------------------------------
// -----------------------------Start: 57_10---------------------------------------
// import { LayoutSideContentLeft, Bell, Envelope, Gear, House, Magnifier, Person } from "@gravity-ui/icons";
// (11)
// import { LayoutSideContentLeft, Bell, Briefcase, Envelope, Gear, House, Magnifier, Person } from "@gravity-ui/icons";
// import { Button, Drawer } from "@heroui/react";
// import Link from "next/link";

// export function DashboardSidebar() {
// // (5)st
//   // const navItems = [
//   //   { icon: House, label: "Home" },
//   //   { icon: Magnifier, label: "Search" },
//   //   { icon: Bell, label: "Notifications" },
//   //   { icon: Envelope, label: "Messages" },
//   //   { icon: Person, label: "Profile" },
//   //   { icon: Gear, label: "Settings" },
//   // ];
//   // (5)en
// // (6)st commit (5)
//   const navItems = [
//     { icon: House, href: "/dashboard/recruiter", label: "Home" },
//     { icon: Magnifier, href: "/dashboard/recruiter/jobs", label: "Jobs" },
//     { icon: Bell, href: "/dashboard/recruiter/jobs/new", label: "Post A Job" },
//     // (10) then create dashboard/recruiter/company/pages.jsx
//     { icon: Briefcase, href: "/dashboard/recruiter/company", label: "Company Profile" },
//     { icon: Envelope, href: "/messages", label: "Messages" },
//     { icon: Person, href: "/profile", label: "Profile" },
//     { icon: Gear, href: "/settings", label: "Settings" },
//   ];
//   // (6)en

//   const navContent = <nav className="flex flex-col gap-1">
//     {navItems.map((item) => (
//       // <button
//       // (7)
//       <Link
//         key={item.label}
//         className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
//         type="button"
//         // (9) then check
//         href={item.href}
//       >
//         <item.icon className="size-5 text-muted" />
//         {item.label}
//       {/* </button> */}
//       {/* (8) */}
//       </Link>
//     ))}
//   </nav>

//   return (
//     <>
//       <aside className="hidden w-64 shrink-0 border-r border-default p-4 lg:block">
//         {navContent}
//       </aside>
//       <Drawer>
//         <Button className="lg:hidden" variant="secondary">
//           <LayoutSideContentLeft />
//           {/* Menu */}
//           Sidebar
//         </Button>
//         <Drawer.Backdrop>
//           <Drawer.Content placement="left">
//             <Drawer.Dialog>
//               <Drawer.CloseTrigger />
//               <Drawer.Header>
//                 <Drawer.Heading>Navigation</Drawer.Heading>
//               </Drawer.Header>
//               <Drawer.Body>
//                 {navContent}
//               </Drawer.Body>
//             </Drawer.Dialog>
//           </Drawer.Content>
//         </Drawer.Backdrop>
//       </Drawer>
//     </>
//   );
// }

// ---------------------End:57_10-(1) to () --------------------------------

import { getUserSession } from "@/lib/core/session";
import { LayoutSideContentLeft, Bell, Briefcase, Envelope, Gear, House, Magnifier, Person, Bookmark, FileText, CreditCard } from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import { Building, Users } from "lucide-react";
import Link from "next/link";

export async function DashboardSidebar() {

    const user = await getUserSession();

    const recruiterNavLinks = [
        { icon: House, href: "/dashboard/recruiter", label: "Home" },
        { icon: Magnifier, href: "/dashboard/recruiter/jobs", label: "Jobs" },
        { icon: Bell, href: "/dashboard/recruiter/jobs/new", label: "Post A Job" },
        { icon: Briefcase, href: "/dashboard/recruiter/company", label: "Company Profile" },
        { icon: Envelope, href: "/messages", label: "Messages" },
        { icon: Person, href: "/profile", label: "Profile" },
        { icon: Gear, href: "/settings", label: "Settings" },
    ]

    const seekerNavLinks = [
        { icon: House, href: "/dashboard/seeker", label: "Dashboard" },
        { icon: Magnifier, href: "/dashboard/seeker/jobs", label: "Jobs" },
        { icon: Bookmark, href: "/dashboard/seeker/saved-jobs", label: "Saved Jobs" },
        { icon: FileText, href: "/dashboard/seeker/applications", label: "Applications" },
        { icon: CreditCard, href: "/dashboard/seeker/billing", label: "Billing" },
        { icon: Gear, href: "/settings", label: "Settings" },
    ];

    const adminNavLinks = [
        { icon: House, href: "/dashboard/admin", label: "Dashboard" },
        { icon: Users, href: "/dashboard/admin/users", label: "Users" },
        { icon: Building, href: "/dashboard/admin/companies", label: "Companies" },
        { icon: Briefcase, href: "/dashboard/admin/jobs", label: "Jobs" },
        { icon: CreditCard, href: "/dashboard/admin/payments", label: "Payments" },
        { icon: Gear, href: "/dashboard/admin/settings", label: "Settings" },
    ];

    const navLinksMap = {
        seeker: seekerNavLinks,
        recruiter: recruiterNavLinks,
        admin: adminNavLinks
    }

    const navItems = navLinksMap[user?.role || 'seeker'];


    const navContent = <nav className="flex flex-col gap-1">
        {navItems.map((item) => (
            <Link
                key={item.label}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
                href={item.href}
            >
                <item.icon className="size-5 text-muted" />
                {item.label}
            </Link>
        ))}
    </nav>

    return (
        <>
            <aside className="hidden w-64 shrink-0 border-r border-default p-4 lg:block">
                {navContent}
            </aside>
            <Drawer>
                <Button className="lg:hidden" variant="secondary">
                    <LayoutSideContentLeft />
                    Sidebar
                </Button>
                <Drawer.Backdrop>
                    <Drawer.Content placement="left">
                        <Drawer.Dialog>
                            <Drawer.CloseTrigger />
                            <Drawer.Header>
                                <Drawer.Heading>Navigation</Drawer.Heading>
                            </Drawer.Header>
                            <Drawer.Body>
                                {navContent}
                            </Drawer.Body>
                        </Drawer.Dialog>
                    </Drawer.Content>
                </Drawer.Backdrop>
            </Drawer>
        </>
    );
}
