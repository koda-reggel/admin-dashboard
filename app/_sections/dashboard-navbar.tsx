"use client";

import { Button, Input } from "@nextui-org/react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FiInbox, FiSearch } from "react-icons/fi";
import { RiBubbleChartLine } from "react-icons/ri";

export default function DashboardNavbar() {
<<<<<<< HEAD
  return <div>aaaa</div>;
=======
  return (
    <div className="flex justify-between items-center max-w-screen-xl mx-auto">
      <div className="flex justify-between items-center w-[865px]">
        <label className="font-semibold text-xl">Sales Admin</label>
        <div>
          <Input
            placeholder="Search anything in Siohioma.."
            endContent={<FiSearch />}
          />
        </div>
      </div>
      <div className="flex gap-4 flex-1 justify-end">
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
>>>>>>> 5e62a6f86b9c8b97bf24866fc9dfe2c15f6772d1
}
