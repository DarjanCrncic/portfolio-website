import React from "react";
import Button from "../../Common/Button";
import classes from "./HamburgerButton.module.css";

const HamburgerButton = (props) => {
  return (
    <div className={classes.hambButton}>
      <Button onClick={props.onClick}>{props.children}</Button>
    </div>
  );
};

export default HamburgerButton;
