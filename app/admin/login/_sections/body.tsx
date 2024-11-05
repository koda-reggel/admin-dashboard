"use client";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
} from "@nextui-org/react";

export default function Body() {
  return (
    <div>
      <Card className="flex flex-col">
        <CardHeader className="flex justify-center">
          <p>Login</p>
        </CardHeader>
        <CardBody className="flex gap-4">
          <Input placeholder="Email"></Input>
          <Input placeholder="Password"></Input>
        </CardBody>
        <CardFooter>
          <Button>Login</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
