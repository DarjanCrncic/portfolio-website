import React from "react";
import ContactPage from "./components/Contact/ContactPage";
import CoursePage from "./components/Courses/CoursePage";
import Header from "./components/Header/Header";
import IntroPage from "./components/Intro/IntroPage";
import ProjectsPage from "./components/Projects/ProjectsPage";
import SkillsPage from "./components/Skills/SkillsPage";

function App() {
  return <React.Fragment>
    <Header />
    <IntroPage />
    <SkillsPage />
    <ProjectsPage />
    <CoursePage />
    <ContactPage />
  </React.Fragment>;
}

export default App;
