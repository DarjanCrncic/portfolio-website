import React from "react";
import Page from "../Common/Page";
import classes from "./CoursePage.module.css";
import CoursesContainer from "./CoursesContainer";

const CoursePage = () => {
  return (
    <Page>
      <h1 className={classes.title}>heeloo</h1>
      <CoursesContainer />
    </Page>
  );
};

export default CoursePage;
