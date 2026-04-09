import React from "react";
import { Outlet } from "react-router-dom";

function Body() {
  return (
    <div id="details">
      <Outlet />
    </div>
  );
}

export default Body;
