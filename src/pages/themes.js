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
                {name:"amethyst", value:"amethyst-theme", color: "#8256f3"},
                {name: "sundown", value: "sundown-theme", color: ["#6b5040", "#1b3854"]}
            ]
        }
    },
    methods: {
        setTheme(selection) {
            this.$emit('set-theme', selection)
        },
        setBackgroundColor(color) {
            if (Array.isArray(color)) {
                return {background: `linear-gradient(to bottom right, ${color[0]}, ${color[1]})`}
            }
            return {backgroundColor: color}
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
                    <div :style='[setBackgroundColor(the.color)]' class="color"></div>
                    <div class="name">{{the.name}} <span v-if="the.value === theme">(current)</span></div>
                </div>
            </div>
        </div>
    </section>
    `
});