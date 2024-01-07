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
        success: "#369639",
        error: "#EF4444",
        surface: "#D6E6F2",
        background: "#F7FBFC",

        primaryDark: "#C2CBD6",
        secondaryDark: "#899fb8",
        successDark: "#4AA14D",
        errorDark: "#DE5454",
        surfacePrimaryDark: "#22303F",
        surfaceSecondaryDark: "#161D27",
        backgroundDark: "#010304"
      }
    },
  },
  plugins: [],
}
export default config
