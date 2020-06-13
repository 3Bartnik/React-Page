import React from "react";
import "./Price.css";

const stylePriceList = {
  border: "3px solid rgb(107, 170, 225)",
  margin: "30px 30px",
};

/* img:hover {
  box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5); */

const Price = () => {
  return (
    <div className="container-price" style={stylePriceList}>
      <h1 style={{ margin: "40px 0" }}>Cennik usług</h1>
      <div className="container d-flex">
        <div className="row d-flex flex-wrap">
          <div className="col-sm-12 col-lg-12 d-flex ">
            <h5 style={{ color: "#4782c1" }}>Pakiet brązowy </h5>
          </div>
          <div className="col-sm-12 col-lg-12 ">
            <span className="d-block">3 godzinna sesja </span>
            <span className="d-block">Make-up w cenie usługi</span>
            <span className="d-block"> 2 lokalizacje do wyboru</span>
            <span className="d-block"> Retusz zdjęć</span>
            <span className="d-block">400 zł</span>
          </div>
        </div>
        <hr></hr>
        <div className="row d-flex flex-wrap ">
          <div className="col-sm-12 col-lg-12 d-flex ">
            <h5 style={{ color: "#4782c1" }}>Pakiet srebrny</h5>
          </div>
          <div className="col-sm-12 col-lg-12 ">
            <span className="d-block">6 godzinna sesja </span>
            <span className="d-block">Make-up w cenie usługi</span>
            <span className="d-block"> 3 lokalizacje do wyboru</span>
            <span className="d-block"> Retusz zdjęć</span>
            <span className="d-block">750 zł</span>
          </div>
        </div>
        <hr></hr>
        <div className="row d-flex flex-wrap ">
          <div className="col-sm-12 col-lg-12 d-flex ">
            <h5 style={{ color: "#4782c1" }}>Pakiet złoty</h5>
          </div>
          <div className="col-sm-12 col-lg-12">
            <span className="d-block">9 godzinna sesja </span>
            <span className="d-block">Make-up w cenie usługi</span>
            <span className="d-block"> 5 lokalizacji do wyboru</span>
            <span className="d-block"> Retusz zdjęć</span>
            <span className="d-block">1100 zł</span>
          </div>
        </div>
        <hr></hr>
      </div>
      <div>
        <h5 style={{ textAlign: "center" }}>Kursy i warsztaty</h5>
        <h5> Fotografia</h5>
        <ul style={{ backgroundColor: "transparent", borderBottom: "0" }}>
          <li>Kurs podstawowy</li>
          <li>Praktyczny kurs fotografii</li>
          <li>Zaawansowany kurs fotografii</li>
          <li>Młody fotograf – fotografia dla dzieci i młodzieży</li>
        </ul>
      </div>
      <p style={{ textAlign: "center", margin: "40px 0" }}>
        * Ceny podlegają negocjacjom
      </p>
    </div>
  );
};
export default Price;
