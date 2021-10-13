let Home = Vue.component('Home', {
    props: {
        info: Object
    },
    template: `
    <section class="page">
        <app-hero :info="info"></app-hero>
        <app-about :info="info"></app-about>
    </section>
    `
});