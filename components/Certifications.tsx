"use client"

import { motion } from "framer-motion"

const certifications = [
  {
    title: "PCAP™ – Certified Associate Python Programmer",
    image: "/pcap.png",
    url: "https://www.credly.com/badges/2251bf51-9b48-4266-9e91-3a41a3fb959e/public_url",
  },
  {
    title: "Agile Project Management From HP",
    image: "/hp.png",
  },
  {
    title: "Introduction to Prompt Engineering with GitHub Copilot",
    image: "/Github.png",
   
  },
  {
    title: "Artificial Intelligence for Business",
    image: "/aibusi.png",
  },
  {
    title: "Gemini for Google Workspace",
    image: "/gemini.png",
  },
  {
    title: "Online Freelancing Strategies and AI",
    image: "/aifreelance.png",
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center text-[#ccd6f6]"
        >
          Certifications
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {certifications.map((cert, i) => (
            <motion.a
              key={i}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              className="block bg-[#0b1220] rounded-lg overflow-hidden shadow-lg p-2"
            >
              <img src={cert.image} alt={cert.title} className="w-full h-40 object-cover" />
              <div className="p-2">
                <h4 className="text-sm font-semibold text-[#ccd6f6] text-center">{cert.title}</h4>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
