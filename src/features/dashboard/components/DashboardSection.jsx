import React from "react";
import LogoOutButton from "./LogoOutButton";
import Link from "next/link";
import { Box } from "lucide-react";

const DashboardSection = () => {
  return (
    <section className="font-montserrat">
      <h1 className="text-2xl font-bold mb-5">App Module</h1>
      <div className=" grid grid-cols-2 mb-5">
        <Link
          href={"/dashboard/inventory"}
          className="text-xl active:scale-95 duration-200 bg-blue-50 w-full p-5 rounded-xl flex"
        >
          <Box className="size-10" />
          Inventory Module
        </Link>
      </div>
      <LogoOutButton />
    </section>
  );
};

export default DashboardSection;
