import React from "react";
import Page from "../Common/Page";
import TextBlock from "../Common/TextBlock";
import ImageElement from "./ImageElement";
import classes from "./IntroPage.module.css";

const IntroPage = () => {
  return (
    <Page color={"white"}>
      <div className={classes.textHolder}>
        <ImageElement />
        <TextBlock style={{width: "60%", margin: "auto", boxShadow: "none", textAlign: "center"}}>
          Hi there! My name is Darjan and welcome to my site!. I'm a young developer focusing in backend development with Java and Spring Boot. 
          The idea behind this website is to showcase me, my skills and my work through something other than a traditional CV.
        </TextBlock>
      </div>
    </Page>
  );
};

export default IntroPage;
