Vue.component('app-header', {
    props: {
        title: String,
    },
    data() {
        return {
            isToggled: false,
            links: [
                {key: 1, to: "/about", value: "About"},
                {key: 2, to: "/projects", value: "Projects"},
                {key: 3, to: "/skills", value: "Skills"},
                {key: 4, to: "/themes", value: "Themes"}
            ]
        }
    },
    computed: {
    },
    methods: {
        toggleMenu: function() {
            this.isToggled = !this.isToggled;
        }
    },
    template: `
    <header class="app-header flex flex-row flexible flex-justify-space-between">
        <div class="title flex-justify-space-between">
            <div class="content">{{title}}</div>
            <div :class="['nav-menu-toggle sm-viewport-only']">
                <i class="fa fa-bars" v-on:click="toggleMenu"></i>
            </div>
        </div>
        <div class="links">
            <ul class="flex flex-row flexible">
                <router-link v-for="link in links" class="link-item" :key="link.key" :to="link.to">{{ link.value }}</router-link>
            </ul>
        </div>

    </header>
    `
});