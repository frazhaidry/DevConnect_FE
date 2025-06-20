/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 darkMode: 'class', // Enables manual dark mode toggle
  theme: {
    extend: {
      colors: {
        light: {
          background: "#F8F3D9",
          card: "#EBE5C2",
          accent: "#B9B28A",
          text: "#504B38",
          border: "#E5DFB9",
        }, 
        dark: {
          background: "#1E1C14",
          card: "#3A382C",
          accent: "#B9B28A",
          text: "#F8F3D9",
          border: "#2C2A1F",
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      }
    },
  },
  plugins: [daisyui],
};

