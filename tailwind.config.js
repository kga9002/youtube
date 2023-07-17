/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        borderColor: "#d3d3d3",
        borderActive: "#1c62b9",
        button: "#f8f8f8",
        buttonHover: "#f0f0f0",
        buttonHoverBorder: "#c6c6c6",
        textPrimary: "#030303",
        textSecondary: "#606060",
        describeBox: "#F2F2F2",
      },
      aspectRatio: {
        "9/5": "9 / 5",
      },
    },
  },
  plugins: [],
};
