import React from "react";
import TextBlock from "./TextBlock";
import classes from "./PageDescription.module.css";

const PageDescription = (props) => {
  return (
    <div className={classes.container}>
      <TextBlock>{props.children}</TextBlock>
    </div>
  );
};

export default PageDescription;
