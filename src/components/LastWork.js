import React from "react";
import {
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
} from "../assets";

const categories = [
  {
    id: "01",
    image: {
      src: product1,
    },
    description: "Produkty",
  },
  {
    id: "02",
    image: {
      src: product2,
    },
    description: "Koncerty",
  },
  {
    id: "03",
    image: {
      src: product3,
    },
    description: "Uroczystości",
  },
  {
    id: "04",
    image: {
      src: product4,
    },
    description: "Portrety",
  },
  {
    id: "05",
    image: {
      src: product5,
    },
    description: "Konferencje",
  },
  {
    id: "06",
    image: {
      src: product6,
    },
    description: "Sesje modowe",
  },
];

const styleInfo = {
  margin: "70px 100px",
  color: "#4782c1",
};

const fontColor = {
  color: "#4782c1",
};
const LastWork = () => {
  return (
    <section>
      <div
        style={{
          backgroundColor: "rgb(236, 236, 236)",
          paddingTop: "30px",
        }}
      >
        <h1 style={styleInfo}>Ostatnie realizacje</h1>
        <div className="container">
          <div className="row d-flex flex-wrap">
            <div className="col d-flex" style={{ marginBottom: "50px" }}>
              {categories.map((category, id) => (
                <div
                  className="card"
                  style={{
                    overflow: "hidden",
                    textAlign: "center",
                    boxShadow: "1px 5px 10px 0px #888888",
                  }}
                >
                  <img
                    key={id}
                    className="card-img-top"
                    style={{ width: "250px", height: "auto" }}
                    src={category.image.src}
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      <span style={fontColor}>{category.description}</span>
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LastWork;
