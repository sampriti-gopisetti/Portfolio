"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 sm:pt-20 lg:pt-28">
      <Container className="grid items-center gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl/tight sm:text-5xl/tight lg:text-6xl/tight font-semibold text-[#B2CD9C]"
          >
            Sampriti Gopisetti
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[#F0F2BD] max-w-prose"
          >
            Computer Science graduate specializing in Artificial Intelligence and Machine Learning, with a strong foundation in full-stack development and hands-on experience building and deploying predictive models. An adaptable and results-driven problem-solver.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <Button href="#projects" variant="secondary">View Projects</Button>
            <Button href="#contact" variant="secondary">Contact Me</Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mx-auto h-60 w-60 sm:h-72 sm:w-72 lg:h-80 lg:w-80 group"
        >
          <div className="absolute inset-0 rounded-full gradient-ring opacity-50 transition-transform duration-300 group-hover:scale-110" />
          <div className="relative overflow-hidden rounded-full h-full w-full ring-2 ring-[#F39EB6]/30 transition-all duration-300 group-hover:ring-4 group-hover:ring-[#F39EB6]/40">
            <Image src="/images/sampriti-profile.jpg" alt="Sampriti Gopisetti" fill className="object-cover" />
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
