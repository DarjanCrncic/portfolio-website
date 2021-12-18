import React, { useState } from "react";
import PageContext from "./page-context";

const PageContextProvider = (props) => {
  const [currentPageState, setCurrentPageState] = useState("");

  const updateCurrentPageState = (page => {
    console.log(page);
    setCurrentPageState(page);
  });

  const pageContext = {
    currentPage: currentPageState,
    changeCurrentPage: updateCurrentPageState,
  };

  return (
    <PageContext.Provider value={pageContext}>
      {props.children}
    </PageContext.Provider>
  );
};

export default PageContextProvider;