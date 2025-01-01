import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import { PluginAPI } from "tailwindcss/types/config";

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
      colors: {
        ...colors(),
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), plugin(customText)],
} satisfies Config;

function colors() {
  return {
    "app-gray": {
      100: "#141414",
      101: "#191919",
    },
  } as const;
}

function breakpoints() {
  return {
    // NEW BREAKPOINTS BELOW

    // Large break points
    "lg-6": "1400px",
    "lg-5": "1350px",
    "lg-4": "1280px",
    "lg-3": "1200px",
    "lg-2": "1150px",
    "lg-1": "1100px",

    // Medium break points
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
  } as const;
}

function customText({ matchUtilities, theme }: PluginAPI) {
  const heading: Record<string, string> = {
    "font-weight": theme("fontWeight.bold"),
    "text-transform": "uppercase",
  };

  matchUtilities(
    {
      "typo-h1": () => ({
        ...heading,
        "font-size": "56px",
        "line-height": "58px",
        "letter-spacing": "2px",
      }),
      "typo-h2": () => ({
        ...heading,
        "font-size": "40px",
        "line-height": "44px",
        "letter-spacing": "1.5px",
      }),
      "typo-h3": () => ({
        ...heading,
        "font-size": "32px",
        "line-height": "36px",
        "letter-spacing": "1.15px",
      }),
      "typo-h4": () => ({
        ...heading,
        "font-size": "28px",
        "line-height": "38px",
        "letter-spacing": "2px",
      }),
      "typo-h5": () => ({
        ...heading,
        "font-size": "24px",
        "line-height": "33px",
        "letter-spacing": "1.7px",
      }),
      "typo-h6": () => ({
        ...heading,
        "font-size": "18px",
        "line-height": "24px",
        "letter-spacing": "1.3px",
      }),
      "typo-overline": () => ({
        ...heading,
        "font-weight": theme("fontWeight.normal"),
        "font-size": "14px",
        "line-height": "19px",
        "letter-spacing": "10px",
      }),
      "typo-sub-title": () => ({
        ...heading,
        "font-size": "13px",
        "line-height": "25px",
        "letter-spacing": "1px",
      }),
      "typo-body": () => ({
        ...heading,
        "text-transform": "none",
        "font-weight": theme("fontWeight.medium"),
        "font-size": "15px",
        "line-height": "25px",
      }),
    },
    { values: { none: "" } },
  );
}
