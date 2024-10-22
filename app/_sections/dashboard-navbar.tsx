"use client";

import { Button, Input } from "@nextui-org/react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FiInbox, FiSearch } from "react-icons/fi";
import { RiBubbleChartLine } from "react-icons/ri";

export default function DashboardNavbar() {
  return (
    <div className="flex justify-between items-center  w-full lg:max-w-screen-lg xl:max-w-screen-xl">
      <label className="font-semibold text-xl hidden md:block">
        Sales Admin
      </label>
      <label className="font-semibold text-xl md:hidden">Siohioma</label>
      <div className="flex justify-between xl:gap-24 gap-10">
        <div>
          <Input
            placeholder="Search anything in Siohioma.."
            endContent={<FiSearch />}
          />
        </div>
        <div className="lg:flex gap-4 flex-1 justify-end hidden">
          <Button isIconOnly size="sm">
            <FiInbox />
          </Button>
          <Button isIconOnly size="sm">
            <RiBubbleChartLine />
          </Button>
          <Button endContent={<BsFillPlusCircleFill />} size="sm">
            Add new product
          </Button>
        </div>
      </div>
    </div>
  );
}
