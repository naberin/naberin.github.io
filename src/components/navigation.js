Vue.component('app-navigation', {
    data(){
        return {
            links: [
                {id: 1, name: "My Projects", icon: `<i class="fas fa-shapes"></i>`, to: "/projects"},
                {id: 2, name: "My Skills", icon: `<i class="fab fa-js-square"></i>`, to: "/skills"},
                {id: 3, name: "Themes", icon: `<i class="fas fa-palette"></i>`, to: "/themes"}
            ]
        }
    },
    template:
    `<nav class="flex flex-row flex-justify-center app-navigation">
        <router-link v-for="link in links" class="flex flex-col app-button" :to="link.to">
            <span class="icon" v-html="link.icon"></span>
            <span class="title">{{link.name}}</span>
        </router-link>
    </nav>
    `
});