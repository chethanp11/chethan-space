export const siteConfig = {
  name: 'Chethan Space',
  author: 'Chethan',
  title: 'Enterprise AI & Analytics Transformation',
  description:
    'Enterprise AI systems, analytics transformation, governance-first architectures, and intelligent workflow orchestration.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://chethan.space',
  links: {
    linkedin: 'https://www.linkedin.com/in/chethan',
    github: 'https://github.com/chethan',
    email: 'mailto:hello@chethan.space',
    resume: '/resume/chethan-resume.pdf'
  }
};

export const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/insights', label: 'Insights' },
  { href: '/frameworks', label: 'Frameworks' },
  { href: '/lab', label: 'Lab' },
  { href: '/contact', label: 'Contact' }
] as const;
