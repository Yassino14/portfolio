"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const aboutItems = [
  {
    title: "Innovative Developer",
    content: "Passionate about building intelligent systems and enhancing user experiences.",
  },
  { title: "Problem Solver & Optimizer", content: "Enjoys tackling complex challenges." },
  {
    title: "AI & Data Enthusiast",
    content: "From machine learning models to data-driven insights, always exploring the power of AI.",
  },
  {
    title: "Youtube Creator",
    content: "Creating  Vlogs and Travel videos, sharing experiences and insights with the world.",
    
  },
]

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          About Me
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aboutItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-blue-800/50 border-blue-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-blue-200">{item.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

