import React from "react";
import CourseBlock from "./CourseBlock";
import classes from "./CoursesContainer.module.css";
import { courses } from "./course-list";
import "./swiper.css";

const CoursesContainer = () => {
  return (
    <div className={classes.container + " " + classes["custom-scrollbar"]}>
      {courses.map((course, i) => {
        return (
          <CourseBlock course_image={course.image} link={course.link} key={i}>
            {course.name}
          </CourseBlock>
        );
      })}
    </div>
  );
};

export default CoursesContainer;
