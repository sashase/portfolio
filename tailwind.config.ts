import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        floatIn: {
          "0%": {
            opacity: "0.1",
            transform: "translateY(-3%)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          },
        }
      },
      animation: {
        "float-in": "floatIn 0.4s ease-in-out forwards",
        "float-in-delay-1": "floatIn 0.4s ease-in-out 0.5s forwards"
      },
      fontFamily: {
        gabarito: "Gabarito",
      },
      colors: {
        primary: "#366396",
        secondary: "#769FCD",
        beau: "#B9D7EA",
        azurish: "#D6E6F2",
        background: "#F7FBFC"
      }
    },
  },
  plugins: [],
}
export default config
