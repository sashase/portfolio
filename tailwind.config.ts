import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        gabarito: "Gabarito",
      },
      colors: {
        primary: "#769FCD",
        background: "#F7FBFC",
        azurish: "#D6E6F2",
        beau: "#B9D7EA"
      }
    },
  },
  plugins: [],
}
export default config
