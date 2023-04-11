import React from 'react'
import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Notebook from '../3Dmodels/Notebook'
import styled from 'styled-components'

const Info = styled.p`
  font-family: 'DM Sans';
  font-size: 0.9rem;
  position: absolute;
  top: 15vh;
  right: 7vw;
  background-color: white;
  max-width: 10vw;
  margin: 2rem auto;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 0 1rem rgba(0,0,0,0.1);
  @media (max-width: 768px){
    z-index: 0;
    top: 35vh;
    max-width: 52vw;
  }
`


function DejaVu() {
  return (
    <>
      <Canvas style={{zIndex: 1}}>
        <Stage environment='city' intensity={0.6}>
          <Notebook />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate/>
      </Canvas>
      <Info>
        To-Do App made with React, making use of
        Context, Firebase (Auth and Cloud Firestore), Tailwind and React
        Router.
      </Info>
    </>
  )
}

export default DejaVu