import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "footer-gray": "#f6f5f5", // 自定义颜色
        default: "#808274",
        all: "#FFFFFF",
        forHim: "#ECF2F5",
        forHer: "#FFF7EF",
        neutral: "#E2E2E2",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        literata: ["Literata", "serif"],
        rokkitt: ["Rokkitt", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
