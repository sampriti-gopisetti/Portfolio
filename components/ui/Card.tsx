import clsx from 'clsx'
import React from 'react'

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={clsx('glass rounded-2xl p-5 border border-white/10 hover:border-palette-pink/30 transition-colors', className)}>{children}</div>
}
