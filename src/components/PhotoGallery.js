import React from "react";
import { MonoVisions, SonyWorld, GrandPress, FineArt } from "../assets/";
//import Image from "react-bootstrap/Image";
import styled from "styled-components";

const Container = styled.div`
  width: 18rem;
  margin-bottom: 30px;
  position: relative;
  overflow: hidden;
`;
const ImageStyle = styled.img`
  max-width: 100%;
  max-height: 100%;
  &:hover {
    transform: scale(1.1);
  }
`;

/* const Image = styled.img`
max-width: 100%, 
max-height: 100%,
  &:hover {
    opacity: 0.3;
    transition-duration: 0.5s;
    transition: 0.4s ease-in-out;
    filter: grayscale(100%) blur(2px);
  }
`; */

//filter: grayscale(100%) blur(2px);

/* const CardTitle = styled.h5`
  position: absolute;

  &:hover {
    z-index: 2;
    position: absolute;
    opacity: 1;
  }
`; */
const CardTitle = styled.h5`
  position: relative;
  overflow: hidden;
  text-align: center;
`;

class PhotoGallery extends React.Component {
  render() {
    const photos = [
      {
        id: "p1",
        description: "Wyróżnienie za pomysłowość i świeże spojrzenie.",
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
        description: "Wyróżnione zdjęcie w konkursie 'Jesień;",
        alt: "Sony World Photograpy Awards",
        competition: "Sony World Photograpy Awards",
        image: {
          src: SonyWorld,
        },
      },
    ];
    return (
      <section>
        {photos.map((photo, id) => (
          <div className="row d-flex flex-wrap">
            <div className="col">
              <Container>
                <div className="card">
                  <ImageStyle
                    fluid
                    key={id}
                    src={photo.image.src}
                    alt={photo.alt}
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                  ></ImageStyle>
                  <div className="card-body">
                    <CardTitle>
                      <p className="card-title" style={{ marginTop: "20px" }}>
                        {photo.competition}
                      </p>
                    </CardTitle>
                  </div>
                </div>
              </Container>
            </div>
            <div
              className="col d-flex"
              style={{ justifyContent: "start", alignItems: "center" }}
            >
              <p>{photo.description}</p>
            </div>
          </div>
        ))}
      </section>
    );
  }
}
export default PhotoGallery;

/* import React from "react";
import { MonoVisions, SonyWorld, GrandPress, FineArt } from "../assets/";
import Image from "react-bootstrap/Image";
import styled from "styled-components";

const Container = styled.div`
  width: 18rem;
  margin-bottom: 30px;
  position: relative;
  &:hover {
    z-index: 0;
    opacity: 0.5;
    transition-duration: 0.5s;
    filter: grayscale(100%) blur(2px);
    transition: 0.4s ease-in-out;
  }
`;

const CardTitle = styled.h5`
  position: absolute;

  &:hover {
    z-index: 2;
    position: absolute;

    top: 50%;
    left: 50%;
    width: 100px;
  }
`;

class PhotoGallery extends React.Component {
  render() {
    const photos = [
      {
        id: "1",
        description: "Wyróżnienie za pomysłowość i świeże spojrzenie.",
        alt: "MonoVisions Photography Awards",
        competition: "MonoVisions Photography Awards",
        image: {
          src: MonoVisions,
        },
      },
      {
        id: "2",
        description:
          "Zdjęcie zajęło 3 miejsce w konkursie 'Moment zatrzymany w kadrze'",
        alt: "Grand Press Photo",
        competition: "Grand Press Photo",
        image: {
          src: GrandPress,
        },
      },
      {
        id: "3",
        description: "Zdjęcie zajęło 2 miejsce w konkursie 'Podwodny świat'",
        alt: "Fine Art Photography Awards",
        competition: "Fine Art Photography Awards",
        image: {
          src: FineArt,
        },
      },
      {
        id: "4",
        description: "Wyróżnione zdjęcie w konkursie 'Jesień;",
        alt: "Sony World Photograpy Awards",
        competition: "Sony World Photograpy Awards",
        image: {
          src: SonyWorld,
        },
      },
    ];
    return (
      <section>
        {photos.map((photo, id) => (
          <div className="row d-flex flex-wrap">
            <div className="col">
              <Container>
                <div className="card">
                  <Image fluid key={id} src={photo.image.src} alt={photo.alt} />
                  <div className="card-body"></div>
                  <CardTitle>
                    <h5 className="card-title">{photo.competition}</h5>
                  </CardTitle>
                </div>
              </Container>
            </div>
            <div
              className="col d-flex"
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <p>{photo.description}</p>
            </div>
          </div>
        ))}
      </section>
    );
  }
}
export default PhotoGallery; */
