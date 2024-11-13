"use client";

import { storeUser } from "@/actions/user-actions";
import { SubmitButton } from "@/components/submit-button";
import {
  Navbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  Button,
  NavbarMenu,
  NavbarMenuItem,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { CiSearch } from "react-icons/ci";
import { FaSortAlphaUp } from "react-icons/fa";
import { IoAddOutline, IoFunnelOutline } from "react-icons/io5";
import { MdAdd } from "react-icons/md";

export default function UserNavbar() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [user, formAction] = useFormState(storeUser, null);

  useEffect(() => {
    if (user) {
      console.log(user);
    }
  }, [user]);
  return (
    <>
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        maxWidth="full"
        classNames={{ wrapper: "m-4 px-0 h-16" }}
        className="h-16 bg-black"
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className=" lg:hidden"
          />
          <NavbarBrand className="font-bold text-xl text-gray-200 ">
            Skills
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent justify="end">
          <Input
            classNames={{
              inputWrapper: "bg-gray-700 text-white",
            }}
            placeholder="Search Skills"
            className="flex max-w-md"
            startContent={<CiSearch />}
          ></Input>
          <div className="flex">
            <Button
              startContent={
                <span className="text-lg">
                  <FaSortAlphaUp />
                </span>
              }
              className="bg-pink-500 text-gray-200 hidden md:flex"
            >
              Filter
            </Button>
          </div>
        </NavbarContent>

        <NavbarMenu>
          <NavbarMenuItem>
            <Link href="/admin" className="w-full" color="foreground">
              Dashboard
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href="/admin/users" className="w-full" color="foreground">
              User
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href="/admin/videos" className="w-full" color="foreground">
              Videos
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href="/admin/skills" className="w-full" color="foreground">
              Skills
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </>
  );
}
