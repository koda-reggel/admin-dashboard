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
    <div className="flex flex-col flex-1 border-r gap-4 py-4 pr-4">
      <div className="flex items-center justify-between">
        <div className="flex flex-col justify-between">
          <h1 className="font-semibold text-xl leading-none">Dashboard</h1>
          <label>An any way to manage sales with care and precision</label>
        </div>
        <DateRangePicker
          className="max-w-xs"
          defaultValue={{
            start: parseDate("2024-04-01"),
            end: parseDate("2024-04-08"),
          }}
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <Card className="bg-green-950 text-white p-4">
          <CardHeader className="flex gap-2">
            <span className="text-red-400">
              <FaRegDotCircle />
            </span>
            <label>Update</label>
          </CardHeader>
          <CardBody>
            <span className="text-gray-400 font-light text-sm">
              Feb 12th 2024
            </span>
            <label className="text-lg">
              Sales revenue increased
              <span className="text-lime-400"> 40% </span>
              in 1 week
            </label>
          </CardBody>
          <CardFooter className="flex items-center text-gray-400 text-sm gap-1">
            <label>See Statistics</label>
            <div className="text-lg">
              <MdOutlineKeyboardArrowRight />
            </div>
          </CardFooter>
        </Card>

        <Card className="p-4">
          <CardHeader className="flex justify-between items-center">
            <label>Net Income</label>
            <span>
              <PiDotsThreeOutlineFill />
            </span>
          </CardHeader>
          <CardBody className="flex flex-row gap-1 ">
            <span className="text-xl">$</span>
            <label className="text-5xl">193.000</label>
          </CardBody>
          <CardFooter className="gap-1.5">
            <div className="text-green-500 flex gap-1.5 items-center">
              <FiTrendingUp />
              <span>+35%</span>
            </div>
            <label>from last month</label>
          </CardFooter>
        </Card>

        <Card className="p-4">
          <CardHeader className="flex justify-between items-center">
            <label>Total Return</label>
            <span>
              <PiDotsThreeOutlineFill />
            </span>
          </CardHeader>
          <CardBody className="flex flex-row gap-1 ">
            <span className="text-xl">$</span>
            <label className="text-5xl">32.000</label>
          </CardBody>
          <CardFooter className="gap-1.5">
            <div className="text-red-500 flex gap-1.5 items-center">
              <FiTrendingDown />
              <span>-24%</span>
            </div>
            <label>from last month</label>
          </CardFooter>
        </Card>
      </div>

      <div className="grid grid-cols-2 gap-4 grow">
        <Card className="p-4">
          <CardHeader className="justify-between items-center">
            <label>Transaction</label>
            <PiDotsThreeOutlineFill />
          </CardHeader>

          <CardBody className="gap-4">
            <div className="flex items-center gap-4">
              <Button isIconOnly radius="full">
                <FaTshirt />
              </Button>
              <div className="flex flex-col w-full">
                <div className="flex justify-between">
                  <label className="font-bold">Premium T-shirt</label>
                  <span className="text-green-700">Completed</span>
                </div>
                <div className="flex justify-between text-gray-500 text-sm">
                  <label>Jul 12th 2024</label>
                  <span>OJWEJS7ISNC</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button isIconOnly radius="full">
                <FaTshirt />
              </Button>
              <div className="flex flex-col w-full">
                <div className="flex justify-between">
                  <label className="font-bold">Premium T-shirt</label>
                  <span className="text-green-700">Completed</span>
                </div>
                <div className="flex justify-between text-gray-500 text-sm">
                  <label>Jul 12th 2024</label>
                  <span>OJWEJS7ISNC</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button isIconOnly radius="full">
                <FaTshirt />
              </Button>
              <div className="flex flex-col w-full">
                <div className="flex justify-between">
                  <label className="font-bold">Premium T-shirt</label>
                  <span className="text-green-700">Completed</span>
                </div>
                <div className="flex justify-between text-gray-500 text-sm">
                  <label>Jul 12th 2024</label>
                  <span>OJWEJS7ISNC</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button isIconOnly radius="full">
                <FaTshirt />
              </Button>
              <div className="flex flex-col w-full">
                <div className="flex justify-between">
                  <label className="font-bold">Premium T-shirt</label>
                  <span className="text-green-700">Completed</span>
                </div>
                <div className="flex justify-between text-gray-500 text-sm">
                  <label>Jul 12th 2024</label>
                  <span>OJWEJS7ISNC</span>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>

        <div className="flex flex-col gap-4">
          <Card className="px-4 pt-4">
            <CardHeader className="flex justify-between">
              <label>Revenue</label>
              <div className="flex gap-4">
                <div className="flex gap-1 items-center">
                  <span className="w-3 h-3 bg-lime-950 rounded"></span>
                  <label>Income</label>
                </div>
                <div className="flex gap-1 items-center">
                  <span className="w-3 h-3 bg-lime-400 rounded"></span>
                  <label>Expenses</label>
                </div>
              </div>
            </CardHeader>
            <Divider />
            <CardBody className="pb-0 gap-2">
              <div className="flex items-end gap-2">
                <div className="text-4xl">$193.000</div>
                <span className="flex items-center gap-1 text-sm">
                  <span className="flex items-center gap-1 text-green-500">
                    <FiTrendingUp />
                    <span>+35%</span>
                  </span>
                  <span>from last month</span>
                </span>
              </div>
              <VerticalBarchart />
            </CardBody>
          </Card>

          <Card className="p-4 grow">
            <CardHeader className="flex justify-between">
              <label>Sales Report</label>
              <PiDotsThreeOutlineFill />
            </CardHeader>
            <CardBody>
              <HorizontalBarchart />
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
