import React from "react";
import { TRELLO_LOGO } from "../utils/constant";
// import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import CommonBtn from "../common/CommonBtn";
import CommonInput from "../common/CommonInput";

const Header = () => {
  return (
    <header>
      <div className="flex flex-col items-center p-5 bg-gray-500/10 rounded-b-2xl md:flex-row">
        <div className=" absolute  left-0 right-0 bottom-0 top-0 w-[100%] h-98 bg-gradient-to-br from-pink-400 to-[#0055D1] rounded-md filter blur-3xl opacity-50 -z-50" />
        <img
          src={TRELLO_LOGO}
          alt="logo"
          className="w-44 md:w-56 object-contain pb-10 md:pb-0 ml-3 "
        />

        <div className="flex items-center space-x-5 flex-1 justify-end w-full">
          <form className=" flex items-center space-x-5 p-2 shadow-md rounded-md flex-1 md:flex-initial ">
            <CommonInput inputType={"text"} placeholderText={"Search"} />
            <CommonBtn buttonName={"Search"} />
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
