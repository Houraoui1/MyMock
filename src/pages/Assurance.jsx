import React from "react";
import Header from "../componants/Header";
import SideImage from "../componants/SideImage";
import Formualire from "../componants/Formualire";

const Assurance = () => {
  return (
    <div
      className="App"
      style={{ backgroundColor: "#EFEFEF", height: "100vh" }}
    >
      <div
        style={{
          boxSizing: "border-box",
          padding: "1%",
          fontSize: "130%",
          color: "#3385ff",
        }}
      >
        <Header />
        <hr />
      </div>
      <Formualire />
    </div>
  );
};

export default Assurance;
