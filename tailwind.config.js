/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        life:'#f6f462',
        car :'#fdce0b',
        pet :'#975fff'
      },
      fontFamily: {
        KalamehBold: ['Kalameh-Bold'],
      },
      backgroundImage:{
       "back_large_login1":"url('./img/login/legalL.jpg')",
        "back_medium_login1":"url('../../img/login/legalM.jpg')",
        "back_small_login1":"url('../../img/login/legalL.jpg')",
        "back-Login2":"url('../../img/login/shrineS.jpg')",
        "bg-psychology": "url('../../img/Animation/psychology/04-bg.jpg')",
        "bg-sm-psychology": "url('../../img/Animation/psychology/sm-psy.jpg')",
        "bg-treatment": "url('../../img/Animation/treatment/02-bg.jpg')",
        "bg-sm-treatment": "url('../../img/Animation/treatment/sm-treatment.jpg')",
        'custom-gradient': 'linear-gradient(to left, #213063, #55c7e0)',
        'bg-ministrant':"url('../../img/Animation/ministrant/background.jpg')",
        'bg-sm-ministrant':"url('../../img/Animation/ministrant/09-bg.png')",
        "bg-carbody" :"url('../../img/ten-ten/bg.png')",

         },
    },
  },
  plugins: [],
}

