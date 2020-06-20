import React from "react";
import "./index.css";
import "./Home.css";
import { logoPage } from "./assets/";
import LastWork from "./components/LastWork";
import NumberInWork from "./components/NumberInWork";
import Image from "react-bootstrap/Image";
import Cooperation from "./components/Cooperation";

const styleInfo = {
  margin: "2rem 1rem",
  color: "#4782c1",
};

const Home = () => {
  return (
    <section className="homePage">
      <div className="container-fluid pr-0 pl-0">
        <div className="img-top">
          <Image className="fluid" src={logoPage} alt="logo" />
          <h1 className="header">Edith Photography</h1>
          <h3 className="showinfo">Kreatywna fotografia z pomysłem i pasją</h3>
        </div>
        <div style={{ padding: "20px" }}>
          <h4
            style={{
              heigt: "50vh",
            }}
            className="lead afterInfo"
          >
            Potrzebujesz profesjonalnej sesji zdjęciowej, która wypromuje Twoją
            firmę lub oferowane przez nią produkty? Zastanawiasz się, jakie
            zdjęcia pomogą w rozwinięciu Twojego biznesu? Potrzebujesz uwiecznić
            ważne dla Ciebie momenty lub sytuacje?
          </h4>
        </div>
        <div style={{ backgroundColor: "#ececec", padding: "20px" }}>
          <h1 style={styleInfo}>Zakres usług</h1>
          <p className="lead information">
            Oferuję szeroki zakres współpracy w zakresie obsługi fotograficznej
            konferencji, eventów, aż po sesje ślubne, przyjęcia weselne i
            okolicznościowe, zdjęcia plenerowe oraz zdjęcia produktowe.
            Wieloletnie doświadczenie, oraz współpraca z renomowanymi firmami z
            branży, pozwala mi zaoferować Państwu najwyższej jakości usługi.
            Oferuję współpracę na terenie całego kraju, dojadę do każdego jego
            zakątka i profesjonalnie zrealizuję każde zlecenie.
          </p>
        </div>
        <NumberInWork />
        <LastWork />
        <Cooperation />
      </div>
    </section>
  );
};
export default Home;
