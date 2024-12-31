import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens:{
        "xsm":{"min":"280px", "max":"339px"},
        "ssm":{"min":"340px", "max":"459px"},
        "msm":{"min":"460px", "max":"639px"},
        "sm":{"min":"640px", "max":"767px"},
        "md":{"min":"768px","max":"1023px"}
    }
    },
  },
  plugins: [],
} satisfies Config;
