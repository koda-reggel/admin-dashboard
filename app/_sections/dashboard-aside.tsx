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
    <div className="flex flex-col gap-4 xl:py-4 w-full justify-between lg:w-[250px] xl:w-[350px]">
      <Card className="p-4 flex-1">
        <CardHeader className="flex justify-center p-0">
          <label className="text-lg xl:text-xl">Total View Performance</label>
        </CardHeader>
        <Divider className="my-2" />
        <CardBody className="items-center justify-center text-center gap-8 lg:p-0 xl:px-2">
          <div className="w-[150px] xl:w-[200px]">
            <DoughnutChart />
          </div>
          <div className=" font-thin xl:text-xl">
            Here are some tips on how to improve your score.
          </div>
          <Button variant="bordered" className="w-full">
            Guide Views
          </Button>
        </CardBody>
        <Divider className="my-2" />
        <CardFooter className="justify-between px-0 text-xs xl:text-sm xl:px-2">
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 xl:w-3 xl:h-3  bg-lime-400 rounded"></span>
            View Count
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 xl:w-3 xl:h-3  bg-emerald-700 rounded"></span>
            Percentage
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 xl:w-3 xl:h-3  bg-orange-500 rounded"></span>
            Sales
          </div>
        </CardFooter>
      </Card>

      <Card className="p-4 bg-[#CFE2AA] ">
        <CardHeader className="flex xl:text-lg">
          <label>Logo</label>
        </CardHeader>
        <CardBody className="gap-4">
          <label className="text-xl  leading-none xl:leading-normal">
            Level up your sales managing to the next level.
          </label>
          <p className="text-xs font-light xl:text-base">
            An any way to manage sales with care and precision
          </p>
        </CardBody>
        <CardFooter>
          <Button className="w-full bg-emerald-700">
            Update to Siohioma +
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
