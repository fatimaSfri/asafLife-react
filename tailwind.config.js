/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
       "back_large_login1":"url('./src/assets/img/login/legalL.jpg')",
        "back_medium_login1":"url('./src/assets/img/login/legalM.jpg')",
        "back_small_login1":"url('./img/login/legalL.jpg')",
        "back-Login2":"url('./src/assets/img/login/shrineS.jpg')",
        "bg-car":"url('./src/assets/img/Animation/car/01-bg.jpg')",
        "bg-sm-car":"url('./src/assets/img/Animation/car/sm-car.jpg')",
        "bg-legal": "url('./src/assets/img/Animation/legal/bg.jpg')",
        "bg-sm-legal": "url('./src/assets/img/Animation/legal/sm-legal.jpg')",
        "bg-psychology": "url('./src/assets/img/Animation/psychology/04-bg.jpg')",
        "bg-sm-psychology": "url('./src/assets/img/Animation/psychology/sm-psy.jpg')",
        "bg-children": "url('./src/assets/img/Animation/children/03-bg.jpg')",
        "bg-sm-children": "url('./src/assets/img/Animation/children/sm-child.jpg')",
        "bg-treatment": "url('./src/assets/img/Animation/treatment/02-bg.jpg')",
        "bg-sm-treatment": "url('./src/assets/img/Animation/treatment/sm-treatment.jpg')",
        'custom-gradient': 'linear-gradient(to left, #213063, #55c7e0)'
         },
    },
  },
  plugins: [],
}

