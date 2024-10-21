import React from "react";
import Logo from "../../../public/assets/logoipsum-311.svg";
import Image from "next/image";
import MobileSidebar from "./MobileSidebar";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full h-14 border-b shadow-md shadow-gray-700 bg-white flex items-center">
      <div className=" mx-auto md:mx-4 flex  items-center w-full justify-between md:justify-start">
        <MobileSidebar />
        <Image
          src={Logo}
          alt="logo"
          height={240}
          width={240}
          className="h-4 w-auto md:h-8 mr-4 "
        />
        <div className=" items-center gap-x-4 hidden md:flex">
          <div className="flex items-center ">
            Workpsace <ChevronDown className="size-4 ml-1" />
          </div>
          <div className="flex items-center ">
            Recent <ChevronDown className="size-4 ml-1" />
          </div>
          <div className="flex items-center ">
            Starred <ChevronDown className="size-4 ml-1" />
          </div>
          <div className="flex items-center ">
            Templates <ChevronDown className="size-4 ml-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
