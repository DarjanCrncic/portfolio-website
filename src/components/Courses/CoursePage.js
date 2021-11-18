import React from "react";
import Page from "../Common/Page";
import Title from "../Common/Title";
import CoursesContainer from "./CoursesContainer";

const CoursePage = () => {
  return (
    <Page color={"green"} scroll="courses">
      <Title>My Courses</Title>
      <CoursesContainer />
    </Page>
  );
};

export default CoursePage;
