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
  //width: "200px",
  //position: "relative",
  margin: "15px 15px",
  height: "100px",
  width: "auto",
};
/* const styleCooperation2 = {
  //width: "200px",
  //position: "relative",
  margin: "15px 15px",
  height: "auto",
  width: "250px",
}; */
//flex-wrap
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
                    //height="200vh"
                    max-width="100%"
                    //margin="30px 30px"
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
                    //height="100vh"
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
                    //height="150vh"
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
                    //height="100vh"
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
                    //height="80vh"
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
                    //height="60vh"
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
                    //height="60vh"
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
                    //height="100vh"
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
                    //height="60vh"
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

/*       <div
        className="portrait-container d-flex  flex-wrap "
        style={{ overflow: "hidden" }}
      >
        <div className="row coop_img" style={{ margin: "30px 30px" }}>
          <img src={NationalG} style={styleCooperation} alt="" />
        </div>
        <div className="row coop_img" style={{ margin: "30px 30px" }}>
          <img src={newsweek} style={styleCooperation2} alt="" />
        </div>
        <div className="row coop_img" style={{ margin: "30px 30px" }}>
          <img src={agora} style={styleCooperation} alt="" />
        </div>
        <div className="row coop_img" style={{ margin: "30px 30px" }}>
          <img src={glamour} style={styleCooperation2} alt="" />
        </div>
        <div className="row coop_img" style={{ margin: "30px 30px" }}>
          <img src={cosmo} style={styleCooperation2} alt="" />
        </div>
        <div className="row coop_img" style={{ margin: "30px 30px" }}>
          <img src={vogue} style={styleCooperation2} alt="" />
        </div>
        <div className="row coop_img" style={{ margin: "30px 30px" }}>
          <img src={ikea} style={styleCooperation} alt="" />
        </div>
        <div className="row coop_img" style={{ margin: "30px 30px" }}>
          <img src={mondo} style={styleCooperation} alt="" />
        </div>
      </div>; */
