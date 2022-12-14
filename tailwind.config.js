/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{html,js}",
    "./src/context/*.{html,js}",
    "./src/components/*.{html,js}",
    "./src/components/user/*.{html,js}",
    "./src/components/user/sub/*.{html,js}",
    "./src/components/pembimbing/*.{html,js}",
    "./src/components/pembimbing/sub/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        utama: "#6C63FF",
        sekunder: "#564fc9"
      }
    },
  },
  plugins: [],
}
