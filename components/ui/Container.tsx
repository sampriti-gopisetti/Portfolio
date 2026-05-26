import clsx from 'clsx'
import React from 'react'

export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={clsx('mx-auto w-full max-w-7xl container-px', className)}>{children}</div>
}
