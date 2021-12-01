Vue.use(VueRouter);

const routes = [
   { path: '/', component: Home, name: 'home'},
   { path: '/projects', component: Projects, name: 'projects'},
   { path: '/about', component: Skills, name: 'about'}
]

const router = new VueRouter({
   routes
})

var app = new Vue({
   data: {
      theme: "cavendish-theme",
      projects: [],
      info: {
         firstname:        "norman",
         lastname:         "aberin",
         handle:           "naberin",
         jobTitle:         "Full Stack Software Engineer",
         company:          "Oracle",
         description:      `
            a versatile and driven Software Engineer with a strong interest and experience in <strong>cloud native development.</strong>
        `,
         skills:           {
            "Languages":   ["Java", "Python", "Javascript", "HTML", "CSS"],
            "Frontend":    ["Vue.js", "React.js"],
            "Backend & DB":     ["Node.js", "Flask", "Oracle SQL", "PL/SQL"],
            "DevOps":      ["Terraform", "Github Actions", "Docker"],
            "Cloud":       ["Oracle Cloud", "Oracle APEX"]
         },
      }
   },
   methods: {
      setTheme: function(theme) {
         this.theme = theme;
      },
   },
   router
}).$mount("#app")

