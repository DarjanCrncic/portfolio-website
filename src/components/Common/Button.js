import React from "react";
import classes from "./Button.module.css";
var Scroll = require("react-scroll");
var scroller = Scroll.scroller;

const Button = (props) => {
  const click = () => {
    scroller.scrollTo(props.navigate, {
      duration: 500,
      delay: 50,
      smooth: true,
      offset: -75, // Scrolls to element + 50 pixels down the page
    });
  };
  return (
    <button className={classes.standardButton} onClick={click}>
      {props.children}
    </button>
  );
};

export default Button;
