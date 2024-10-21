import MobileSidebar from "@/app/_components/MobileSidebar";
import Logo from "../../../../../public/assets/logoipsum-311.svg";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const BoardNavBar = () => {
  return (
    <div className="fixed top-0 w-full h-14  bg-black bg-opacity-20 flex items-center">
      <div className="mx-auto md:mx-4 flex  items-center w-full justify-center md:justify-start ">
        {/* <MobileSidebar /> */}
        <Link href={"/"}>
          <Image
            src={Logo}
            alt="logo"
            height={240}
            width={240}
            className="h-4 w-auto md:h-8 mr-4 "
          />
        </Link>
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

export default BoardNavBar;
