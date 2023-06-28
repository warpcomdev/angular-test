/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    extend: {
      colors: {
        'principal-color':'#00374D',
        'secondary-color':'#6DCAD9',
        'button-color': '#5BABBA',
        'urbo-luminance-06':'#C9EFF4'
      },
      spacing: {
        '199': '199.68px',
        '99':'99.84px',
        '71.68':'71.68px',
        'top-junta':'55.68px',
        'width-junta': '16.5px',
        'heigth-junta': '24px',
        'width-c-junta': '24px',
        'heigth-c-junta':'24px',
        'top-form':'145.8px',
        'button-width':'78px', 
        'button-heigth':'30px',
        'form-width': '228px'
      },
    },
  },
  plugins: [],
};
