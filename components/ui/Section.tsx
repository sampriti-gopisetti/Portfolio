import clsx from 'clsx'
import React from 'react'
import { Container } from './Container'

export function Section({ id, className, children }: { id: string; className?: string; children: React.ReactNode }) {
  return (
    <section id={id} className={clsx('section-y', className)}>
      <Container>{children}</Container>
    </section>
  )
}
