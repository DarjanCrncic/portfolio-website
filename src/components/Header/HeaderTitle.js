import React from "react";
import classes from "./HeaderTitle.module.css";
var Scroll = require("react-scroll");
var scroll = Scroll.animateScroll;

const HeaderTitle = (props) => {
  return (
    <div className={classes.container}>
      <button
        className={classes.title}
        onClick={() =>
          scroll.scrollToTop({
            duration: 500,
            delay: 50,
            smooth: true,
          })
        }
      >
        {props.children}
      </button>
    </div>
  );
};

export default HeaderTitle;
