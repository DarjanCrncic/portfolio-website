import React from "react";
import HamburgerButton from "./HamburgerButton";
import classes from "./HamburgerPopup.module.css";

const HamburgerPopup = () => {
  return <div className={classes.popup}>
    <HamburgerButton>Ovdje</HamburgerButton>
    <HamburgerButton>Ovdje 2</HamburgerButton>
    <HamburgerButton>Ovdje 3</HamburgerButton>
  </div>;
};

export default HamburgerPopup;
