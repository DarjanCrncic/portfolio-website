import React from "react";
import CourseBlock from "./CourseBlock";
import classes from "./CoursesContainer.module.css";

const CoursesContainer = () => {
  let items = [];
  const generateCourse = () => {
    return (
      <CourseBlock
        course_image="logo192.png"
        link="https://www.w3schools.com/css/css_overflow.asp"
      >
        Spring Boot Security and oAuth2 in depth from scratch
      </CourseBlock>
    );
  };

  for (let i = 0; i < 20; i++) {
    items.push(generateCourse());
  }

  return (
    <div className={classes.container + " " + classes["custom-scrollbar"]}>
      {items}
    </div>
  );
};

export default CoursesContainer;
