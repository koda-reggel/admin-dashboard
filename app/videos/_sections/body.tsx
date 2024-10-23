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
      title: "Joker",
      img: "https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1500x1500/products/89058/93685/Joker-2019-Final-Style-steps-Poster-buy-original-movie-posters-at-starstills__62518.1669120603.jpg?c=2",
    },
    {
      title: "Avengers",
      img: "https://i.ebayimg.com/images/g/36kAAOSw67Zcnatq/s-l1200.jpg",
    },
    {
      title: "Tenet",
      img: "https://i.ebayimg.com/images/g/gEoAAOSw84BfOWDp/s-l1200.jpg",
    },
    {
      title: "Outsider",
      img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-mistery-movie-poster-design-template-2ec690d65c22aa12e437d765dbf7e4af_screen.jpg?ts=1680854635",
    },
  ]);

  return (
    <div className="flex flex-col">
      <div className="flex md:w-full justify-between items-center border p-4 sm:text-wrap">
        <h1>Video</h1>
        <Input
          placeholder="Search video"
          startContent={<FaVideo />}
          className="flex max-w-xs"
        />
      </div>
      <div className="grid md:grid-cols-4 p-4 sm:grid-cols-1">
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
                <p className="flex justify-center">{post.title}</p>
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
