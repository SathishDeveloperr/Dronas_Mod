import { useAnimations, useGLTF } from '@react-three/drei'
import React, { useEffect } from 'react'

const HeroPrime = () => {
  const drone=useGLTF('/models/drone_scifi.glb');
  const Animation=useAnimations(drone.animations,drone.scene);  

  useEffect(() => {
    const hoverAction = Animation.actions.Animation;
    if (hoverAction) {
      hoverAction.play();
      hoverAction.timeScale = .5;
    }
  }, []);

  return (
    <>
      <primitive object={drone.scene} scale={1.5} position={[0,1,2]} rotation={[10,10,9.5]} />
    </>
  )
}

export default HeroPrime
