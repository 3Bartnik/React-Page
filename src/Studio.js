import React from "react";
import "./Studio.css";
import PhotoCourses from "./components/PhotographyCourses";
import SpecialCourses from "./components/SpecialCourses";
//import Image from "react-bootstrap/Image";
//#836969
//#007bff
//#4782c1
const fontColor = {
  color: "#4782c1",
  textAlign: "center",
  margin: "70px",
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
        <PhotoCourses colorFont={fontColor} />
        <SpecialCourses colorFont={fontColor} />
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
