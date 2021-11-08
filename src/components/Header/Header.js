import React from "react";
import classes from "./Header.module.css";
import Hamburger from "./HederHamburger/Hamburger";
import Navigation from "./Navigation";
import Title from "./Title";

const Header = () => {
  return <div className={classes.header}>
    <Title>Title Here</Title>
    <Navigation />
    <Hamburger />
  </div>;
};

export default Header;
