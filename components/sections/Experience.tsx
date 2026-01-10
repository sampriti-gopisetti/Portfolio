"use client"
import { Section } from '../ui/Section'
import { Card } from '../ui/Card'
import { motion } from 'framer-motion'
import { experience } from '@/lib/data'
import Image from 'next/image'
import React from 'react'

export function Experience() {
  return (
    <Section id="experience">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-[#B2CD9C]">Experience</h2>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {experience.map((e, idx) => (
          <motion.div key={e.company}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
          >
            <Card className="flex h-full flex-col">
              {('logo' in e && (e as any).logo) && (
                <div className="mb-3 overflow-hidden rounded-xl bg-white/5">
                  <Image src={(e as any).logo} alt={e.company} width={640} height={360} className="h-24 w-full object-contain p-4" />
                </div>
              )}
              <div className="mb-2 text-lg font-medium text-[#B2CD9C]">{e.role}</div>
              <div className="text-[#F0F2BD] text-sm">{e.company}</div>
              {('description' in e && (e as any).description) ? (
                <div className="mt-3 text-sm text-[#F0F2BD] flex-1">
                  <p>{(e as any).description}</p>
                </div>
              ) : (
                <ul className="mt-3 list-disc pl-5 text-sm text-[#F0F2BD] space-y-1 flex-1">
                  {e.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              )}
            </Card>
          </motion.div>
        ))}
      </div>
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
