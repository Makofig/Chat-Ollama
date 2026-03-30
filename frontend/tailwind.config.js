export default {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/streamdown/dist/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0da6f2",
        "background-light": "#f5f7f8",
        "background-dark": "#0f0f12",
        "surface-dark": "rgba(255, 255, 255, 0.03)",
        "glass-dark": "rgba(30, 30, 45, 0.6)",
      },
      fontFamily: {
        display: ["Inter", "sans-serif"]
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        full: "9999px"
      }
    }
  },
  plugins: [],
}