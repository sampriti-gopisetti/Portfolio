import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ subsets: ['latin'], weight: ['300','400','500','600','700'] })

export const metadata: Metadata = {
  title: 'Sampriti | Portfolio',
  description: 'A modern, animated portfolio built with Next.js, Tailwind CSS, and Framer Motion.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className + ' bg-ink min-h-dvh'}>
        {children}
      </body>
    </html>
  )
}
