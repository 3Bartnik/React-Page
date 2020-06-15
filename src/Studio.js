import React from "react";
import "./Studio.css";
import PhotoCourses from "./components/PhotographyCourses";
import SpecialCourses from "./components/SpecialCourses";
import PhotoProcessing from "./components/PhotoProcessing";
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
        <PhotoCourses colorFont={fontColor} />
        <SpecialCourses colorFont={fontColor} />
        <PhotoProcessing colorFont={fontColor} />
      </div>
      <p className="lead" style={{ color: "red", margin: "40px 0 0 90px" }}>
        Ilość miejsc na kursy i warsztaty jest ściśle ograniczona.{" "}
      </p>
      <p
        clasName="lead"
        style={{
          margin: "40px 0 0 90px",
          fontSize: "1.25rem",
          fontWeight: "300",
        }}
      >
        Zapisy odbywają się według kolejności zgłoszeń. Istnieje również
        możliwość skorzystania z indywidualnych lekcji fotografii. W przypadku
        pytań odnośnie kursów lub warsztatów proszę o kontakt. Postaram się
        wszystko szybko wyjaśnić.
      </p>
    </section>
  );
};
export default Studio;
