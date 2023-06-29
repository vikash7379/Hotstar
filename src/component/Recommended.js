import React from "react";
import styled from "styled-components";
import PosterThumbnail from "./PosterThumbnail";

const Container = styled.div`
  width: 100%;
  margin: 2rem auto;
`;
const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  grid-gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Recommendes = () => {
  return (
    <Container>
      <h3>Recommended for You</h3>
      <Content>
        <PosterThumbnail
          imgUrl="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9233/1389233-v-9aaacc3bf07f"
          alt=""
        />
        <PosterThumbnail
          imgUrl="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4856/1414856-v-fa398217196a"
          alt=""
        />
        <PosterThumbnail
          imgUrl="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1734/831734-v"
          alt=""
        />

        <PosterThumbnail
          imgUrl="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5052/1405052-v-2063bab41935"
          alt=""
        />

        <PosterThumbnail
          imgUrl="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6531/1326531-v-e6302c49fcd9"
          alt=""
        />

        <PosterThumbnail
          imgUrl="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7639/1307639-v-e58374d4d501"
          alt=""
        />

        <PosterThumbnail
          imgUrl="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2347/1282347-v-57b71e72275e"
          alt=""
        />
      </Content>
    </Container>
  );
};

export default Recommendes;
