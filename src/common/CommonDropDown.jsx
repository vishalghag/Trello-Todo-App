import React from "react";

const CommonDropDown = ({ options, currentOption, setOption, name }) => {
  return (
    <>
      {/* <label>
        Task Status */}
      <select
        className="flex-1 p-2 outline-none m-2 rounded-md border-b-2"
        name={name}
        onChange={setOption}
        value={currentOption}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {/* </label> */}
    </>
  );
};

export default CommonDropDown;
