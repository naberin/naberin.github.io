Vue.component('app-header', {
    props: {
        title: String,
    },
    template: `
    <header class="app-header flex flex-row flex-justify-space-between container">
        <div class="title app-button"><router-link to="/">{{title}}</router-link></div>
        <app-navigation></app-navigation>
    </header>
    `
});