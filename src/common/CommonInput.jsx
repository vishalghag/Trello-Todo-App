import React from "react";

const CommonInput = ({ placeholderText, inputType }) => {
  return (
    <>
      <input
        type={inputType}
        placeholder={placeholderText}
        className="flex-1 p-2 outline-none  m-2 rounded-md"
      />
    </>
  );
};

export default CommonInput;
