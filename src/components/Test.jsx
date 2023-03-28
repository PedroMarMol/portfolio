import React, { useRef } from "react"
import styled from "styled-components"
import { Canvas, useFrame } from "@react-three/fiber"
import { OctahedronGeometry, Vector3 } from "three"
import { Text, PerspectiveCamera, RenderTexture } from "@react-three/drei"

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  scroll-snap-align: center;
`

function Octahedron() {
  const meshRef = useRef()

  const textPositions = [
    new Vector3(1, 0, 0),
    new Vector3(-1, 0, 0),
    new Vector3(0, 1, 0),
    new Vector3(0, -1, 0),
    new Vector3(0, 0, 1),
    new Vector3(0, 0, -1),
  ]

  useFrame(() => {
    meshRef.current.rotation.x += 0.01
    meshRef.current.rotation.y += 0.01
  })

  return (
    <mesh ref={meshRef}>
      <octahedronGeometry args={[0.3, 0]} />
      <meshStandardMaterial>
        <RenderTexture attach="map">
          {textPositions.map((pos, i) => (
            <group key={i} position={pos.toArray()}>
              <Text fontSize={0.5} color="white" anchorX="center" anchorY="middle">
                hello
              </Text>
            </group>
          ))}
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  )
}

export const Test = () => {
  return (
    <Container>
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <PerspectiveCamera makeDefault position={[0, 0, 2]} />
        <Octahedron />
      </Canvas>
    </Container>
  )
}