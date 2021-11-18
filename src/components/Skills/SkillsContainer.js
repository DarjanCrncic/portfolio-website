import React from "react";
import SkillBlock from "./SkillBlock";
import classes from "./SkillsContainer.module.css";
import {strong, proficient, novice} from "./skills-list";

const SkillsContainer = () => {
  return (
    <div className={classes.container}>
      <SkillBlock title={"Strong"} list={strong} />
      <SkillBlock title={"Proficient"}  list={proficient}/>
      <SkillBlock title={"Novice"} list={novice}/>
    </div>
  );
};

export default SkillsContainer;
