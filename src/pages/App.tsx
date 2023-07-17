import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      <div className="h-fit w-full fixed z-50">
        <Header />
      </div>
      <div className="w-full pt-20 overflow-x-hidden">
        <Outlet />
      </div>
    </div>
  );
}
