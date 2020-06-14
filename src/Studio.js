import React from "react";
import "./Studio.css";
//import studio_photo from "./assets/photo-studio.jpg";
//import Image from "react-bootstrap/Image";
//#836969
//#007bff
//#4782c1
const fontColor = {
  color: "#4782c1",
  textAlign: "center",
  margin: "70px",
};

const workshops = {
  primaryCourse: {
    title: "Postawy kurs fotografii",
    info:
      "Na kursie poruszone zostaną zagadnienia dotyczące obsługi aparatu, estetyki fotografii, obróbki cyfrowej i wpływie światła",
  },
  primaryCourse2: {
    title: "Praktyczny kurs fotografii",
    info:
      "Kurs skupia się sprawnej obsłudze aparatu i właściwym doborze parametrów decydujących o poprawnym naświetleniu zdjęcia",
  },
  primaryCourse3: {
    title: "Zaawansowany kurs fotografii",
    info:
      "Na kursie zostaną przekazane informacje dotyczące estetyki i fotografii współczesnej. Kursant ma możliwość wyboru doskonalenia techniki w ramach wybranej dziedziny fotografii. ",
  },
  primaryCourse4: {
    title: "Młody fotograf – fotografia dla dzieci i młodzieży",
    info:
      "Kurs skupia sie na przekazaniu wiedzy o kadrowaniu, kompozycji i roli światła w fotografii. Kurs nastawiony jest na dużą ilość praktycznych zajęć w plenerze jak i w studio",
  },
};

const Studio = () => {
  return (
    <section className="studio">
      <div>
        <h3 style={fontColor}> Warsztaty i szkolenia</h3>
        <p className="lead" style={{ margin: "100px 100px 0px" }}>
          Chcesz poznać tajniki fotografii lub pogłębić już posiadaną wiedzę?
          Zapisz się na warsztaty, na których nauczysz się obróbki zdjęć i
          samego fotografowania.
        </p>
      </div>
      <div>
        <h3 style={fontColor}>
          Przyjmuję zapisy na poniższe warsztaty i kursy
        </h3>
        {/*           <>
            {workshops.map((workshop,id) => {}
              <li key={id}>{workshop.title}
              <span> {workshop.info} </span></li>
            ))}
          </> */}
        <div>
          <span style={fontColor}>Fotografia</span>
          <ul style={{ backgroundColor: "transparent", borderBottom: "0" }}>
            <li>
              {workshops.primaryCourse.title}{" "}
              <div> {workshops.primaryCourse.info} </div>
            </li>
            <li>
              {workshops.primaryCourse2.title}{" "}
              <div> {workshops.primaryCourse2.info}</div>
            </li>
            <li>
              {workshops.primaryCourse3.title}{" "}
              <div> {workshops.primaryCourse3.info}</div>
            </li>
            <li>
              {workshops.primaryCourse4.title}{" "}
              <div> {workshops.primaryCourse4.info}</div>
            </li>
          </ul>
        </div>
        <div>
          <h5 style={fontColor}>Specjalistyczne warsztaty</h5>
          <ul style={{ backgroundColor: "transparent", borderBottom: "0" }}>
            <li>Street Photo</li>
            <li>Fotografia mody</li>
            <li>Fotografia reklamowa</li>
            <li>Obsługa lustrzanki i bezlusterkowców - jak robić to dobrze</li>
            <li>Fotografia produktowa dla eCommerce</li>
            <li>Fotografia portretowa</li>
          </ul>
        </div>
        <div>
          <h5 style={fontColor}> Obróbka zdjęć</h5>
          <ul style={{ backgroundColor: "transparent", borderBottom: "0" }}>
            <li>Edycja zdjęć - podstawowy kurs Photoshop</li>
            <li>Edycja zdjęć - zaawansowany kurs Photoshop</li>
          </ul>
        </div>
        <div>
          <h5 style={fontColor}>Pozostałe</h5>
          <ul style={{ backgroundColor: "transparent", borderBottom: "0" }}>
            <li>Indywidualne lekcje fotografii</li>
          </ul>
        </div>
      </div>
      <p>* Ilość miejsc na kursy i warsztaty jest ściśle ograniczona. </p>
      <span>
        Zapisy odbywają się według kolejności rezerwacji. <br></br>W przypadku
        pytań odnośnie kursów lub warsztatów skontaktuj się ze mną. Postaram się
        wszystko wyjaśnić.{" "}
      </span>
    </section>
  );
};
export default Studio;
