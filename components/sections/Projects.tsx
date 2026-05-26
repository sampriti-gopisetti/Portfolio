"use client"
import { useMemo, useState } from 'react'
import { Section } from '../ui/Section'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import { projects } from '@/lib/data'
import Image from 'next/image'

export function Projects() {
  const [showMore, setShowMore] = useState(false)

  const orderedProjects = useMemo(() => {
    const featuredOrder = ['roleready', 'promptquest', 'isl-interpreter']
    const featuredProjects = featuredOrder
      .map((slug) => projects.find((project) => project.slug === slug))
      .filter((project): project is (typeof projects)[number] => Boolean(project))
    const remainingProjects = projects.filter(
      (project) => !featuredOrder.includes(project.slug)
    )

    return [...featuredProjects, ...remainingProjects]
  }, [])

  const visibleProjects = showMore ? orderedProjects : orderedProjects.slice(0, 3)

  return (
    <Section id="projects">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#B2CD9C]">Projects</h2>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((p, idx) => (
          <motion.div key={p.slug}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
          >
            <Card className="flex h-full flex-col justify-start">
              {('image' in p && (p as any).image) && (
                <div className="mb-3 overflow-hidden rounded-xl bg-white/5">
                  <Image src={(p as any).image} alt={p.title} width={640} height={360} className="h-40 w-full object-cover" />
                </div>
              )}
              <div className="mb-2 flex items-start justify-between gap-3">
                <h3 className="text-lg font-medium text-[#B2CD9C]">{p.title}</h3>
                {(p as any).paper && (
                  <span className="shrink-0 rounded-full border border-[#B2CD9C]/30 px-2 py-1 text-[10px] text-[#F0F2BD]">
                    Published
                  </span>
                )}
              </div>
              <div className="mt-1 space-y-2">
                <p className="text-sm text-[#F0F2BD]">{(p as any).summary ?? p.description}</p>
                <div className="space-y-2">
                  {(p as any).highlights?.map((highlight: string) => (
                    <div key={highlight} className="flex gap-2 text-xs text-[#F0F2BD]">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#B2CD9C]" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-auto pt-4 space-y-3">
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((tech) => (
                    <span key={tech} className="rounded-full bg-white/5 px-2.5 py-1 text-[11px] text-[#F0F2BD]">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2">
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
      {!showMore && orderedProjects.length > 3 && (
        <div className="mt-8 flex justify-center">
          <Button
            onClick={() => setShowMore(true)}
            variant="secondary"
            className="px-5 py-2"
          >
            More Projects
          </Button>
        </div>
      )}
    </Section>
  )
}
