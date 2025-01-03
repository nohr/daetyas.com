import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      slate: "#181a1b",
      green: "#00c49a",
      gray: "#aea9ab",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        autoscroll: {
          from: { transform: "translate3d(0, 0, 0)" },
          to: { transform: "translate3d(0, -90%, 0)" },
        },
      },
      animation: {
        autoscroll: "autoscroll 130s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
