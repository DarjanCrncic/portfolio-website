import React from "react";

const Page = (props) => {
  return (
    <div
      style={{

        display: "block",
        paddingTop: "25px",
        backgroundColor: props.color,
        paddingBottom: "40px",
      }}
    >
      {props.children}
    </div>
  );
};

export default Page;
