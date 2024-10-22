"use client";
import { Input } from "@nextui-org/input";
import { Card, CardBody, CardFooter, Divider, Image } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import { FaVideo } from "react-icons/fa";

export default function Body() {
  const [poster, setPoster] = useState([
    {
      title: "Spider-man",
      img: "https://miro.medium.com/v2/resize:fit:1400/1*iQhzIW0ZffqWaTI10ywLsA.jpeg",
    },
    {
      title: "Spider-man",
      img: "https://miro.medium.com/v2/resize:fit:1400/1*iQhzIW0ZffqWaTI10ywLsA.jpeg",
    },
    {
      title: "Spider-man",
      img: "https://miro.medium.com/v2/resize:fit:1400/1*iQhzIW0ZffqWaTI10ywLsA.jpeg",
    },
    {
      title: "Spider-man",
      img: "https://miro.medium.com/v2/resize:fit:1400/1*iQhzIW0ZffqWaTI10ywLsA.jpeg",
    },
    {
      title: "Spider-man",
      img: "https://miro.medium.com/v2/resize:fit:1400/1*iQhzIW0ZffqWaTI10ywLsA.jpeg",
    },
  ]);

  return (
    <div className="flex flex-col">
      <div className="flex w-full justify-between items-center border p-4">
        <h1>Video</h1>
        <Input
          placeholder="Search video"
          startContent={<FaVideo />}
          className="flex max-w-xs"
        />
      </div>
      <div className="grid grid-cols-4 p-4">
        {poster.map((post, index) => (
          <div className="flex w-64 p-4" key={index}>
            <Card>
              <CardBody>
                <Image
                  alt={post.title}
                  className="object-cover rounded-xl"
                  src={post.img}
                  width={270}
                />
              </CardBody>
              <Divider />
              <CardFooter className="flex justify-between">
                <Button color="primary">Approve</Button>
                <Button color="danger">Delete</Button>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
