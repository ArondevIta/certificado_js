import React from "react";

import Menu from "./Menu";

function DashboardStudent() {
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("userId");
  return (
    <>
      <Menu />
      <h1 style={{ color: "#FFF" }}>{id}</h1>
    </>
  );
}

export default DashboardStudent;
