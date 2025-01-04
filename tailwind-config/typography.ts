import { PluginAPI } from "tailwindcss/types/config"

export function typography({ matchUtilities, theme }: PluginAPI) {
  const heading: Record<string, string> = {
    "font-weight": theme("fontWeight.bold"),
    "text-transform": "uppercase",
  }

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
  )
}
