import { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

function SkillSphere({ position, skill }: { position: [number, number, number], skill: string }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.5;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.3, 32, 32]} />
      <meshStandardMaterial color="#10b981" metalness={0.7} roughness={0.2} />
    </mesh>
  );
}

function CircularSkills() {
  const skills = [
    'React', 'Node.js', 'TypeScript', 'MongoDB',
    'Express', 'Next.js', 'GraphQL', 'AWS'
  ];

  return (
    <group>
      {skills.map((skill, i) => {
        const angle = (i / skills.length) * Math.PI * 2;
        const radius = 2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        return <SkillSphere key={skill} position={[x, 0, z]} skill={skill} />;
      })}
    </group>
  );
}

export default function Hero3D() {
  return (
    <Canvas camera={{ position: [0, 2, 5] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls enableZoom={false} />
      <CircularSkills />
    </Canvas>
  );
}