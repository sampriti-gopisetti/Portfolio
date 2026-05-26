"use client"
import { useState } from 'react'
import { Section } from '../ui/Section'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { motion } from 'framer-motion'
import { experience } from '@/lib/data'
import Image from 'next/image'
import React from 'react'

export function Experience() {
  const [showMore, setShowMore] = useState(false)
  const visibleExperience = showMore ? experience : experience.slice(0, 3)

  return (
    <Section id="experience">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-[#B2CD9C]">Experience</h2>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visibleExperience.map((e, idx) => (
          <motion.div key={e.company}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
          >
            <Card className="flex h-full flex-col justify-start">
              {('logo' in e && (e as any).logo) && (
                <div className="mb-3 overflow-hidden rounded-xl bg-white/5">
                  <Image src={(e as any).logo} alt={e.company} width={640} height={360} className="h-24 w-full object-contain p-4" />
                </div>
              )}
              <div className="mb-2 text-lg font-medium text-[#B2CD9C]">{e.role}</div>
              <div className="text-[#F0F2BD] text-sm">{e.company}</div>
              <p className="mt-3 text-sm text-[#F0F2BD]">{(e as any).summary ?? (e as any).description}</p>
              <ul className="mt-2 list-disc pl-5 text-sm text-[#F0F2BD] space-y-1">
                {((e as any).highlights ?? []).map((h: string) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </div>
      {!showMore && experience.length > 3 && (
        <div className="mt-8 flex justify-center">
          <Button onClick={() => setShowMore(true)} variant="secondary" className="px-5 py-2">
            More Experience
          </Button>
        </div>
      )}
    </Section>
  )
}

function ExpandableText({ text }: { text: string }) {
  return (
    <div className="mt-3 text-sm text-[#F0F2BD]">
      <p>{text}</p>
    </div>
  )
}
