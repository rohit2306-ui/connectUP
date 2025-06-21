import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';

const projects = [
  {
    title: "AI Chat Application",
    description: "Real-time chat application with AI-powered responses",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    technologies: ["React", "Node.js", "OpenAI", "Socket.io"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com"
  },
  {
    title: "E-commerce Platform",
    description: "Full-featured e-commerce platform with payment integration",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "TailwindCSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com"
  },
  {
    title: "Portfolio Website",
    description: "Interactive 3D portfolio website with GSAP animations",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    technologies: ["React", "Three.js", "GSAP", "TailwindCSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com"
  },
  {
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b",
    technologies: ["React", "Firebase", "Material-UI", "Redux"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com"
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-white text-center mb-16">My Projects</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}