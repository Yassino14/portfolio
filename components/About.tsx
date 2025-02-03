"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const aboutItems = [
  {
    title: "Passionate Developer",
    content: "With a keen eye for design and a love for creating seamless user experiences.",
  },
  { title: "Problem Solver", content: "Thrives on tackling complex challenges and finding innovative solutions." },
  {
    title: "Continuous Learner",
    content: "Always staying up-to-date with the latest technologies and best practices.",
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

