/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
       fontFamily: {
        Merriweather: ["Merriweather", 'serif'],
      },
      width: {
        '160p': '180%',
        '80p': '80%',
        "900px": "900px"
      },
       height: {
        '90vh': '90vh',
        '70vh': '60vh',
         "900px": "900px"
      },
      inset: {
        // These control `top`, `right`, `bottom`, and `left`
        '30p': '25%',    // use as left-1/5
        '10P': '10%',   // use as left-1/10
        '15': '3.75rem', // use as left-15
        '100': '25rem',  // use as left-100
        '1px': '1px',    // use as left-1px
      },
    },
  },
  plugins: [],
}

