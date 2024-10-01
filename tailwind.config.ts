import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
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
        },
      },
    },
  },
  plugins: [],
};
export default config;
