/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#047e57",
        secondary: "#f59e0b",
        accent: "#530000",
        text: {
          primary: "#000919",
          secondary: "#4b5563",
          inverse: "#f9fafb",
        },
        background: {
          light: "#fcffe7",
          surface: "#e5ffdf",
          dark: "#000919",
        },

        // Borders
        border: {
          light: "#e5e7eb",
          accent: "#047e57",
        },

        // States
        state: {
          hover: "#02704f",
          active: "#047857",
          focus: "#f59e0b",
        },
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(to right, #047e57, #003323)",
        "gradient-secondary": "linear-gradient(to right, #f59e0b, #d97706)",
        "gradient-accent": "linear-gradient(to right, #34d89d, #d4ff7e)",
        "gradient-vibrant-text": "linear-gradient(to right, #047e57, #f59e0b)",
        "gradient-vibrant-text-dark":
          "linear-gradient(to right, #065f46, #b45309)",
      },
    },
  },
  plugins: [],
};
