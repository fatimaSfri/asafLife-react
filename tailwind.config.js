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
        "back-gradint-yellow":"linear-gradient(to left, #ffcd47 0%, #ffe178 70%, #ffe178 100%)",
        "back-gradint-blue":"linear-gradient(to left,#0065cc  0%, #00b4ff  70%, #00b4ff 100%)",
        "back-gradint-dark-skinned":"linear-gradient(to left,#49c7ff   0.55%,#002974  50% , #002974 90% , #002974 70% )",
        "bg-car":"url('./img/Animation/bg.png')",
        "bg-sm-car":"url('./img/Animation/sm-bg.png')"

        },
    },
  },
  plugins: [],
}

