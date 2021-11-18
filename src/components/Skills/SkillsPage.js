import React from "react";
import Page from "../Common/Page";
import Title from "../Common/Title";
import SkillsContainer from "./SkillsContainer";

const SkillsPage = () => {
  return (
    <Page scroll="skills">
      <Title>My Skills</Title>
      <SkillsContainer />
    </Page>
  );
};
export default SkillsPage;
