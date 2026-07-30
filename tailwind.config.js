/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4DB6E5',
          light: '#72C7EC',
          dark: '#3499C7',
          50: '#F0F9FD',
          100: '#E1F3FA',
        },
        secondary: {
          DEFAULT: '#7CC576',
          light: '#96D491',
          dark: '#5EA359',
          50: '#F2F9F1',
        },
        accent: {
          DEFAULT: '#FFC857',
          pink: '#FF7AA2',
          peach: '#FFE7D1',
        },
        dark: {
          DEFAULT: '#243447',
          light: '#354960',
          muted: '#5F738C',
        },
        light: {
          DEFAULT: '#FFFFFF',
          section: '#F9FBFD',
          muted: '#EDF4F7',
          card: '#FAFCFE',
        },
        customBorder: 'rgba(36,52,71,0.08)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        'large': '28px',
        'card': '24px',
        'medium': '20px',
        'small': '14px',
        'button': '999px',
      },
      boxShadow: {
        'lux': '0 30px 80px rgba(36,52,71,0.08)',
        'lux-hover': '0 40px 90px rgba(36,52,71,0.12)',
        'glass': '0 20px 40px rgba(36,52,71,0.05)',
        'glow': '0 0 40px rgba(77,182,229,0.25)',
      },
      letterSpacing: {
        'tight-heading': '-0.03em',
      },
      backdropBlur: {
        'glass': '16px',
      },
    },
  },
  plugins: [],
}
