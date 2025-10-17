/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#2d251c',
        'brand-gold': '#DDBE73',
        'brand-red': '#AE2724',
        'brand-beige': '#f5f2ed',
      },
      fontFamily: {
        'sans': ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Ubuntu', 'Cantarell', 'Noto Sans', 'sans-serif'],
      },
      animation: {
        'whatsapp-pulse': 'pulse 2s infinite',
      },
    },
  },
  plugins: [],
}