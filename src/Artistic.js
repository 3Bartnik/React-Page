import React from "react";
import "./Artistic.css";
import Moda from "./components/Moda";
import Portrait from "./components/Portrait";
import ComercProduct from "./components/ComercProduct";

/* import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"; */

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

/* const photosModa = [
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
]; */
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
