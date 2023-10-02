import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary": "var(--primary)",
        "primary-light": "var(--primary-light)",
        "text-color-1": "#acafb5",
        "text-color-2": "#D1D0D4",
        "code-1": "#1A5198",
        "code-2": "#5EA676",
        "code-3": "#C2A645",
        "code-4": "#847299",
        "code-5": "#BF657C",
        "code-6": "#84E296",
        "code-7": "#F2C94C",
        "code-8": "#FF8098",
      },
      fontFamily: {
        "inter": ["var(--font-inter)"],
        "fira-code": ["var(--font-fira-code)"],
      },
    },
  },
  plugins: [],
};
export default config;
