let Home = Vue.component('Home', {
    props: {
        info: Object
    },
    template: `
    <section class="page app-home flex flex-col">
        <app-hero :info="info"></app-hero>
    </section>
    `
});