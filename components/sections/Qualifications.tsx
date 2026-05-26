"use client"
import { useMemo, useState } from 'react'
import { Section } from '../ui/Section'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { certifications, leadership } from '@/lib/data'

export function Qualifications() {
  const [showMoreCertifications, setShowMoreCertifications] = useState(false)
  const [showMoreLeadership, setShowMoreLeadership] = useState(false)

  const orderedCertifications = useMemo(() => {
    const featuredTitles = [
      'AI Fundamentals, IBM',
      'Computer Vision, NPTEL',
      'Leadership course, Harvard',
    ]
    const featured = featuredTitles
      .map((title) => certifications.find((certification) => certification.title === title))
      .filter((certification): certification is (typeof certifications)[number] => Boolean(certification))
    const remaining = certifications.filter(
      (certification) => !featuredTitles.includes(certification.title)
    )

    return [...featured, ...remaining]
  }, [])

  const visibleCertifications = showMoreCertifications ? orderedCertifications : orderedCertifications.slice(0, 3)
  const visibleLeadership = showMoreLeadership ? leadership : leadership.slice(0, 3)

  return (
    <Section id="qualifications">
      <div className="space-y-10">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-[#B2CD9C]">Certifications</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visibleCertifications.map((c, idx) => (
              <motion.div key={c.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <Card className="flex h-full flex-col">
                  <div className="mb-3 overflow-hidden rounded-xl bg-white/5">
                    <Image src={c.image} alt={c.title} width={640} height={360} className="h-28 w-full object-contain p-3" />
                  </div>
                  <div className="mb-2 text-lg font-medium text-[#B2CD9C]">{c.title}</div>
                  <p className="text-sm text-[#F0F2BD] flex-1">{c.text}</p>
                </Card>
              </motion.div>
            ))}
          </div>
          {!showMoreCertifications && orderedCertifications.length > 3 && (
            <div className="mt-8 flex justify-center">
              <Button
                onClick={() => setShowMoreCertifications(true)}
                variant="secondary"
                className="px-5 py-2"
              >
                More Certifications
              </Button>
            </div>
          )}
        </div>

        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-[#B2CD9C]">Leadership & Extracurriculars</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visibleLeadership.map((l, idx) => (
              <motion.div key={l.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <Card className="flex h-full flex-col">
                  <div className="mb-3 overflow-hidden rounded-xl bg-white/5">
                    <Image src={l.image} alt={l.title} width={640} height={360} className="h-28 w-full object-contain p-3" />
                  </div>
                  <div className="mb-2 text-lg font-medium text-[#B2CD9C]">{l.title}</div>
                  <p className="text-sm text-[#F0F2BD] flex-1">{l.text}</p>
                </Card>
              </motion.div>
            ))}
          </div>
          {!showMoreLeadership && leadership.length > 3 && (
            <div className="mt-8 flex justify-center">
              <Button
                onClick={() => setShowMoreLeadership(true)}
                variant="secondary"
                className="px-5 py-2"
              >
                More Leadership
              </Button>
            </div>
          )}
        </div>
      </div>
    </Section>
  )
}
