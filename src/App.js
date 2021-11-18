import React from "react";
import CoursePage from "./components/Courses/CoursePage";
import Header from "./components/Header/Header";
import IntroPage from "./components/Intro/IntroPage";
import ProjectsPage from "./components/Projects/ProjectsPage";

function App() {
  return <React.Fragment>
    <Header />
    <IntroPage />
    <CoursePage />
    <ProjectsPage />
  </React.Fragment>;
}

export default App;
