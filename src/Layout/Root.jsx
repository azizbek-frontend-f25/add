import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="container m-auto">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
