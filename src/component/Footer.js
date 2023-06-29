import React from 'react'
import styled from 'styled-components'



const Container = styled.section`
    width: 93%;
    margin: 0 auto;
    display: flex;
    /* background-color: red; */
    justify-content: space-between;
    padding: 2rem 0;

    /* align-items: center; */
`
const Details = styled.div`
    width: 50vw;
    opacity: 0.7;


    &>div a{
        /* color: red; */
        margin-right: 1rem;
        font-size: 14px;
    }

    &>p{
        font-size: 12px;
        margin-top: 1rem;
        line-height: 18px;
    }

`
const Social = styled.div`
    font-size: 14px;
    font-weight: 600;
    opacity: 0.7;
    &>span i{
        /* background-color: #1f80e0; */
        background-color: #2B3A55;
        margin: 12px 5px 0 0;
        padding: 0.4rem 0.6rem;
        height: 40px;
        width: 40px;
        font-size: 1.5rem;
        cursor: pointer;
        border-radius: 3px;
    }

    &>span i:hover{
        background-color: #1f80e0 ;
    }
`
const DownloadApp = styled.div`
    height: 4.5rem;
    width: 15rem;
    overflow: hidden;
    &>img{
        margin-top: 0.6rem;
        height: 5.3rem;
        width: 100%;
        cursor: pointer;

    }
`

const Footer = () => {
  return (
    <Container>
        <Details>
            <div>
                <a href="/home">About Disney+ Hotstar</a>
                <a href="/home">Terms Of Use</a>
                <a href="/home">Privacy Policy</a>
                <a href="/home">FAQ</a>
                <a href="/home">Feedback</a>
                <a href="/home">Careers</a>
            </div>
            <p>© 2022 STAR. All Rights Reserved. HBO, Home Box
                Office and all related channel and programming
                logos are service marks of, and all related programming
                visuals and elements are the property of, Home Box Office,
                Inc. All rights reserved.
            </p>
        </Details>
        <Social>
            <h4>Connect with us </h4>
            <span><i class="fa-brands fa-facebook-f"></i>
             <i class="fa-brands fa-twitter"></i></span>
        </Social>
        <DownloadApp>
                <h5>Disney+ Hotstar App</h5>
                <img src="https://www.hotstar.com/assets/67764ffe0b6b18e06d60049a00c86335.svg" alt="" />
        </DownloadApp>
    </Container>
  )
}

export default Footer