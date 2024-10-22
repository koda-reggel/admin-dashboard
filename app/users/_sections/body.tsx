"use client";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  SelectItem,
} from "@nextui-org/react";
import { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { Checkbox } from "@nextui-org/checkbox";
import { IoSwapVerticalOutline } from "react-icons/io5";
import { CiCircleCheck } from "react-icons/ci";
import { Select, SelectSection } from "@nextui-org/select";
import { IoFunnelOutline } from "react-icons/io5";
import { MdAdd } from "react-icons/md";
import { Button, ButtonGroup } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { CiLocationOn } from "react-icons/ci";
import { VscSettings } from "react-icons/vsc";
import { Pagination, Spinner } from "@nextui-org/react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";

const rows = [
  {
    key: "1",
    number: 1,
    name: "Tony Reichert",
    email: "WilliamH@gmail.com",
    location: "New York",
    status: "Subscribed",
  },
  {
    key: "2",
    number: 2,
    name: "Zoey Lang",
    email: "WilliamH@gmail.com",
    location: "New York",
    status: "Subscribed",
  },
  {
    key: "3",
    number: 3,
    name: "Jane Fisher",
    email: "Jane.Fisher@gmail.com",
    location: "London",
    status: "Subscribed",
  },
  {
    key: "4",
    number: 4,
    name: "William Howard",
    email: "WilliamH@gmail.com",
    location: "New York",
    status: "Subscribed",
  },
];

const columns = [
  {
    key: "number",
    label: "#",
  },
  {
    key: "name",
    label: "Name",
  },
  {
    key: "email",
    label: "Email",
  },
  {
    key: "location",
    label: "Location",
  },
  {
    key: "status",
    label: "Status",
  },
];

export default function Body() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="flex flex-col p-4 ">
      <div className="flex w-full justify-between  ">
        <h1 className="flex items-center">User</h1>
        <div className="flex gap-4">
          <Input
            className="hidden lg:block"
            startContent={<IoFunnelOutline />}
            placeholder="Filter users..."
          ></Input>
          <div className="flex border">
            <Button
              onPress={onOpen}
              className="rounded bg-gray-200"
              endContent={<MdAdd />}
            >
              New user
            </Button>

            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
              <ModalContent>
                <ModalHeader className="flex justify-between border flex-col">
                  <h1> New user</h1>
                  <p className="flex text-sm font-thin">
                    Add a new user to your database
                  </p>
                </ModalHeader>
                <ModalBody className="flex flex-col">
                  <Input
                    label="Name"
                    placeholder="John Doe"
                    labelPlacement="outside"
                  ></Input>
                  <Input
                    label="Email"
                    placeholder="John.Doe@gmail.com"
                    labelPlacement="outside"
                  ></Input>
                </ModalBody>
                <ModalFooter className="flex">
                  <Button className="text-gray-600 bg-white">Cancel</Button>
                  <Button className="text-white bg-black">Save</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </div>
        </div>
      </div>

      <div className="flex justify-between gap-4 mt-4">
        <div className="flex gap-4 w-96">
          <Select startContent={<CiCircleCheck />} placeholder="Status">
            <SelectItem key={"subscribe"}>Subscribe</SelectItem>
            <SelectItem key={"unsubscribe"}>Unsubscribe</SelectItem>
            <SelectItem key={"bounced"}>Bounced</SelectItem>
          </Select>
          <Select startContent={<CiLocationOn />} placeholder="Location">
            <SelectItem key={"usa"}>New York,USA</SelectItem>
            <SelectItem key={"uk"}>London,UK</SelectItem>
            <SelectItem key={"france"}>Paris,France </SelectItem>
            <SelectItem key={"germany"}>Berlin,Germany </SelectItem>
            <SelectItem key={"japan"}>Tokyo,Japan </SelectItem>
            <SelectItem key={"australia"}>Sydney,Australia </SelectItem>
          </Select>
        </div>
        <div className="flex w-40">
          <Select startContent={<VscSettings />} placeholder="Display">
            <SelectItem key={"number"}>#</SelectItem>
            <SelectItem key={"name"}>Name</SelectItem>
            <SelectItem key={"email"}>Email </SelectItem>
            <SelectItem key={"location"}>Location </SelectItem>
            <SelectItem key={"Status"}>Status </SelectItem>
          </Select>
        </div>
      </div>

      <div className="flex p-4">
        <Table
          aria-label="Controlled table example with dynamic content"
          selectionMode="multiple"
        >
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.key}>{column.label}</TableColumn>
            )}
          </TableHeader>

          <TableBody items={rows}>
            {(item) => (
              <TableRow key={item.key}>
                {(columnKey) => (
                  <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>

        {/* <Table>
          <TableHeader>
            <TableColumn>
              <Checkbox />
            </TableColumn>
            <TableColumn>#</TableColumn>
            <TableColumn>Name</TableColumn>
            <TableColumn>Email</TableColumn>
            <TableColumn>Location</TableColumn>
            <TableColumn>Status</TableColumn>
          </TableHeader>

          <TableBody>
            <TableRow key="1">
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell>1</TableCell>
              <TableCell>Alex Smith</TableCell>
              <TableCell>alexsmith@gmail.com</TableCell>
              <TableCell>New York,USA</TableCell>
              <TableCell>
                <h3 className="border text-green-400 bg-green-100 border-green-400 text-center w-24">
                  Subscribed
                </h3>
              </TableCell>
            </TableRow>

            <TableRow key="2">
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell>2</TableCell>
              <TableCell>Jordan Brown</TableCell>
              <TableCell>Jordanbrown@gmail.com</TableCell>
              <TableCell>New York,USA</TableCell>
              <TableCell>
                <h3 className="border text-green-400 bg-green-100 border-green-400 text-center w-24">
                  Subscribed
                </h3>
              </TableCell>
            </TableRow>

            <TableRow key="3">
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell>3</TableCell>
              <TableCell>Alex Smith</TableCell>
              <TableCell>alexsmith@gmail.com</TableCell>
              <TableCell>New York,USA</TableCell>
              <TableCell>
                <h3 className="border text-green-400 bg-green-100 border-green-400 text-center w-24">
                  Subscribed
                </h3>
              </TableCell>
            </TableRow>

            <TableRow key="4">
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell>4</TableCell>
              <TableCell>Alex Smith</TableCell>
              <TableCell>alexsmith@gmail.com</TableCell>
              <TableCell>New York,USA</TableCell>
              <TableCell>
                <h3 className="border text-green-400 bg-green-100 border-green-400 text-center w-24">
                  Subscribed
                </h3>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table> */}
      </div>
    </div>
  );
}
