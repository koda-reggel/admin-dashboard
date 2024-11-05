"use client";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Accordion,
  AccordionItem,
} from "@nextui-org/react";

export default function Body() {
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
    <div className="flex flex-col">
      <div className="flex justify-between m-4">
        <p className="flex text-2xl">Skills</p>
        <Input placeholder="Search Skills" className="flex max-w-xs"></Input>
      </div>

      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>SKILLS</TableColumn>
          {/* <TableColumn>ROLE</TableColumn>
          <TableColumn>STATUS</TableColumn> */}
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
                        <div key={index} className="border p-2 rounded">
                          <></>
                          {subskills}
                        </div>
                      ))}
                    </div>
                  </AccordionItem>
                </Accordion>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
