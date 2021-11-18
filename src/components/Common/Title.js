import React from "react";

const Title = (props) => {
  return (
    <h1
      style={{
        display: "block",
        padding: "30px",
        margin: 0,
      }}
    >
      {props.children}
    </h1>
  );
};

export default Title;
