import React, { useState } from "react";

const basicworkshops = [
  {
    id: "work1",
    title: "Postawy kurs fotografii",
    info:
      "Na kursie poruszone zostaną zagadnienia dotyczące obsługi aparatu, estetyki fotografii, obróbki cyfrowej i wpływie światła",
  },
  {
    id: "work2",
    title: "Praktyczny kurs fotografii",
    info:
      "Kurs skupia się sprawnej obsłudze aparatu i właściwym doborze parametrów decydujących o poprawnym naświetleniu zdjęcia",
  },
  {
    id: "work3",
    title: "Zaawansowany kurs fotografii",
    info:
      "Na kursie zostaną przekazane informacje dotyczące estetyki i fotografii współczesnej. Kursant ma możliwość wyboru doskonalenia techniki w ramach wybranej dziedziny fotografii. ",
  },
  {
    id: "work4",
    title: "Młody fotograf – fotografia dla dzieci i młodzieży",
    info:
      "Kurs skupia sie na przekazaniu wiedzy o kadrowaniu, kompozycji i roli światła w fotografii. Kurs nastawiony jest na dużą ilość praktycznych zajęć w plenerze jak i w studio",
  },
];
const PhotoCourses = (props) => {
  const [isToggled, setToggle] = useState(false);
  const [active, setActive] = useState(false);
  return (
    <section>
      <div
        style={{
          backgroundColor: "rgb(236, 236, 236)",
          paddingTop: "10px",
          padding: "10px 0",
        }}
      >
        <h5 className="d-block pt-30" style={props.colorFont}>
          Fotografia
        </h5>

        {basicworkshops.map((course, id) => (
          <div
            style={{
              backgroundColor: "transparent",
              borderBottom: "0",
              marginBottom: "30px",
            }}
          >
            <button
              onClick={() => {
                setToggle((isToggled) => !isToggled);
                setActive(active);
              }}
              key={id}
              style={{
                fontSize: "1.25rem",
                fontWeight: "400",
                margin: "0 70px",
                backgroundColor: "transparent",
                border: "none",
              }}
            >
              {course.title}
            </button>
            {isToggled && (
              <div>
                <p className="lead" style={{ margin: "0 4.7rem" }}>
                  {course.info}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotoCourses;
