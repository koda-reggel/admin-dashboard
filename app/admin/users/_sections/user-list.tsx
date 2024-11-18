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

import makeAnimated from "react-select/animated";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
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

  const location = [
    {
      key: "usa",
      place: "New York",
    },
    {
      key: "uk",
      place: "London",
    },
    {
      key: "fr",
      place: "Paris",
    },
    {
      key: "gr",
      place: "Berlin",
    },
    {
      key: "jp",
      place: "Japan",
    },
    {
      key: "aus",
      place: "Sydney",
    },
  ];

  const display = [
    {
      key: "name",
      value: "name",
    },
    {
      key: "email",
      value: "email",
    },
    {
      key: "location",
      value: "location",
    },
    {
      key: "status",
      value: "status",
    },
    {
      key: "skills",
      value: "skills",
    },
  ];

  const animatedComponents = makeAnimated();

  return (
    <>
      <div className="flex justify-between gap-4">
        <div className="flex gap-4 w-96">
          <Select
            startContent={<CiCircleCheck className="text-white text-lg" />}
            placeholder="Status"
            classNames={{
              mainWrapper: "rounded-lg",
              trigger: "bg-[#171717] rounded-lg data-[hover=true]:bg-gray-500",
              listbox: " bg-[#171717] text-gray-200",
              popoverContent: "bg-gray-900",
              value: "text-gray-200",
              selectorIcon: "text-gray-200",
            }}
          >
            <SelectItem key="subscribe">Subscribe</SelectItem>
            <SelectItem key="unsubscribe">Unsubscribe</SelectItem>
            <SelectItem key="bounced">Bounced</SelectItem>
          </Select>

          <Autocomplete
            multiple
            label="Select location"
            className="max-w-xs"
            defaultItems={location}
          >
            {(item) => (
              <AutocompleteItem key={item.key}>{item.place}</AutocompleteItem>
            )}
          </Autocomplete>
        </div>
        <div className="flex w-40">
          {/* <Select
            startContent={<VscSettings className="text-white text-lg" />}
            placeholder="Display"
            classNames={{
              mainWrapper: "rounded-lg",
              trigger: "bg-[#171717] rounded-lg data-[hover=true]:bg-gray-500",
              listbox: " bg-[#171717] text-gray-200",
              popoverContent: "bg-gray-900",
              value: "text-gray-200",
              selectorIcon: "text-gray-200",
            }}
          >
            <SelectItem key="name">Name</SelectItem>
            <SelectItem key="email">Email</SelectItem>
            <SelectItem key="location">Location</SelectItem>
            <SelectItem key="status">Status</SelectItem>
            <SelectItem key="skills">Skills</SelectItem>
          </Select> */}

          {/* <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue={[colourOptions[4], colourOptions[5]]}
      isMulti
      options={colourOptions}
    /> */}
        </div>
      </div>

      <div
        className="overflow-auto "
        style={{ maxHeight: "800px", width: "100%" }}
      >
        <Table
          aria-label="User List Table"
          classNames={{
            th: "bg-gray-600 text-gray-200 ",
            wrapper: "bg-[#171717] text-gray-200 ",
            tr: "rounded-lg hover:bg-gray-800",
            td: "data-[selected=true]:before:opacity-100 group-aria-[selected=false]:group-data-[hover=true]:before:opacity-0",

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
                      classNames={
                        {
                          // list: "bg-gray-700 text-white ",
                          // base: "bg-gray-900 border",
                        }
                      }
                    >
                      <DropdownItem
                        // classNames={{
                        //   base: "bg-gray-500 border",
                        //   wrapper: "bg-gray-500",
                        // }}
                        key="edit"
                      >
                        Edit
                      </DropdownItem>
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
