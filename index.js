Vue.use(VueRouter);

const routes = [
   { path: '/', component: Home },
]

const router = new VueRouter({
   mode: 'history',
   routes
})

var app = new Vue({
   data: {
      info: {
         firstname:        "Norman", 
         lastname:         "Aberin",
         handle:           "naberin"
      }
   },
   router
}).$mount("#app")

