import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center relative h-fit w-full bg-white">
      <div className="py-5 px-4 cursor-pointer ">
        <Logo className="w-24 h-5" onClick={() => navigate("/")} />
      </div>
      <div className="py-3 flex w-full max-w-[700px] items-center mx-auto pr-32">
        <input type="text" className="border-solid border-2 border-borderColor focus:border-borderActive outline-none rounded-l-full h-11 w-full px-4" />
        <button className="rounded-r-full border-solid border-2 border-l-0 border-borderColor bg-button h-11 w-16 align-middle items-center flex justify-center hover:border-buttonHoverBorder hover:bg-buttonHover">
          <BsSearch />
        </button>
      </div>
    </div>
  );
}
