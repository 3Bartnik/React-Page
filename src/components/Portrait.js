import React from "react";
import {
  portrait1,
  portrait2,
  portrait3,
  portrait4,
  portrait5,
} from "../assets/";

const headerStyle = {
  marginTop: "50px",
  paddingBottom: "50px",
  color: "#4782c1",
  padding: "40px 0 0 0",
  textAlign: "center",
};

const Portrait = () => {
  return (
    <section style={{ backgroundColor: "rgb(236, 236, 236)" }}>
      <div>
        <h2 style={headerStyle}>Fotografia portretowa</h2>
        <p className="lead" style={{ padding: "0 50px", textAlign: "center" }}>
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
