import React from "react";
import Carousel from "react-bootstrap/Carousel";
import {
  NationalG,
  cosmo,
  agora,
  newsweek,
  ikea,
  glamour,
  vogue,
  mondo,
} from "../assets/";
import "./Cooperation.css";

const styleCooperation = {
  margin: "15px 15px",
  height: "100px",
  width: "auto",
};

const fontColor = {
  color: "#4782c1",
  margin: "100px 0",
};

const Cooperation = (props) => {
  return (
    <section>
      <div>
        <h1 style={fontColor}>Dotychczasowo współpracowałam z:</h1>
      </div>
      <div className="row">
        <div className="col-12">
          <Carousel>
            <Carousel.Item className="h-100 w-100">
              <div className="row">
                <div
                  className="col-md-4"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "200px",
                    height: "100px",
                    justifyContent: "center",
                  }}
                >
                  <img
                    className="d-block img-responsive"
                    src={NationalG}
                    alt=""
                    max-width="100%"
                    style={styleCooperation}
                    display="block"
                    width="200vw"
                    height="50px"
                    margin="auto"
                  />
                </div>
                <div
                  className="col-md-4"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "200px",
                    height: "100px",
                    justifyContent: "center",
                  }}
                >
                  <img
                    className="d-block img-responsive"
                    src={cosmo}
                    alt=""
                    max-width="100%"
                    display="block"
                    width="200vw"
                    height="50px"
                    margin="auto"
                  />
                </div>
                <div
                  className="col-md-4"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "200px",
                    height: "100px",
                    justifyContent: "center",
                  }}
                >
                  <img
                    className="d-block img-responsive"
                    src={ikea}
                    alt=""
                    max-width="100%"
                    style={styleCooperation}
                    display="block"
                    width="200vw"
                    height="50px"
                    margin="auto"
                  />
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item className="h-100 w-100">
              <div className="row">
                <div
                  className="col-md-4"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "200px",
                    height: "100px",
                    justifyContent: "center",
                  }}
                >
                  <img
                    className="d-block img-responsive"
                    src={agora}
                    alt=""
                    max-width="100%"
                    style={styleCooperation}
                    display="block"
                    width="200vw"
                    height="50px"
                    margin="auto"
                  />
                </div>
                <div
                  className="col-md-4"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "200px",
                    height: "100px",
                    justifyContent: "center",
                  }}
                >
                  <img
                    className="d-block img-responsive"
                    src={newsweek}
                    alt=""
                    max-width="100%"
                    display="block"
                    width="200vw"
                    height="50px"
                    margin="auto"
                  />
                </div>
                <div
                  className="col-md-4"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "200px",
                    height: "100px",
                    justifyContent: "center",
                  }}
                >
                  <img
                    className="d-block img-responsive"
                    src={glamour}
                    alt=""
                    max-width="100%"
                    display="block"
                    width="200vw"
                    height="50px"
                    margin="auto"
                  />
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item className="h-100 w-100">
              <div className="row">
                <div
                  className="col-md-4 "
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "200px",
                    height: "100px",
                    justifyContent: "center",
                  }}
                >
                  <img
                    className="d-block img-responsive"
                    src={vogue}
                    alt=""
                    max-width="100%"
                    display="block"
                    width="200vw"
                    height="50px"
                    margin="auto"
                  />
                </div>
                <div
                  className="col-md-4"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "200px",
                    height: "100px",
                    justifyContent: "center",
                  }}
                >
                  <img
                    className="d-block img-responsive"
                    src={mondo}
                    alt=""
                    max-width="100%"
                    style={styleCooperation}
                    display="block"
                    width="200vw"
                    height="50px"
                    margin="auto"
                  />
                </div>
                <div
                  className="col-md-4"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "200px",
                    height: "100px",
                    justifyContent: "center",
                  }}
                >
                  <img
                    className="d-block img-responsive"
                    src={glamour}
                    alt=""
                    max-width="100%"
                    display="block"
                    width="200vw"
                    height="50px"
                    margin="auto"
                  />
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </section>
  );
};
export default Cooperation;
