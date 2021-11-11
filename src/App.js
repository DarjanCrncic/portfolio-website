import React from "react";
import CoursePage from "./components/Courses/CoursePage";
import Header from "./components/Header/Header";
import IntroPage from "./components/Intro/IntroPage";

function App() {
  return <React.Fragment>
    <Header />
    <IntroPage />
    <CoursePage />
  </React.Fragment>;
}

export default App;
