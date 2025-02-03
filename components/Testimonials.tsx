"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "John Doe",
    position: "CEO, Tech Innovators",
    content:
      "An exceptional developer who consistently delivers high-quality work. Their attention to detail and problem-solving skills are outstanding.",
  },
  {
    name: "Jane Smith",
    position: "CTO, Digital Solutions Inc.",
    content:
      "Working with this developer has been a game-changer for our projects. Their technical expertise and ability to meet deadlines are truly impressive.",
  },
  {
    name: "Alex Johnson",
    position: "Lead Developer, StartUp Co.",
    content:
      "I've had the pleasure of collaborating with this talented developer on several projects. Their code is clean, efficient, and well-documented.",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Testimonials
        </motion.h2>
        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-blue-800/30 p-6 rounded-lg text-center"
            >
              <p className="text-lg mb-4 italic">"{testimonials[currentIndex].content}"</p>
              <p className="font-semibold">{testimonials[currentIndex].name}</p>
              <p className="text-blue-300">{testimonials[currentIndex].position}</p>
            </motion.div>
          </AnimatePresence>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full"
            onClick={nextTestimonial}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}

