import React from "react";
import ContactPage from "./components/Contact/ContactPage";
import CoursePage from "./components/Courses/CoursePage";
import Header from "./components/Header/Header";
import IntroPage from "./components/Intro/IntroPage";
import StartPage from "./components/Intro/StartPage";
import ProjectsPage from "./components/Projects/ProjectsPage";
import SkillsPage from "./components/Skills/SkillsPage";
import PageContextProvider from "./store/PageContextProvider";

function App() {
  return (
    <PageContextProvider>
      <Header />
      <StartPage />
      <IntroPage />
      <SkillsPage />
      <ProjectsPage />
      <CoursePage />
      <ContactPage />
    </PageContextProvider>
  );
}

export default App;
