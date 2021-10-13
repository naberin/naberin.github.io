Vue.use(VueRouter);

const routes = [
   { path: '/', component: Home },
   { path: '/about', component: Home },
   { path: '/projects', component: Home },
   { path: '/skills', component: Skills },
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
            In my projects, I focus and seek to learn more about good software design, reliability and user-experience. 
            I am versatile, open-minded and a good team player.`,
         skills:           {
            "Languages":   [],
            "Frontend":    [],
            "Backend":     [],
            "DevOps":      [],
            "Cloud":       [],
            "Other":       []
         }
      }
   },
   router
}).$mount("#app")

