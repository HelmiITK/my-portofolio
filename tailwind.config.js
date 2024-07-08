/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['poppins']
      },
      colors: {
        primary: '#042940',
        secondary: '#005C53',
        tertiary: '#9FC131',
        quaternary: '#DBF227',
        quinary: '#D6D58E'
      },
      opacity: {
        '91': '.91'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],

  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "light", // name of one of the included themes for dark mode
  },
}

