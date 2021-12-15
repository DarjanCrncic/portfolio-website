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
        <TextBlock>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          congue vulputate lectus, vel varius odio sagittis sed. Aenean vitae
          urna ac felis dapibus sodales. Pellentesque fringilla sapien id
          venenatis maximus. Sed at magna nec libero consequat commodo. Integer
          sit amet ante ac ex sodales varius. Proin tristique justo vel nibh
          dictum auctor. Donec vulputate tincidunt nunc.
        </TextBlock>
      </div>
    </Page>
  );
};

export default IntroPage;
