import React from "react";
import "./Price.css";

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

const Price = () => {
  return (
    <div className="container-price" style={stylePriceList}>
      <h1 style={{ margin: "40px 0", color: "#4782c1" }}>Cennik usług</h1>
      <div className="container d-flex flex-wrap">
        <div className="row d-flex ">
          <div className="col-sm-12 col-lg-12 d-flex ">
            {/* <h5 style={{ color: "#4782c1" }}>Pakiet brązowy </h5> */}
          </div>
          <div className="col-sm-12 col-lg-12 ">
            <h5 style={{ color: "#4782c1" }}>Pakiet brązowy </h5>
            <span className="d-block" style={stylePackage}>
              3 godzinna sesja{" "}
            </span>
            <span className="d-block" style={stylePackage}>
              Make-up w cenie usługi
            </span>
            <span className="d-block" style={stylePackage}>
              {" "}
              2 lokalizacje do wyboru
            </span>
            <span className="d-block" style={stylePackage}>
              {" "}
              Retusz zdjęć
            </span>
            <span className="d-block" style={stylePackage}>
              400 zł
            </span>
          </div>
        </div>
        <hr></hr>
        <div className="row d-flex flex-wrap ">
          <div className="col-sm-12 col-lg-12 d-flex ">
            <h5 style={{ color: "#4782c1" }}>Pakiet srebrny</h5>
          </div>
          <div className="col-sm-12 col-lg-12 ">
            <span className="d-block" style={stylePackage}>
              6 godzinna sesja{" "}
            </span>
            <span className="d-block" style={stylePackage}>
              Make-up w cenie usługi
            </span>
            <span className="d-block" style={stylePackage}>
              {" "}
              3 lokalizacje do wyboru
            </span>
            <span className="d-block" style={stylePackage}>
              {" "}
              Retusz zdjęć
            </span>
            <span className="d-block" style={stylePackage}>
              750 zł
            </span>
          </div>
        </div>
        <hr></hr>
        <div className="row d-flex flex-wrap ">
          <div className="col-sm-12 col-lg-12 d-flex ">
            <h5 style={{ color: "#4782c1" }}>Pakiet złoty</h5>
          </div>
          <div className="col-sm-12 col-lg-12">
            <span
              className="d-block"
              style={{ fontSize: "1.25rem", fontWeight: "300" }}
            >
              9 godzinna sesja{" "}
            </span>
            <span
              className="d-block"
              style={{ fontSize: "1.25rem", fontWeight: "300" }}
            >
              Make-up w cenie usługi
            </span>
            <span
              className="d-block"
              style={{ fontSize: "1.25rem", fontWeight: "300" }}
            >
              {" "}
              5 lokalizacji do wyboru
            </span>
            <span
              className="d-block"
              style={{ fontSize: "1.25rem", fontWeight: "300" }}
            >
              {" "}
              Retusz zdjęć
            </span>
            <span
              className="d-block"
              style={{ fontSize: "1.25rem", fontWeight: "300" }}
            >
              1100 zł
            </span>
          </div>
        </div>
        <hr></hr>
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
