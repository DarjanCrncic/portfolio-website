import React, { useState } from "react";
import NavigationButton from "./NavigationButton";
import classes from "./Navigation.module.css";
import { sections } from "./navigation-list";

const Navigation = () => {
  const [activeButton, setActiveButton] = useState("");

  return (
    <div className={classes.navigation}>
      {sections.map((section) => {
        return (
          <NavigationButton
            navigate={section.navigate}
            key={section.title}
            activeButton={activeButton}
            setActiveButton={setActiveButton}
          >
            {section.title}
          </NavigationButton>
        );
      })}
    </div>
  );
};

export default Navigation;
