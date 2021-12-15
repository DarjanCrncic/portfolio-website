import React from "react";
import classes from "./PageDescription.module.css";

const PageDescription = (props) => {
  return (
    <React.Fragment>
      <div className={classes.container}>
        <div className={classes.background}>{props.children}</div>
      </div>
      <hr className={classes.break} />
    </React.Fragment>
  );
};

export default PageDescription;
