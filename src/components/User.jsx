import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
const Container = styled.div`
  height: 100vh;
  width: 64vw;
  scroll-snap-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  color: #583E23;
`;

const Info = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.2rem;
  z-index: 1;
`
const Title = styled.h1`
  font-size: 4.6rem;
`
const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`
const Line = styled.img`
  height: 0.15rem;
`
const Subtitle = styled.h2`
  color: #25A372;
  font-size: 1.8rem;
`
const Desc = styled.p`
  font-size: 2rem;
  ${'' /* font-family: 'ComicSans'; */}
`
const Button = styled.button`
  max-width: 8rem;
  max-height: 2.4rem;
  width: 18vw;
  height: 3.5vh;
  background-image: linear-gradient(to right, #d1c9a6 0%, #73685B  51%, #d1c9a6  100%);
  margin-right: 1rem;
  text-align: center;
  transition: 0.5s;
  font-family: 'Gallient', sans-serif;
  font-size: calc(0.5vw + 1vh);
  background-size: 350% auto;
  color: #583E23;            
  box-shadow: 0 0 0.5rem #d1c9a6;
  border-radius: 10px;
  display: block;

  &:hover {
    background-position: right center;
    color: #583E23;
    text-decoration: none;
  }
`

const ImageContainer = styled.div`
  flex: 3;
  position: relative;
  z-index: 0;
`
const Img = styled.img`
  width: 50rem;
  height: 37rem;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: eva01 2s infinite ease alternate;

  @media (max-width: 768px) {
    position: absolute;
    width: 13rem;
    top: 10rem;
    left: -5rem;
    z-index: -1;
  }

  @keyframes eva01 {
    to {
      transform: translateY(20px);
    }
  }
`


export const User = () => {
  return (
    <Section>
      <Navbar/>
      <Container>
        <Info>
          <Title>Slogan personal</Title>
          <WhatWeDo>
            <Line src='./img/line.png' />
            <Subtitle>What I do</Subtitle>
          </WhatWeDo>
          <Desc>We enjoy creating delightful, human-centered digital experiences.</Desc>
          <Button>Learn More</Button>
        </Info>
        <ImageContainer>
          {/* modelo 3D */}
          <Img src='./img/eva01.png' />
        </ImageContainer>
      </Container>
    </Section>
  )
}