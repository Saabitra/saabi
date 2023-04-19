/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // animation: {
      //   "gradient": "gradient 7s ease infinite",
      // },
      // keyframes: {
      //   gradient: {
      //     "0%": { "background-position": "0% 50%" },
      //     "50%": { "background-position": "100% 50%" },
      //     "100%": { "background-position": "0% 50%" },
      //   },
      // },
    },
  },
  plugins: [],
}
