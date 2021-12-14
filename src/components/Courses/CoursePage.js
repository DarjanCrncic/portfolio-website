import React from "react";
import Page from "../Common/Page";
import PageDescription from "../Common/PageDescription";
import Title from "../Common/Title";
import CoursesContainer from "./CoursesContainer";

const CoursePage = () => {
  return (
    <Page color={"green"} scroll="courses">
      <Title>My Courses</Title>
      <PageDescription>
        Online courses play a big part in my growth as a web developer. The first thing I do when learning a new skill is going through an Udemy course. I believe they are a great stepping stone when starting off with something new. In this section you can browse through most of the online courses I've taken.
      </PageDescription>
      <CoursesContainer />
    </Page>
  );
};

export default CoursePage;
