import React from "react";
import PhotoGallery from "./PhotoGallery";

/* export const competitions = {
  comp1: "MonoVisions Photography Awards",
  comp2: "Grand Press Photo",
  comp3: "Fine Art Photography Awards",
  comp4: "Sony World Photograpy Awards",
}; */

const colorFont = {
  color: "#4782c1",
  margin: "70px 30px 70px 30px",
};

const Challenges = () => {
  return (
    <div className="container ">
      <h1 style={colorFont}> Wyróżnienia w konkursach fotograficznych</h1>
      <PhotoGallery />
    </div>
  );
};
export default Challenges;
