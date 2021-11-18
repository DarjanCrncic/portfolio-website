import React from "react";
import classes from "./ProjectBlock.module.css";

const ProjectBlock = () => {
  return (
    <div className={classes.background}>
      <div className={classes.imageHolder}>
        <img src="galerija.png" alt="s"></img>
      </div>
      <div className={classes.textHolder}>
        <h6>Title</h6>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      </div>
    </div>
  );
};

export default ProjectBlock;
