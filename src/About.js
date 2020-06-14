import React from "react";
import Author from "./components/Author";

import "./About.css";
import Challenges from "./components/Challenges";

const About = (props) => {
  return (
    <div className="container-about">
      <Author />
      <Challenges style={props.styleHeader} />
    </div>
  );
};
export default About;
