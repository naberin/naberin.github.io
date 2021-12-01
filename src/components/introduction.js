Vue.component('app-hero', {
    props: {
        info: Object
    },
    template: `
    <div class="introduction flex flex-col flex-justify-center">
        <div class="title">{{info.firstname}} {{info.lastname}}</div>
        <span v-html="info.description"></span>
    </div>
    `
});