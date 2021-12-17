import React, { useEffect, useRef, useState } from "react";
var Scroll = require("react-scroll");
var Element = Scroll.Element;

const Page = (props) => {
  const ref = useRef();
  const [isVisible, setState] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log(props.scroll + " " + entry.isIntersecting);
        setState(entry.isIntersecting);
      },
      { threshold: "0.5" }
    );

    ref && observer.observe(ref.current);

    return () => observer.unobserve(ref);
  }, []);

  return (
    <div
      ref={ref}
      style={{
        display: "block",
        backgroundColor: props.color,
        padding: "60px 0 100px",
      }}
    >
      <Element name={props.scroll}></Element>
      {props.children}
    </div>
  );
};

export default Page;
