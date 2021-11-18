import React from "react";
import classes from "./Header.module.css";
import Hamburger from "./HederHamburger/Hamburger";
import Navigation from "./Navigation";
import HeaderTitle from "./HeaderTitle";

const Header = () => {
  return (
    <div className={classes.header}>
      <HeaderTitle>DC Portfolio</HeaderTitle>
      <Navigation />
      <Hamburger />
    </div>
  );
};

export default Header;
