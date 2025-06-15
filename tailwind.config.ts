import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "300px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      boxShadow: {
        light: "4px 4px 15px 0px rgba(9, 18, 25, 0.25)",
        dark: "0",
        cta_button: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        card_shadow: "0px 4px 15px 0px rgba(0, 0, 0, 0.25)",
      },
      colors: {
        mainblack: "#091219",
        secondary: "#FF7701",
        light: {
          bodyBg: "#ffffff",
          background: "#ffffff",
          text: "#000000",
          card: "#ffffff",
          border: "#B3B6B8",
        },
        dark: {
          bodyBg: "#0F0F0F",
          background: "#000000",
          text: "#ffffff",
          card: "#000000",
          border: "#B3B6B8",
        },
      },
    },
  },
  plugins: [require("daisyui")],
} satisfies Config;
