"use client";

import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // Next.js 13+ uses usePathname for route checks in the app directory

export default function SidebarLinks({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon?: ReactNode;
}) {
  const pathname = usePathname(); // Grabs the current path
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Set active state based on the current pathname
    if (pathname === href) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [pathname, href]);

  return (
    <Link href={href}>
      <div
        className={`flex gap-2 items-center p-4 border-l-2 cursor-pointer  hover:bg-green-800 hover:text-lime-400${
          isActive
            ? " border-lime-400 text-lime-400"
            : " border-transparent text-white"
        }`}
      >
        <div className={`${isActive ? "text-lime-400" : ""}`}>{icon}</div>
        <span>{label}</span>
      </div>
    </Link>
  );
}
