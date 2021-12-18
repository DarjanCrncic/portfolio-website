import React, { useContext, useEffect, useRef } from "react";
import PageContext from "../../store/page-context";
var Scroll = require("react-scroll");
var Element = Scroll.Element;

const Page = (props) => {
  const context = useContext(PageContext);

  const ref = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          context.changeCurrentPage(props.scroll);
        }
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
