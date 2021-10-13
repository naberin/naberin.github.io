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
         description:      "I am"
      }
   },
   router
}).$mount("#app")

