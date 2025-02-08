"use client"

import { motion } from "framer-motion"
import React from "react";
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaJira, FaAndroid, FaHtml5, FaCss3, FaJs, FaStar, FaPhp, FaWindows, FaRProject, FaChartBar, FaHandsHelping, FaUsers, FaGit, FaGithub, FaCode, FaWind, FaBrain } from "react-icons/fa"
import { SiKeras, SiNumpy, SiPandas, SiStreamlit, SiTypescript} from "react-icons/si"

const skillsData = [
  {
    category: "Programming Languages",
    icon: FaCode,
    skills: [
      { name: "Python", icon: FaPython, color: "#3776AB" },
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
      { name: "HTML", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS", icon: FaCss3, color: "#1572B6" },
      { name: "PHP", icon: FaPhp, color: "#777BB4" },
      { name: "VB.NET", icon: FaWindows, color: "#512BD4" },
      { name: "R", icon: FaRProject, color: "#276DC3" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    icon: FaReact,
    skills: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "NumPy", icon: SiNumpy, color: "#013243" },
      { name: "Matplotlib", icon: FaPython, color: "#11557C" },
      { name: "Seaborn", icon: FaPython, color: "#1F77B4" },
      { name: "Keras", icon: SiKeras, color: "#D00000" },
      { name: "Pandas", icon: SiPandas, color: "#130754" },
      { name: "YOLO", icon: FaBrain, color: "#FFAA00" },
      { name: "Streamlit", icon:SiStreamlit, color: "#FF4B4B" },
      { name: "Django", icon: FaPython, color: "#092E20" },
      { name: "Tailwind", icon: FaWind, color: "#38B2AC" },
    ],
  },
  {
    category: "Databases",
    icon: FaDatabase,
    skills: [
      { name: "SQL", icon: FaDatabase, color: "#4479A1" },
      { name: "MariaDB", icon: FaDatabase, color: "#003545" },
      { name: "MySQL", icon: FaDatabase, color: "#00758F" },
      { name: "PostgreSQL", icon: FaDatabase, color: "#336791" },
      { name: "Oracle", icon: FaDatabase, color: "#F80000" },
    ],
  },
  {
    category: "Tools & Technologies",
    icon: FaCode,
    skills: [
      { name: "Jira", icon: FaJira, color: "#0052CC" },
      { name: "Android Studio", icon: FaAndroid, color: "#3DDC84" },
      { name: "Gemini", icon: FaStar, color: "#4285F4" },
      { name: "Power BI", icon: FaChartBar, color: "#F2C811" },
      { name: "Git", icon: FaGit, color: "#F05032" },
      { name: "GitHub", icon: FaGithub, color: "#181717" },
      { name: "VS Code", icon: FaCode, color: "#007ACC" },
    ],
  },
  {
    category: "Soft Skills",
    icon: FaUsers,
    skills: [
      { name: "Leadership", icon: FaUsers, color: "#FF8C00" },
      { name: "Teamwork", icon: FaHandsHelping, color: "#32CD32" },
    ],
  },
];


export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center text-[#ccd6f6]"
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#112240] p-4 rounded-lg flex flex-col items-center justify-center"
            >
              {React.createElement(skill.icon, { size: 48, className: "mb-2 text-[#ccd6f6]" })}
<span className="font-semibold text-[#8892b0]">{skill.category}</span>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

