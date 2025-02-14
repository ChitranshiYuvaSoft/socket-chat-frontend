import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1b4965", // Dark Navy
        primary: "#62b6cb",    // Deep Blue
        accent: "#62b6cb",     // Violet
        text: "#cae9ff",       // Light Gray
        secondary: "#5fa8d3",  // Muted Blue
      },
      screens: {
        'xs': '300px',   // Extra small devices
        'sm': '640px',   // Small devices
        'md': '768px',   // Medium devices
        'lg': '1024px',  // Large devices
        'xl': '1280px',  // Extra large devices
        '2xl': '1500px', // 2x extra large devices
      },
    },
  },
  plugins: [],
};

export default config;

