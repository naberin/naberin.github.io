Vue.component('app-social-links', {
    data() {
        return {
            links: [
                {display: "GitHub", dest: "https://github.com/naberin"},
                {display: "LinkedIn", dest: "https://www.linkedin.com/in/norman-aberin/"},
                {display: "Twitter", dest: "https://twitter.com/norman_aberin"}
            ]
        }
    },
    template: `
    <div class="flex flex-row links-listing">
        <a class="link" v-for="link in links" :href="link.dest" target="_blank">{{link.display}}</a>
    </div>
    `
});