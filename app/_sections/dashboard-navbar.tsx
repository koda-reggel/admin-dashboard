"use client";

import {
  Button,
  Input,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { useState } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FiInbox, FiSearch } from "react-icons/fi";
import { RiBubbleChartLine } from "react-icons/ri";

export default function DashboardNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="xl"
      classNames={{ wrapper: "px-4 h-16" }}
      className="h-16"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className=" lg:hidden"
        />
        <NavbarBrand className="font-bold text-xl">Sales Admin</NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="w-full">
          <Input
            placeholder="Search anything in Siohioma.."
            endContent={<FiSearch />}
          />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end" className="hidden md:flex">
        <NavbarItem>
          <Button isIconOnly size="sm">
            <FiInbox />
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button isIconOnly size="sm">
            <RiBubbleChartLine />
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button endContent={<BsFillPlusCircleFill />} size="sm">
            Add new product
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <Link href="/" className="w-full" size="lg" color="foreground">
            Dashboard
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/users" className="w-full" size="lg" color="foreground">
            User
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
