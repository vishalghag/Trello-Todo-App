import { XMarkIcon } from "@heroicons/react/16/solid";
import React, { useState } from "react";
import CommonInput from "../common/CommonInput";
import CommonTextArea from "../common/CommonTextArea";
import CommonDropDown from "../common/CommonDropDown";
import CommonBtn from "../common/CommonBtn";
import { useAtom, useSetAtom } from "jotai";
import {
  addFormValues,
  formValuesAtom,
  showFormAtom,
  updateFormValuesAtom,
} from "../store/board";

const PopUp = () => {
  const addFormEntries = useSetAtom(addFormValues);
  const [formValues, setFormValues] = useAtom(formValuesAtom);
  const setShowForm = useSetAtom(showFormAtom);
  const updateFormValues = useSetAtom(updateFormValuesAtom);
  const [titleErrorStatus, setTitleErrorStatus] = useState(false);
  const [descriptionErrorStatus, setDescriptionErrorStatus] = useState(false);

  function handleFormSubmit() {
    if (!formValues.title || formValues.title.length < 4) {
      setTitleErrorStatus(true);
    } else {
      setTitleErrorStatus(false);
    }

    if (!formValues.description || formValues.description.length < 20) {
      setDescriptionErrorStatus(true);
    } else {
      setDescriptionErrorStatus(false);
    }

    if (
      formValues.title &&
      formValues.description &&
      formValues.title.length >= 4 &&
      formValues.description.length >= 25
    ) {
      if (formValues.isEdit) {
        updateFormValues(formValues);
        closeModalFn();
      } else {
        addFormEntries(formValues);
        closeModalFn();
      }
      setShowForm(false);
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  const closeModalFn = () => {
    setShowForm(false);
    setFormValues({
      title: null,
      description: null,
      taskStatus: null,
    });
  };

  return (
    <>
      <div
        className=" fixed left-0 right-0 top-0 bottom-0 bg-black bg-opacity-50"
        onClick={closeModalFn}
      ></div>
      <div className="p-2 fixed w-[300px] h-[350px] md:w-[500px] md:h-[500px] bg-white/70 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 rounded-lg">
        <div className="float-end mr-2">
          <XMarkIcon
            className=" w-8 h-8  my-1 cursor-pointer"
            onClick={closeModalFn}
          />
        </div>
        <div className=" flex justify-center mt-[15%] w-full">
          <CommonInput
            inputType={"text"}
            placeholderText={"Enter title"}
            valueState={formValues.title}
            monitorState={handleChange}
            errorState={
              titleErrorStatus
                ? "Title can not be empty and less than 4 char"
                : ""
            }
            name={"title"}
          />
        </div>
        <div className=" flex justify-center mt-[4%] w-full">
          <CommonTextArea
            inputType={"text"}
            placeholderText={"Enter Description"}
            valueState={formValues.description}
            monitorState={handleChange}
            errorState={
              descriptionErrorStatus
                ? "Description can not be empty and less than 25 char"
                : ""
            }
            name="description"
          />
        </div>
        {!formValues.isEdit ? (
          <div className=" flex justify-center mt-[4%] w-full">
            <CommonDropDown
              options={["Select Task", "Todo", "In-Process", "Done"]}
              currentOption={formValues?.taskStatus}
              setOption={handleChange}
              name={"taskStatus"}
            />
          </div>
        ) : null}

        <div className=" flex justify-center md:mt-[20%] mt-[9%] w-full">
          <CommonBtn
            buttonName={formValues.isEdit ? "Update Task" : "Add Task"}
            buttonOnClick={handleFormSubmit}
          />
        </div>
      </div>
    </>
  );
};

export default PopUp;
