"use client"
import { Section } from '../ui/Section'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import { projects } from '@/lib/data'
import Image from 'next/image'

export function Projects() {
  return (
    <Section id="projects">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#B2CD9C]">Projects</h2>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, idx) => (
          <motion.div key={p.slug}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
          >
            <Card className="flex h-full flex-col">
              {('image' in p && (p as any).image) && (
                <div className="mb-3 overflow-hidden rounded-xl">
                  <Image src={(p as any).image} alt={p.title} width={640} height={360} className="h-40 w-full object-cover" />
                </div>
              )}
              <div className="mb-2 flex items-center gap-2 text-lg font-medium text-[#B2CD9C]">
                <span>{p.title}</span>
              </div>
              <p className="text-[#F0F2BD] text-sm flex-1">{p.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-xs text-[#F0F2BD]">{p.stack.join(' • ')}</div>
                <div className="flex items-center gap-2">
                  {(p as any).paper && (
                    <span className="text-[10px] text-[#F0F2BD] mr-1">Published Paper</span>
                  )}
                  {p.repo && (
                    <Button href={p.repo} variant="secondary" className="px-2 py-1 text-xs">
                      <Github className="h-4 w-4" />
                    </Button>
                  )}
                  {p.demo && (
                    <Button href={p.demo} variant="primary" className="px-2 py-1 text-xs">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
