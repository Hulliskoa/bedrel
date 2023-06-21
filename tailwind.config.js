/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
    },
    colors: {
      transparent: 'transparent',
      'buttercup': '#FFB238',
      'buttercup-shade-1': '#FFCF87',
      'retro-green': '#7DCFB6',
      'retro-green-shade-1': '#B6E9D7',
      'retro-green-shade-2': '#CDF6E8',
      'retro-green-shade-3': '#E4FDF7',
      'flamingo' :'#FFBCCD',
      'flamingo-shade-1': '#FECFDC',
      'flamingo-shade-2': '#FEE1E8',
      'flamingo-shade-3': '#FFF8FA',
      'dragonbreath': '#F5F5F5',
      'dragonbreath-shade-1': '#FAFAFA',
      'dragonbreath-shade-2': '#FCFCFC',
      'white': '#FFFFFF',
      'black': '#000000',
      'grey-1':'#929497',
      'grey-2':'#C6C7CA',
      'grey-3':'#E2E3E6',
     

    }
  },
  plugins: [],
};
