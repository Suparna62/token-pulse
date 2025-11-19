/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./pages/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0b0d10",
        panel: "#0d0f12",
        muted: "#7b8191",
        axiomBlue: "#1f6feb",
        success: "#16c784",
        danger: "#ea3943"
      }
    }
  },
  plugins: []
};
