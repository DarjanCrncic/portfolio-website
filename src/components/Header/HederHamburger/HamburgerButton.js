import React from "react";
import Button from "../../Common/Button";
import classes from "./HamburgerButton.module.css";

const HamburgerButton = (props) => {
  return (
    <div className={classes.hambButton}>
      <Button
        navigate={props.navigate}
        setActiveButton={props.setActiveButton}
        active={props.activeButton === props.children}
      >
        {props.children}
      </Button>
    </div>
  );
};

export default HamburgerButton;
