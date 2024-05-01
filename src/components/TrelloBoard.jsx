import React, { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { DummyData } from "../utils/constant";
import Columns from "./Columns";
import CommonBtn from "../common/CommonBtn";
import PopUp from "./PopUp";

const TrelloBoard = () => {
  const [tableData, setTableData] = useState(DummyData);
  const [showModal, setShowModal] = useState(false);
  const statusOptions = ["Todo", "In-Process", "Done"];
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [titleErrorStatus, setTitleErrorStatus] = useState(false);
  const [descriptionErrorStatus, setDescriptionErrorStatus] = useState(false);

  let data = {};

  const showModalFn = () => {
    setShowModal(true);
  };

  const closeModalFn = () => {
    setShowModal(false);
    setTitleErrorStatus(false);
    setDescriptionErrorStatus(false);
    setTitle("");
    setDescription("");
  };

  const addTaskFn = () => {
    console.log("clicked");
    if (!title && !description) {
      setTitleErrorStatus(true);
      setDescriptionErrorStatus(true);
    } else if (!title && title.length > 4) {
      setTitleErrorStatus(true);
    } else if (!description && description.length > 50) {
      setDescriptionErrorStatus(true);
    } else {
      setTitleErrorStatus(false);
      setDescriptionErrorStatus(false);
      let data = {
        title: title,
        description: description,
      };
      console.log(data);
      closeModalFn();
    }
  };

  const titleInputState = (e) => {
    console.log(title);
    setTitle(e.target.value);
  };

  const descriptionInputState = (e) => {
    setDescription(e.target.value);
  };

  const handleOnDragEnd = () => {};

  return (
    <>
      <div className=" flex justify-center mt-4">
        <CommonBtn buttonName={"Add Task"} buttonOnClick={showModalFn} />
      </div>
      {/* <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="board" direction="horizontal" type="column">
          {(provided) => (
            <div
              className=" grid  grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto mt-10"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {/* {provided.droppableProps} */}

      {/* {tableData.map((ele) => (
                <>
                  <Columns key={ele.id} id={ele.id} todos={ele} />
                </>
              ))}
            </div>
          )}
        </Droppable>
      </DragDropContext> */}
      {showModal && (
        <PopUp
          closeModalFn={closeModalFn}
          statusOptions={statusOptions}
          addTaskFn={addTaskFn}
          titleInputState={titleInputState}
          descriptionInputState={descriptionInputState}
          title={title}
          description={description}
          titleErrorStatus={titleErrorStatus}
          descriptionErrorStatus={descriptionErrorStatus}
        />
      )}
    </>
  );
};

export default TrelloBoard;
