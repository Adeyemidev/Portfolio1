/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
            "./src/**/*.{js,ts,jsx,tsx}",],
  theme: { 
    colors: {
      gray: '#D9D9D9',
     white: '#FFFFFF',
      darkgrey: '#242424',
      green: '#4EE1A0',
      black: '#151515',
   
  },
   fontSize: {
     extralarge: '88px',
     large: '48px',
     medium: '32px',
     small: '24px',
     smaller: '18px', 
     smallest: '16px'
   },

   lineHeight: {
    tight: '16px',
    normal: '28px',
    medium: '32px',
    large: '56px',
    extralarge: '88px',
  },
  letterSpacing: {
        small:'-0.44px',
         tighter: '-1.5px',
         tight: '-2.5px',
        },

//         MaxWidth:{
// medium:'width: 45px;'
//         },
    extend: {

      
   
    },
  },
  plugins: [],
}


