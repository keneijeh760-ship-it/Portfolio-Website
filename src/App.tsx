import { Button } from "@/components/ui/button"
import { Hero } from "@/components/Hero"
import { Projects } from "@/components/Projects"
import { About } from "@/components/About"
import { Contact } from "@/components/Contact"
import Lenis from 'lenis' 
import { useEffect } from "react"
import { Resume } from "@/components/Resume"
export const App = () => {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <main className="flex flex-col container mx-auto p-10 maxx-w-4xl lg: pl-0 lg:max-w-6xl">
      <Hero/>
      <Projects />
      <About />
      <Resume />
      <Contact />
    </main>

  );
};