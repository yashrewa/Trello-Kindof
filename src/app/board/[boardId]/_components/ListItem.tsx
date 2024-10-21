"use client";
import { ElementRef, useRef, useState } from "react";
import ListHeader from "./ListHeader";
import CardForm from "./CardForm";
import CardItem from "./CardItem";
import { Draggable, Droppable } from "@hello-pangea/dnd";
const ListItem = ({
  item,
  setList,
  index
}: {
  item: any;
  setList: any;
  index: number;
}) => {
  const textareaRef = useRef<ElementRef<"textarea">>(null);
  const [isEditing, setIsEditing] = useState(false);

  const disableEditing = () => {
    setIsEditing(false);
    textareaRef.current?.focus();
  };

  const enableEditing = () => {
    setIsEditing(true);
  };
  return (
    <Draggable draggableId={item.id.toString()} index={index}>
      {(provided) => (
        <li
          {...provided.draggableProps}
          
          ref={provided.innerRef}
          className="shrink-0 h-full w-[272px] select-none"
        >
          <div
            {...provided.dragHandleProps}
            className="w-full rounded-md bg-neutral-50 shadow-md pb-2"
          >
            <ListHeader item={item} setList={setList} />
            <Droppable droppableId={item.id.toString()} type="card" direction="vertical">
              {(provided) => (
                <ol
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className={`mx-1 px-1 py-0.5 flex flex-col gap-y-2${
                    item.cards.length > 0 ? "mt-2" : "mt-0"
                  } `}
                >
                  {item.cards.map((card: any, index: number) => (
                    <CardItem index={index} key={card.id} data={card} />
                  ))}
                  {provided.placeholder}
                </ol>
              )}
            </Droppable>
            <CardForm
              ref={textareaRef}
              isEditing={isEditing}
              enableEditing={enableEditing}
              disableEditing={disableEditing}
              item={item}
              setList={setList}
            />
          </div>
        </li>
      )}
    </Draggable>
  );
};

export default ListItem;
