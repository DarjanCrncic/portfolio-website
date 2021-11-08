import React, { useEffect, useRef, useState } from "react";
import classes from "./Hamburger.module.css";
import HamburgerPopup from "./HamburgerPopup";

const Hamburger = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const ref = useRef();

  const handleHamburgerClick = () => {
    setShowDropdown((prevState) => !prevState);
  };

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (showDropdown && ref.current && !ref.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [showDropdown]);

  return (
    <div ref={ref} className={classes.container}>
      <div className={classes.hamburgerIcon}>
        <i
          className={"fas fa-bars"}
          onClick={handleHamburgerClick}
        ></i>
      </div>
      {showDropdown && <HamburgerPopup />}
    </div>
  );
};

export default Hamburger;
