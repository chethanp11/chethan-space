import type { SVGProps } from 'react';

export type IconName =
  | 'ai'
  | 'analytics'
  | 'arrow'
  | 'briefcase'
  | 'education'
  | 'email'
  | 'farm'
  | 'github'
  | 'governance'
  | 'linkedin'
  | 'spark'
  | 'systems';

const paths: Record<IconName, string[]> = {
  ai: [
    'M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1m0-12.8-2.1 2.1m-8.6 8.6-2.1 2.1',
    'M9 9h6v6H9z'
  ],
  analytics: ['M4 19V5', 'M4 19h16', 'M8 16v-5', 'M12 16V8', 'M16 16v-9'],
  arrow: ['M5 12h14', 'M13 6l6 6-6 6'],
  briefcase: ['M9 7V5h6v2', 'M4 8h16v10H4z', 'M4 12h16'],
  education: ['M4 8l8-4 8 4-8 4-8-4z', 'M7 10v5c2.8 2 7.2 2 10 0v-5'],
  email: ['M4 6h16v12H4z', 'M4 7l8 6 8-6'],
  farm: ['M4 18c4-7 12-7 16 0', 'M12 18V7', 'M8 9c0-3 2-5 4-5 0 3-2 5-4 5z', 'M16 11c-3 0-4-2-4-4 3 0 4 2 4 4z'],
  github: [
    'M12 3a9 9 0 0 0-3 17c.45.08.62-.2.62-.44v-1.55c-2.53.55-3.06-1.08-3.06-1.08-.41-1.05-1-1.33-1-1.33-.82-.56.06-.55.06-.55.9.06 1.38.93 1.38.93.8 1.37 2.1.98 2.62.75.08-.58.31-.98.57-1.2-2.02-.23-4.15-1-4.15-4.5 0-1 .36-1.82.93-2.46-.09-.23-.4-1.16.09-2.42 0 0 .76-.24 2.5.94A8.6 8.6 0 0 1 12 6.76c.77 0 1.54.1 2.27.31 1.73-1.18 2.49-.94 2.49-.94.5 1.26.18 2.19.09 2.42.58.64.93 1.46.93 2.46 0 3.5-2.13 4.27-4.16 4.5.32.28.61.83.61 1.68v2.49c0 .24.16.52.63.43A9 9 0 0 0 12 3z'
  ],
  governance: ['M12 3l7 3v5c0 4.5-2.8 8.2-7 10-4.2-1.8-7-5.5-7-10V6l7-3z', 'M9 12l2 2 4-5'],
  linkedin: ['M6 9v10', 'M6 5v.01', 'M10 19v-6c0-2 1.2-4 3.6-4 2.2 0 3.4 1.5 3.4 4v6', 'M10 9v10'],
  spark: ['M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z'],
  systems: ['M7 7h4v4H7z', 'M13 13h4v4h-4z', 'M13 7h4v4h-4z', 'M7 13h4v4H7z']
};

export function Icon({ name, className = 'h-5 w-5', ...props }: SVGProps<SVGSVGElement> & { name: IconName }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className} {...props}>
      {paths[name].map((path) => <path key={path} d={path} />)}
    </svg>
  );
}
