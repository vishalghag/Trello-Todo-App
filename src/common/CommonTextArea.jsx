import React from "react";

const CommonTextArea = ({
  inputType,
  placeholderText,
  errorState,
  valueState,
  monitorState,
  name,
}) => {
  return (
    <>
      <textarea
        name={name}
        type={inputType}
        placeholder={placeholderText}
        value={valueState}
        onChange={monitorState}
        className="flex-1 p-2 outline-none m-2 rounded-md border-b-2"
      />
      <div className="absolute left-4 mt-[73px] ">
        <span className="text-red-500 md:font-medium md:text-[1rem] font-thin text-[12px]">
          {errorState}
        </span>
      </div>
    </>
  );
};

export default CommonTextArea;
