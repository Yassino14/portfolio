import Hero from "@/components/Hero"
import About from "@/components/About"
import Education from "@/components/Education"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Testimonials from "@/components/Testimonials"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
    </div>
  )
}

