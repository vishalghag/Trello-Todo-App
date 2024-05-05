import React, { useEffect } from "react";
import { useAtom } from "jotai";
import { formEntriesAtom, showFormAtom } from "../store/board";
import PopUp from "./PopUp";
import CommonCard from "../common/CommonCard";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const TrelloBoard = () => {
  const [formEntries, setFormEntries] = useAtom(formEntriesAtom);
  const [showForm, setShowForm] = useAtom(showFormAtom);

  // Load formEntries from localStorage on component mount
  // useEffect(() => {
  //   const savedEntries = localStorage.getItem("formEntries");
  //   if (savedEntries) {
  //     setFormEntries(JSON.parse(savedEntries));
  //   }
  // }, []);

  // // Save formEntries to localStorage whenever it changes
  // useEffect(() => {
  //   if (formEntries.length > 0) {
  //     localStorage.setItem("formEntries", JSON.stringify(formEntries));
  //   }
  // }, [formEntries]);

  function Cards(status) {
    return formEntries?.map((datum, index) => {
      if (datum.taskStatus === status) {
        return (
          <Draggable key={datum.id} draggableId={datum.id} index={index}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                <CommonCard key={datum.id} {...datum} />
              </div>
            )}
          </Draggable>
        );
      }
      return null;
    });
  }

  const onDragEnd = (result) => {
    const { source, destination } = result;
    const updatedFormEntries = [...formEntries];
    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    ) {
      return;
    }

    if (destination.droppableId !== source.droppableId) {
      const newFormEntries = updatedFormEntries.map((datum) => {
        if (datum.id === result.draggableId) {
          return {
            ...datum,
            taskStatus: destination.droppableId,
          };
        } else {
          return datum;
        }
      });
      setFormEntries(newFormEntries);
    } else {
      const draggedItem = updatedFormEntries.splice(source.index, 1)[0];
      updatedFormEntries.splice(destination.index, 0, draggedItem);
      setFormEntries(updatedFormEntries);
    }
  };
  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto mt-10 gap-10">
          <Droppable droppableId="Todo">
            {(provided) => (
              <div
                className="bg-gray-500/30 p-2 max-h-[600px] overflow-auto overflow-y-auto rounded-md"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <div className="flex justify-center items-center">
                  <h2 className="text-2xl text-black/50 font-medium">Todo</h2>
                </div>
                {Cards("Todo")}
                {provided.placeholder}
              </div>
            )}
          </Droppable>

          <Droppable droppableId="In-Process">
            {(provided) => (
              <div
                className="bg-gray-500/30 p-2 max-h-[600px] overflow-auto overflow-y-auto rounded-md"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <div className="flex justify-center items-center">
                  <h2 className="text-2xl text-black/50 font-medium">
                    In-Process
                  </h2>
                </div>
                {Cards("In-Process")}
                {provided.placeholder}
              </div>
            )}
          </Droppable>

          <Droppable droppableId="Done">
            {(provided) => (
              <div
                className="bg-gray-500/30 p-2 max-h-[600px] overflow-auto overflow-y-auto rounded-md"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <div className="flex justify-center items-center">
                  <h2 className="text-2xl text-black/50 font-medium">Done</h2>
                </div>
                {Cards("Done")}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
      {showForm && <PopUp />}
    </>
  );
};

export default TrelloBoard;
