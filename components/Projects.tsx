"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

const projectsData = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    githubLink: "https://github.com/yourusername/e-commerce-platform",
    demoLink: "https://e-commerce-platform-demo.com",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management tool with real-time updates and analytics.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Vue.js", "Express", "PostgreSQL", "Chart.js"],
    githubLink: "https://github.com/yourusername/task-management-app",
    demoLink: "https://task-management-app-demo.com",
  },
  {
    title: "AI-powered Chatbot",
    description: "An intelligent chatbot using natural language processing for customer support.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Python", "TensorFlow", "Flask", "React"],
    githubLink: "https://github.com/yourusername/ai-chatbot",
    demoLink: "https://ai-chatbot-demo.com",
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center text-[#ccd6f6]"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className="bg-[#112240] hover:bg-[#1d3557] transition-colors duration-300 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <CardContent className="p-4">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2 text-[#ccd6f6]">{project.title}</h3>
                  <p className="text-sm text-[#8892b0] mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-[#233554] text-xs text-[#64ffda] px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#64ffda] hover:text-[#00bfff]"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaGithub size={20} />
                    </a>
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#64ffda] hover:text-[#00bfff]"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaExternalLinkAlt size={20} />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-[#112240] p-6 rounded-lg max-w-2xl w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-[#ccd6f6]">{selectedProject.title}</h3>
                <Button variant="ghost" size="icon" onClick={() => setSelectedProject(null)}>
                  <X className="h-6 w-6 text-[#64ffda]" />
                </Button>
              </div>
              <Image
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                width={600}
                height={400}
                className="rounded-lg mb-4"
              />
              <p className="text-[#8892b0] mb-4">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="bg-[#233554] text-xs text-[#64ffda] px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-between">
                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#64ffda] hover:text-[#00bfff] flex items-center"
                >
                  <FaGithub size={20} className="mr-2" />
                  GitHub
                </a>
                <a
                  href={selectedProject.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#64ffda] hover:text-[#00bfff] flex items-center"
                >
                  <FaExternalLinkAlt size={20} className="mr-2" />
                  Live Demo
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

