import React, { useState } from "react";
import HamburgerButton from "./HamburgerButton";
import classes from "./HamburgerPopup.module.css";
import { sections } from "../navigation-list";
const HamburgerPopup = () => {
  const [activeButton, setActiveButton] = useState("");

  return (
    <div className={classes.popup}>
      {sections.map((section) => {
        return (
          <HamburgerButton
            navigate={section.navigate}
            key={section.title}
            activeButton={activeButton}
            setActiveButton={setActiveButton}
          >
            {section.title}
          </HamburgerButton>
        );
      })}
    </div>
  );
};

export default HamburgerPopup;
