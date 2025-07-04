"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { FaHandsHelping, FaBuilding, FaBriefcase } from "react-icons/fa"
import { SiCalibreweb, SiGoogle } from "react-icons/si"

// --- Data for the "About Me" section ---
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
    content: "Creating Vlogs and Travel videos, sharing experiences and insights with the world.",
  },
]

// --- Data for the new "Clubs" section ---
const clubItems = [
  {
    name: "Tunisian Red Crescent",
    subtitle: "Volunteer",
    icon: FaHandsHelping,
  },
  {
    name: "Enactus ISG Bizerte",
    subtitle: "Member",
    icon: SiCalibreweb,
  },
  {
    name: "Google Developer Club",
    subtitle: " Active Member",
    icon: SiGoogle,
  },
]

// --- Data for the new "Internships" section ---
const internshipItems = [
  {
    company: "Yazaki",
    role: "Summer Intern",
    duration: "July 2024",
    icon: FaBuilding,
  },
  {
    company: "SCSI.TN",
    role: "Web and AI algorithms Development Intern",
    duration: "Feb 2025 - June 2025",
    icon: FaBriefcase,
  },
  {
    company: "Wic Mic Group",
    role: "Web and AI algorithms Development Intern",
    duration: "Feb 2025 - June 2025",
    icon: FaBriefcase,
  },
]

// --- The main component now renders all three sections ---
export default function AboutPage() {
  return (
    // Use a React Fragment to wrap all sections
    <>
      {/* SECTION 1: ABOUT ME */}
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-blue-800/50 border-blue-700 h-full">
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

      <section id="internships" className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-8 text-center"
          >
            Internships
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {internshipItems.map((internship, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-blue-800/50 border-blue-700 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-900/50 p-3 rounded-lg">
                        <internship.icon className="w-6 h-6 text-blue-300" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{internship.company}</h3>
                        <p className="text-blue-100 font-medium">{internship.role}</p>
                        <p className="text-sm text-blue-300 mt-1">{internship.duration}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section id="clubs" className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-8 text-center"
          >
            Clubs & Community Involvement
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {clubItems.map((club, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-blue-800/50 border-blue-700 h-full">
                  <CardContent className="p-6 text-center flex flex-col items-center">
                    <club.icon className="w-12 h-12 text-blue-300 mb-4" />
                    <h3 className="text-xl font-semibold">{club.name}</h3>
                    <p className="text-blue-200">{club.subtitle}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: INTERNSHIPS */}
      
    </>
  )
}