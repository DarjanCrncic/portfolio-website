import React from "react";
import Page from "../Common/Page";
import classes from "./StartPage.module.css";

const StartPage = () => {
  return (
    <div
      className={classes.background}
      style={{ backgroundImage: "url(/backdrop.png)" }}
    >
      <div className={classes.textHolder}>
        <h1 className={classes.nameIntro}>I'm Darjan</h1>
        <h1 className={classes.textIntro}>a web-developer.</h1>
      </div>
    </div>
  );
};

export default StartPage;
