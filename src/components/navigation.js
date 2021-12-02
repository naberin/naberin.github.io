Vue.component('app-navigation', {
    methods: {
        isCurrent(path) {
            return this.$route.name === path ? "current": "";
        }
    },
    data(){
        return {
            links: [
                {id: 1, path: 'about', name: "about", icon: ``, to: "/about"},
                {id: 2, path: 'projects', name: "projects", icon: ``, to: "/projects"},
                {id: 3, path: 'resume', name: "resume", icon: ``, to: "/themes"}
            ]
        }
    },
    template:
    `<nav class="flex flex-row flex-justify-center app-navigation">
        <router-link v-for="link in links" :key="link.id" :class="['flex flex-row link', isCurrent(link.name)]" :to="link.to">
            <span class="title" >{{link.name}}</span>
        </router-link>
    </nav>
    `
});