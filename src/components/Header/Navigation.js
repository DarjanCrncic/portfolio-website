import React from "react";
import NavigationButton from "./NavigationButton";
import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={classes.navigation}>
      <NavigationButton>Ovdje</NavigationButton>
      <NavigationButton>Ovdje 2</NavigationButton>
      <NavigationButton>Ovdje 3</NavigationButton>
    </div>
  );
};

export default Navigation;
