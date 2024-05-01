import React from "react";

const CommonDropDown = ({ options }) => {
  return (
    <select className="flex-1 p-2 outline-none m-2 rounded-md border-b-2">
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default CommonDropDown;
