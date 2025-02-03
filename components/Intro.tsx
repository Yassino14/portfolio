import { Button } from "@/components/ui/button"

export default function Intro() {
  return (
    <section id="home" className="py-20 md:py-40 flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">Yassine Louati</h1>
      <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6 animate-fade-in animation-delay-200">
        Full Stack Developer
      </h2>
      <p className="text-lg md:text-xl mb-8 max-w-2xl animate-fade-in animation-delay-400">
        Crafting elegant solutions to complex problems through code and creativity.
      </p>
      <Button asChild className="animate-fade-in animation-delay-600">
        <a href="#contact">Get in Touch</a>
      </Button>
    </section>
  )
}

