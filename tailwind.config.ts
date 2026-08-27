import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D2E24', // Deep Heritage Forest / Olive Noir
        'primary-dark': '#142019',
        'primary-light': '#2A4234',
        secondary: '#D1A966', // Brushed Champagne Gold
        'secondary-hover': '#DEBC80',
        'secondary-dark': '#B88F4D',
        accent: '#D1A966', // Champagne Gold accent
        canvas: '#F6F8F5', // Soft Natural Stone Canvas
        'canvas-card': '#FFFFFF',
        'canvas-border': '#DCE5DE',
        text: '#1E2621', // Deep forest charcoal text
        'text-muted': '#5C6B61',
        'text-gray': '#6B7B71',
        'bg-light': '#F6F8F5',
        'border-gray': '#DCE5DE',
        'nav-gray': '#ECEFEA',
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'Helvetica', 'Arial', 'sans-serif'],
        heading: ['var(--font-dm-sans)', 'Helvetica', 'Arial', 'sans-serif'],
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [
    // line-clamp plugin removed; included by default in Tailwind 3.3+
  ],
}
export default config 