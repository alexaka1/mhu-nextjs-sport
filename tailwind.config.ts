import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';
import typography from '@tailwindcss/typography';

const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'oklch(33.14% 0.1186 18.15 / <alpha-value>)',
          800: 'oklch(33.14% 0.1186 18.15 / <alpha-value>)',
          600: 'oklch(49.99% 0.183 18.06 / <alpha-value>)',
          400: 'oklch(67.31% 0.1949 18.81 / <alpha-value>)',
          200: 'oklch(83.46% 0.0802 20.19 / <alpha-value>)',
        },
        hun: {
          red: 'oklch(33.14% 0.1186 18.15 / <alpha-value>)',
          green: 'oklch(48.74% 0.184 20.24 / <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'oklch(41.85% 0.1658 25.77 / <alpha-value>)',
          800: 'oklch(32.5% 0.129 25.77 / <alpha-value>)',
          600: 'oklch(41.85% 0.1658 25.77 / <alpha-value>)',
          400: 'oklch(66.5% 0.216 25.77 / <alpha-value>)',
          200: 'oklch(83.2% 0.085 25.77 / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'oklch(47.01% 0.1653 18.33 / <alpha-value>)',
          800: 'oklch(32.5% 0.115 18.33 / <alpha-value>)',
          600: 'oklch(47.01% 0.1653 18.33 / <alpha-value>)',
          400: 'oklch(66.5% 0.196 18.33 / <alpha-value>)',
          200: 'oklch(83.2% 0.077 18.33 / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', ...fontFamily.sans],
        mono: ['var(--font-geist-mono)', ...fontFamily.mono],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [typography, require('tailwindcss-oklch')()],
} satisfies Config;
export default config;
