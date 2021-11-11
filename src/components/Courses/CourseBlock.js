import React from "react";
import classes from "./CourseBlock.module.css";
const CourseBlock = (props) => {
  return (
    <div className={classes.course}>
      <img src="logo192.png" alt="course"></img>
      <div className={classes.textContainer}>
        <h3>{props.children}</h3>
        <a href="https://www.udemy.com/course/spring-boot-security-and-oauth2/">See course</a>
      </div>
    </div>
  );
};

export default CourseBlock;
