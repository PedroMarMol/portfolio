import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import { MeshDistortMaterial, Sphere, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import AngelciaProDisplayOTF from '/fonts/Anglecia-Pro-Display.otf'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
const Container = styled.div`
  height: 100%;
  width: 64vw;
  scroll-snap-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  color: #583E23;
`
const InfoContainer = styled.div`
  letter-spacing: 0.02em;
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.8rem;
  z-index: 1;
`
const Title = styled.h1`
  font-size: 4.6rem;
`
const WhatIDo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`
const Line = styled.img`
  height: 0.15rem;
`
const Subtitle = styled.h2`
  fontFamily: 'Anglecia Pro Display', sans-serif;
  font-size: 2.2rem;
  color: #b34043;
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
  font-family: 'Anglecia Pro Display', sans-serif;
  @font-face {
    font-family: 'Anglecia Pro Display';
    src: url(${AngelciaProDisplayOTF}) format('opentype');
  }
  font-size: calc(0.5vw + 0.8vh);
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

const ImageContainer = styled.div`
  flex: 3;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
`

const AnimationContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 2vh;
  left: 5vw;
  z-index: -2;
  @media (max-width: 768px) {
    position: absolute;
    width: 100vw;
    top: 27vh;
    left: -49vw;
  }
`

const Img = styled.img`
  width: 50vw;
  height: 65vh;
  object-fit: contain;
  z-index: -1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: eva01 2s infinite ease alternate;

  @media (max-width: 768px) {
    position: absolute;
    width: 45vw;
    top: 50vh;
    left: -20vw;
  }

  @keyframes eva01 {
    to {
      transform: translateY(20px);
    }
  }
`

export const User = () => {
  // Sphere arguments for larger screens
  const sphereArgsLarge = [1, 100, 200]
  // Sphere arguments for smaller screens
  const sphereArgsSmall = [0.4, 50, 100]
  // Check the initial screen size so the Sphere is well displayed
  const initialScreenSize = (window.innerWidth <= 768) ? sphereArgsSmall : sphereArgsLarge

  const [adaptativeSize, setAdaptativeSize] = useState(initialScreenSize)
  const [cameraPosition, setCameraPosition] = useState([5, 5, 5])

  const handleResize = useCallback(() => {
    if (window.innerWidth <= 768) {
      setAdaptativeSize(sphereArgsSmall)
      setCameraPosition([5, 2, 5])
    } else {
      setAdaptativeSize(sphereArgsLarge)
      setCameraPosition([5, 5, 5])
    }
  }, [setAdaptativeSize, setCameraPosition])
  
  useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [handleResize])

  return (
    <Section id="homepage">
      <Navbar/>
      <Container>
        <InfoContainer>
          <Title>Pedro Martos</Title>
          <WhatIDo>
            <Line src='./img/line.png' />
            <Subtitle>What I do</Subtitle>
          </WhatIDo>
          <Desc>I enjoy creating functional apps and human-centered digital experiences.</Desc>
          <Button>Learn more</Button>
        </InfoContainer>
        <ImageContainer>
          <AnimationContainer>
            <Canvas camera={{ fov: 25, position: cameraPosition }}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={adaptativeSize} scale={1}>
                <MeshDistortMaterial 
                  color='#726ee7'
                  attach='material'
                  distort={0.65}
                  speed={2}
                  transparent={true}
                  opacity={0.3}
                />
              </Sphere>
            </Canvas>
          </AnimationContainer>
          <Img src='./img/eva01.png' />
        </ImageContainer>
      </Container>
    </Section>
  )
}