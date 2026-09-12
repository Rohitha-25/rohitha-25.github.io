/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50:  '#FDFAF1',
          100: '#F8F2DC',
          200: '#EEE4C4',
          300: '#E2D4A8',
        },
        olive: {
          50:  '#F3F5EC',
          100: '#DDE4C4',
          200: '#C3D099',
          300: '#A5B972',
          400: '#88A250',
          500: '#6D8B35',
          600: '#57712A',
          700: '#425620',
          800: '#2D3C16',
          900: '#1A230C',
        },
        warm: {
          100: '#F0EBD8',
          200: '#E4DCC6',
          300: '#CFC5A8',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body:    ['"Jost"', 'sans-serif'],
      },
      animation: {
        'fade-up':   'fadeUp 0.8s ease forwards',
        'fade-in':   'fadeIn 0.6s ease forwards',
        'float':     'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
