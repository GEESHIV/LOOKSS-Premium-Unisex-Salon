/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#F4F2EE',
          100: '#E3DFD7',
          200: '#BDB7AB',
          300: '#948D7F',
          400: '#6E685C',
          500: '#524D44',
          600: '#3D3932',
          700: '#2A2722',
          800: '#1C1A16',
          900: '#12110E',
          950: '#0A0907',
        },
        ivory: {
          50: '#FDFBF6',
          100: '#FAF6EC',
          200: '#F4EDDC',
          300: '#EBE0C8',
        },
        gold: {
          100: '#F7EFD9',
          200: '#EEDDB0',
          300: '#E2C98E',
          400: '#D4B673',
          500: '#C2A061',
          600: '#A8854A',
          700: '#8A6A36',
          800: '#6B5129',
        },
        beige: {
          50: '#FBF7F0',
          100: '#F4ECDF',
          200: '#E9DCC7',
          300: '#DCC9AC',
          400: '#C9B08D',
        },
        success: {
          50: '#EEF7F1',
          500: '#2F7A4E',
          700: '#22583A',
        },
        warning: {
          50: '#FBF5E6',
          500: '#A36A12',
          700: '#7A4F0C',
        },
        error: {
          50: '#FBEFEF',
          500: '#B23A3A',
          700: '#8A2626',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        luxe: '0.28em',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slow-zoom': {
          '0%': { transform: 'scale(1.08)' },
          '100%': { transform: 'scale(1)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(1)', opacity: '0.6' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 1s cubic-bezier(0.22, 1, 0.36, 1) both',
        'slow-zoom': 'slow-zoom 12s ease-out both',
        'pulse-ring': 'pulse-ring 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
