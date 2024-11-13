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
import { GiWhiteBook } from "react-icons/gi";
import { IoFunnelOutline } from "react-icons/io5";
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
        classNames={{ wrapper: "px-0 h-16" }}
        className="h-16 bg-black"
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className=" lg:hidden"
          />
          <NavbarBrand className="font-bold text-xl text-white">
            Users
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:block">
            <Input
              classNames={{
                inputWrapper: "bg-gray-700",
                innerWrapper: "text-white",
              }}
              startContent={<IoFunnelOutline />}
              placeholder="Filter users..."
            ></Input>
          </NavbarItem>
          <NavbarItem>
            <Button
              onPress={onOpen}
              className="rounded bg-pink-400 border border-pink-600 text-black"
              endContent={<MdAdd />}
            >
              New user
            </Button>
          </NavbarItem>
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

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
        <ModalContent>
          {(onClose) => (
            <form action={formAction}>
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
                  name="name"
                  labelPlacement="outside"
                ></Input>
                <Input
                  label="Email"
                  placeholder="John.Doe@gmail.com"
                  labelPlacement="outside"
                  name="email"
                ></Input>
                <Input
                  label="Location"
                  placeholder="Your location"
                  labelPlacement="outside"
                  name="location"
                ></Input>
                <Select
                  label="Select status"
                  name="status"
                  defaultSelectedKeys={["subscribe"]}
                >
                  <SelectItem key="subscribe"> Subscribe</SelectItem>
                  <SelectItem key="unsubscribe"> Unsubscribe</SelectItem>
                </Select>
              </ModalBody>
              <ModalFooter className="flex justify-end">
                <Button onPress={onClose} className="text-gray-600 bg-white">
                  Cancel
                </Button>
                <div>
                  <SubmitButton onClick={onClose}>Save</SubmitButton>
                </div>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
