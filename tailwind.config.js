/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sp-navy': '#000b3d',        // Azul marino primario - Confianza, autoridad
        'sp-gold': '#f4d289',        // Dorado cálido - Lujo discreto
        'sp-gold-dark': '#3b2800',   // Dorado oscuro - Acentos profundos
        'sp-gold-accent': '#ffc954', // Dorado claro - Variación cálida
      },
      fontFamily: {
        'script': ['Great Vibes', 'cursive'],
        'serif': ['Inria Serif', 'serif'],
      },
      spacing: {
        'section': '6rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-gold': 'pulse-gold 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-gold': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
      boxShadow: {
        'gold': '0 0 20px rgba(244, 210, 137, 0.3)',
        'gold-lg': '0 0 30px rgba(244, 210, 137, 0.5)',
      },
    },
  },
  plugins: [],
}