import React from 'react'
import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Camera from '../3Dmodels/Camera'
import styled from 'styled-components'
import AngelciaProDisplayOTF from '/fonts/Anglecia-Pro-Display.otf'

const InfoContainer = styled.div`
  position: absolute;
  top: 12vh;
  right: 10vw;
  max-width: 18vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  @media (max-width: 768px){
    z-index: 0;
    top: 40vh;
    max-width: 52vw;
  }
`

const Info = styled.div`
  font-family: 'DM Sans';
  font-size: 0.9rem;
  background-color: white;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 0 1rem rgba(0,0,0,0.1);
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
    font-size: calc(0.5vw + 1.8vh);
  }

  &:hover {
    background-position: right center;
    color: #583E23;
    text-decoration: none;
  } 
`

function PhotoAlbum() {
  return (
    <>
      <Canvas style={{zIndex: 1}}>
        <Stage environment='city' intensity={0.6}>
          <Camera />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate/>
      </Canvas>
      <InfoContainer>
        <Button onClick={() => window.open('https://github.com/PedroMarMol/photo_album', '_blank')}>
          Repository
        </Button>
        <Info>
          Applied React Toolkit Query and Async Thunk functions knowledge.
        </Info>
      </InfoContainer>  
    </>
  )
}

export default PhotoAlbum