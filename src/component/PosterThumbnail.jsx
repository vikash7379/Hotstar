import React from "react";
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Wrap = styled.div`
  margin-top: 1rem;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
    rgb(0 0 0/73%) 0px 16px 10px -10px;
  display: block;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.42, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.3);

  img {
    width: 100%;
    /* object-fit:fill; */
    height: 100%;
    border-radius: 10px;
    transform: scale(1.1);
  }

  &:hover {
    transform: scale(1.15);
    z-index:1;
    border: 3px solid rgba(249, 249, 249, 0.9);
  }
`;




const PosterThumbnail = ({imgUrl,alt,description,display,stylecss}) => {
  return (
    <Wrap>
      <Link to="https://google.com">
        <img
          src= {imgUrl}
          alt={alt}
        />
      </Link>
      <div style={stylecss}>
        <h4 >{description}</h4>
      </div>
    </Wrap>
  );
};

export default PosterThumbnail;
