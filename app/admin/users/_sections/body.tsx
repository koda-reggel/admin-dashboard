"use client";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  SelectItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
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
import { BsThreeDots } from "react-icons/bs";

import { CiCircleCheck } from "react-icons/ci";
import { Select } from "@nextui-org/select";
import { IoFunnelOutline } from "react-icons/io5";
import { MdAdd } from "react-icons/md";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { CiLocationOn } from "react-icons/ci";
import { VscSettings } from "react-icons/vsc";
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
    action: "",
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
  {
    key: "action",
    label: "Action",
  },
];

export default function Body() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    isOpen: isEdit,
    onOpen: onEdit,
    onOpenChange: onEditChange,
  } = useDisclosure();

  return (
    <div className="flex flex-col p-4 ">
      <div>
        <Navbar
          onMenuOpenChange={setIsMenuOpen}
          maxWidth="full"
          classNames={{ wrapper: "px-4 h-16" }}
          className="h-16"
        >
          <NavbarContent>
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className=" lg:hidden"
            />
            <NavbarBrand className="font-bold text-xl">Users</NavbarBrand>
          </NavbarContent>

          <NavbarContent justify="end">
            <NavbarItem className="hidden lg:block">
              <Input
                startContent={<IoFunnelOutline />}
                placeholder="Filter users..."
              ></Input>
            </NavbarItem>
            <NavbarItem className="flex border">
              <Button
                onPress={onOpen}
                className="rounded bg-gray-200"
                endContent={<MdAdd />}
              >
                New user
              </Button>
            </NavbarItem>
          </NavbarContent>

          <NavbarMenu>
            <NavbarMenuItem>
              <Link href="/" className="w-full" color="foreground">
                Dashboard
              </Link>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <Link href="/users" className="w-full" color="foreground">
                User
              </Link>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <Link href="/videos" className="w-full" color="foreground">
                Videos
              </Link>
            </NavbarMenuItem>
          </NavbarMenu>
        </Navbar>
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
                <TableCell>{item.key}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.location}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell>
                  <div>
                    <Dropdown>
                      <DropdownTrigger>
                        <Button>
                          <BsThreeDots />
                        </Button>
                      </DropdownTrigger>
                      <DropdownMenu>
                        <DropdownItem onPress={onEdit}>Edit</DropdownItem>

                        <DropdownItem color="danger">Delete</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <Modal isOpen={isEdit} onOpenChange={onEditChange} placement="center">
        <ModalContent>
          {(onClose) => (
            <>
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
                <Input
                  label="Location"
                  placeholder="Your location"
                  labelPlacement="outside"
                ></Input>
                <Select label="Select status">
                  <SelectItem key="Subscribe"> Subscribe</SelectItem>
                  <SelectItem key="Unsubscribe"> Unsubscribe</SelectItem>
                </Select>
              </ModalBody>
              <ModalFooter className="flex">
                <Button
                  onClick={onClose}
                  color="danger"
                  className="text-gray-600 bg-white"
                >
                  Cancel
                </Button>
                <Button onPress={onClose} className="text-white bg-black">
                  Save
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
        <ModalContent>
          {(onClose) => (
            <>
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
                <Input
                  label="Location"
                  placeholder="Your location"
                  labelPlacement="outside"
                ></Input>
                <Select label="Select status">
                  <SelectItem key="Subscribe"> Subscribe</SelectItem>
                  <SelectItem key="Unsubscribe"> Unsubscribe</SelectItem>
                </Select>
              </ModalBody>
              <ModalFooter className="flex">
                <Button onPress={onClose} className="text-gray-600 bg-white">
                  Cancel
                </Button>
                <Button onPress={onClose} className="text-white bg-black">
                  Save
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
