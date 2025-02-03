"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FaStar } from "react-icons/fa"

export default function Hero() {
  return (
    <section
      id="home"
      className="py-20 md:py-40 flex flex-col items-center justify-center text-center relative overflow-hidden"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8 relative"
      >
        <Image
          src="/profile-picture.jpg"
          alt="Your Name"
          width={200}
          height={200}
          className="rounded-full border-4 border-[#64ffda] shadow-lg"
        />
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#64ffda] to-[#00bfff] opacity-20 animate-pulse"></div>
      </motion.div>
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-4xl md:text-6xl font-bold mb-4"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#64ffda] to-[#00bfff]">Your Name</span>
      </motion.h1>
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-2xl md:text-3xl text-[#64ffda] mb-6"
      >
        Full Stack Developer
      </motion.h2>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg md:text-xl mb-8 max-w-2xl text-[#8892b0]"
      >
        Crafting elegant solutions to complex problems through code and creativity.
      </motion.p>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <Button
          asChild
          className="bg-[#64ffda] hover:bg-[#00bfff] text-[#0a192f] font-bold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105"
        >
          <a href="#contact">Get in Touch</a>
        </Button>
      </motion.div>
      <div className="absolute inset-0 z-[-1]">
        <div className="absolute inset-0 bg-[#0a192f] opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a192f] to-[#112240] opacity-75"></div>
        {[...Array(50)].map((_, i) => (
          <FaStar
            key={i}
            className="absolute text-[#64ffda] animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 4 + 1}px`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </section>
  )
}

