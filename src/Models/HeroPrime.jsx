import { useAnimations, useGLTF } from '@react-three/drei';
import React, { useEffect, useState } from 'react';

const HeroPrime = () => {
  const drone = useGLTF('/models/drone_scifi.glb');
  const Animation = useAnimations(drone.animations, drone.scene);
  const [scale, setScale] = useState(1); // Default scale

  useEffect(() => {
    // Adjust scale based on screen size
    const updateScale = () => {
      if (window.innerWidth <= 768) {
        setScale(1.5); // Mobile scale
      } else {
        setScale(1); // Default scale for larger screens
      }
    };

    // Call on component mount
    updateScale();

    // Add event listener to handle window resizing
    window.addEventListener('resize', updateScale);

    // Cleanup event listener on unmount
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  useEffect(() => {
    const hoverAction = Animation.actions.Animation;
    if (hoverAction) {
      hoverAction.play();
      hoverAction.timeScale = 0.5;
    }
  }, [Animation]);

  return (
    <>
      <primitive
        object={drone.scene}
        scale={scale}
        position={[0, 1, 2]}
        rotation={[10, 10, 9.5]}
      />
    </>
  );
};

export default HeroPrime;
