"use client";

import { Button, Input } from "@nextui-org/react";
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
        </div>
      </div>
      <div className="flex gap-4 flex-1 justify-end">
        <Button isIconOnly>
          <FiInbox />
        </Button>
        <Button isIconOnly>
          <RiBubbleChartLine />
        </Button>
        <Button endContent={<BsFillPlusCircleFill />}>Add new product</Button>
      </div>
    </div>
  );
}
