Vue.component('app-navigation', {
    methods: {
        isCurrent(path) {
            return this.$route.name === path;
        }
    },
    data(){
        return {
            links: [
                {id: 1, path: 'home', name: "Home", icon: `<i class="fas fa-home"></i>`, to: "/"},
                {id: 2, path: 'projects', name: "My Projects", icon: `<i class="fas fa-shapes"></i>`, to: "/projects"},
                {id: 3, path: 'skills', name: "My Skills", icon: `<i class="fab fa-js-square"></i>`, to: "/skills"},
                {id: 4, path: 'interests', name: "Interests", icon: `<i class="fas fa-star"></i>`, to: "/interests"},
                {id: 5, path: 'themes', name: "Themes", icon: `<i class="fas fa-palette"></i>`, to: "/themes"}
            ]
        }
    },
    template:
    `<nav class="flex flex-row flex-justify-center app-navigation">
        <router-link v-for="link in links" :key="link.id" class="flex flex-row app-button" :to="link.to">
            <span class="icon" v-html="link.icon" :title="link.name"></span>
            <span class="title" v-if="isCurrent(link.path)">{{link.name}}</span>
        </router-link>
    </nav>
    `
});