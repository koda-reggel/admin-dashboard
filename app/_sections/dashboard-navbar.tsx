"use client";

import { Button, Input } from "@nextui-org/react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FiInbox, FiSearch } from "react-icons/fi";
import { RiBubbleChartLine } from "react-icons/ri";

export default function DashboardNavbar() {
  return (
    <div className="flex justify-between items-center w-full xl:max-w-screen-xl xl:mx-auto">
      <div className="flex justify-between items-center xl:w-[865px] w-full">
        <label className="font-semibold text-xl hidden md:block">
          Sales Admin
        </label>
        <label className="font-semibold text-xl md:hidden">Siohioma</label>
        <div>
          <Input
            placeholder="Search anything in Siohioma.."
            endContent={<FiSearch />}
          />
        </div>
      </div>
      <div className="lg:flex gap-4 flex-1 justify-end w-[415px] hidden">
        <Button isIconOnly>
          <FiInbox />
        </Button>
        <Button isIconOnly>
          <RiBubbleChartLine />
        </Button>
        <Button endContent={<BsFillPlusCircleFill />}>Add new product</Button>
      </div>
    </div>
  );
}
