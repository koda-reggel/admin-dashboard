"use client";

import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Pagination,
} from "@nextui-org/react";
import { Button } from "@nextui-org/button";

import React from "react";
import { useAppSelector } from "@/hooks/hooks";
import { deleteVideo } from "@/actions/video-action";

export default function VideoList() {
  const state = useAppSelector((state) => state.videoState);

  const [page, setPage] = React.useState(1);
  const rowsPerPage = 2;

  const pages = Math.ceil((state.videos?.length ?? 0) / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return state.videos?.slice(start, end) ?? [];
  }, [page, state.videos]);

  function formatToDateOnly(isoTimestamp: string) {
    return new Date(isoTimestamp).toISOString().split("T")[0];
  }

  return (
    <div className="p-4 lg:p-0 w-full overflow-y-scroll h-[calc(100vh-74px)]">
      <div className="flex flex-col items-stretch w-full max-w-screen-xl mx-auto gap-4 py-4">
        {/* Render the paginated movie cards */}
        {items.map((item, index) => (
          <div className="md:flex-1 w-full" key={index}>
            <Card className="flex text-gray-200 bg-[#171717]">
              <CardBody>
                <div className="md:flex-row gap-8 flex flex-col items-center lg:items-start">
                  <Image
                    alt={item.title}
                    width={200}
                    height={250}
                    src={item.image}
                    classNames={{ wrapper: "w-full" }}
                  />
                  <div className="flex flex-col">
                    <div className="flex w-full justify-between">
                      <p className="flex justify-center font-bold">
                        {item.title}
                      </p>
                      <p className="flex justify-center">
                        {formatToDateOnly(item.timestamp?.toString() ?? "")}
                      </p>
                    </div>
                    <div className="flex flex-col gap-8">
                      <p className="flex font-light">{item.duration}</p>
                      <p className="flex justify-center">{item.description}</p>
                    </div>
                  </div>
                </div>
              </CardBody>
              <CardFooter className="flex justify-end gap-4">
                {/* <Button color="primary">Approve</Button> */}
                <Button
                  color="danger"
                  onPress={() => {
                    deleteVideo(Number(item.id));
                  }}
                >
                  Delete
                </Button>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex w-full justify-center">
        <Pagination
          classNames={{
            item: "bg-[#171717] text-white hover:text-black hover:rounded-lg",
            prev: page === 1 ? "hidden" : "bg-[#171717] text-lg",
            next: page === pages ? "hidden" : "bg-[#171717] text-lg",
            cursor: "bg-pink-700",
          }}
          isCompact
          showControls
          initialPage={1}
          // showShadow
          color="primary"
          page={page}
          total={pages}
          onChange={(page) => setPage(page)}
        />
      </div>
    </div>
  );
}
