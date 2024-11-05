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
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";

export default function Body() {
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

  const rows = [
    {
      key: "1",
      skills: "Digital marketing",
      subskills: [
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
      <p className="flex p-4 text-2xl">Skills</p>
      <div className="flex p-4 lg:justify-between ">
        <div className="flex gap-4 ">
          <Input
            placeholder="Search Skills"
            className="flex max-w-md"
            startContent={<CiSearch />}
          ></Input>

          <Button
            startContent={
              <span className="text-lg">
                <FaSortAlphaUp />
              </span>
            }
            className="bg-green-700 text-white"
          >
            Filter
          </Button>
        </div>
        <Button
          onPress={onOpen}
          startContent={
            <span className="text-lg">
              <IoAddOutline />
            </span>
          }
          className="bg-green-700 text-white"
        >
          Add new Skills
        </Button>
      </div>

      <div
        className=" overflow-y-scroll h-[calc(100vh-136px)]"
        // style={{ maxHeight: "100%", width: "100%" }}
      >
        <Table aria-label="Example static collection table">
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
                      classNames={{ title: "text-md" }}
                    >
                      <div className="flex flex-col gap-2">
                        {items.subskills.map((subskills, index) => (
                          <div
                            key={index}
                            className="border p-2 rounded justify-between flex items-center"
                          >
                            <></>
                            {subskills}
                            <div className="flex gap-4">
                              <Button
                                onPress={onOpenEdit}
                                isIconOnly
                                className="flex text-xl text-white bg-green-700"
                              >
                                {<CiEdit />}
                              </Button>
                              <Button
                                isIconOnly
                                className="flex text-white text-xl bg-red-700"
                              >
                                {<FaRegTrashCan />}
                              </Button>
                            </div>
                          </div>
                        ))}
                        <Button
                          onPress={onOpenSubSkill}
                          startContent={<FaPlus />}
                          className="bg-lime-500"
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
                  <p>Sub Skills</p>
                  <Input placeholder="Input Sub Skills"></Input>
                  <Input placeholder="Input Sub Skills"></Input>
                  <Input placeholder="Input Sub Skills"></Input>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
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

        <Modal isOpen={isSubSkill} onOpenChange={onSubSkillChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Add new Sub Skills
                </ModalHeader>
                <ModalBody>
                  <Input placeholder="Input Sub Skills"></Input>
                  <Input placeholder="Input Sub Skills"></Input>
                  <Input placeholder="Input Sub Skills"></Input>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onClick={onClose}>
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

        <Modal isOpen={isEdit} onOpenChange={onEditChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Edit Sub Skills
                </ModalHeader>
                <ModalBody>
                  <Input placeholder="Input Sub Skills"></Input>
                  <Input placeholder="Input Sub Skills"></Input>
                  <Input placeholder="Input Sub Skills"></Input>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onClick={onClose}>
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
