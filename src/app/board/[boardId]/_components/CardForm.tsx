"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Plus, X } from "lucide-react";
import React, { forwardRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";

interface CardFormProps {
  isEditing: boolean;
  enableEditing: () => void;
  disableEditing: () => void;
  item: any;
  setList: any;
}

const CardForm = forwardRef<HTMLTextAreaElement, CardFormProps>(
  ({ isEditing, enableEditing, disableEditing, item, setList }, ref) => {
    const { toast } = useToast();
    const [title, setTitle] = useState("");

    const handleAddCard = () => {
      if (title === "") {
        toast({ title: "Title cannot be empty" });
        return;
      }
      setList((curr: any) => {
        return curr.map((currItem: any) => {
          if (currItem.id === item.id) {
            return {
              ...currItem,
              cards: [
                ...currItem.cards,
                {
                  title,
                  id: Math.floor(100000 + Math.random() * 900000),
                  description: "",
                  order: currItem.cards.length + 1
                }
              ]
            };
          }
          return currItem;
        });
      });
      disableEditing();
      toast({ title: "New Card Created" });
      setTitle("");
    };
    if (isEditing) {
      return (
        <div className="item-center">
          <Textarea
            ref={ref}
            value={title}
            className="focus-visible:ring-0 focus-visible:ring-offset-0 bg-white
             ring-0 focus:ring-0 outline-none resize-none "
            placeholder="Enter your card name"
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="flex items-center pl-2">
            <Button onClick={handleAddCard}>Add Card</Button>
            <Button variant="ghost" size="sm" onClick={disableEditing}>
              <X className="size-4" />
            </Button>
          </div>
        </div>
      );
    }
    return (
      <div>
        <Button
          className="h-auto px-2 py-2 w-full justify-start text-muted-foreground text-sm"
          variant="ghost"
          onClick={enableEditing}
        >
          <Plus className="size-4" />
          Add a Card
        </Button>
      </div>
    );
  }
);

CardForm.displayName = "CardForm";
export default CardForm;
