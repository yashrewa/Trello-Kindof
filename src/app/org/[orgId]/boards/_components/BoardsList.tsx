"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import data from "../../../../../data/boardsData.json";
import { useToast } from "@/hooks/use-toast";

const BoardsList = ({ orgId }: { orgId: number }) => {
  const { toast } = useToast();
  const [boards, setBoards] = useState(
    data.filter((board) => board.organizationId == orgId)
  );
  const [boardName, setBoardName] = useState("");

  const handleAddBoard = () => {
    if (!boardName) {
      toast({ title: "Board name is required" });
      return;
    }
    const newBoard = {
      id: boards.length + 1,
      title: boardName,
      organizationId: orgId
    };
    setBoards([...boards, newBoard]);
    setBoardName("");
    toast({ title: "New Board Created" });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center font-semibold text-lg text-neutral-700">
        <User className="size-6 mr-2" />
        Boards
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {boards.map(({ id, title }) => (
          <Link
            href={`/board/${id}`}
            key={id}
            className={`aspect-video my-2 relative h-full w-full  bg-[#669999] hover:bg-[#77a6a6] shadow-black shadow-lg hover:shadow-xl hover:shadow-neutral-700 rounded-md flex flex-col gap-y-1 items-center justify-center hover:opacity-90 transition ease-in-out cursor-pointer`}
          >
            <div className="text-xl md:text-2xl text-neutral-50">{title}</div>
          </Link>
        ))}
        <div className="aspect-video my-2 relative h-full w-full bg-neutral-200 rounded-md flex flex-col gap-y-1 items-center justify-center hover:opacity-75 transition">
          <div className="flex flex-col space-y-4">
            <Label>Add New Board</Label>
            <Input
              id="title"
              name="title"
              value={boardName}
              onChange={(e) => setBoardName(e.target.value)}
              className="bg-white"
              type="text"
              placeholder="Enter Board Title"
            />
            <Button size="lg" onClick={handleAddBoard}>
              Add Board
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardsList;
