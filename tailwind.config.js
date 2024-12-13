/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'transparent': '0px 4px 24px -1px rgba(255, 255, 255, 0.25)',
        'current': 'currentColor',
        'white': '#ffffff',
        'footer-pop': 'var(--90, #E6EFFD);',
        'midnight': 'linear-gradient(3deg, rgba(22, 101, 52, 1), rgba(187, 247, 208, 0.505), rgba(255, 255, 255, 0))',
        'navColor': 'rgba(255, 255, 255, 0.05)',
        'regal-blue': 'rgb(96 114 129 / 96%)',
        'custom1': '',
        'regale-blue': 'linear-gradient(58.29deg, #3580F1 -166.39%, #FFFFFF 76.55%)',
 
      },

      fontFamily: {
        Galano: ['Galano', 'Grotesque'],
        Geist :['Geist Sans', 'sans-serif'],
      },

      backgroundImage: {
        'custom-gradient': 'linear-gradient(42.35deg, #FFE0E1 7.98%, #FFFFFF 60.52%)',
        'custom1-gradient': `
          linear-gradient(43.45deg, #E6EFFD 8.38%, #FFFFFF 97.69%),
          linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)),
          linear-gradient(42.35deg, #FFE0E1 7.98%, #FFFFFF 60.52%)
        `,
        'custom2-gradient': 'linear-gradient(42.35deg, #FFE0E1 7.98%, #FFFFFF 60.52%)',
      },


      screens: {
        'smipx': '300px',
        // => @media (min-width: 640px) { ... }

        'ipx': '375px',
        // => @media (min-width: 640px) { ... }

        'ip8': '414px',
        // => @media (min-width: 640px) { ... }

        'ip8n': '400px',
        // => @media (min-width: 640px) { ... }

        'ipx': '375px',
        // => @media (min-width: 640px) { ... }

        'ip8n': '400px',
        // => @media (min-width: 640px) { ... }

        'ip8': '414px',
        // => @media (min-width: 640px) { ... }

        'at500': '500px',
        // => @media (min-width: 640px) { ... }

        'at594': '594px',
        // => @media (min-width: 640px) { ... }

        'silver': '950px',
        // => @media (min-width: 1536px) { ... }
        'at1098': '1098px',
        // => @media (min-width: 1536px) { ... }
        
      } 
    },
  },
  plugins: [],
}
