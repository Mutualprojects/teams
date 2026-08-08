import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1B2A5E',
          dark: '#111b3f',
          light: '#2f4080',
          deep: '#0a1128',
        },
        crimson: {
          DEFAULT: '#D8232A',
          dark: '#b01b21',
          light: '#f03038',
        },
        sage: {
          DEFAULT: '#bed6c5',
          soft: '#cbdccf',
          muted: '#b2caa9',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        heading: ['DM Sans', 'sans-serif'],
      },
      boxShadow: {
        'red-glow': '0 8px 30px rgba(216, 35, 42, 0.35)',
        'navy-glow': '0 12px 40px rgba(27, 42, 94, 0.25)',
        'glass': '0 20px 50px rgba(27, 42, 94, 0.1)',
      },
    },
  },
  plugins: [],
};

export default config;
