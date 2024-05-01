import React, { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { DummyData } from "../utils/constant";

const TrelloBoard = () => {
  const [tableData, setTableData] = useState(DummyData);

  return (
    <DragDropContext>
      <Droppable droppableId="board" direction="horizontal" type="column">
        {(provided) => (
          <div>
            {tableData.map((ele) => (
              <>
                <p>{ele.title}</p>
              </>
            ))}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TrelloBoard;
