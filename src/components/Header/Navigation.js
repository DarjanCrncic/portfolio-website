import React from "react";
import NavigationButton from "./NavigationButton";
import classes from "./Navigation.module.css";
import { sections } from "./navigation-list";

const Navigation = () => {
  return (
    <div className={classes.navigation}>
      {sections.map(section => {
        return <NavigationButton navigate={section.navigate}>{section.title}</NavigationButton>
      })}
    </div>
  );
};

export default Navigation;
