import React from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Recommended from './Recommended'
import Category from './Category'
import NewDisney from './Hollywood'
import TrendingShow from './TrendingShow'
import HotstarSpecial from './HotstarSpecial'
import Genre from './Genre'
// import { useEffect } from 'react';
// import { useDispatch, useSelector  } from 'react-redux'
// import db from '../firebase'
// import { setMovies } from '../features/Movie/movieSlice'
// import { selectUserName } from '../features/users/userSlice'



const Container = styled.main`
  width: 100%;
  min-height: calc(100vh-5rem);
  /* height: 30rem; */
  margin-top: 5rem;
  position: relative;
  padding: 0 calc(3.5vw + 5px);
  background: url('./images/home-background.png') center center / cover no-repeat fixed;
  overflow: hidden;

`


const Home = () => {

  // const dispatch = useDispatch();
  // const userName = useSelector(selectUserName);
  // let recommended = [];
  // let category = [];
  // let hollywood = [];
  // let hotstarSpecial = [];


  // useEffect(() => {
  //   db.collection('movies').onSnapshot((snapshot) => {
  //     snapshot.docs.map((doc) => {
  //       switch(doc.data().type){
  //         case 'recomend' :
  //           recommended.push({id : doc.id, ...doc.data()})
  //           break;
  //           case 'new' :
  //             category.push({id : doc.id, ...doc.data()})
  //             break;
  //             case 'original' :
  //           hollywood.push({id : doc.id, ...doc.data()})
  //           break;
  //           default :
  //           hollywood.push({id : doc.id, ...doc.data()})
  //       }
  //     });
  //   });

  //   dispatch(setMovies( {
  //       recommended : recommended,
  //       hollywood : hollywood,
  //       category : category,
  //   }))
  // },[userName])


  return (
    <>
        <Container>
          <ImgSlider/>
          <Category/>
          <Recommended/>
          <HotstarSpecial/>
          <NewDisney />
          <TrendingShow/>
          <Genre/>
        </Container>
    </>
  )
}

export default Home