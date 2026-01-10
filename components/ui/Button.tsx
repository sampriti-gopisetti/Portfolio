import Link from 'next/link'
import clsx from 'clsx'
import React from 'react'

type ButtonProps = {
  href?: string
  onClick?: () => void
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
}

export function Button({ href, onClick, children, variant = 'primary', className }: ButtonProps) {
  const classes = clsx(
    'inline-flex items-center justify-center rounded-xl2 px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-ink hover:ring-2 hover:ring-offset-2 hover:ring-offset-ink',
    {
      'bg-[#B2CD9C] hover:bg-[#B2CD9C] text-[#4B352A] focus:ring-[#4B352A]/40 hover:ring-[#4B352A]/30': variant === 'primary' || variant === 'secondary',
      'bg-transparent hover:bg-white/5 text-[#4B352A] focus:ring-[#4B352A]/30 hover:ring-[#4B352A]/30': variant === 'ghost',
    },
    className
  )

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
