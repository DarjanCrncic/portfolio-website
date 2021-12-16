import React from "react";
import Button from "../Common/Button";
import classes from "./NavigationButton.module.css";

const NavigationButton = (props) => {
  return (
    <div className={classes.navButton}>
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

export default NavigationButton;
