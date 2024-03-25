import React from "react";
import HeadAssurance from "../component/HeadAssurance";
import SideImage from "../component/SideImage";
import FormAssurance from "../component/FormAssurance";

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
        <HeadAssurance />
        <hr />
      </div>
      <FormAssurance />
    </div>
  );
};

export default Assurance;
