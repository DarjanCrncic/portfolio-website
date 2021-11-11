import React from "react";
import classes from "./ImageElement.module.css";

const ImageElement = () => {
  return (
    <div className={classes.imageHolder}>
      <img src="slika_posao-modified.png" alt="me"></img>
    </div>
  );
};

export default ImageElement;
