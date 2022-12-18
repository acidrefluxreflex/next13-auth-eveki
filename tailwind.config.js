/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        verdana: ["Verdana"],
      },
      colors: {
        // 'カラー名': 'カラーコード'
        'edo-purple': '#76428C',
      },
  },
},
  plugins: [require("daisyui")],
}

