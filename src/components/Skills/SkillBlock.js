import React from "react";
import classes from "./SkillBlock.module.css";

const SkillBlock = (props) => {
  return (
    <div className={classes.block}>
      <h4>{props.title}</h4>
      <hr />
      <ul>
        {props.list.map((skill, i) => {
          return <li key={i}>{skill.text}</li>;
        })}
      </ul>
    </div>
  );
};

export default SkillBlock;
