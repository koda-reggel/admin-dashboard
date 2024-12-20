"use client";

import { Accordion, AccordionItem } from "@nextui-org/accordion";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import {
  Pagination,
  PaginationItem,
  PaginationCursor,
} from "@nextui-org/pagination";

//for the icons
import { CiEdit } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { FaSortAlphaUp } from "react-icons/fa";
import { IoAddOutline } from "react-icons/io5";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { BsThreeDots } from "react-icons/bs";
import { link } from "fs";
import Link from "next/link";

export default function Body() {
  const isSmallScreen = window.innerWidth < 768;

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    isOpen: isSubSkill,
    onOpen: onOpenSubSkill,
    onOpenChange: onSubSkillChange,
  } = useDisclosure();

  const {
    isOpen: isEdit,
    onOpen: onOpenEdit,
    onOpenChange: onEditChange,
  } = useDisclosure();

  const {
    isOpen: isEditSubSkill,
    onOpen: onEditSubSkill,
    onOpenChange: onEditChangeSubSkill,
  } = useDisclosure();

  const rows = [
    {
      key: "1",
      skills: "Digital marketing",
      subskills: [
        "Blog Writing",
        "Social Media Content Creation",
        "Email Marketing",
        "Blog Writing",
        "Social Media Content Creation",
        "Email Marketing",
        "Blog Writing",
        "Social Media Content Creation",
        "Email Marketing",
        "Blog Writing",
        "Social Media Content Creation",
        "Email Marketing",
        "Blog Writing",
        "Social Media Content Creation",
        "Email Marketing",
        "Blog Writing",
        "Social Media Content Creation",
        "Email Marketing",
        "Blog Writing",
        "Social Media Content Creation",
        "Email Marketing",
        "Blog Writing",
        "Social Media Content Creation",
        "Email Marketing",
      ],
    },
    {
      key: "2",
      skills: "Graphic Design",
      subskills: ["Figma", "Adobe", "Sketch"],
    },
    {
      key: "3",
      skills: "Machine Learning",
      subskills: [
        "Anomaly Detection",
        "Clustering Techniques",
        "Dimensionality Reduction",
      ],
    },
    {
      key: "4",
      skills: "Cybersecurity",
      subskills: [
        "Penetration Testing",
        "Vulnerability Assessment",
        "Network Protocols",
      ],
    },
    {
      key: "5",
      skills: "Cloud Computing",
      subskills: [
        "Cloud platforms (AWS, Azure, Google Cloud)",
        "Cloud infrastructure (serverless, IaaS, SaaS)",
      ],
    },
  ];

  return (
    <div className="flex flex-col ">
      {/* <p className="flex p-4 text-2xl">Skills</p> */}
      <div className="flex p-4 justify-between md:justify-end ">
        {/* <div className="flex gap-4 "> */}
        {/* <Input
            placeholder="Search Skills"
            className="flex max-w-md"
            startContent={<CiSearch />}
          ></Input> */}

        <Button
          startContent={
            <span className="text-lg">
              <FaSortAlphaUp />
            </span>
          }
          className="bg-[#E70E8A] text-white flex md:hidden "
        >
          Filter
        </Button>
        {/* </div> */}
        <Button
          onPress={onOpen}
          startContent={
            <span className="text-lg md:flex text-white ">
              <IoAddOutline />
            </span>
          }
          className="bg-[#E70E8A] flex"
        >
          <div className=" md:flex text-gray-200 ">Add new Skills</div>
        </Button>
      </div>

      <div
        className=" overflow-y-scroll h-[calc(100vh-136px)]"
        // style={{ maxHeight: "100%", width: "100%" }}
      >
        <Table
          aria-label="Example static collection table"
          classNames={{
            th: "bg-gray-600 text-white ",
            wrapper: "bg-[#171717] border text-white",
            // base: "hover:bg-gray-900",
          }}
        >
          <TableHeader>
            <TableColumn>SKILLS</TableColumn>
          </TableHeader>
          <TableBody items={rows}>
            {(items) => (
              <TableRow key={items.key}>
                <TableCell>
                  <Accordion>
                    <AccordionItem
                      key="1"
                      title={items.skills}
                      classNames={{
                        title: "text-md text-white",
                      }}
                    >
                      {/* for displaying subskills */}
                      <p className="p-4">Sub Skills:</p>
                      <div className="grid md:grid-cols-12 grid-flow-row grid-cols-1 gap-2">
                        {items.subskills.map((subskills, index) => (
                          <div
                            key={index}
                            className="border p-2 rounded justify-between flex items-center col-span-2"
                          >
                            <></>
                            {subskills}
                            <div>
                              <Dropdown>
                                <DropdownTrigger>
                                  <Button isIconOnly className="bg-transparent">
                                    <BsThreeDots className="text-white" />
                                  </Button>
                                </DropdownTrigger>
                                <DropdownMenu>
                                  <DropdownItem
                                    color="primary"
                                    onPress={onEditSubSkill}
                                  >
                                    Edit
                                  </DropdownItem>

                                  <DropdownItem color="danger">
                                    Delete
                                  </DropdownItem>
                                </DropdownMenu>
                              </Dropdown>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="flex p-4">
                        <Button
                          onPress={onOpenSubSkill}
                          startContent={<FaPlus />}
                          className="bg-[#E70E8A] text-gray-200"
                        >
                          Add new Sub skills
                        </Button>
                      </div>
                    </AccordionItem>
                  </Accordion>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

        {/* For adding new skills */}
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Add new Skills
                </ModalHeader>
                <ModalBody>
                  <p>Main Skills</p>
                  <Input placeholder="Input Skills"></Input>
                  {/* <p>Sub Skills</p>
                  <Input placeholder="Input Sub Skills"></Input>
                  <Input placeholder="Input Sub Skills"></Input>
                  <Input placeholder="Input Sub Skills"></Input> */}
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
        </Modal>

        {/* For adding new subskills */}
        <Modal isOpen={isSubSkill} onOpenChange={onSubSkillChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Add new Sub Skills
                </ModalHeader>
                <ModalBody>
                  <Input placeholder="Input Sub Skills"></Input>
                  {/* <Input placeholder="Input Sub Skills"></Input>
                  <Input placeholder="Input Sub Skills"></Input> */}
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" onClick={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onClick={onClose}>
                    Confirm
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>

        {/* For adding new skkills */}
        <Modal isOpen={isEditSubSkill} onOpenChange={onEditChangeSubSkill}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Edit Sub Skills
                </ModalHeader>
                <ModalBody>
                  <Input placeholder="Input Sub Skills"></Input>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" onClick={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onClick={onClose}>
                    Confirm
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
}
