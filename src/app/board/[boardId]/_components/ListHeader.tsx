import React, { ElementRef, useRef, useState } from "react";
import { ListWrapper } from "./ListWrapper";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useOnClickOutside } from "usehooks-ts";
import ListOptions from "./ListOptions";

const ListHeader = ({
  item,
  setList
}: {
  item: any;
  setList: any;
}) => {
  const formRef = useRef<ElementRef<"form">>(null);
  const inputRef = useRef<ElementRef<"input">>(null);
  const [input, setInput] = useState(item.title);

  const [isEditing, setIsEditing] = useState(false);

  const enableEditing = () => {
    setIsEditing(true);
  };

  const disableEditing = () => {
    setIsEditing(false);
    inputRef.current?.focus();
  };

  const handleUpdate = (event: any) => {
    // setListTitles((curr: any) => [...curr, { ...title, name: event.target.value }]);
    event.preventDefault();
    setList((curr: any) =>
      curr.map((item: any) =>
        item.id === item.id ? { ...item, title: input } : item
      )
    );
    disableEditing();
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
            defaultValue={item.title}
            className="text-sm px-2 py-1 h-7 font-medium border-transparent hover:border-input focus:border-input transition"
            placeholder="Enter a list item"
            required
            onChange={(e) => setInput(e.target.value)}
          />

          <div className="flex items-center gap-x-1">
            <Button size="sm" type="submit" onClick={handleUpdate}>
              Update
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
    <div className="pt-2 px-2 text-sm font-semibold flex justify-between items-start gap-x-2">
      <div
        className="w-full text-sm px-3 py-1 h-7 font-semibold border-transparent"
        onClick={enableEditing}
      >
        {item.title}
      </div>
      <ListOptions setList={setList} item={item} />
    </div>
  );
};

export default ListHeader;
