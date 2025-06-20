"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FaGithub, FaLink, FaYoutube } from "react-icons/fa"

type Project = {
  title: string
  description: string
  image: string
  tags: string[]
  githubLink: string
  websiteLink?: string
  youtubeLink?: string
}

const projectsData: Project[] = [
  {
    title: "Portfolio with Next.js",
    description:
      "A personal portfolio built with Next.js, showcasing a variety of projects and highlighting web development skills.",
    image: "/portfolio.png",
    tags: ["Next.js", "Web Development", "Portfolio"],
    githubLink: "https://github.com/Yassino14/portfolio.git",
    websiteLink: "https://yassinolouati.me",
  },
  {
    title: "UML Beast",
    description:
      "A Website built with Next.js. This UML Diagram Generator is powerful, free and simple to use — take a look!",
    image: "/uml.png",
    tags: ["Next.js", "Web Development", "UML", "Diagram", "Generator"],
    githubLink: "https://github.com/Yassino14/umlbeast.git",
    websiteLink: "https://umlbeast.yassinolouati.me",
  },
  {
    title: "Vlogs & Travel Videos in King Yassino",
    description:
      "A YouTube channel featuring vlogs and travel videos, sharing experiences and insights from various journeys.",
    image: "/ytb.jpg",
    tags: ["YouTube", "Vlogs", "Travel"],
    youtubeLink: "https://www.youtube.com/@KingYassino",
    githubLink: "",
  },
  {
    title: "Nerdvana",
    description:
      "A website built with Next.js, packed with powerful features for geeks and nerds.",
    image: "/nerdvana.png",
    tags: [
      "Next.js",
      "Web Development",
      "Geek",
      "Nerd",
      "LaTeX",
      "Software",
      "Converter",
      "Pomodoro",
      "Idea",
      "Advisor",
    ],
    githubLink: "https://github.com/Yassino14/nerdvana",
    websiteLink: "https://nerdvana.yassinolouati.me",
  },
  {
    title: "Islamy",
    description: "Islamic AI Chatbot for religious questions.",
    image: "/Islamy.png",
    tags: [
      "Next.js",
      "Web Development",
      "islam",
      "chatbot",
      "ai",
      "api",
      "learn",
      "islamic",
      "gpt",
      "assistant",
    ],
    githubLink: "https://github.com/Yassino14/Islamy",
    websiteLink: "https://islamy.yassinolouati.me",
  },
  {
    title: "Photool",
    description:
      "A website built with Next.js for Photo Editing and Enhancing.",
    image: "/photool.png",
    tags: [
      "Next.js",
      "Web Development",
      "design",
      "photo",
      "editing",
      "effects",
      "photoshop",
      "images",
      "crop",
      "contrast",
    ],
    githubLink: "https://github.com/Yassino14/photool",
    websiteLink: "https://photool.yassinolouati.me",
  },
  {
    title: "MERN Habit Tracker",
    description:
      "A habit tracker built with the MERN stack that helps users keep track of their daily habits, offering a simple and user-friendly interface.",
    image: "/ht.png",
    tags: ["MERN", "MongoDB", "React", "Node.js"],
    githubLink: "https://github.com/Yassino14/projet_mern.git",
  },
  {
    title: "Sa77a - Sleep & Hydration Tracker (Android)",
    description:
      "An Android app designed for tracking sleep and hydration, with a focus on creating personalized reminders and health tips.",
    image: "/mob.jpg",
    tags: ["Android", "Java", "Sleep Tracking", "Hydration"],
    githubLink: "https://github.com/Yassino14/sa77a-android-app",
  },
  {
    title: "AI-based Diet Planner",
    description:
      "A Django-based web app that uses AI to generate personalized meal plans based on users’ weight, height, activity level, age, and gender.",
    image: "/ai.png",
    tags: ["Django", "Python", "AI", "API"],
    githubLink: "https://github.com/Yassino14/Sa77a-DietPlanner.git",
    websiteLink: "https://dietplanner.yassinolouati.me",
  },
  {
    title: "Streamlit Tunisair Flight Predictor",
    description:
      "A machine learning model deployed using Streamlit that predicts Tunisair flight arrivals, analyzing data to estimate whether a flight will be on time or late.",
    image: "/stream.png",
    tags: ["Streamlit", "Machine Learning", "Python", "Flight Prediction"],
    githubLink:
      "https://github.com/Yassino14/Streamlit-Flight-Delay-Predictor.git",
    websiteLink: "https://flightpredictor.yassinolouati.me",
  },
  {
    title: "Emotion Detector with OpenCV & Streamlit",
    description:
      "An emotion detection app built with OpenCV and Streamlit that uses facial recognition to detect emotions in real-time from video input.",
    image: "/emo.jpg",
    tags: ["OpenCV", "Streamlit", "Machine Learning", "Emotion Detection"],
    githubLink: "https://github.com/Yassino14/Emotion-Detector.git",
    websiteLink: "https://emotiondetector.yassinolouati.me",
  },
  {
    title: "Power BI Dashboards",
    description:
      "Interactive and data-driven dashboards created using Power BI, offering deep insights into various datasets.",
    image: "/power.png",
    tags: ["Power BI", "Data Visualization", "Dashboards"],
    githubLink: "https://github.com/Yassino14/Power-BI-Dashboards.git",
    websiteLink: "https://powerbidashboards.yassinolouati.me",
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

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

        {/* GRID OF PROJECT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card
                className="bg-[#112240] hover:bg-[#1d3557] transition-colors duration-300 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <CardContent className="p-4 flex flex-col h-full">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="rounded-lg mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-2 text-[#ccd6f6]">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#8892b0] mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="bg-[#233554] text-xs text-[#64ffda] px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4 mt-auto">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#64ffda] hover:text-[#00bfff]"
                        onClick={(e) => e.stopPropagation()}
                        title="GitHub"
                      >
                        <FaGithub size={20} />
                      </a>
                    )}
                    {project.websiteLink && (
                      <a
                        href={project.websiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#64ffda] hover:text-[#00bfff]"
                        onClick={(e) => e.stopPropagation()}
                        title="Live Site"
                      >
                        <FaLink size={20} />
                      </a>
                    )}
                    {project.youtubeLink && (
                      <a
                        href={project.youtubeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#64ffda] hover:text-[#00bfff]"
                        onClick={(e) => e.stopPropagation()}
                        title="YouTube"
                      >
                        <FaYoutube size={20} />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL DETAIL VIEW */}
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
                <h3 className="text-2xl font-bold text-[#ccd6f6]">
                  {selectedProject.title}
                </h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedProject(null)}
                >
                  <X className="h-6 w-6 text-[#64ffda]" />
                </Button>
              </div>

              <Image
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                width={600}
                height={400}
                className="rounded-lg mb-4 object-cover"
              />
              <p className="text-[#8892b0] mb-4">
                {selectedProject.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="bg-[#233554] text-xs text-[#64ffda] px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex space-x-6">
                {selectedProject.githubLink && (
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#64ffda] hover:text-[#00bfff] flex items-center"
                  >
                    <FaGithub size={20} className="mr-2" />
                    GitHub
                  </a>
                )}
                {selectedProject.websiteLink && (
                  <a
                    href={selectedProject.websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#64ffda] hover:text-[#00bfff] flex items-center"
                  >
                    <FaLink size={20} className="mr-2" />
                    Live Site
                  </a>
                )}
                {selectedProject.youtubeLink && (
                  <a
                    href={selectedProject.youtubeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#64ffda] hover:text-[#00bfff] flex items-center"
                  >
                    <FaYoutube size={20} className="mr-2" />
                    YouTube
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
