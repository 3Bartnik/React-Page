import React from "react";
import { CourseWork, Medal, PhotoNumber, Experience } from "../assets";

const frame = {
  background: "lightblue",
  borderRadius: "25px",
  width: "auto",
  height: "200px",
  paddingTop: "20px",
  backgroundColor: "#4396de",
  textAlign: "center",
  //display: "flex",
  display: "block",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  margin: "10px 0",
  boxShadow: "2px 3px 6px 0px #888888",
};
const NumberInWork = () => {
  return (
    <section>
      <div className="container d-flex flex-wrap justify-content-around">
        <div className="row" style={{ margin: "100px 0" }}>
          <div className="col-sm-6 col-md-3">
            <div style={frame}>
              <img src={Medal} width="50px" height="auto" alt="" />
              <h2>13</h2>
              <h5>Zwycięstwa w konkursach</h5>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div style={frame}>
              <img src={CourseWork} width="50px" height="auto" alt="" />
              <h2>850</h2>
              <h5>Ilość przeprowadzonych wartsztatów</h5>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div style={frame}>
              <img src={Experience} width="50px" height="auto" alt="" />
              <h2>5 lat</h2>
              <h5> Ilość doświadczenia</h5>
            </div>
          </div>

          <div className="col-sm-6 col-md-3">
            <div style={frame}>
              <img src={PhotoNumber} width="50px" height="auto" alt="" />
              <h2>480754</h2>
              <h5> Ilość wykonanych zdjęć</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NumberInWork;
