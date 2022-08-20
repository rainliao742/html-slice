/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "gl-pink":"#FBF2f2",
        "gl-red":"#AA0601",
        "gl-dark-red":"#650300"
      },
      width:{
        "21":"84px"
      },
      height:{
        "21":"84px"
      },
      screens:{
        '-2xl':{ max:'1535px'},
        '-xl':{ max:'1279px'},
        '-lg':{ max:'1023px'},
        '-md':{ max:'767px'},
        '-sm':{ max:'639px'},
        '-xs':{ max:'375px'},
        '-xxs':{ max:'280px'}
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
