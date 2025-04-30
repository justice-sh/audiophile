import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
// import { typography } from "./tailwind-config/typography";
// import { breakpoints } from "./tailwind-config/breakpoints";
// import { colors } from "./tailwind-config/colors";

export default {
  darkMode: ["class"],
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        // NEW BREAKPOINTS BELOW
    
        // Large break points
        "lg-6": "1400px",
        "lg-5": "1350px",
        "lg-4": "1280px",
        "lg-3": "1200px",
        "lg-2": "1150px",
        "lg-1": "1100px",
    
        // Medium break points
        "md-10": "1066px",
        "md-9": "1046px",
        "md-8": "1024px",
        "md-7": "960px",
        "md-6": "912px",
        "md-5": "853px",
        "md-4": "820px",
        "md-3": "768px",
        "md-2": "730px",
        "md-1": "700px",
    
        // Small break points
        "sm-8": "600px",
        "sm-7": "540px",
        "sm-6": "500px",
        "sm-5": "460px",
        "sm-4": "430px",
        "sm-3": "414px",
        "sm-2": "390px",
        "sm-1": "375px",
    
        // Extra small break points
        "xs-5": "360px",
        "xs-4": "344px",
        "xs-3": "300px",
        "xs-2": "280px",
        "xs-1": "260px",
      },
      containers: {
        // NEW BREAKPOINTS BELOW
    
        // Large break points
        "lg-6": "1400px",
        "lg-5": "1350px",
        "lg-4": "1280px",
        "lg-3": "1200px",
        "lg-2": "1150px",
        "lg-1": "1100px",
    
        // Medium break points
        "md-10": "1066px",
        "md-9": "1046px",
        "md-8": "1024px",
        "md-7": "960px",
        "md-6": "912px",
        "md-5": "853px",
        "md-4": "820px",
        "md-3": "768px",
        "md-2": "730px",
        "md-1": "700px",
    
        // Small break points
        "sm-8": "600px",
        "sm-7": "540px",
        "sm-6": "500px",
        "sm-5": "460px",
        "sm-4": "430px",
        "sm-3": "414px",
        "sm-2": "390px",
        "sm-1": "375px",
    
        // Extra small break points
        "xs-5": "360px",
        "xs-4": "344px",
        "xs-3": "300px",
        "xs-2": "280px",
        "xs-1": "260px",
      },
      fontFamily: {
        manrope: ["var(--font-manrope)", "serif"],
      },
      colors: {
        "app-gray": {
          100: "#141414",
          101: "#191919",
          102: "#F1F1F1",
          103: "#979797",
          104: "#4C4C4C",
        },
        "app-orange": {
          101: "#FBAF85",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/container-queries"), require("tailwindcss-motion")],
} satisfies Config;
