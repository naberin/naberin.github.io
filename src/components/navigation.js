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
                {id: 3, path: null, name: "resume", icon: ``, to: "https://drive.google.com/file/d/1h3RAfZbvLuMhZs11tN_m4tfJ-nxZSsSe/view?usp=sharing"}
            ]
        }
    },
    template:
    `<nav class="flex flex-row flex-justify-center app-navigation">
        <span v-for="link in links" :key="link.id" :class="['flex flex-row link', isCurrent(link.name)]">
            <router-link v-if="link.path" :to="link.to">
                <span class="title" >{{link.name}}</span>
            </router-link>
            <a v-else :href="link.to" :title="link.name" target="_blank">{{link.name}}</a>
            </span>
    </nav>
    `
});