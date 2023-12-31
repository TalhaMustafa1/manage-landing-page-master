/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors:{
        'bright-red':' hsl(12, 88%, 59%)',
        'dark-blue':' hsl(228, 39%, 23%)',
        'dark-graysih-blue':'hsl(227, 12%, 61%)',
         'Very-dark-blue':'hsl(233, 12%, 13%)',
         'ver-pale-red':'hsl(13, 100%, 96%)',
         'very-light-gray':' hsl(0, 0%, 98%)'
      },
      fontFamily: {
       
        vietnam:['Be Vietnam Pro', 'sans-serif']
      },
    },
  },
  plugins: [],
}

