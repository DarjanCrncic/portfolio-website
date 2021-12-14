import React from "react";
import classes from "./CourseBlock.module.css";
const CourseBlock = (props) => {
  return (
    <div className={classes.course}>
      <img src={props.course_image} alt="course"></img>
      <div className={classes.textContainer}>
        <h3>{props.children}</h3>
        <a href={props.link} target="_blank" rel="noreferrer noopener">See course</a>
      </div>
    </div>
  );
};

export default CourseBlock;
