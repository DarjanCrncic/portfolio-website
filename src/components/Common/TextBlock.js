import React from "react";
import classes from "./TextBlock.module.css";

const TextBlock = (props) => {
  return <div className={classes.background}>{props.children}</div>;
};

export default TextBlock;
