import { PluginAPI } from "tailwindcss/types/config"

export function typography({ theme, addComponents }: PluginAPI) {
  const heading: Record<string, string> = {
    "font-weight": theme("fontWeight.bold"),
    "text-transform": "uppercase",
  }

  addComponents(
    {
      ".app-text-h1": {
        ...heading,
        "font-size": "56px",
        "line-height": "58px",
        "letter-spacing": "2px",
      },
      ".app-text-h2": {
        ...heading,
        "font-size": "40px",
        "line-height": "44px",
        "letter-spacing": "1.5px",
      },
      ".app-text-h3": {
        ...heading,
        "font-size": "36px",
        "line-height": "40px",
        "letter-spacing": "1.15px",
      },
      ".app-text-h4": {
        ...heading,
        "font-size": "28px",
        "line-height": "38px",
        "letter-spacing": "2px",
      },
      ".app-text-h5": {
        ...heading,
        "font-size": "24px",
        "line-height": "33px",
        "letter-spacing": "1.7px",
      },
      ".app-text-h6": {
        ...heading,
        "font-size": "18px",
        "line-height": "24px",
        "letter-spacing": "1.3px",
      },
      ".app-text-overline": {
        ...heading,
        "font-weight": theme("fontWeight.normal"),
        "font-size": "14px",
        "line-height": "19px",
        "letter-spacing": "10px",
      },
      ".app-text-sub-title": {
        ...heading,
        "font-size": "13px",
        "line-height": "17.76px",
        "letter-spacing": "1px",
      },
      ".app-text-body": {
        ...heading,
        "text-transform": "none",
        "font-weight": theme("fontWeight.medium"),
        "font-size": "15px",
        "line-height": "25px",
      },
    },
    {
      respectImportant: true,
      respectPrefix: true,
    },
  )
}
