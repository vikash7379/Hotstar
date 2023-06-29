import React from 'react'
import styled from 'styled-components'


const Container = styled.section`
    height: 100vh;
    width: 100vw;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    padding: 80px 10px;
    align-items: center;
    flex-direction: column;
    text-align: center;
`
const BgImg = styled.div`
  height: 100%;
  background-image: url('./images/login-background.jpg');
  background-size: cover;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`
const Wrapper = styled.div`
  margin-top: 3rem;
  width: 100%;
  display: flex;
  max-width: 650px;
  row-gap:26px;
  flex-direction: column;
  padding: 3rem 4rem;
  border-radius: 20px;
  border: 1px solid rgb(100, 100, 111);
  backdrop-filter: blur(4px);
  box-shadow: rgba(100, 100, 111, 0.4) 0px 7px 29px 10px;


  @media(max-width :480px){
    padding: 1rem;
  }
`
const CtaLogoOne = styled.img`
  max-width: 600px;
  width: 100%;
`
const SignUp = styled.a`
  background-color: #0063e5;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 1.5px;
  width: 100%;
  padding: 1.5rem 0;
  border-radius: 5px;
  cursor: pointer;

  &:hover{
    background-color: #0483ee;
  }
`
const Description = styled.p`
  word-spacing: 2px;
  letter-spacing: 1px;
  opacity: 0.8;
`
const CtaLogoTwo = styled.img`
  width: 100%;
`

const Login = () => {
  return (
    <Container>
          <Wrapper>
            <CtaLogoOne src='./images/cta-logo-one.svg'/>
            <SignUp>GET ALL THERE</SignUp>
            <Description>
              Get a Premier Access to Raya and the Last Dragon
              with a Disney+ Subscription. As of 23/11/2022,
              and The Disney Bundle will be increase by $1.
              Join our subscription to avai this offer now.
            </Description>
            <CtaLogoTwo src='./images/cta-logo-two.png'/>
          </Wrapper>
          <BgImg/>
    </Container>
  )
}

export default Login