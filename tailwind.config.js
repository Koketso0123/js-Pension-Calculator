/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pension-calculator.html"],
  theme: {
    extend: {
      colors:{
        'gold': 'rgba(218, 165, 32,1);',
         'background': 'rgba(35,61,39);',
         'form-box':'rgba(105,105,82, 0.3);',
         'button-background': 'rgba(105,105,82, 0.2);'

      },
      fontWeight:{
        'paragraph': 475

      }
    },
  },
  plugins: [],
}
//rgba(255, 255, 190, 1) form
// 218, 165, 32
//53, 94, 59, 1//
//rgb(196, 180, 84)