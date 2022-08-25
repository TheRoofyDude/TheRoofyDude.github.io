/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend : {
      colors: {
        'chaosRed' : '#ff0000',
        'chaosBlack' : '#000000',
        'chaosGrey' : '#171A1D',
        'chaosWhite' : '#FFFFFF',
        'chaosDarkGrey' : '#A9A9A9',
        'chaosBgSpace' : '#16141A'
      },
      height: {
        '100': '50rem',
        '171': '43.75rem'
      }
    },  
  },
  plugins: [require("daisyui")],
}
