import React from "react";
import Page from "../Common/Page";
import PageDescription from "../Common/PageDescription";
import Title from "../Common/Title";
import SkillsContainer from "./SkillsContainer";

const SkillsPage = () => {
  return (
    <Page color={"var(--light)"} scroll="skills">
      <Title>My Skills</Title>
      <PageDescription style={{backgroundColor: "transparent"}}>
        In 2020. I graduated from Faculty of Electrical Engineering and Computing with a masters degree in electrical engineering and information technology. 
        Towards the end of my studies, I discovered a passion for web development and have been pursuing it ever since. In this section I listed some of the skills I accumulated throughout my eduction, both during and after academic studies.
      </PageDescription>
      <SkillsContainer />
    </Page>
  );
};
export default SkillsPage;
