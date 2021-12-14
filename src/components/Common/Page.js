import React from "react";
var Scroll   = require('react-scroll');
var Element  = Scroll.Element;

const Page = (props) => {
  return (
    <div
      style={{
        display: "block",
        paddingTop: "25px",
        backgroundColor: props.color,
        paddingBottom: "40px",
        padding: "50px 0"
      }}
    >
      <Element name={props.scroll}></Element>
      {props.children}
    </div>
  );
};

export default Page;
