import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Artistic.css";
import { moda0, moda1, moda2, moda3, moda4, moda5 } from "./assets/";
import {
  portrait1,
  portrait2,
  portrait3,
  portrait4,
  portrait5,
} from "./assets/";
/* import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"; */

const headerStyle = {
  margin: "100px 0",
  color: "#4782c1",
};
//import CustomSlider from "./Carousel";

/* const IntroPhoto = () => {
  return (
    <div className="Intro">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1558980664-3a031cf67ea8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Fotografia eventowa </h3>
            <p>...</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={functional} alt="Third slide" />

          <Carousel.Caption>
            <h3>Fotografia użytkowa</h3>
            <p>...</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1525187030628-9bb40ba289f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Fotografia portetowa</h3>
            <p>...</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}; */
const photosModa = [
  {
    id: "01",
    image: {
      src: moda0,
    },
  },
  {
    id: "02",
    image: {
      src: moda1,
    },
  },
  {
    id: "03",
    image: {
      src: moda2,
    },
  },
  {
    id: "04",
    image: {
      src: moda3,
    },
  },
  {
    id: "05",
    image: {
      src: moda4,
    },
  },
  {
    id: "06",
    image: {
      src: moda5,
    },
  },
];

const Artistic = () => {
  return (
    <section>
      <Moda />
      <Portrait />
    </section>
  );
};
export default Artistic;

const Moda = () => {
  return (
    <div className="container inner">
      <h2 className="section-title text-center" style={headerStyle}>
        Portfolio
      </h2>
      <p className="lead text-center">Przykładowe realizacje</p>
      <div className="space30"></div>
      <div className="row">
        <div className="col-sm-3 m-auto" style={{ width: "25%" }}>
          <h3 style={headerStyle}>Fotografia modowa</h3>
          <p className="lead text-center">
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
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

const Portrait = (props) => {
  return (
    <section>
      <div>
        <h1 style={headerStyle}>Fotografia portretowa</h1>
        <p className="lead" style={{ padding: "0 30px" }}>
          Ten rodzaj fotografii skupia się na uchwyceniu w kadrze ludzi, mimiki
          twarzy, emocji dobrych, jak i tych złych.
        </p>
      </div>
      <div className="portrait-container">
        <img src={portrait1} alt="Man portrait" />
        <img src={portrait2} alt="" />
        <img src={portrait3} alt="" />
        <img src={portrait4} alt="" />
        <img src={portrait5} alt="" />
      </div>
    </section>
  );
};

/* <section>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://images.unsplash.com/photo-1558980664-3a031cf67ea8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1497377825569-02ad2f9edb81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1066&q=80"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img src="..." className="d-block w-100" alt="..." />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </section>;   */
