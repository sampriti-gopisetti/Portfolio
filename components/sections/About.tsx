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
        I’m an MSCS student at the University of Southern California focused on building AI-powered software systems, scalable backend services, and modern full-stack applications.
      </p>
      <p>
        My work spans GenAI, semantic retrieval, backend engineering, and machine learning systems, with projects involving RAG workflows, vector embeddings, real-time inference pipelines, and AI orchestration using technologies such as FastAPI, PostgreSQL, TensorFlow, React, Docker, and Gemini AI.
      </p>
      <p>
        I enjoy building practical systems that turn complex workflows and unstructured information into clean, reliable, and user-friendly products.
      </p>
      <p>
        Outside engineering, I enjoy Bharatanatyam, Carnatic music, community service initiatives, and collaborative leadership experiences that help me stay creative and grounded.
      </p>
    </div>
  )
}
