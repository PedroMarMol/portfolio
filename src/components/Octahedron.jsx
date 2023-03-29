import React from 'react'

const Octahedron = () => {
  return (
    <mesh>
      <octahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color='gray' />
    </mesh>
  )
}

export default Octahedron