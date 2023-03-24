import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
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
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
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
`
const Desc = styled.p`
  font-size: 2rem;
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
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.2rem;
`

export const About = () => {
  return (
    <Section>
      <Container>
        <ImageContainer>{/* modelo 3D */}</ImageContainer>
        <Info>
          <Title>Think outside the square space.</Title>
          <WhatWeDo>
            <Line src='./img/line.png' />
            <Subtitle>Who I am</Subtitle>
          </WhatWeDo>
          <Desc>A creative individual with a lot of interests.</Desc>
          <Button>See my works.</Button>
        </Info>
      </Container>
    </Section>
  )
}