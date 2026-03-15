import { type Metadata } from 'next'
import Link from 'next/link'

import { SimpleLayout } from '@/components/SimpleLayout'
import { GitHubIcon, LinkedInIcon, XIcon } from '@/components/SocialIcons'

function SocialLink({
  href,
  icon: Icon,
  children,
}: {
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-3 text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
      {children}
    </Link>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Contact',
  description: "Get in touch -- I'm always open to interesting conversations.",
}

export default function Contact() {
  return (
    <SimpleLayout
      title="Let's talk."
      intro="I'm always open to interesting conversations -- whether it's about software, building products, or something I've written. The best way to reach me is email."
    >
      <div className="max-w-md space-y-8">
        <div className="flex flex-col gap-6">
          <Link
            href="mailto:austin@christensenequity.com"
            className="group flex items-center gap-3 text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
          >
            <MailIcon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
            austin@christensenequity.com
          </Link>
          <SocialLink href="https://github.com/AustinNChristensen" icon={GitHubIcon}>
            github.com/AustinNChristensen
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/in/austinnchristensen/" icon={LinkedInIcon}>
            linkedin.com/in/austinnchristensen
          </SocialLink>
          <SocialLink href="https://twitter.com/theAustinNC" icon={XIcon}>
            @theAustinNC
          </SocialLink>
        </div>
      </div>
    </SimpleLayout>
  )
}
