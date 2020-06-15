import React from "react";
import "./Price.css";
//import { v4 as uuidv4 } from "uuid";

const stylePriceList = {
  border: "3px solid rgb(107, 170, 225)",
  margin: "30px 30px",
  borderRadius: "25px",
};

/* img:hover {
  box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5); */
/*   const fontColor = {
    color: "#4782c1",
    margin: "70px 30px",
  }; */

const stylePackage = {
  fontSize: "1.25rem",
  fontWeight: "300",
};

const prices = [
  {
    /* id: uuidv4(), */
    id: "1",
    title: "Pakiet brązowy",
    pln: "400 zł",
    time: "3 godzinna sesja",
    addition1: "Profesjonalny Make-up",
    location: "2 lokalizacje ",
    addition2: "Retusz zdjęć",
  },
  {
    id: "2",
    title: "Pakiet srebny",
    pln: "750 zł",
    time: "6 godzinna sesja",
    addition1: "Profesjonalny Make-up",
    location: "3 lokalizacje ",
    addition2: "Retusz zdjęć",
  },
  {
    id: "3",
    title: "Pakiet złoty",
    pln: "1100 zł",
    time: "9 godzinna sesja",
    addition1: "Profesjonalny Make-up",
    location: "5 lokalizacje ",
    addition2: "Retusz zdjęć",
  },
];

const Price = () => {
  return (
    <div className="container-price" style={stylePriceList}>
      <h1 style={{ margin: "40px 0", color: "#4782c1" }}>Cennik usług</h1>
      <div className="container d-flex flex-wrap justify-content-center">
        <div className="row d-flex text-center ">
          {prices.map((price) => (
            <div className="col-sm-12 col-lg-4 ">
              <h5
                style={{
                  color: "#4782c1",
                  textAlign: "center",
                  paddingTop: "1rem",
                }}
              >
                {price.title}{" "}
              </h5>

              <span key={price.id} className="d-block" style={stylePackage}>
                {price.addition1}
              </span>
              <span className="d-block" style={stylePackage}>
                {price.addition2}
              </span>
              <span className="d-block" style={stylePackage}>
                {price.pln}
              </span>
              <span className="d-block" style={stylePackage}>
                {price.time}
              </span>
              <span className="d-block" style={stylePackage}>
                {price.location}
              </span>
            </div>
          ))}
          <hr></hr>
        </div>
      </div>
      <div>
        <h5 style={{ textAlign: "center", color: "#4782c1", margin: "30px 0" }}>
          Kursy i warsztaty
        </h5>
        <p className="lead" style={{ margin: "0 30px" }}>
          Ceny kursów i warsztatów od 250 zł do 950 zł.*<br></br> Szczegółowe
          informacje dotyczące poszczególnych kursów udzielane są po
          wcześniejszym kontakcie.<br></br>
        </p>
      </div>
      <p className="lead" style={{ margin: "40px 0 30px 30px" }}>
        * Ceny podlegają negocjacjom
      </p>
    </div>
  );
};
export default Price;
