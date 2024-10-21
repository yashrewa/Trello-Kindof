"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";
import { MoreHorizontal } from "lucide-react";

const ListOptions = ({ item, setList }: { item: any; setList: any }) => {
  const handleDeleteList = () => {
    setList((curr: any) =>
      curr.filter((currItem: any) => currItem.id !== item.id)
    );
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="h-auto w-auto p-2" variant="ghost">
          <MoreHorizontal className="size-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="px-0 py-3" side="bottom" align="start">
        <div className="text-sm font-medium text-center text-neutral-600 pb-4">
          List actions
        </div>
        <Button
          className="rounded-none w-full h-auto p-2 px-5 justify-start font-normal text-sm"
          variant="ghost"
        >
          Add Card
        </Button>

        <Button
          className="rounded-none w-full h-auto p-2 px-5 justify-start font-normal text-sm"
          variant="ghost"
          onClick={handleDeleteList}
        >
          Delete List
        </Button>
      </PopoverContent>
    </Popover>
  );
};

export default ListOptions;
