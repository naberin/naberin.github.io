let Themes = Vue.component('Themes', {
    props: {
        info: Object,
        theme: String
    },
    data() {

        return {
            selection: '',
            themes: [
                {name:"polar-bear", value:"polar-bear-theme", color: "#ffffff"},
                {name:"cavendish", value:"cavendish-theme", color: "#dd9603"},
                {name:"amethyst", value:"amethyst-theme", color: "#8256f3"}
            ]
        }
    },
    methods: {
        setTheme(selection) {
            this.$emit('set-theme', selection)
        }
    },
    template: `
    <section class="page app-themes">
        <div class="container flex flex-col">
            <h1 class="center title">Themes</h1>
            <p class="center message">
                There are currently <span class="theme-count">{{ themes.length }}</span> available theme(s). <br/>
                Click one of the options below to change the theme.
            </p>
            <div class="themes-list">
                <div v-for="the in themes" class="theme flex flex-row" @click="setTheme(the.value)">
                    <div :style='{backgroundColor: the.color}' class="color"></div>
                    <div class="name">{{the.name}} <span v-if="the.value === theme">(current)</span></div>
                </div>
            </div>
        </div>
    </section>
    `
});