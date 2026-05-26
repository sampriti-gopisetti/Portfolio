import { NavBar } from '@/components/NavBar'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Projects } from '@/components/sections/Projects'
import { Experience } from '@/components/sections/Experience'
import { Skills } from '@/components/sections/Skills'
import { Contact } from '@/components/sections/Contact'
import { Qualifications } from '@/components/sections/Qualifications'
import { Footer } from '@/components/Footer'

export default function Page() {
  return (
    <main className="relative">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-hero-gradient" />
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Qualifications />
      <Contact />
      <Footer />
    </main>
  )
}
