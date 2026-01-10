import Link from 'next/link'
import { Container } from './ui/Container'
import clsx from 'clsx'

const items = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#qualifications', label: 'Qualifications' },
]

export function NavBar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/30 border-b border-white/10">
      <Container className="flex h-14 items-center justify-between">
        <Link href="#" className="font-semibold tracking-tight">
          <span className="text-[#B2CD9C]">Sampriti</span>
        </Link>
        <nav className="flex flex-wrap items-center gap-3 sm:gap-6 text-sm text-[#F0F2BD]">
          {items.map((i) => (
            <a key={i.href} href={i.href} className={clsx('hover:text-[#F0F2BD] transition-colors')}>
              {i.label}
            </a>
          ))}
          <a href="#contact" className="ml-2 rounded-xl2 px-3 py-1.5 text-sm bg-[#B2CD9C] hover:bg-[#B2CD9C] text-[#4B352A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-ink focus:ring-[#4B352A]/40 hover:ring-2 hover:ring-offset-2 hover:ring-offset-ink hover:ring-[#4B352A]/30">
            Let’s Talk
          </a>
        </nav>
      </Container>
    </header>
  )
}
