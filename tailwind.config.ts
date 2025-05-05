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
        dashboardSky:"#C3EBFA",
        dashboardSkyLight:"#EDF9FD",
        dashboardPurple: "#CFCEFF",
        dashboardPurpleLight: "#F1F0FF",
        dashboardYellow: "#FAE27C",
        dashboardYellowLight: "#FEFCE8",
      },
    },
  },
  plugins: [],
};
export default config;
