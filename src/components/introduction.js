Vue.component('app-introduction', {
    props: {
        info: Object
    },
    template: `
    <div class="introduction">
        <span class="title">{{ info.firstname }} {{ info.lastname }}</span>
        <div class="description" v-html="info.description"></div>
    </div>
    `
});