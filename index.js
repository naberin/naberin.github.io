Vue.use(VueRouter);

const routes = [
   { path: '/', component: Home, name: 'home'},
   { path: '/interests', component: Interests, name: 'interests'},
   { path: '/projects', component: Projects, name: 'projects'},
   { path: '/skills', component: Skills, name: 'skills'},
   { path: '/themes', component: Themes, name: 'themes'}
]

const router = new VueRouter({
   routes
})

var app = new Vue({
   data: {
      theme: "cavendish-theme",
      projects: [],
      info: {
         firstname:        "Norman", 
         lastname:         "Aberin",
         handle:           "naberin",
         jobTitle:         "Full Stack Software Engineer",
         company:          "Oracle",
         description:      `
            I am a Software Engineer with a strong interest and experience in <strong>cloud native development.</strong> 
            In my projects, I focus and seek to learn more about good software design, reliability and user-experience. 
            I am versatile, open-minded and a good team player.`,
         skills:           {
            "Languages":   [],
            "Frontend":    [],
            "Backend":     [],
            "DevOps":      [],
            "Cloud":       [],
            "Other":       []
         },
      }
   },
   methods: {
      setTheme: function(theme) {
         this.theme = theme;
      },
      addProject: function(project) {
         this.projects.push(project);
      }
   },
   router
}).$mount("#app")

