import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0px 26px;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (max-width: 780px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;
const Wrap = styled.div`
  width: 100%;
  border: 3px solid rgba(249, 249, 249, 0.3);
  border-radius: 10px;
  box-shadow: rgb(0, 0, 0 / 69%) 0px 26px 30px -10px,
    rgb(0, 0, 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.42, 0.45, 0.94) 0s;


  img {
    width: 100%;
    z-index: 50;
  }

  video{
    width: 100%;
    height: 100%;
    transform:scale(1.05);
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: 0.3s all ease;

    &:hover{
        opacity: 1;

    }
  }

  &:hover{
        transform: scale(1.1);
        border: 3px solid rgba(249, 249, 249, 0.9);
    }

`;

const Category = () => {
  return (
    <Container>
      <Wrap>
        <img src="./images/viewers-disney.png" alt="disney" />
        <video autoPlay={true} loop={true} muted playsInline={true}>
          <source src="videos/1564674844-disney.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="./images/viewers-marvel.png" alt="marvel" />
        <video autoPlay={true} loop={true} muted playsInline={true}>
            <source  src="videos/1564676115-marvel.mp4" type="video/mp4"/>
        </video>
      </Wrap>
      <Wrap>
        <img src="./images/viewers-national.png" alt="national" />
        <video src="videos/1564676296-national-geographic.mp4" autoPlay muted loop></video>
      </Wrap>
      <Wrap>
        <img src="./images/viewers-pixar.png" alt="pixar" />
        <video src="videos/1564676714-pixar.mp4" autoPlay muted loop></video>
      </Wrap>
      <Wrap>
        <img src="./images/viewers-starwars.png" alt="starwars" />
        <video src="videos/1608229455-star-wars.mp4" autoPlay muted loop></video>

      </Wrap>
    </Container>
  );
};

export default Category;
