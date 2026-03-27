/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        crimson: {
          DEFAULT: '#8B1A3A',
          light: '#A8244A',
          dark: '#6B1228',
        },
        gold: {
          DEFAULT: '#FFD700',
          light: '#FFE44D',
          dark: '#CC9900',
          muted: '#FFD70033',
        },
        brand: {
          black: '#0D0D0D',
          dark: '#111111',
          gray: '#1A1A1A',
        }
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'Impact', 'Arial Black', 'sans-serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
