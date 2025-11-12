/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand colors
        primary: "#3b82f6", // bright blue
        secondary: "#8b5cf6", // purple
        accent: "#06b6d4", // cyan

        // Text
        text: {
          primary: "#1f2937", // dark slate
          secondary: "#4b5563", // medium gray
          inverse: "#ffffff", // white for dark elements
        },

        // Backgrounds
        background: {
          light: "#f9fafb", // off-white base
          surface: "#ffffff", // card surfaces
          dark: "#111827", // optional dark section/background
        },

        // Borders
        border: {
          light: "#e5e7eb", // soft gray
          accent: "#3b82f6", // blue accent
        },

        // States
        state: {
          hover: "#2563eb", // darker blue
          active: "#1d4ed8", // darker accent for active
          focus: "#06b6d4", // cyan focus
        },
      },

      backgroundImage: {
        "gradient-primary": "linear-gradient(to right, #3b82f6, #6366f1)",
        "gradient-secondary": "linear-gradient(to right, #8b5cf6, #6366f1)",
        "gradient-accent": "linear-gradient(to right, #06b6d4, #3b82f6)",
        "gradient-vibrant-text":
          "linear-gradient(to right, #6366f1, #8b5cf6, #06b6d4)",
        "gradient-vibrant-text-dark":
          "linear-gradient(to right, #1e3a8a, #5b21b6, #0d9488)",
      },

    },
  },
  plugins: [],
};
