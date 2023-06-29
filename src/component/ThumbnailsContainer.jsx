import React from 'react'
import styled from 'styled-components';
import PosterThumbnail from './PosterThumbnail'

const Container = styled.div`
  width: 100%;
  margin: 2rem auto;

  h3{
    font-weight: 550;
    letter-spacing: 1px;
  }
`;
const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  grid-gap: ${(props)=>props.gridGap};

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const ThumbnailContainer = ({title,imgData,gridGap,display,stylecss}) => {
  return (
    <Container>
      <h3>{title}</h3>
      <Content gridGap={gridGap} >
        {
            imgData.map((elem)=>{
                return(
                    <PosterThumbnail
                        imgUrl={elem.imgSrc}
                        key={elem.id}
                        description={elem.desc}
                        display={display}
                        stylecss={stylecss}
                      />
                )
            })
        }
      </Content>
    </Container>
  );
};
export default ThumbnailContainer