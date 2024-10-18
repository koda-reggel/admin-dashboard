"use client";

import { Input } from "@nextui-org/input";

export default function Body() {
  return (
    <div className="flex flex-col">
      <div className="flex w-full justify-between  bg-red-400 ">
        <p className="flex items-center">User</p>
        <div className="flex gap-4">
          <Input placeholder="Filter users..."></Input>
          <Input placeholder="Filter users..."></Input>
        </div>
      </div>
      <div className="flex justify-center  gap-4">
        <Input placeholder="Filter users..."></Input>
        <Input placeholder="Filter users..."></Input>
        <div>
          <Input placeholder="Filter users..."></Input>
        </div>
      </div>
    </div>
  );
}
