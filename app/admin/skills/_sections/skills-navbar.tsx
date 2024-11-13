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
import { IoAddOutline, IoFunnelOutline } from "react-icons/io5";
import { MdAdd } from "react-icons/md";

export default function UserNavbar() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [user, formAction] = useFormState(storeUser, null);

  const {
    isOpen: isEditSubSkill,
    onOpen: onEditSubSkill,
    onOpenChange: onEditChangeSubSkill,
  } = useDisclosure();

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
        className="h-16"
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className=" lg:hidden"
          />
          <NavbarBrand className="font-bold text-xl">Skills</NavbarBrand>
        </NavbarContent>

        <NavbarContent justify="end">
          {/* <NavbarItem>
            <Button
              onPress={onOpen}
              startContent={
                <span className="text-lg md:flex text-white ">
                  <IoAddOutline />
                </span>
              }
              className="bg-green-700 flex"
            >
              <div className="hidden md:flex md:text-white ">
                Add new Skills
              </div>
            </Button>
          </NavbarItem> */}
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

      {/* <Modal isOpen={isEditSubSkill} onOpenChange={onEditChangeSubSkill}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Add new Skills
              </ModalHeader>
              <ModalBody>
                <p>Main Skills</p>
                <Input placeholder="Input Skills"></Input>
                <p>Sub Skills</p>
                <Input placeholder="Input Sub Skills"></Input>
                <Input placeholder="Input Sub Skills"></Input>
                <Input placeholder="Input Sub Skills"></Input>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Confirm
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal> */}
    </>
  );
}
