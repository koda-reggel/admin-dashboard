"use client";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  DateRangePicker,
  Divider,
} from "@nextui-org/react";
import { FaRegDotCircle, FaTshirt } from "react-icons/fa";
import { FiTrendingDown, FiTrendingUp } from "react-icons/fi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import VerticalBarchart from "../_components/vertical-barchart";
import HorizontalBarchart from "../_components/horizontal-barchart";
import { parseDate } from "@internationalized/date";

export default function DashboardMain() {
  return (
    <div className="flex flex-col flex-1 xl:border-r border-gray-600 gap-4 xl:py-4 xl:pr-4 w-full h-full">
      <div className="md:flex items-center justify-between hidden">
        <div className="flex flex-col justify-between">
          <h1 className="font-semibold xl:text-xl leading-none text-lg text-gray-200">
            Dashboard
          </h1>
          <p className="text-sm text-gray-200">
            An any way to manage sales with care and precision
          </p>
        </div>
        <div>
          <DateRangePicker
            className="max-w-xs"
            defaultValue={{
              start: parseDate("2024-04-01"),
              end: parseDate("2024-04-08"),
            }}
          />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <Card className="bg-[#171717] text-white xl:p-2 col-span-12 md:col-span-4">
          <CardHeader className="flex gap-2 text-sm xl:text-base">
            <span className="text-red-400">
              <FaRegDotCircle />
            </span>
            <p>Update</p>
          </CardHeader>
          <CardBody className="gap-1 py-1">
            <span className="text-gray-400 font-light text-xs xl:text-sm">
              Feb 12th 2024
            </span>
            <p className="xl:text-lg leading-none">
              Sales revenue increased
              <span className="text-lime-400"> 40% </span>
              in 1 week
            </p>
          </CardBody>
          <CardFooter className="flex items-center text-gray-400 text-sm gap-1">
            <p>See Statistics</p>
            <div className="text-lg">
              <MdOutlineKeyboardArrowRight />
            </div>
          </CardFooter>
        </Card>

        <Card className="xl:p-2 col-span-6 md:col-span-4 bg-[#171717]">
          <CardHeader className="flex justify-between items-center text-sm xl:text-base text-white">
            <p>Net Income</p>
            <span>
              <PiDotsThreeOutlineFill />
            </span>
          </CardHeader>
          <CardBody className="flex flex-row gap-1 justify-center items-center">
            <span className="self-start text-white">$</span>
            <p className="xl:text-4xl text-3xl text-white">193.000</p>
          </CardBody>
          <CardFooter className="gap-1.5 text-xs xl:text-base justify-center">
            <div className="text-green-500 flex gap-1.5 items-center">
              <FiTrendingUp />
              <span>+35%</span>
            </div>
            <p className="text-gray-400">from last month</p>
          </CardFooter>
        </Card>

        <Card className="xl:p-2 col-span-6 md:col-span-4 bg-[#171717] text-white">
          <CardHeader className="flex justify-between items-center text-sm xl:text-base">
            <p>Total Return</p>
            <span>
              <PiDotsThreeOutlineFill />
            </span>
          </CardHeader>
          <CardBody className="flex flex-row gap-1 justify-center items-center">
            <span className="self-start">$</span>
            <p className="xl:text-4xl text-3xl ">32.000</p>
          </CardBody>
          <CardFooter className="gap-1.5 text-xs xl:text-base justify-center">
            <div className="text-red-500 flex gap-1.5 items-center">
              <FiTrendingDown />
              <span>-24%</span>
            </div>
            <p>from last month</p>
          </CardFooter>
        </Card>
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-4 h-full">
        <div className="flex w-full flex-col ">
          <Card className="md:p-4 lg:p-0 flex-1 xl:p-2 bg-[#171717]">
            <CardHeader className="justify-between items-center text-sm xl:text-base">
              <p>Transaction</p>
              <PiDotsThreeOutlineFill />
            </CardHeader>

            <CardBody className="gap-4">
              <div className="flex items-center xl:gap-4 gap-2">
                <Button isIconOnly radius="full" size="sm">
                  <FaTshirt />
                </Button>
                <div className="flex flex-col w-full">
                  <div className="flex justify-between text-sm xl:text-base">
                    <p className="font-bold ">Premium T-shirt</p>
                    <span className="text-lime-500">Completed</span>
                  </div>
                  <div className="flex justify-between text-gray-500 text-xs xl:text-sm">
                    <p>Jul 12th 2024</p>
                    <span>OJWEJS7ISNC</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center xl:gap-4 gap-2">
                <Button isIconOnly radius="full" size="sm">
                  <FaTshirt />
                </Button>
                <div className="flex flex-col w-full">
                  <div className="flex justify-between text-sm">
                    <p className="font-bold ">Premium T-shirt</p>
                    <span className="text-lime-500">Completed</span>
                  </div>
                  <div className="flex justify-between text-gray-500 text-xs">
                    <p>Jul 12th 2024</p>
                    <span>OJWEJS7ISNC</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center xl:gap-4 gap-2">
                <Button isIconOnly radius="full" size="sm">
                  <FaTshirt />
                </Button>
                <div className="flex flex-col w-full">
                  <div className="flex justify-between text-sm">
                    <p className="font-bold ">Premium T-shirt</p>
                    <span className="text-lime-500">Completed</span>
                  </div>
                  <div className="flex justify-between text-gray-500 text-xs">
                    <p>Jul 12th 2024</p>
                    <span>OJWEJS7ISNC</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center xl:gap-4 gap-2">
                <Button isIconOnly radius="full" size="sm">
                  <FaTshirt />
                </Button>
                <div className="flex flex-col w-full">
                  <div className="flex justify-between text-sm">
                    <p className="font-bold ">Premium T-shirt</p>
                    <span className="text-lime-500">Completed</span>
                  </div>
                  <div className="flex justify-between text-gray-500 text-xs">
                    <p>Jul 12th 2024</p>
                    <span>OJWEJS7ISNC</span>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

        <div className="flex flex-col gap-4 lg:w-[260px] xl:min-w-[400px] ">
          <div className="max-h-xl flex-1 ">
            <Card className="md:px-4 p-0 h-full xl:p-3 bg-[#171717]">
              <CardHeader className="flex justify-between lg:px-0 lg:py-2">
                <p className="text-sm xl:text-base">Revenue</p>
                <div className="flex gap-2 text-xs xl:text-sm text-gray-200">
                  <div className="flex gap-1 items-center">
                    <span className="w-3 h-3 bg-pink-950 rounded"></span>
                    <p>Income</p>
                  </div>
                  <div className="flex gap-1 items-center">
                    <span className="w-3 h-3 bg-pink-400 rounded"></span>
                    <p>Expenses</p>
                  </div>
                </div>
              </CardHeader>
              <Divider className="mb-2" />
              <CardBody className=" p-0 gap-2 items-center justify-center xl:justify-end lg:gap-4 xl:gap-0 xl:items-start">
                <div className="flex items-end gap-1 text-gray-200">
                  <div className="tex-sm xl:text-2xl">$193.000</div>
                  <span className="flex items-center text-xs gap-1">
                    <span className="flex items-center gap-1 text-green-500">
                      <FiTrendingUp />
                      <span>+35%</span>
                    </span>
                    <span>from last month</span>
                  </span>
                </div>
                <div className="w-56 xl:w-full">
                  <VerticalBarchart />
                </div>
              </CardBody>
            </Card>
          </div>

          <Card className="md:p-4 p-0 max-h-xl flex-1 bg-[#171717]">
            <CardHeader className="flex justify-between lg:p-0 text-sm xl:text-base">
              <p>Sales Report</p>
              <PiDotsThreeOutlineFill />
            </CardHeader>
            <CardBody className="lg:p-0 justify-center items-center xl:justify-end">
              <HorizontalBarchart />
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
