/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      // animation: {
      //   slider: 'slider 6s linear infinite',
      // },
      // keyframes: {
      //   slider: {
      //     '0%': { transform: 'translateX(0%)' },
      //     '100%': { transform: 'translateX(-100%)' },
      //   },
      // },

    },
  },
  plugins: [],
};
