/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 polaroid.gltf --transform
Author: Perry Wubben (https://sketchfab.com/perry_wubben)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/polaroid-600-vintage-cool-cam-8fdc1e32d83b43d0b8daf83e863e639f
Title: Polaroid 600 Vintage Cool Cam
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/polaroid-transformed.glb')
  return (
    <group {...props} dispose={null} >
      <group position={[-28.36, -11.06, -22.63]} rotation={[0, Math.PI, 0]} >
        <group rotation={[0, Math.PI, 0]}>
          <group position={[2.1, 87.45, -6.33]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Lens_LP_TransparenyMat_0.geometry} material={materials.TransparenyMat} position={[0, 17.6, 0]} rotation={[Math.PI / 2, 0, 0]} />
          </group>
          <mesh geometry={nodes.MainBody_LP_BaseMat_0.geometry} material={materials.BaseMat} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.FiewFinderLens_LP_TransparenyMat_0.geometry} material={materials.TransparenyMat} position={[69.86, 95.83, -23.61]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.ButtonFlash_LP_BaseMat_0.geometry} material={materials.BaseMat} position={[-102.47, 27.22, -35.41]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.ButtonShutter_LP_BaseMat_0.geometry} material={materials.BaseMat} position={[-113.17, 22.88, 25.91]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.FlashLens_LP_TransparenyMat_0.geometry} material={materials.TransparenyMat} position={[55.56, 199.28, 44.33]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.ViewfinderProtector_LP_BaseMat_0.geometry} material={materials.BaseMat} position={[69.06, 85.41, -199.34]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Switch_LP_BaseMat_0.geometry} material={materials.BaseMat} position={[3.36, 47.15, -3.66]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.SwitchPanel_LP_BaseMat_0.geometry} material={materials.BaseMat} position={[3.36, 47.15, -3.66]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.LatchRelease_LP_BaseMat_0.geometry} material={materials.BaseMat} position={[-99.61, -20.03, -10.84]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Straphandle_LP_BaseMat_0.geometry} material={materials.BaseMat} position={[0, 1.07, -201.03]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.ViewFinder_LP_BaseMat_0.geometry} material={materials.BaseMat} position={[68.45, 86.24, -190.92]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.ViewFinderGlass_LP_TransparenyMat_0.geometry} material={materials.TransparenyMat} position={[68.42, 85.99, -190.92]} rotation={[Math.PI, 0, Math.PI]} />
          <mesh geometry={nodes.PhotoRollers_LP_BaseMat_0.geometry} material={materials.BaseMat} position={[-85.98, -6.52, 46.92]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.FrontPlate_LP_BaseMat_0.geometry} material={materials.BaseMat} rotation={[-Math.PI / 2, 0, 0]} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/polaroid-transformed.glb')