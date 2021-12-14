import React from "react";
import classes from "./ProjectBlock.module.css";

const ProjectBlock = (props) => {
  const project = props.project;
  return (
    <div className={classes.background}>
      <div className={classes.imageHolder}>
        <a href={project.link} target="_blank" rel="noreferrer noopener">
          <img src={project.image} alt="s"></img>
        </a>
      </div>
      <div className={classes.textHolder}>
        <h6>{project.name}</h6>
        <p>
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectBlock;
