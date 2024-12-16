/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
       "back_large_login1":"url('./img/login/legalL.jpg')",
        "back_medium_login1":"url('../../img/login/legalM.jpg')",
        "back_small_login1":"url('../../img/login/legalL.jpg')",
        "back-Login2":"url('../../img/login/shrineS.jpg')",
        "bg-car":"url('../../img/Animation/car/01-bg.jpg')",
        "bg-sm-car":"url('../../img/Animation/car/sm-car.jpg')",
        "bg-legal": "url('../../img/Animation/legal/bg.jpg')",
        "bg-sm-legal": "url('../../img/Animation/legal/sm-legal.jpg')",
        "bg-psychology": "url('../../img/Animation/psychology/04-bg.jpg')",
        "bg-sm-psychology": "url('../../img/Animation/psychology/sm-psy.jpg')",
        "bg-children": "url('../../img/Animation/children/03-bg.jpg')",
        "bg-sm-children": "url('../../img/Animation/children/sm-child.jpg')",
        "bg-treatment": "url('../../img/Animation/treatment/02-bg.jpg')",
        "bg-sm-treatment": "url('../../img/Animation/treatment/sm-treatment.jpg')",
        'custom-gradient': 'linear-gradient(to left, #213063, #55c7e0)',
         'bg-mobile':"url('../../img/Animation/mobile/07-bg.jpg')",
         'bg-sm-mobile':"url('../../img/Animation/mobile/sm-phone.jpg')",
         'bg-animal':"url('../../img/Animation/animal/06-bg.jpg')",
         'bg-sm-animal':"url('../../img/Animation/animal/sm-pet.jpg')",
         'bg-life':"url('../../img/Animation/life/08-bg.jpg')",
         'bg-sm-life':"url('../../img/Animation/life/sm-life.jpg')",
         'bg-ministrant':"url('../../img/Animation/ministrant/background.jpg')",
         'bg-sm-ministrant':"url('../../img/Animation/ministrant/09-bg.png')",
          "bg-carbody" :"url('../../img/ten-ten/bg.png')",
         },
    },
  },
  plugins: [],
}

