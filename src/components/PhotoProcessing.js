import React, { useState } from "react";

const processes = [
  {
    id: "proc1",
    title: "Edycja zdjęć - podstawowy kurs Photoshop",
    info:
      "Podstawy postprodukcji fotograficznej.Nauka narzędzi i pojęć związanych z obróbką obrazu cyfrowego",
  },
  {
    id: "proc2",
    title: "Edycja zdjęć - zaawansowany kurs Photoshop",
    info:
      "Zaawansowane techniki fotomontażu. Przygotowanie grafiki pod stronę WWW",
  },
];

const PhotoProcessing = (props) => {
  const [isToggled, setToggle] = useState(false);
  return (
    <section>
      <div
        style={{
          backgroundColor: "rgb(236, 236, 236)",
          padding: "10px 0",
        }}
      >
        <h5 style={props.colorFont}> Obróbka zdjęć</h5>

        {processes.map((process, id) => (
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
              {process.title}
            </button>
            {isToggled && (
              <div>
                <p className="lead" style={{ margin: "0 4.7rem" }}>
                  {process.info}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotoProcessing;
