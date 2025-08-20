import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  { id: 1, title: "E-commerce Platform", image: "/photo/ecommer.png" },
  { id: 2, title: "Healthcare Dashboard", image: "/photo/health2.jpg" },
  { id: 3, title: "Banking App", image: "/photo/bank.png" },
  { id: 4, title: "AI Automation Tool", image: "/photo/ai.webp" },
  { id: 5, title: "Learning Management", image: "/photo/learn.png" },
  { id: 6, title: "CRM System", image: "/photo/qrmenusrm.png" },
  { id: 7, title: "Food Delivery App", image: "/photo/food.jpg" },
  { id: 8, title: "Real Estate Portal", image: "/photo/real.jpeg" },
  { id: 9, title: "Travel Booking", image: "/photo/tour.png" },
  { id: 10, title: "Project Management", image: "/photo/project.png" },
];

export function ProjectsCarousel() {
  // Duplicate projects for infinite scroll
  const duplicatedProjects = [...projects, ...projects];

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-6"
        animate={{
          x: [0, -1920] // Adjust based on total width
        }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {duplicatedProjects.map((project, index) => (
          <motion.div
            key={`${project.id}-${index}`}
            className="relative group min-w-80 glass-card rounded-2xl overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-60 object-cover"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="flex gap-3">
                {/* View button */}
                <Button asChild variant="hero" size="sm" className="rounded-full">
                  <a href="https://www.inmenu.uz/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} />
                    View
                  </a>
                </Button>
                {/* GitHub button */}
                <Button asChild variant="outline" size="sm" className="rounded-full bg-white/10 border-white/20 text-white hover:bg-white/20">
                  <a href="https://github.com/Azizbe777" target="_blank" rel="noopener noreferrer">
                    <Github size={16} />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-white font-medium">{project.title}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
