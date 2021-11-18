import React from "react";
import classes from "./HeaderTitle.module.css";

const HeaderTitle = (props) => {
  return <div className={classes.title}>{props.children}</div>;
};

export default HeaderTitle;
