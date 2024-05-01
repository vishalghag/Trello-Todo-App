import { XMarkIcon } from "@heroicons/react/16/solid";
import React from "react";
import CommonInput from "../common/CommonInput";
import CommonTextArea from "../common/CommonTextArea";
import CommonDropDown from "../common/CommonDropDown";
import CommonBtn from "../common/CommonBtn";

const PopUp = ({
  closeModalFn,
  statusOptions,
  addTaskFn,
  descriptionInputState,
  titleInputState,
  title,
  description,
  titleErrorStatus,
  descriptionErrorStatus,
}) => {
  return (
    <>
      <div
        className=" fixed left-0 right-0 top-0 bottom-0 bg-black bg-opacity-50"
        onClick={closeModalFn}
      ></div>
      <div className="fixed w-[300px] h-[350px] md:w-[500px] md:h-[500px] bg-white/70 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40">
        <div className="float-end">
          <XMarkIcon
            className=" w-8 h-8  my-1 cursor-pointer"
            onClick={closeModalFn}
          />
        </div>
        <div className=" flex justify-center mt-[15%] w-full">
          <CommonInput
            inputType={"text"}
            placeholderText={"Enter title"}
            valueState={title}
            monitorState={titleInputState}
            errorState={
              titleErrorStatus
                ? "Title can not be empty and less than 4 char"
                : ""
            }
          />
        </div>
        <div className=" flex justify-center mt-[4%] w-full">
          <CommonTextArea
            inputType={"text"}
            placeholderText={"Enter Description"}
            valueState={description}
            monitorState={descriptionInputState}
            errorState={
              descriptionErrorStatus
                ? "Description can not be empty and less than 50 char"
                : ""
            }
          />
        </div>
        <div className=" flex justify-center mt-[4%] w-full">
          <CommonDropDown options={statusOptions} />
        </div>
        <div className=" flex justify-center mt-[4%] w-full">
          <CommonBtn buttonName={"Add Task"} buttonOnClick={addTaskFn} />
        </div>
      </div>
    </>
  );
};

export default PopUp;
