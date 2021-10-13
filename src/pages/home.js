let Home = Vue.component('Home', {
    props: {
        info: Object
    },
    data() {
      return {

          links: [
              {id: 1, to: "/projects", name: "View Projects"},
              {id: 2, to: "/skills", name: "View Skills"},
              {id: 3, to: "/themes", name: "View Themes"}
          ]
      }
    },
    template: `
    <section class="page">
        <app-hero :info="info"></app-hero>
        <app-about :info="info"></app-about>
        
        <div class="flex flex-row flexible flex-justify-center buttons-listing container">
            <router-link v-for="link in links" :to="link.to" :key="link.id" class="app-button">{{link.name}}</router-link>
        </div>
    </section>
    `
});