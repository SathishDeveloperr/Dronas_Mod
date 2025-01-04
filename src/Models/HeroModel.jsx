import { Canvas } from '@react-three/fiber'
import React from 'react'
import HeroPrime from './HeroPrime'
import { ContactShadows, Environment, OrbitControls } from '@react-three/drei'

const HeroModel = () => {
  return (
    <>
      <Canvas>
        <OrbitControls enableZoom={false} enableRotate={true}  enablePan={false}  />
        <ContactShadows  />
        <directionalLight intensity={6} position={[1,1,1]}/>
        <directionalLight intensity={6} position={[-1,-1,-1]}/>
        <HeroPrime />
      </Canvas>
    </>
  )
}

export default HeroModel
