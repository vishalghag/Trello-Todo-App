import React from "react";

const CommonBtn = ({ buttonName, buttonOnClick }) => {
  return (
    <button
      onClick={buttonOnClick}
      className="block bg-blue-600 text-white py-2 px-8 rounded-md shadow-lg transform transition-transform duration-200 ease-in-out active:scale-95"
    >
      {buttonName}
    </button>
  );
};

export default CommonBtn;
