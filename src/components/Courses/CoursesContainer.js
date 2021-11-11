import React from "react";
import CourseBlock from "./CourseBlock";
import classes from "./CoursesContainer.module.css";

const CoursesContainer = () => {
  return (
    <div className={classes.container + " " + classes["custom-scrollbar"]}>
      <CourseBlock>
        Spring Boot Security and oAuth2 in depth from scratch
      </CourseBlock>
      <CourseBlock>Titple</CourseBlock>
      <CourseBlock>Titple</CourseBlock>
      <CourseBlock>Titple</CourseBlock>
      <CourseBlock>
        Spring Boot Security and oAuth2 in depth from scratch
      </CourseBlock>
      <CourseBlock>Titple</CourseBlock>
      <CourseBlock>Titple</CourseBlock>
      <CourseBlock>Titple</CourseBlock>
      <CourseBlock>
        Spring Boot Security and oAuth2 in depth from scratch
      </CourseBlock>
      <CourseBlock>Titple</CourseBlock>
      <CourseBlock>Titple</CourseBlock>
      <CourseBlock>Titple</CourseBlock>
      <CourseBlock>
        Spring Boot Security and oAuth2 in depth from scratch
      </CourseBlock>
      <CourseBlock>Titple</CourseBlock>
      <CourseBlock>Titple</CourseBlock>
      <CourseBlock>Titple</CourseBlock>
    </div>
  );
};

export default CoursesContainer;
