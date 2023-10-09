import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradients-grey":
          "linear-gradient(133deg, rgba(218, 221, 226, 0.80) 0%, rgba(218, 221, 226, 0.60) 100%)",
        "gradients-white":
          " linear-gradient(142deg, rgba(255, 255, 255, 0.70) 0%, rgba(255, 255, 255, 0.40) 100%)",
      },
      screens: {
        mobile: { min: "320px", max: "640px" },
        tablet: { min: "640px", max: "768px" },
      },
      colors: {
        background: "#F9F9F7",
        background2: "#EDE9FB",
        "primary-black": "#2B2B2B",
        "secondary-black": "#4B4E4B",
        "brand-primary": "#5F4BB6",
      },

      fontSize: {
        h1: [
          "48px",
          {
            fontWeight: "700",
            lineHeight: "normal",
          },
        ],
        h2: [
          "32px",
          {
            fontWeight: "700",
            lineHeight: "normal",
          },
        ],
        medium: [
          "20px",
          {
            fontWeight: "700",
            lineHeight: "normal",
          },
        ],
        normal: [
          "16px",
          {
            fontWeight: "400",
            lineHeight: "normal",
          },
        ],
      },
    },
  },
  plugins: [],
}
export default config
