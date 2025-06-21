import { useRef } from 'react';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

const skills = [
  'React', 'TypeScript', 'Node.js', 'Three.js',
  'MongoDB', 'PostgreSQL', 'Next.js', 'GraphQL',
  'Docker', 'AWS', 'Python', 'TailwindCSS'
];

export default function SkillsOrb() {
  const groupRef = useRef<THREE.Group>(null);
  const textRefs = useRef<THREE.Mesh[]>([]);

  return (
    <group ref={groupRef}>
      <mesh>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial
          color="#10b981"
          metalness={0.7}
          roughness={0.2}
          wireframe
        />
      </mesh>
      {skills.map((skill, i) => {
        const angle = (i / skills.length) * Math.PI * 2;
        const radius = 3;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        return (
          <Text
            key={skill}
            ref={(el) => {
              if (el) textRefs.current[i] = el;
            }}
            position={[x, 0, z]}
            fontSize={0.3}
            color="#10b981"
            anchorX="center"
            anchorY="middle"
            lookAt={[0, 0, 0]}
          >
            {skill}
          </Text>
        );
      })}
    </group>
  );
}