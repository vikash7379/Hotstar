import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from '../firebase';


const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 300px);
  overflow: hidden;
  display: block;
  top: 80px;
  /* padding:0 calc(4vw - 5px); */
  margin: 0 4rem;
`;
const Banner = styled.div`
  background-color: #0c111b;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;
const Details = styled.div`
  flex: 1;
  z-index: 99;
  position: absolute;
  width: 35rem;
  margin-left: 3rem;
  line-height: 25px;

  &>h4{
    opacity: 0.7;
  }

`;
const DetailsFooter = styled.div`
    margin-top: 3rem;
  display: flex;
  align-items: center;
  /* justify-conten:; */

  &>div{
    margin-right: 3rem;
    text-align: center;
    cursor: pointer;
  }

  &>div i{
    font-size: 1.5rem;
  }

  &>div p{
    font-size: 12px;
  }

`;
const Play =styled.div`
    display: flex;
    justify-content:flex-start;
    align-items: center;
    column-gap: 10px;
    width: 300px;
    min-width: 100px;
    font-size: 1.5rem;
    cursor: pointer;
`
const Background = styled.div`
  flex: 1;
  text-align: end;
  /* position: relative; */

  img {
    /* position: absolute; */
    width: 48rem;
    height: 400px;
    border-radius: 10px;
    z-index: -1;
  }
`;
const Gradient = styled.div`
    position: absolute;
    z-index: 1;
    width: 20rem;
    height:25rem;
    left: 39%;
    top: 0;
    /* background: rgb(53,37,41); */
    background: linear-gradient(90deg, rgba(12,17,27,1) 0%, rgba(12,17,27,0.3) 33%, rgba(119,183,255,0) 87%);
`

const MoviesDetails = () => {

  // const { id } = useParams();
  // const [detailsData , setDetailsData] = useState({});

  // useEffect(()=> {
  //   db.collection('movies').doc(id.get().then((doc)=> {
  //     if(doc.exists){
  //       setDetailsData(doc.data());
  //     }
  //     else{
  //       console.log('no such document i firebase')
  //     }
  //   }))
  // },[id])


  return (
    <>
      <Container>
        <Banner>
          <Details>
            <h2>Tanhaji</h2> <br />
            <h4>2hr 12 min · 2020 · Drama · U/A 16+ · Hindi</h4> <br />
            <p>
              As Aurangzeb captures the Kondhana Fort, Tanhaji Malusare,
              Chhatrapati Shivaji Maharaj's trusted military leader and
              braveheart, ventures out to win it back...
            </p>
            <DetailsFooter>
              <Play>
                <img src="/images/play-icon-white.png" alt="play" />
                Watch Movie
              </Play>
              <div>
                <i className="fa-solid fa-plus"></i>
                <p>WATCHLIST</p>
              </div>
              <div>
                <i className="fa-solid fa-share-nodes"></i>
                <p>SHARE</p>
              </div>
            </DetailsFooter>
          </Details>
          <Background>
            <img
              src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/9232/1389232-h-de11320b3e32"
              alt="bgImg"
            />
            <Gradient/>
          </Background>
        </Banner>
      </Container>
    </>
  );
};

export default MoviesDetails;
