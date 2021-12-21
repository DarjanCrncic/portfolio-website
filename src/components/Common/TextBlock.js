import React from "react";
import classes from "./TextBlock.module.css";

const TextBlock = (props) => {
  return <div className={classes.background} style={props.style}>{props.children}</div>;
};

export default TextBlock;
