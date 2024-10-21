"use client";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Divider,
} from "@nextui-org/react";
import DoughnutChart from "../_components/doughnut-chart";

export default function DashboardAside() {
  return (
    <div className="flex flex-col gap-4 py-4 pl-4 w-[415px]">
      <Card className="p-4">
        <CardHeader className="flex justify-center ">
          <label className="text-2xl">Total View Performance</label>
        </CardHeader>
        <Divider className="m-4" />
        <CardBody className="items-center text-center gap-4">
          <DoughnutChart />
          <div className="text-lg font-thin">
            Here are some tips on how to <br /> improve your score.
          </div>
          <Button variant="bordered" className="w-full">
            Guide Views
          </Button>
        </CardBody>
        <Divider className="m-4" />
        <CardFooter className="justify-evenly ">
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 bg-lime-400 rounded"></span>View Count
          </div>
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 bg-emerald-700 rounded"></span>Percentage
          </div>
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 bg-orange-500 rounded"></span>Sales
          </div>
        </CardFooter>
      </Card>

      <Card className="p-4 grow bg-[#CFE2AA]">
        <CardHeader className="flex">
          <label>Logo</label>
        </CardHeader>
        <CardBody className="gap-4">
          <label className="text-2xl w-52 leading-none">
            Level up your sales managing to the next level.
          </label>
          <p className="text-sm font-light ">
            An any way to manage sales with care and precision
          </p>
        </CardBody>
        <CardFooter>
          <Button className=" bg-emerald-700">Update to Siohioma +</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
