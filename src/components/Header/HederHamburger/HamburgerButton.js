import React from "react";
import classes from "./HamburgerButton.module.css";

const HamburgerButton = (props) => {
  return <div className={classes.hambButton}>{props.children}</div>;
};

export default HamburgerButton;
