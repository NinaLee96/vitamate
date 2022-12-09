import React from "react";

import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

import texture from "../assets/blue-abstract.jpg";

import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";

const Blob = () => {
  // const colorMap = useLoader(TextureLoader, texture);
  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <OrbitControls enableZoom={false} />
      <directionalLight position={[-2, 1, 2]} intensity={1} />
      <Sphere visible args={[1, 100, 200]}>
        <MeshDistortMaterial
          color="yellow"
          attach="material"
          distort={0.8}
          speed={1.5}
          roughness={0}
        />
      </Sphere>
    </Canvas>
  );
};

export default Blob;
