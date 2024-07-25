/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme1-primary': '#1E3A8A',
        'theme1-secondary': '#3B82F6',
        'theme1-background': '#F3F4F6',
        'theme1-text': '#111827',
        'theme2-primary': '#D97706',
        'theme2-secondary': '#F59E0B',
        'theme2-background': '#FFFBEB',
        'theme2-text': '#374151',
        'theme3-primary': '#10B981',
        'theme3-secondary': '#34D399',
        'theme3-background': '#ECFDF5',
        'theme3-text': '#064E3B',
      }
    }
  },
  plugins: [],
}
