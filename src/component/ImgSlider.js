import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import styled from 'styled-components'


const Carousel = styled(Slider)`
    margin-bottom: 20px;
    width: 100%;
    /* overflow: hidden; */
    &>button{
        width: 5rem;
        height: 100%;
        z-index: 1;
        opacity: 0;
        transition: all 0.3s ease;

        &:hover{
            opacity: 1;
            }
    }
    ul li button{

        &::before{
            font-size: 10px;
            color: rgb(150,141,178);
        }
     }

     li.slick-active button::before{
        color: white;
     }

     .slick-list{
        overflow: initial;
     }
     .slick-prev{
        left: -75px
     }
     .slick-next{
        right :-75px
     }
`
const Wrap = styled.div`
    border-radius: 5px;
    cursor: pointer;
    position: relative;

    a{
        border-radius: 5px;
        box-shadow: rgb(0 0 0  / 69%) 0px 26px 30px -10px, rgb(0,0,0,73%) 0px 16px 10px -10px;
        padding: 5px;
        /* border: 5px solid black; */
        cursor: pointer;
        display: block;
        position: relative;
        transition: 0.3s all ease-in-out;

        img{
            width: 100%;
            height: 100%;
        }

        &:hover{
            border: 5px solid white;
            padding: 0;
        }
    }


`

const ImgSlider = () => {

    let settings = {
        dots : true,
        Infinite : true,
        speed : 500,
        slidesToShow : 1,
        slidesToScroll : 1,
        autoplay : true,
    }

  return (
    <>
        <Carousel {...settings}>
            <Wrap>
                <a href='#'>
                    <img src='/images/slider-badag.jpg' alt='img' />
                 </a>
            </Wrap>
            <Wrap>
                <a href='#'>
                    <img src='/images/slider-badging.jpg' alt='img' />
                 </a>
            </Wrap>
            <Wrap>
                <a href='#'>
                    <img src='/images/slider-scale.jpg' alt='img' />
                 </a>
            </Wrap>
            <Wrap>
                <a href='#'>
                    <img src='/images/slider-scales.jpg' alt='img' />
                 </a>
            </Wrap>
        </Carousel>
    </>
  )
}


export default ImgSlider