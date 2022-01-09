module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {

    extend: {
      textColor: {
        skin:{
          gray: 'var(--gray)',
          main: 'var(--main)',
        }
      },
      backgroundColor: {
        skin:{
          gray: 'var(--gray)',
          main: 'var(--main)',
        },
      },
      fontFamily: {
        Inter: "'Inter', sans-serif",
      }
    },
  },
  variants: {
    extend: {},
  },

  plugins: [],
}
