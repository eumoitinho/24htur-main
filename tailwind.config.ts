import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
    "./mdx-components.tsx",
    "./node_modules/fumadocs-ui/dist/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: '#DDB86A',
          dark: '#c9a558',
        },
        dark: {
          DEFAULT: '#06060a',
        },
        'brand-dark': '#2d251c',
        'brand-gold': '#DDBE73',
        'brand-red': '#AE2724',
        'brand-beige': '#f5f2ed',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Ubuntu', 'Cantarell', 'Noto Sans', 'sans-serif'],
      },
      animation: {
        'whatsapp-pulse': 'pulse 2s infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
