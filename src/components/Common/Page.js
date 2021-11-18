import React from "react";

const Page = (props) => {
  return (
    <div style={{ height: "calc(100vh - 75px)", display: "block", paddingTop: "75px", backgroundColor: props.color}}>
      {props.children}
    </div>
  );
};

export default Page;
