/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  themes: [
    {
      mytheme: {
      
"primary": "#2c7da3",
      
"secondary": "#b4e6f7",
      
"accent": "#d4ccff",
      
"neutral": "#1c1f26",
      
"base-100": "#edeff2",
      
"info": "#a4cdf4",
      
"success": "#15bc8d",
      
"warning": "#c2690f",
      
"error": "#f9588b",
      },
    },
  ],

  plugins: [require("daisyui")],
}

