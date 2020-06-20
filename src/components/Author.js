import React from "react";
import { My_photo } from "../assets";

const styleInfo = {
  padding: "0px 20px 20px",
};
const styleHeader = {
  color: "#4782c1",
};

const Author = () => {
  return (
    <section>
      <div className="container-img justify-content-center">
        <div className="row">
          <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <img
              className="img-fluid rounded"
              src={My_photo}
              alt="What I look like"
            />
          </div>
          <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <div className="info" style={styleInfo}>
              <h1 style={styleHeader}>Edith Lewinsky </h1>
              <p
                className="lead"
                style={{ marginTop: "30px", marginBottom: "30px" }}
              >
                Jestem niezależnym fotografem specjalizującym się m.in. w
                fotografii krajobrazowej, reklamowej i eventowej. <br></br>
                Posiadam wieloletnie doświadczenie w organizowaniu i
                przeprowadzaniu sesji zdjęciowych. Znam tajniki fotografii oraz
                zasady kompozycji.
              </p>
              <p className="lead">
                Często biorę udział w ogólnoświatowych i krajowych konkursach
                fotograficznych oraz różnego rodzaju szkoleniach.
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="lead" style={{ textAlign: "center", padding: "0 50px" }}>
        Od 5 lat prowadzę kursy i warsztaty fotograficzne, z których skorzystało
        już
        <span style={{ fontWeight: "bold", color: "red" }}> 1030 </span> osób.
        Łącznie przeszkoliłam{" "}
        <span style={{ fontWeight: "bold", color: "red" }}> 10332 </span> osób.
        Obecnie część z nich prowadzi własne biznesy.
      </p>
    </section>
  );
};

export default Author;
