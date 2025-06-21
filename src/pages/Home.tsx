import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import SkillsGraph from '../components/SkillsGraph';
import SkillsOrb from '../components/SkillsOrb';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="min-h-screen flex items-center relative">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-6xl font-bold text-white mb-4">
              Hi, I'm <span className="text-emerald-400">Rohit Thakur</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Full Stack Developer & Problem Solver
            </p>
            <div className="prose prose-invert">
              <p className="text-gray-300">
                I'm a passionate Full Stack Developer with expertise in modern web technologies
                and a strong foundation in Data Structures and Algorithms. My focus is on
                creating scalable, efficient solutions using cutting-edge technologies.
              </p>
              <p className="text-gray-300 mt-4">
                With experience in both frontend and backend development, I bring a
                comprehensive approach to every project. I specialize in React, Node.js,
                and cloud technologies, always striving to deliver high-quality solutions.
              </p>
            </div>
          </div>
          <div className="h-[500px]">
            <Canvas camera={{ position: [0, 0, 8] }}>
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={5} />
              <SkillsOrb />
            </Canvas>
          </div>
        </div>
      </div>

      <div className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Skills</h2>
          <SkillsGraph />
        </div>
      </div>

      <Footer />
    </div>
  );
}