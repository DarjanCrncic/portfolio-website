import React from "react";
import NavigationButton from "./NavigationButton";
import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={classes.navigation}>
      <NavigationButton navigate={"skills"}>Skills</NavigationButton>
      <NavigationButton navigate={"projects"}>Projects</NavigationButton>
      <NavigationButton navigate={"courses"}>Courses</NavigationButton>
      <NavigationButton navigate={"contact"}>Contact</NavigationButton>
    </div>
  );
};

export default Navigation;
