"use client";

import { SiWindows10 } from "react-icons/si";
import { FaRegUser } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="flex flex-col  md:w-[250px] xl:w-[300px] bg-green-950 h-screen">
      <div className="flex p-8 text-white text-2xl font-bold items-center h-16">
        Siohioma
      </div>
      <div className=" text-white flex gap-4  mt-4 flex-col">
        <div className="flex gap-2 hover:bg-green-800 items-center px-8 border-l-2  border-lime-400">
          <div className="text-lime-400">
            <SiWindows10 />
          </div>
          <span>Dashboard</span>
        </div>
        <div className="flex gap-2 items-center px-8  hover:bg-green-800">
          <FaRegUser />
          <span>User</span>
        </div>
      </div>
    </div>
  );
}
