import React, { useContext, useEffect } from "react";
import PageContext from "../../store/page-context";
import Button from "../Common/Button";
import classes from "./NavigationButton.module.css";

const NavigationButton = (props) => {

  const context = useContext(PageContext);
  useEffect(() => {
    if (context.currentPage === props.navigate) {
      props.setActiveButton(props.children);
    }
  }, [context.currentPage, props]);

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
