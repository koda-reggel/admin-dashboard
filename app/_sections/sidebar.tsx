"use client";

import { SiWindows10 } from "react-icons/si";
import { FaRegUser } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import SidebarLinks from "../_components/sidebar-links";

export default function Sidebar() {
  return (
    <div className=" flex-col  md:w-[180px] xl:w-[225px] hidden lg:flex  bg-green-950 h-screen w-full">
      <div className="flex p-8 text-white text-2xl font-bold items-center h-16">
        Siohioma
      </div>
      <div className=" text-white flex  mt-4 flex-col">
        <SidebarLinks icon={<SiWindows10 />} label="Dashboard" href="/" />
        <SidebarLinks icon={<FaRegUser />} label="User" href="/users" />
        <SidebarLinks icon={<FaVideo />} label="Videos" href="/videos" />
      </div>
    </div>
  );
}
