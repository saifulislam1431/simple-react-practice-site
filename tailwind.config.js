/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#e87678",
        
"secondary": "#ff0aa1",
        
"accent": "#d5e273",
        
"neutral": "#1B141F",
        
"base-100": "#F6F6F9",
        
"info": "#8AD3F0",
        
"success": "#0D7741",
        
"warning": "#BC8A0B",
        
"error": "#FC4A80",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

