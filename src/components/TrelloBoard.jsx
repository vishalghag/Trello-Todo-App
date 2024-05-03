import React, { useState } from "react";
import { DummyData } from "../utils/constant";
import PopUp from "./PopUp";
import { useAtom, useAtomValue } from "jotai";
import { formEntriesAtom, showFormAtom } from "../store/board";
import CommonCard from "../common/CommonCard";

const TrelloBoard = () => {
  const formEntries = useAtomValue(formEntriesAtom);
  const [showForm, setShowForm] = useAtom(showFormAtom);
  const [tableData, setTableData] = useState(DummyData);

  // const addTaskFn = () => {
  //   console.log("clicked");
  //   if (!title && !description) {
  //     setTitleErrorStatus(true);
  //     setDescriptionErrorStatus(true);
  //   } else if (!title && title.length > 4) {
  //     setTitleErrorStatus(true);
  //   } else if (!description && description.length > 50) {
  //     setDescriptionErrorStatus(true);
  //   } else {
  //     setTitleErrorStatus(false);
  //     setDescriptionErrorStatus(false);
  //     let data = {
  //       title: title,
  //       description: description,
  //     };
  //     console.log(data);
  //     setShowForm(false);
  //   }
  // };

  function Cards(status) {
    return formEntries?.map((datum, index) => {
      if (datum.taskStatus === status) {
        return <CommonCard key={index} {...datum} />;
      }
    });
  }

  return (
    <>
      {/* <div className=" flex justify-center mt-4">
        <CommonBtn buttonName={"Add Task"} buttonOnClick={showModalFn} />
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto mt-10 gap-10">
        <div className=" bg-gray-500/30 p-2 max-h-[600px] overflow-auto overflow-y-auto rounded-md">
          <div className="flex justify-center items-center">
            <h2 className=" text-2xl text-black/50 font-medium">Todo</h2>
          </div>
          {Cards("Todo")}
        </div>

        <div className=" bg-gray-500/30 p-2 max-h-[600px] overflow-auto overflow-y-auto rounded-md">
          <div className="flex justify-center items-center">
            <h2 className=" text-2xl text-black/50 font-medium">In-Process</h2>
          </div>
          {Cards("In-Process")}
        </div>

        <div className=" bg-gray-500/30 p-2 max-h-[600px] overflow-auto overflow-y-auto rounded-md">
          <div className="flex justify-center items-center">
            <h2 className=" text-2xl text-black/50 font-medium">Done</h2>
          </div>
          {Cards("Done")}
        </div>
      </div>

      {showForm && <PopUp />}
    </>
  );
};

export default TrelloBoard;
