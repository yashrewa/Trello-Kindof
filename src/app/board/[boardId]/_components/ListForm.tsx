"use client";
import { useState, useRef, ElementRef } from "react";
import { ListWrapper } from "./ListWrapper";
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";
import { useOnClickOutside } from "usehooks-ts";
import { Input } from "@/components/ui/input";
import { useParams } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
const ListForm = ({ setList }: { setList: any }) => {
  const { toast } = useToast();
  const { boardId } = useParams();
  const formRef = useRef<ElementRef<"form">>(null);
  const inputRef = useRef<ElementRef<"input">>(null);
  const [newTitle, setNewTitle] = useState("");

  const [isEditing, setIsEditing] = useState(false);

  const enableEditing = () => {
    setIsEditing(true);
  };

  const disableEditing = () => {
    setIsEditing(false);
    inputRef.current?.focus();
  };

  const handleAdd = (event: any) => {
    event.preventDefault();
    if (!newTitle) {
      toast({ title: `List Name is Required` });
      return;
    }
    setList((curr: any) => [
      ...curr,
      {
        title: newTitle,
        id: curr.length + 1,
        order: curr.length + 1,
        cards: []
      }
    ]);
    disableEditing();
    toast({ title: `New List is Created ${newTitle}` });
    setNewTitle("");
  };

  useOnClickOutside(formRef, disableEditing);

  if (isEditing) {
    return (
      <ListWrapper>
        <form
          ref={formRef}
          className="w-full p-3 rounded-md bg-white space-y-4 shadow-md"
        >
          <Input
            ref={inputRef}
            type="text"
            autoFocus
            value={newTitle}
            className="text-sm px-2 py-1 h-7 font-medium border-transparent hover:border-input focus:border-input transition"
            placeholder="Enter a list item"
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <input hidden value={boardId} name="boardId" />
          <div className="flex items-center gap-x-1">
            <Button size="sm" onClick={handleAdd}>
              Add
            </Button>
            <Button size="sm" onClick={disableEditing} variant="ghost">
              <X className="size-5" />
            </Button>
          </div>
        </form>
      </ListWrapper>
    );
  }

  return (
    <ListWrapper>
      <form
        className="w-full p-3 rounded-md bg-white space-y-4 shadow-md"
        action=""
      >
        <Button
          className="w-full font-bold flex justify-start"
          variant={"ghost"}
          onClick={enableEditing}
        >
          <Plus className="mr-2 size-4" /> Add a list
        </Button>
      </form>
    </ListWrapper>
  );
};

export default ListForm;
