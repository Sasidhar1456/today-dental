/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A',      // deep blue
        accent: '#F59E0B',       // amber
        lightbg: '#F3F4F6',      // light gray
        headerbg: '#111827',     // almost black
      },
    },
  },
  plugins: [],
}
