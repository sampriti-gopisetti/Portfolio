import { Container } from './ui/Container'

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <Container className="py-6 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Sampriti — All rights reserved.
      </Container>
    </footer>
  )
}
