"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"
import { FaSquareUpwork } from "react-icons/fa6";
import Link from "next/link"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className="sticky top-0 z-50 bg-[#0a192f]/80 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            href="#home"
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#64ffda] to-[#00bfff]"
          >
          Yassine Louati
          </Link>
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-sm font-medium transition-colors hover:text-[#64ffda] relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#64ffda] transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/yassine-louati-9629a219a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8892b0] hover:text-[#64ffda]"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com/Yassino14"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8892b0] hover:text-[#64ffda]"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.upwork.com/freelancers/~01ff93ad493d0f6467"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8892b0] hover:text-[#64ffda]"
            >
              <FaSquareUpwork size={20} />
            </a>
            <a href="mailto:louati.yessine1@example.com" className="text-[#8892b0] hover:text-[#64ffda]">
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

