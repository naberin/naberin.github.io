Vue.use(VueRouter);

const routes = [
   { path: '/', component: Home },
   { path: '/about', component: Home },
   { path: '/projects', component: Home },
   { path: '/skills', component: Home },
   { path: '/themes', component: Home }
]

const router = new VueRouter({
   mode: 'history',
   routes
})

var app = new Vue({
   data: {
      theme: "cavendish-theme",
      info: {
         firstname:        "Norman", 
         lastname:         "Aberin",
         handle:           "naberin"
      }
   },
   router
}).$mount("#app")

