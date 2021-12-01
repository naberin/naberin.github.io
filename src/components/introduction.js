Vue.component('app-introduction', {
    props: {
        info: Object
    },
    template: `
    <div class="introduction">
        <div class="title">{{ info.firstname }} {{ info.lastname }}</div>
        <div class="description" v-html="info.description"></div>
    </div>
    `
});