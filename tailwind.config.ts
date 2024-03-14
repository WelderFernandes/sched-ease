import { nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}', // nextui theme
  ],
  theme: {
    extend: {
      screens: {
        phone: '375px',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#EBEAEF',
          100: '#D7D6E0',
          200: '#C3C1D0',
          300: '#AFACC0',
          400: '#9A97B0',
          500: '#8683A1',
          600: '#726E91',
          700: '#5E5981',
          800: '#4A4572',
          900: '#363062',
        },
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        neutralBlue: {
          50: '#F8FAFC',
          100: '#EBF0F5',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
}
export default config
