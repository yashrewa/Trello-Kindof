"use client";
import ListForm from "./ListForm";
import { useState } from "react";
import ListItem from "./ListItem";
import data from "../../../../data/cardData.json";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";

interface Card {
  title: string;
  id: number;
  order: number;
  description: string;
}

interface ListTitlesState {
  title: string;
  id: number;
  order: number;
  cards: Card[];
}

const ListContainer = () => {
  const [list, setList] = useState<ListTitlesState[]>(data);

  function reorder<T>(propsList: T[], startIndex: number, endIndex: number) {
    const result = Array.from(propsList);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  }

  const onDragEnd = (result: any) => {
    const { destination, source, type } = result;
    if (!result.destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === "list") {
      const items = reorder(list, source.index, destination.index).map(
        (item: any, index) => ({ ...item, order: index })
      );
      setList(items);
    }

    if (type === "card") {
      ("control reached here");
      let newList = [...list];

      const sourceList = newList.find(
        (item: any) => item.id == source.droppableId
      );
      
      const destList = newList.find(
        (item: any) => item.id == destination.droppableId
      );

      if (!sourceList || !destList) return;

      if (!sourceList.cards) {
        sourceList.cards = [];
      }
      if (!destList.cards) {
        destList.cards = [];
      }

      if (source.droppableId == destination.droppableId) {
        console.log("reached here");
        const reorderedCards = reorder(
          sourceList.cards,
          source.index,
          destination.index
        );
        reorderedCards.forEach((card, idx) => {
          card.order = idx;
        });
        sourceList.cards = reorderedCards;

        setList(newList);
      } else {
        const [movedCard] = sourceList.cards.splice(source.index, 1);
        console.log(movedCard);

        movedCard.listId = destination.droppableId;

        destList.cards.splice(destination.index, 0, movedCard);

        sourceList.cards.forEach((card, idx) => {
          card.order = idx;
        });
      }
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="lists" type="list" direction="horizontal">
        {(provided) => (
          <ol
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="flex gap-x-3 h-full"
          >
            {list.map((item, index) => (
              <ListItem
                key={item.id}
                item={item}
                setList={setList}
                index={index}
              />
            ))}
            {provided.placeholder}
            <ListForm setList={setList} />
          </ol>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default ListContainer;
