import React from "react";
import {
  portrait1,
  portrait2,
  portrait3,
  portrait4,
  portrait5,
} from "../assets/";

const headerStyle = {
  margin: "100px 0",
  color: "#4782c1",
};

const Portrait = (props) => {
  return (
    <section style={{ backgroundColor: "rgb(236, 236, 236)" }}>
      <div>
        <h1 style={headerStyle}>Fotografia portretowa</h1>
        <p className="lead" style={{ padding: "0 30px" }}>
          Ten rodzaj fotografii skupia się na uchwyceniu w kadrze ludzi, mimiki
          twarzy, emocji dobrych, jak i tych złych.
        </p>
      </div>
      <div className="portrait-container" style={{ paddingBottom: "40px" }}>
        <img src={portrait1} alt="Man portrait" />
        <img src={portrait2} alt="" />
        <img src={portrait3} alt="" />
        <img src={portrait4} alt="" />
        <img src={portrait5} alt="" />
      </div>
    </section>
  );
};
export default Portrait;
