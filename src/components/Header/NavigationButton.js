import React from "react";
import classes from "./NavigationButton.module.css";

const NavigationButton = (props) => {
  return <div className={classes.navButton}>{props.children}</div>;
};

export default NavigationButton;
