import React from "react";

const Page = (props) => {
  return <div style={{ height: "100vh", display: "block"}}>{props.children}</div>;
};

export default Page;
