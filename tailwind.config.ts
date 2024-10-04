import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sonexFamily: ["Barlow Condensed", "sans-serif"],
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        sonex: {
          prime: "#d53c32",
          primeBackGround: "#0000000a",
          cartBackGround: "#0000000a",
          borderCol: "#0000001a",
          blackBackGroundCol: "#0009",
          footerFormBackGround: "#3256d5",
          mutedtText: "#0009",
        },

        // Barlow Condensed, sans-serif
      },
    },
  },
  plugins: [],
};
export default config;
