Vue.use(VueRouter);

const routes = [
   { path: '/', component: Home },
   { path: '/about', component: Home },
   { path: '/projects', component: Home },
   { path: '/skills', component: Home },
   { path: '/themes', component: Home }
]

const router = new VueRouter({
   routes
})

var app = new Vue({
   data: {
      theme: "cavendish-theme",
      info: {
         firstname:        "Norman", 
         lastname:         "Aberin",
         handle:           "naberin",
         jobTitle:         "Full Stack Software Engineer",
         company:          "Oracle",
         description:      `
            I am a Software Engineer with a strong interest and experience in <strong>Cloud Native development.</strong> 
            Currently I aim to further my knowledge and hone my full-stack skills. I also like to focus on and 
            learn from people about software design, reliability and user-experience. I am versatile, 
            open-minded and a good team player.`,
         hobbies:          `A few of my interests are Table Tennis, digital art, video games and hiking.`
      }
   },
   router
}).$mount("#app")

