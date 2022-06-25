/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      mono: { 'Xanh Mono': 'space-x-2' },
      sans: { 'Helvetica': ['Inter var', 'sans-serif'] },
    },
  },
  plugins: [],
}
