export const siteConfig = {
  name: 'Chethan Puttegowda',
  author: 'Chethan Puttegowda',
  title: 'AI Leadership, Analytics Transformation & Systems Thinking',
  description:
    'Chethan Puttegowda writes and builds at the intersection of AI leadership, analytics transformation, enterprise systems, responsible technology, natural farming, and learning.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://chethan.space',
  links: {
    linkedin: 'https://www.linkedin.com/in/chethanp11',
    github: 'https://github.com/chethanp11',
    email: 'mailto:chethanp11@gmail.com',
    emailAddress: 'chethanp11@gmail.com'
  }
};

export const navItems = [
  { href: '/', label: 'Home' },
  { href: '/journey', label: 'Journey' },
  { href: '/projects', label: 'Projects' },
  { href: '/insights', label: 'Thoughts' },
  { href: '/beyond-work', label: 'Beyond Work' },
  { href: '/contact', label: 'Contact' }
] as const;
