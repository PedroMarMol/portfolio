/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 camera.gltf --transform
Author: Epic_Tree_Store (https://sketchfab.com/johngreenstone)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/olympus-film-camera-pbr-scan-project-aa843426948145aea7213ae6bf5d3bb6
Title: Olympus Film Camera PBR Scan Project
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/camera-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.87}>
        <group position={[-3.22, 0, 0.01]}>
          <mesh geometry={nodes.Final500K_0.geometry} material={materials.SketchfabPBRExtractor} />
          <mesh geometry={nodes.Final500K_0_1.geometry} material={materials.SketchfabPBRExtractor} />
          <mesh geometry={nodes.Final500K_0_2.geometry} material={materials.SketchfabPBRExtractor} />
          <mesh geometry={nodes.Final500K_0_3.geometry} material={materials.SketchfabPBRExtractor} />
          <mesh geometry={nodes.Final500K_0_4.geometry} material={materials.SketchfabPBRExtractor} />
        </group>
        <mesh geometry={nodes.Cube_0.geometry} material={materials['Material.010']} position={[-2.25, -0.5, -5.62]} rotation={[-Math.PI / 2, 0, 0]} scale={[1.32, 0.52, 0.06]} />
        <mesh geometry={nodes.Cube006_0.geometry} material={materials['Material.008']} position={[-2.38, 0.85, -5.75]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[0.21, 0.29, 0.29]} />
        <mesh geometry={nodes.Cube002_0.geometry} material={materials['Material.008']} position={[-2.32, 0.09, -5.82]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Cube001_0.geometry} material={materials['Cube.001_0']} position={[-2.38, 0.45, -5.75]} />
      </group>
    </group>
  )
}

useGLTF.preload('/camera-transformed.glb')