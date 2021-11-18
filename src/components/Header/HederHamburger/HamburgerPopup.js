import React from "react";
import HamburgerButton from "./HamburgerButton";
import classes from "./HamburgerPopup.module.css";
import { sections } from "../navigation-list";
const HamburgerPopup = () => {
  return (
    <div className={classes.popup}>
      {sections.map((section) => {
        return (
          <HamburgerButton navigate={section.navigate}>
            {section.title}
          </HamburgerButton>
        );
      })}
    </div>
  );
};

export default HamburgerPopup;
