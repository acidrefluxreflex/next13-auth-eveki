/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'node_modules/preline/dist/*.js',
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
 
    extend: {
      fontFamily: {
        verdana: ["Verdana"],
        futura: ["Futura"]
      },
      colors: {
        // 'カラー名': 'カラーコード'
        'edo-purple': '#76428C',
        'botann': '#E03C8A',
        'asagi': '#33A6B8',
        'custom-gray': '#BDC0BA',
      },
  },
},
  plugins: [
    require("daisyui"),
    require('preline/plugin'),
  ],
}

