import React from "react";

const WrappPhoto = () => {
  return (
    <div className="container inner">
      <h2 className="section-title text-center"> Portfolio</h2>
      <p className="lead text-center">Przykładowe realizacje</p>
      <div className="space30"></div>
      <div className="row">
        <div className="col-sm-3 m-auto" style={{ width: "40%" }}>
          <h3>Fotografia modowa</h3>
          <p>Łączy w sobie fotografię reklamową i fotografię produktu.</p>
        </div>
        <div className="col-sm-9" style={{ width: "60%" }}>
          <div
            className="slick-wrapper"
            style={{ position: "relative" }}
            id="carousel0"
          >
            <div
              className="slick slick-initialized slick-slider slick-dotted"
              data-slick="{{slidesToShow: 3, ;responsive: [{breakpoint:1024,settings:{slidesToShow: 2}},{breakpoint:768,settings:{slidesToShow: 1}}]}"
            ></div>
            <Carousel>
              <Carousel.Item className="h-100 w-100">
                <img
                  className="d-block "
                  src={moda1}
                  alt="First slide"
                  height="450rem"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block"
                  src={moda0}
                  alt="Third slide"
                  height="450rem"
                  width="auto"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block "
                  src={moda3}
                  alt="Third slide"
                  height="450rem"
                  width="auto"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WrappPhoto;
