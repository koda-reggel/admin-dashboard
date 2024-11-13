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
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  useDisclosure,
  ModalHeader,
} from "@nextui-org/react";
import { BsThreeDots } from "react-icons/bs";
import { Select } from "@nextui-org/select";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { VscSettings } from "react-icons/vsc";
import { CiCircleCheck, CiLocationOn } from "react-icons/ci";
import { useAppSelector } from "@/hooks/hooks";
import { deleteUser, updateUser } from "@/actions/user-actions";
import { useState } from "react";
import { User } from "@/models/user";
import { useFormState } from "react-dom";
import { SubmitButton } from "@/components/submit-button";

export default function UserList() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const userState = useAppSelector((state) => state.userState);
  const [userForm, formAction] = useFormState(
    updateUser.bind(null, { userId: currentUser?.id ?? 0 }),
    null
  );
  console.log("userlist", userForm);

  const {
    isOpen: isEdit,
    onOpen: onEdit,
    onOpenChange: onEditChange,
  } = useDisclosure();

  const handleEdit = (user: User) => {
    setCurrentUser(user);
    onEdit();
  };

  return (
    <>
      <div className="flex justify-between gap-4">
        <div className="flex gap-4 w-96">
          <Select
            startContent={<CiCircleCheck className="text-white text-lg" />}
            placeholder="Status"
            classNames={{
              trigger: "bg-gray-700 hover:bg-gray-600",
              value: "text-white",
              selectorIcon: "text-white",
            }}
          >
            <SelectItem key="subscribe">Subscribe</SelectItem>
            <SelectItem key="unsubscribe">Unsubscribe</SelectItem>
            <SelectItem key="bounced">Bounced</SelectItem>
          </Select>
          <Select
            startContent={<CiLocationOn className="text-white text-lg" />}
            placeholder="Location"
            classNames={{
              trigger: "bg-gray-700 hover:bg-gray-600",
              value: "text-white",
              selectorIcon: "text-white",
            }}
          >
            <SelectItem key="usa">New York, USA</SelectItem>
            <SelectItem key="uk">London, UK</SelectItem>
            <SelectItem key="france">Paris, France</SelectItem>
            <SelectItem key="germany">Berlin, Germany</SelectItem>
            <SelectItem key="japan">Tokyo, Japan</SelectItem>
            <SelectItem key="australia">Sydney, Australia</SelectItem>
          </Select>
        </div>
        <div className="flex w-40">
          <Select
            startContent={<VscSettings className="text-white text-lg" />}
            placeholder="Display"
            classNames={{
              trigger: "bg-gray-700 hover:bg-gray-600",
              value: "text-white",
              selectorIcon: "text-white",
            }}
          >
            <SelectItem key="name">Name</SelectItem>
            <SelectItem key="email">Email</SelectItem>
            <SelectItem key="location">Location</SelectItem>
            <SelectItem key="status">Status</SelectItem>
            <SelectItem key="skills">Skills</SelectItem>
          </Select>
        </div>
      </div>

      <div
        className="overflow-auto "
        style={{ maxHeight: "800px", width: "100%" }}
      >
        <Table
          aria-label="User List Table"
          classNames={{
            th: "bg-gray-700 text-white hover:bg-gray-900",
            wrapper: "bg-gray-800 text-white",
            // base: "hover:bg-gray-900",
          }}
          selectionMode="multiple"
        >
          <TableHeader
            columns={[
              { key: "name", label: "Name" },
              { key: "email", label: "Email" },
              { key: "location", label: "Location" },
              { key: "status", label: "Status" },
              { key: "action", label: "Action" },
            ]}
          >
            {(column) => (
              <TableColumn key={column.key}>{column.label}</TableColumn>
            )}
          </TableHeader>
          <TableBody items={userState.users}>
            {(item: User) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.location}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell>
                  <Dropdown>
                    <DropdownTrigger>
                      <Button isIconOnly variant="light">
                        <BsThreeDots className="text-white" />
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                      onAction={(key) => {
                        if (key === "edit") {
                          handleEdit(item);
                        } else {
                          deleteUser(Number(item.id));
                        }
                      }}
                    >
                      <DropdownItem key="edit">Edit</DropdownItem>
                      <DropdownItem color="danger" key="delete">
                        Delete
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <Modal isOpen={isEdit} onOpenChange={onEditChange} placement="center">
        <ModalContent>
          {(onClose) => (
            <form action={formAction}>
              <ModalHeader>Edit</ModalHeader>
              <ModalBody className="flex flex-col">
                <Input
                  label="Name"
                  placeholder="John Doe"
                  name="name"
                  labelPlacement="outside"
                  value={currentUser?.name || ""}
                  onChange={(e) =>
                    setCurrentUser((prev) =>
                      prev ? { ...prev, name: e.target.value } : prev
                    )
                  }
                />
                <Input
                  label="Email"
                  name="email"
                  placeholder="John.Doe@gmail.com"
                  labelPlacement="outside"
                  value={currentUser?.email || ""}
                  onChange={(e) =>
                    setCurrentUser((prev) =>
                      prev ? { ...prev, email: e.target.value } : prev
                    )
                  }
                />
                <Input
                  label="Location"
                  name="location"
                  placeholder="Your location"
                  labelPlacement="outside"
                  value={currentUser?.location || ""}
                  onChange={(e) =>
                    setCurrentUser((prev) =>
                      prev ? { ...prev, location: e.target.value } : prev
                    )
                  }
                />
                <Select
                  label="Select status"
                  name="status"
                  defaultSelectedKeys={[currentUser?.status || ""]}
                >
                  <SelectItem key="subscribe">Subscribe</SelectItem>
                  <SelectItem key="unsubscribe">Unsubscribe</SelectItem>
                </Select>
              </ModalBody>
              <ModalFooter>
                <Button
                  onClick={onClose}
                  color="danger"
                  className="text-gray-600 bg-white"
                >
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
