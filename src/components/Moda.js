import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { moda0, moda1, moda2, moda3, moda4, moda5 } from "../assets/";

const headerStyle = {
  margin: "auto",
  color: "#4782c1",
};

const Moda = () => {
  return (
    <div className="container inner">
      <div className="row">
        <div className="col-sm-3 m-auto" style={{ width: "25%" }}>
          <h3 style={headerStyle}>Fotografia modowa</h3>
          <p className="lead" style={{ marginTop: "20px" }}>
            Łączy w sobie fotografię reklamową i fotografię produktu. Sednem
            jest tu przedstawienie odzieży, obuwia lub dodatków.
          </p>
        </div>
        <div className="col-sm-9" style={{ width: "75%" }}>
          <div className="hidden-xs">
            <Carousel>
              <Carousel.Item className="h-100 w-100">
                <div className="row">
                  <div className="col-md-6">
                    <img
                      className="d-block img-responsive"
                      src={moda0}
                      alt=""
                      height="450rem"
                      max-width="100%"
                    />
                  </div>
                  <div className="col-md-6">
                    <img
                      className="d-block img-responsive"
                      src={moda1}
                      alt=""
                      height="450rem"
                      max-width="100%"
                    />
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item className="h-100 w-100">
                <div className="row">
                  <div className="col-md-6">
                    <img
                      className="d-block img-responsive"
                      src={moda2}
                      alt=""
                      height="450rem"
                      max-width="100%"
                    />
                  </div>
                  <div className="col-md-6">
                    <img
                      className="d-block img-responsive"
                      src={moda3}
                      alt=""
                      height="450rem"
                      max-width="100%"
                    />
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item className="h-100 w-100">
                <div className="row">
                  <div className="col-md-6">
                    <img
                      className="d-block img-responsive"
                      src={moda4}
                      alt=""
                      height="450rem"
                      max-width="100%"
                    />
                  </div>
                  <div className="col-md-6">
                    <img
                      className="d-block img-responsive"
                      src={moda5}
                      alt=""
                      height="450rem"
                      max-width="100%"
                    />
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Moda;
