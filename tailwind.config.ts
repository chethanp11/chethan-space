import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'SFMono-Regular', 'Consolas', 'monospace']
      },
      colors: {
        ink: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617'
        },
        brand: {
          navy: '#123047',
          blue: '#1f5f8b',
          sage: '#6f8376',
          sand: '#f4efe7',
          copper: '#b7794a',
          ivory: '#fffdf8'
        }
      },
      maxWidth: {
        content: '72rem',
        prose: '48rem'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};

export default config;
