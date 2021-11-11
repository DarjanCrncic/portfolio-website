import React from "react";
import classes from "./CoursePage.module.css";
import CoursesContainer from "./CoursesContainer";

const CoursePage = () => {
  return (
    <div className={classes.background}>
      <h1 className={classes.title}>heeloo</h1>
      <CoursesContainer />
    </div>
  );
};

export default CoursePage;
