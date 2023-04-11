import React from 'react'
import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Polaroid from '../3Dmodels/Polaroid'
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
`

function PhotoAlbum() {
  return (
    <>
      <Canvas>
        <Stage environment='city' intensity={0.6}>
          <Polaroid />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate/>
      </Canvas>
      <Info>
        Applied React Toolkit Query and Async
        Thunk functions knowledge.
      </Info>
    </>
  )
}

export default PhotoAlbum