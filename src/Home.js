import React from "react";
import "./index.css";
import "./Home.css";
import { logoPage } from "./assets/";
import {
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
} from "./assets";

import Image from "react-bootstrap/Image";
import Cooperation from "./components/Cooperation";
//import ComponentNew from "./Newone.js";
//#836969
//#007bff
//#4782c1

const categories = [
  {
    id: "01",
    image: {
      src: product1,
      description: "Sesje produktowe",
    },
  },
  {
    id: "02",
    image: {
      src: product2,
      description: "Koncerty",
    },
  },
  {
    id: "03",
    image: {
      src: product3,
      description: "Uroczystości ślubne",
    },
  },
  {
    id: "04",
    image: {
      src: product4,
      description: "Portrety",
    },
  },
  {
    id: "05",
    image: {
      src: product5,
      description: "Konferencje",
    },
  },
  {
    id: "06",
    image: {
      src: product6,
      description: "Sesje modowe",
    },
  },
];

const styleInfo = {
  margin: "100px 100px",
  color: "#4782c1",
};
/* const styleInfo2 = {
  margin: "100px 100px 0 100px",
}; */

const styleIntro = {
  zIndex: 2,
  position: "absolute",
  top: "20rem",
  left: "10rem",
  color: "white",
  textShadow: "1px 3px 3px black",
};
const styleIntro2 = {
  zIndex: 2,
  position: "absolute",
  top: "25rem",
  left: "10rem",
  color: "white",
  textShadow: "1px 3px 3px black",
};
const fontColor = {
  color: "#4782c1",
  margin: "70px 30px",
};

const circle = {
  background: "lightblue",
  borderRadius: "50%",
  width: "100px",
  height: "100px",
  backgroundColor: "#4396de",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
};

const Home = () => {
  return (
    <section className="homePage">
      <div className="container-fluid pr-0 pl-0">
        <div className="img-top">
          <Image className="fluid" src={logoPage} alt="logo" />
          <h1 style={styleIntro}>Edith Photography</h1>
          <h3 style={styleIntro2}>Kreatywna fotografia z pomysłem i pasją</h3>
        </div>
        <div>
          <h4
            style={{
              heigt: "50vh",
              margin: "100px 100px 100px 100px",
              fontWeight: "bold",
            }}
            className="lead"
          >
            Potrzebujesz profesjonalnej sesji zdjęciowej, która wypromuje Twoją
            firmę lub oferowane przez nią produkty? Zastanawiasz się, jakie
            zdjęcia pomogą w rozwinięciu Twojego biznesu? Potrzebujesz uwiecznić
            ważne dla Ciebie momenty lub sytuacje?
          </h4>
        </div>
        <div style={{ backgroundColor: "#ececec", padding: "20px" }}>
          <h1 style={styleInfo}>Zakres usług</h1>
          <p className="lead" style={{ margin: "100px 100px" }}>
            Oferuję szeroki zakres współpracy w zakresie obsługi fotograficznej
            konferencji, eventów, aż po sesje ślubne, przyjęcia weselne i
            okolicznościowe, zdjęcia plenerowe oraz zdjęcia produktowe.
            Wieloletnie doświadczenie, oraz współpraca z renomowanymi firmami z
            branży, pozwala mi zaoferować Państwu najwyższej jakości usługi.
            Oferuję współpracę na terenie całego kraju, dojadę do każdego jego
            zakątka i profesjonalnie zrealizuję każde zlecenie.
          </p>
        </div>
        <div className="container d-flex flex-wrap justify-content-around">
          <span style={circle}>uroczystości ślubne</span>
          <span style={circle}>konferencje</span>
          <span style={circle}>koncerty</span>
          <span style={circle}>sesje modowe</span>
          <span style={circle}>sesje komercyjne</span>
          <span style={circle}>portrety</span>
        </div>
        <h1 style={fontColor}>Ostatnie realizacje</h1>
        <div className="container">
          <div className="row d-flex flex-wrap">
            <div className="col d-flex">
              {categories.map((category, id) => (
                <div className="card">
                  <img
                    key={id}
                    className="card-img-top"
                    style={{ width: "250px", height: "auto" }}
                    src={category.image.src}
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      <span>{category.description}</span>
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Cooperation />
      </div>
    </section>
  );
};
export default Home;
