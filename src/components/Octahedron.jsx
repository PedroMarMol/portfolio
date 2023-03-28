import React, { useRef } from "react";
import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Octahedron = () => {
  const textPositions = [
    [0.5, 0, 0],
    [-0.5, 0, 0],
    [0, 0.5, 0],
    [0, -0.5, 0],
    [0, 0, 0.5],
    [0, 0, -0.5],
  ];

  const textRef = useRef();

  useFrame((state) => {
    textRef.current.position.x =
      textPositions[Math.floor(state.clock.elapsedTime) % 6][0];
    textRef.current.position.y =
      textPositions[Math.floor(state.clock.elapsedTime) % 6][1];
    textRef.current.position.z =
      textPositions[Math.floor(state.clock.elapsedTime) % 6][2];
  });

  return (
    <mesh>
      <octahedronGeometry args={[1, 0]} />
      <meshStandardMaterial>
        <RenderTexture attach="map">
          {textPositions.map((pos, i) => (
            <group key={i} position={pos}>
              <Text
                ref={textRef}
                fontSize={0.1}
                color="#fff"
                textAlign="center"
              >
                hello
              </Text>
            </group>
          ))}
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};

export default Octahedron;