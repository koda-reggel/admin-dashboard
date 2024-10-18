"use client";

import { SiWindows10 } from "react-icons/si";
import { FaRegUser } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="flex flex-col  w-52 bg-green-900 h-screen">
      <div className="flex justify-center p-2 text-white text-xl">Siohioma</div>
      <div className="flex text-white bg-green-500 p-4">Menu</div>
      <div className=" text-white flex gap-8 flex-col p-4">
        <div className="flex gap-4 items-center">
          <SiWindows10 />
          <span>Overview</span>
        </div>
        <div className="flex gap-4 items-center">
          <FaRegUser />
          <span>User</span>
        </div>
      </div>
    </div>
  );
}
