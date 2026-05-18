export const siteConfig = {
  name: 'Chethan Space',
  author: 'Chethan P',
  title: 'Technology Leadership, AI, Analytics & Systems Thinking',
  description:
    'Chethan P writes and builds at the intersection of technology leadership, enterprise AI, analytics transformation, responsible systems, natural farming, and learning.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://chethan.space',
  links: {
    linkedin: 'https://www.linkedin.com/in/chethanp11',
    github: 'https://github.com/chethanp11',
    email: 'mailto:chethanp11@gmail.com',
    resume: '/resume/chethan-resume.pdf'
  }
};

export const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Work' },
  { href: '/insights', label: 'Writing' },
  { href: '/frameworks', label: 'Frameworks' },
  { href: '/lab', label: 'Lab' },
  { href: '/contact', label: 'Contact' }
] as const;
