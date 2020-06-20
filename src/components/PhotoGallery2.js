import React from "react";
import { MonoVisions, SonyWorld, GrandPress, FineArt, Build } from "../assets/";

import "./PhotoGallery2.css";
const styleHeader = {
  color: "#4782c1",
  textAlign: "center",
};

class PhotoGallery2 extends React.Component {
  render() {
    const photos = [
      {
        id: "p1",
        description: "Wyróżnienie za pomysłowość i świeże spojrzenie",
        alt: "MonoVisions Photography Awards",
        competition: "MonoVisions Photography Awards",
        image: {
          src: MonoVisions,
        },
      },
      {
        id: "p2",
        description:
          "Zdjęcie zajęło 3 miejsce w konkursie 'Moment zatrzymany w kadrze'",
        alt: "Grand Press Photo",
        competition: "Grand Press Photo",
        image: {
          src: GrandPress,
        },
      },
      {
        id: "p3",
        description: "Zdjęcie zajęło 2 miejsce w konkursie 'Podwodny świat'",
        alt: "Fine Art Photography Awards",
        competition: "Fine Art Photography Awards",
        image: {
          src: FineArt,
        },
      },
      {
        id: "p4",
        description: "Wyróżnione zdjęcie w konkursie 'Jesień",
        alt: "Sony World Photograpy Awards",
        competition: "Sony World Photograpy Awards",
        image: {
          src: SonyWorld,
        },
      },
      {
        id: "p5",
        description:
          "Wyróżnienie w konkursie dotyczącym architektury miejskiej",
        alt: "ArchiVisions Photography",
        competition: "ArchiVisions Photography",
        image: {
          src: Build,
        },
      },
    ];
    return (
      <section>
        <div className="container d-flex flex-wrap justify-content-center">
          {photos.map((photo, id) => (
            <div
              className="row d-flex flex-wrap"
              style={{ marginBottom: "20px" }}
            >
              <div className="col">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    className="card-img-top"
                    key={id}
                    src={photo.image.src}
                    alt={photo.alt}
                  />
                  <div className="card-body" style={{ height: "6rem" }}>
                    <div className="hover">
                      <p
                        className="card-text"
                        style={{ fontSize: "1rem", fontWeight: "bold" }}
                      >
                        {photo.description}
                      </p>
                    </div>
                    <h5 className="card-title" style={styleHeader}>
                      {photo.competition}
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}
export default PhotoGallery2;
