"use client"
import { Section } from '../ui/Section'
import { Card } from '../ui/Card'
import { motion } from 'framer-motion'
import { skillsByCategory } from '@/lib/data'
import React from 'react'

export function Skills() {
  return (
    <Section id="skills">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-[#B2CD9C]">Skills</h2>
      <div className="space-y-5">
        {[
          { key: 'languages', label: 'Languages' },
          { key: 'web', label: 'Web' },
          { key: 'ai_ml', label: 'AI/ML' },
          { key: 'data_science', label: 'Data Science' },
          { key: 'cloud_devops', label: 'Cloud & DevOps' },
          { key: 'automation_tools', label: 'Automation Tools' },
        ].map((cat, idx) => (
          <motion.div key={cat.key}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
          >
            <Card>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-[#B2CD9C]">{cat.label}</h3>
              </div>
              <div className="text-[#F0F2BD] text-sm leading-relaxed flex flex-wrap gap-x-2 gap-y-1 sm:pl-0 pl-1">
                {(skillsByCategory as any)[cat.key].map((s: string, i: number) => (
                  <span key={s}>
                    {s}
                    {i < (skillsByCategory as any)[cat.key].length - 1 ? ',' : ''}
                  </span>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
