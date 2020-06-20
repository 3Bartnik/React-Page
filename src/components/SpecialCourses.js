import React, { useState } from "react";

const specialWorkshops = [
  {
    id: "spec1",
    title: "Fotografia mody",
    description:
      "Warsztaty teoretyczne i praktyczne dotyczące technik przestawiania odzieży i dodatków. Nauczysz się lepiej komunikować się z modelką na poziomie werbalnym i niewerbalnym.",
  },
  {
    id: "spec2",
    title: "Fotografia reklamowa",
    description:
      "Warsztaty z technik dotyczących prezentacji produktów. Rola światła i kompozycji.",
  },
  {
    id: "spec3",
    title: "Fotografia portretowa",
    description:
      "Warsztaty pokazujące jak współpracować z klientem.Nauczysz się organizować niezapomnianą dla siebie i modelki sesję.",
  },
];

const SpecialCourses = (props) => {
  const [isToggled, setToggle] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <section>
      <div>
        <h5 style={props.colorFont}>Specjalistyczne warsztaty</h5>

        {specialWorkshops.map((special, id) => (
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
                setOpen(open);
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
              {special.title}
            </button>
            {isToggled && (
              <div>
                <p className="lead" style={{ margin: "0 4.7rem" }}>
                  {special.description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialCourses;
