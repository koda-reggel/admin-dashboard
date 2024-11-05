"use client";
import { Input } from "@nextui-org/input";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Pagination,
} from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import { FaVideo } from "react-icons/fa";
import React from "react";

export default function Body() {
  const poster = [
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
      duration: "2h 2m",
      date: "11-11-24",
      description:
        "Arthur Fleck, a party clown and a failed stand-up comedian, leads an impoverished life with his ailing mother. However, when society shuns him and brands him as a freak, he decides to embrace the life of chaos in Gotham City.",
      img: "https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1500x1500/products/89058/93685/Joker-2019-Final-Style-steps-Poster-buy-original-movie-posters-at-starstills__62518.1669120603.jpg?c=2",
    },
    {
      title: "Avengers",
      img: "https://i.ebayimg.com/images/g/36kAAOSw67Zcnatq/s-l1200.jpg",
      duration: "2h 1m",
      date: "11-11-24",
      description:
        "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
    },
    {
      title: "Tenet",
      img: "https://i.ebayimg.com/images/g/gEoAAOSw84BfOWDp/s-l1200.jpg",
      duration: "2h 1m",
      date: "11-11-24",
      description:
        "Armed with only the word tenet and fighting for the survival of the entire world, CIA operative, The Protagonist, journeys through a twilight world of international espionage on a global mission that unfolds beyond real time.",
    },
    {
      title: "Outsider",
      img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-mistery-movie-poster-design-template-2ec690d65c22aa12e437d765dbf7e4af_screen.jpg?ts=1680854635",
      duration: "2h 1m",
      date: "11-11-24",
      description:
        "When an insidious supernatural force edges its way into a seemingly straightforward investigation into the gruesome murder of a young boy, it leads a seasoned cop and an unorthodox investigator to question everything they believe in.",
    },
  ];

  // Pagination logic
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 2; // Number of rows per page

  const pages = Math.ceil(poster.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return poster.slice(start, end);
  }, [page, poster]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <div>
        <Navbar
          onMenuOpenChange={setIsMenuOpen}
          maxWidth="full"
          classNames={{ wrapper: "px-4 h-16" }}
          className="h-16"
        >
          <NavbarContent>
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className=" lg:hidden"
            />
            <NavbarBrand className="font-bold text-xl">Video</NavbarBrand>
          </NavbarContent>

          <NavbarContent justify="end">
            <NavbarItem className="w-full">
              <Input
                placeholder="Search anything in Siohioma.."
                startContent={<FaVideo />}
              />
            </NavbarItem>
          </NavbarContent>
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarMenu>
              <NavbarMenuItem>
                <Link href="/" className="w-full" color="foreground">
                  Dashboard
                </Link>
              </NavbarMenuItem>
              <NavbarMenuItem>
                <Link href="/users" className="w-full" color="foreground">
                  User
                </Link>
              </NavbarMenuItem>
              <NavbarMenuItem>
                <Link href="/videos" className="w-full" color="foreground">
                  Videos
                </Link>
              </NavbarMenuItem>
            </NavbarMenu>
          </NavbarContent>
        </Navbar>
      </div>

      <div className="p-4 lg:p-0 w-full overflow-y-scroll h-[calc(100vh-74px)]">
        <div className="flex flex-col items-stretch w-full max-w-screen-xl mx-auto gap-4 py-4">
          {/* Render the paginated movie cards */}
          {items.map((post, index) => (
            <div className="md:flex-1 w-full" key={index}>
              <Card className="flex">
                <CardBody>
                  <div className="md:flex-row gap-8 flex flex-col items-center lg:items-start">
                    <Image
                      alt={post.title}
                      width={200}
                      height={250}
                      src={post.img}
                      classNames={{ wrapper: "w-full" }}
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
                        <p className="flex justify-center">
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

        {/* Pagination Controls */}
        <div className="flex w-full justify-center">
          <Pagination
            isCompact
            showControls
            showShadow
            color="secondary"
            page={page}
            total={pages}
            onChange={(page) => setPage(page)}
          />
        </div>
      </div>
    </div>
  );
}