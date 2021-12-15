import React from "react";

const Title = (props) => {
  return (
    <h1
      style={{
        display: "block",
        textAlign: "center",
        fontSize: "3rem",
        fontWeight: 500,
        color: "#11999e",
      }}
    >
      {props.children}
    </h1>
  );
};

export default Title;
