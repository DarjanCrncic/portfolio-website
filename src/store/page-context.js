import React from "react";

const PageContext = React.createContext({
  currentPage: "",
  changeCurrentPage: (page) => {},
});

export default PageContext;