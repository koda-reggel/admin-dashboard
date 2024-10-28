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
      duration: "2h 1m",
      date: "11-11-24",
      description:
        "After being bitten by a genetically-modified spider, a shy teenager gains spider-like abilities that he uses to fight injustice as a masked superhero and face a vengeful enemy",
    },
    {
      title: "Joker",
      duration: "2h 1m",
      date: "11-11-24",
      description:
        "After being bitten by a genetically-modified spider, a shy teenager gains spider-like abilities that he uses to fight injustice as a masked superhero and face a vengeful enemy",
      img: "https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1500x1500/products/89058/93685/Joker-2019-Final-Style-steps-Poster-buy-original-movie-posters-at-starstills__62518.1669120603.jpg?c=2",
    },
    {
      title: "Avengers",
      img: "https://i.ebayimg.com/images/g/36kAAOSw67Zcnatq/s-l1200.jpg",
      duration: "2h 1m",
      date: "11-11-24",
      description:
        "After being bitten by a genetically-modified spider, a shy teenager gains spider-like abilities that he uses to fight injustice as a masked superhero and face a vengeful enemy",
    },
    {
      title: "Tenet",
      img: "https://i.ebayimg.com/images/g/gEoAAOSw84BfOWDp/s-l1200.jpg",
      duration: "2h 1m",
      date: "11-11-24",
      description:
        "After being bitten by a genetically-modified spider, a shy teenager gains spider-like abilities that he uses to fight injustice as a masked superhero and face a vengeful enemy",
    },
    {
      title: "Outsider",
      img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-mistery-movie-poster-design-template-2ec690d65c22aa12e437d765dbf7e4af_screen.jpg?ts=1680854635",
      duration: "2h 1m",
      date: "11-11-24",
      description:
        "After being bitten by a genetically-modified spider, a shy teenager gains spider-like abilities that he uses to fight injustice as a masked superhero and face a vengeful enemy",
    },
  ]);

  return (
    <div className="flex flex-col">
      <div className="flex md:w-full justify-between items-center border p-4 sm:text-wrap">
        <h1>Video</h1>
        <Input
          placeholder="Search video"
          startContent={<FaVideo />}
          className="flex md:max-w-xs "
        />
      </div>

      <div className=" p-4 lg:p-0 w-full  overflow-y-scroll h-[calc(100vh-74px)] ">
        <div className="flex flex-col items-stretch w-full max-w-screen-xl mx-auto gap-4 py-4">
          {poster.map((post, index) => (
            <div className="md:flex-1 w-full " key={index}>
              <Card className="flex ">
                <CardBody>
                  <div className="md:flex-row gap-8 flex flex-col items-center lg:items-start">
                    <Image
                      alt={post.title}
                      width={200}
                      height={250}
                      className="object-cover rounded-xl "
                      src={post.img}
                    />
                    <div className="flex flex-col">
                      <div className="flex w-full justify-between">
                        <p className="flex justify-center font-bold">
                          {post.title}
                        </p>
                        <p className="flex justify-center">{post.date}</p>
                      </div>
                      <div className="flex flex-col gap-8">
                        <p className="flex font-light">{post.duration}</p>
                        <p className="flex  justify-center">
                          {post.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardBody>
                <CardFooter className="flex justify-end gap-4">
                  <Button color="primary">Approve</Button>
                  <Button color="danger">Delete</Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
