export const siteConfig = {
  name: 'Chethan Space',
  author: 'Chethan P',
  title: 'AI Leadership, Analytics Transformation & Systems Thinking',
  description:
    'Chethan P writes and builds at the intersection of AI leadership, analytics transformation, enterprise systems, responsible technology, natural farming, and learning.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://chethan.space',
  links: {
    linkedin: 'https://www.linkedin.com/in/chethanp11',
    github: 'https://github.com/chethanp11',
    email: 'mailto:chethanp11@gmail.com'
  }
};

export const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/journey', label: 'Journey' },
  { href: '/projects', label: 'Work' },
  { href: '/insights', label: 'Writing' },
  { href: '/frameworks', label: 'Frameworks' },
  { href: '/lab', label: 'Lab' },
  { href: '/beyond-work', label: 'Beyond Work' },
  { href: '/contact', label: 'Contact' }
] as const;
