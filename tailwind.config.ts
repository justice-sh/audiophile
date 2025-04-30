import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import { typography } from "./tailwind-config/typography";
import { breakpoints } from "./tailwind-config/breakpoints";
import { colors } from "./tailwind-config/colors";

export default {
  darkMode: ["class"],
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: breakpoints(),
      containers: breakpoints(),
      fontFamily: {
        manrope: ["var(--font-manrope)", "serif"],
      },
      colors: colors(),
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/container-queries"), require("tailwindcss-motion"), plugin(typography)],
} satisfies Config;
