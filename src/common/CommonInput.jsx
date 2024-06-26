import React from "react";

const CommonInput = ({
  placeholderText,
  inputType,
  errorState,
  valueState,
  monitorState,
  name,
}) => {
  return (
    <>
      <input
        name={name}
        type={inputType}
        placeholder={placeholderText}
        value={valueState}
        onChange={monitorState}
        className="flex-1 p-2 outline-none  m-2 rounded-md border-b-2"
      />
      <div className="absolute left-4 mt-[49px] text-red-500 ">
        <span className=" text-red-500 md:font-medium md:text-[1rem] font-thin text-[12px] ">
          {errorState}
        </span>
      </div>
    </>
  );
};

export default CommonInput;
