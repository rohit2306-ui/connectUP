import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Box, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

export function Scene() {
  const sphereRef = useRef<THREE.Mesh>(null);
  const boxRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (sphereRef.current && boxRef.current) {
      sphereRef.current.rotation.x += 0.01;
      sphereRef.current.rotation.y += 0.01;
      boxRef.current.rotation.x -= 0.01;
      boxRef.current.rotation.y -= 0.01;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Sphere ref={sphereRef} args={[1, 32, 32]} position={[-2, 0, 0]}>
        <MeshDistortMaterial
          color="#4338ca"
          speed={2}
          distort={0.4}
          radius={1}
        />
      </Sphere>
      <Box ref={boxRef} args={[1.5, 1.5, 1.5]} position={[2, 0, 0]}>
        <meshStandardMaterial color="#4338ca" />
      </Box>
    </>
  );
}