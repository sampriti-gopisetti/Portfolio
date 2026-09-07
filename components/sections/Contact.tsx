import { Section } from '../ui/Section'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { contact } from '@/lib/data'
import { Github, Linkedin, FileText, Mail, Phone } from 'lucide-react'

export function Contact() {
  return (
    <Section id="contact">
      <Card className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#B2CD9C]">Get In Touch</h2>
        <p className="mt-2 text-[#F0F2BD]">{contact.fullName}</p>
        <div className="mt-4 flex flex-col items-center gap-3">
          <div className="flex w-full max-w-xs flex-col items-center gap-3 mx-auto">
            <Button href={`mailto:${contact.emails[0]}`} variant="secondary" className="gap-2 w-full"><Mail className="h-4 w-4" />{contact.emails[0]}</Button>
            {contact.emails[1] && (
              <Button href={`mailto:${contact.emails[1]}`} variant="secondary" className="gap-2 w-full"><Mail className="h-4 w-4" />{contact.emails[1]}</Button>
            )}
          </div>
          <div className="flex justify-center">
            <Button href={`tel:${contact.phone}`} variant="secondary" className="gap-2 w-full max-w-xs"><Phone className="h-4 w-4" />{contact.phone}</Button>
          </div>
        </div>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <Button href={contact.social.linkedin} variant="secondary" className="gap-2"><Linkedin className="h-4 w-4" />LinkedIn</Button>
          <Button href={contact.social.github} variant="secondary" className="gap-2"><Github className="h-4 w-4" />GitHub</Button>
          <Button href={contact.social.resume} variant="secondary" className="gap-2"><FileText className="h-4 w-4" />Resume</Button>
        </div>
      </Card>
    </Section>
  )
}
