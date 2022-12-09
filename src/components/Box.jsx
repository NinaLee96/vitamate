import React from "react";

import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

import texture from "../assets/blue-abstract.jpg";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Box = () => {
  const colorMap = useLoader(TextureLoader, texture);
  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <OrbitControls enableZoom={false} />
      <directionalLight position={[-2, 1, 2]} intensity={1} />
      <mesh rotation={[90, 0, 20]}>
        <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
        <meshStandardMaterial map={colorMap} />
      </mesh>
    </Canvas>
  );
};

export default Box;
