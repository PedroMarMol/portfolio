import React, { Suspense } from 'react'
import styled from 'styled-components'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Octahedron from './Octahedron'
import AngelciaProDisplayOTF from '/fonts/Anglecia-Pro-Display.otf'

const Section = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-snap-align: start;
  ${'' /* overflow-y: scroll; */}
`
const Container = styled.div`
  height: 100%;
  width: 64vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  color: #583E23;
  position: relative;

  @media (max-width: 768px) {
    width: 100vw;
  }
`

const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  letter-spacing: 0.02em;
  z-index: 1;
  gap: 0.5rem;
  @media (max-width: 768px) {
    padding: 4rem;
    position: absolute;
    top: 0;
  }
`
const Title = styled.h1`
  font-size: 4.2rem;
  @media (max-width: 768px) {
    font-size: calc(4vw + 5vh);
  }
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
  fontFamily: 'Anglecia Pro Display, sans-serif';
  font-size: 2.2rem;
  color: #9190b7;
  @font-face {
    font-family: 'Anglecia Pro Display';
    src: url(${AngelciaProDisplayOTF}) format('opentype');
  }
`
const Desc = styled.p`
  font-weight: 500;
  font-family: 'DM Sans', sans-serif;
  font-size: 1.6rem;
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
  font-weight: 900;
  font-size: calc(0.5vw + 1vh);
  background-size: 350% auto;
  color: #583E23;
  box-shadow: 0 0 0.5rem #d1c9a6;
  border-radius: 10px;
  display: block;

  @media (max-width: 768px) {
    width: calc(35vw + 2vh);
    height: calc(6vh + 1vw);
    font-size: calc(0.5vw + 2vh);
  }

  &:hover {
    background-position: right center;
    color: #583E23;
    text-decoration: none;
  }
`

const AnimationContainer = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  z-index: 0;

  @media (max-width: 768px) {
    position: absolute;
    width: 100vw;
    top: 40vh;
    left: 20vw;

    canvas {
      width: 100% !important;
      height: 80vh !important;
    }
  }
`

export const About = () => {
  return (
    <Section id="about">
      <Container>
        <AnimationContainer>
          <Canvas camera={{ position: [5, 5, 5], fov: 35 }}>
            <Suspense fallback={null}>
              <ambientLight color='#726ee7' intensity={1.5} />
              <directionalLight position={[3, 2, 1]} />
              <Octahedron />
              <OrbitControls enableZoom={false} autoRotate />
            </Suspense>
          </Canvas>
        </AnimationContainer>
        <InfoContainer>
          <Title>Think outside the of the octahedron</Title>
          <WhatWeDo>
            <Line src='./img/line.png' />
            <Subtitle>Who I am</Subtitle>
          </WhatWeDo>
          <Desc>A creative individual passionate about nature, technology, writing and the human race.</Desc>
          <Button>See my works</Button>
        </InfoContainer>
      </Container>
    </Section>
  )
}