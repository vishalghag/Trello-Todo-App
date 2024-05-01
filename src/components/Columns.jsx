import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";

const Columns = ({ id, todos, index }) => {
  return (
    <Draggable draggableId={id} index={id}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Droppable droppableId={id.toString()} type="card">
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className={` p-2 shadow-sm rounded-2xl ${
                  snapshot.isDraggingOver ? " bg-green-200" : " bg-white/50"
                }`}
              >
                <h2>{todos.list}</h2>
                {todos.title}
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};

export default Columns;
