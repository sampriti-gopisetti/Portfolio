"use client"
import { Section } from '../ui/Section'
import { Card } from '../ui/Card'
import React from 'react'

export function About() {
  return (
    <Section id="about">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-[#B2CD9C]">About Me</h2>
        <Card>
          <AboutContent />
        </Card>
      </div>
    </Section>
  )
}

function AboutContent() {
  return (
    <div className="space-y-4 text-[#F0F2BD]">
      <p>
        <span className="font-semibold text-[#B2CD9C]">Professional Summary:</span> As a Master of Science in Computer Science candidate at University of Southern California, I am focused on building intelligent systems and scalable web applications. I bring a proven track record of academic excellence, including two undergraduate gold medals and a 9.84 CGPA, and practical experience driving major enhancements in automation and efficiency.
      </p>
      <p>
        <span className="font-semibold text-[#B2CD9C]">Personal Summary:</span> My problem-solving is driven by a balance of technical and creative pursuits. Outside of engineering, my training in the disciplined arts of Bharatanatyam and Carnatic music has cultivated deep focus and dedication. I honed my collaboration and leadership skills by heading college festivals and design clubs, and I have actively contributed to my community through the National Service Scheme (NSS) and other service-oriented clubs.
      </p>
    </div>
  )
}
