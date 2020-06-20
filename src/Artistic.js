import React from "react";
import "./Artistic.css";
import Moda from "./components/Moda";
import Portrait from "./components/Portrait";
import ComercProduct from "./components/ComercProduct";

const headerStyle = {
  margin: "70px 100px",
  color: "#4782c1",
};

const Artistic = () => {
  return (
    <section>
      <h2 className="section-title text-center" style={headerStyle}>
        Portfolio
      </h2>
      <Moda />
      <Portrait />
      <ComercProduct />
    </section>
  );
};
export default Artistic;
