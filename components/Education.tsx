"use client"

import { motion } from "framer-motion"

const educationData = [
  {
    degree: "Master of Science in Computer Science",
    school: "University of Technology",
    year: "2018 - 2020",
    description: "Specialized in Artificial Intelligence and Machine Learning",
  },
  {
    degree: "Bachelor of Science in Software Engineering",
    school: "State University",
    year: "2014 - 2018",
    description: "Focused on web technologies and software architecture",
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Education
        </motion.h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-600"></div>
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-8 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}
            >
              <div className={`bg-blue-800/50 p-6 rounded-lg shadow-lg ${index % 2 === 0 ? "mr-4" : "ml-4"}`}>
                <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                <p className="text-blue-300 mb-1">{edu.school}</p>
                <p className="text-blue-400 mb-2">{edu.year}</p>
                <p className="text-sm">{edu.description}</p>
              </div>
              <div className="absolute top-6 w-4 h-4 rounded-full bg-blue-600 shadow">
                <div className="w-2 h-2 rounded-full bg-blue-300 absolute top-1 left-1"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

