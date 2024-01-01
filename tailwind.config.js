/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'topo': "url('/topography.svg')"
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    daisyui
  ],
  daisyui: {
    themes: ["light","dracula"],
  },
}

