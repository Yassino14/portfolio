"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Yazaki Tunisia",
    position: "Global automotive parts supplier",
    content:
      "With a deep understanding of technical issues and a strategic mindset, Yessine excels in crafting innovative solutions",
  },
  {
    name: "SCSI.tn",
    position: "a leading ERP integrator since 2001.",
    content:
      "Yessine stands out for his ability to combine creativity and technical skills to design solutions tailored to the most complex challenges.",
  },
  {
    name: "WIC MIC Group",
    position: "Leading denim garment manufacturer in Tunisia",
    content:
      "Yassine tackled every challenge brilliantly, achieved well-deserved success, and delivered an amazing project with outstanding performance.",
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
          className="text-3xl font-bold mb-8 text-center text-[#ccd6f6]"
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
              className="bg-[#112240] p-6 rounded-lg text-center cursor-pointer select-none"
              onClick={nextTestimonial}
            >
              <div className="relative">
                <p className="text-lg mb-4 italic text-[#8892b0]">"{testimonials[currentIndex].content}"</p>
                <p className="font-semibold text-[#64ffda]">{testimonials[currentIndex].name}</p>
                <p className="text-[#64ffda]/70">{testimonials[currentIndex].position}</p>
                <div
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 w-12 h-full flex items-center justify-start"
                  onClick={(e) => {
                    e.stopPropagation()
                    prevTestimonial()
                  }}
                >
                  <ChevronLeft className="h-6 w-6 text-[#64ffda] opacity-50 hover:opacity-100 transition-opacity" />
                </div>
                <div
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-full flex items-center justify-end"
                  onClick={(e) => {
                    e.stopPropagation()
                    nextTestimonial()
                  }}
                >
                  <ChevronRight className="h-6 w-6 text-[#64ffda] opacity-50 hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="mt-4 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-[#64ffda]" : "bg-[#64ffda]/30"}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

