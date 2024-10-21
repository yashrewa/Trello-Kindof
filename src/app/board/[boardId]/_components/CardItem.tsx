import React from "react";
import { Draggable } from "@hello-pangea/dnd";

interface CardItemProps {
  index: number;
  data: any;
}

const CardItem = ({ data, index }: CardItemProps) => {
  return (
    <Draggable draggableId={data.id.toString()} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className="truncate my-1 border-2 border-transparent  py-2 px-3 bg-white rounded-md shadow-sm shadow-[#A6BDBD] hover:shadow-[#669999] hover:shadow-lg transition ease-in-out "
        >
          {data.title}
        </div>
      )}
    </Draggable>
  );
};

export default CardItem;
