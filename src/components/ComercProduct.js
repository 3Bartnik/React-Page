import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { kom6, kom1, kom2, kom3, kom4, kom5 } from "../assets/";

const headerStyle = {
  margin: "auto",
  color: "#4782c1",
};

const ComercProduct = () => {
  return (
    <div className="container inner">
      <div className="row" style={{ marginTop: "50px" }}>
        <div className="col-sm-3 m-auto" style={{ width: "25%" }}>
          <h3 style={headerStyle}>Fotografia produktowa</h3>
          <p className="lead" style={{ marginTop: "20px" }}>
            Sednem tej fotografii jest jak najlepsze zaprezentowanie produktu.
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
                      src={kom1}
                      alt=""
                      height="450rem"
                      max-width="100%"
                    />
                  </div>
                  <div className="col-md-6">
                    <img
                      className="d-block img-responsive"
                      src={kom2}
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
                      src={kom3}
                      alt=""
                      height="450rem"
                      max-width="100%"
                    />
                  </div>
                  <div className="col-md-6">
                    <img
                      className="d-block img-responsive"
                      src={kom4}
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
                      src={kom5}
                      alt=""
                      height="450rem"
                      max-width="100%"
                    />
                  </div>
                  <div className="col-md-6">
                    <img
                      className="d-block img-responsive"
                      src={kom6}
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
export default ComercProduct;
