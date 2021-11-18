import React from "react";
import classes from "./ContactData.module.css";

const ContactData = () => {
  return <div className={classes.container}>
    <a href="mailto:darjancr@gmail.com">Email: darjancr@gmail.com</a>
    <a href="https://www.linkedin.com/in/darjan-crn%C4%8Di%C4%87-6b04571a4/">LinkedIn</a>
    <a href="https://github.com/DarjanCrncic">GitHub</a>
  </div>;
};

export default ContactData;
