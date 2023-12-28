import type { Config } from "tailwindcss";

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
      },
    },
    container: {
      center: true,
      screens: {
        desktop: "1280px",
      },
    },
    colors: {
      primary: "var(--primary-text-color)",
      secondary: "var(--secondary-text-color)",
      white: "var(--white-color)",
      lightGray: "var(--light-gray)",
      dangerColor: "var(--danger-color)",
      fill: {
        primary: "var(--primary-fill-color)",
        secondary: "var(--secondary-fill-color)",
        white: "var(--white-fill-color)",
      },
    },
  },
  plugins: [],
};
export default config;
