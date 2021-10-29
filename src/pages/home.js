let Home = Vue.component('Home', {
    props: {
        info: Object
    },
    template: `
    <section class="page app-home">
        <app-hero :info="info"></app-hero>
        <app-about :info="info"></app-about>
        <div class="contact-links flex flex-row flex-justify-center">
            <a href="https://linkedin.com/in/norman-aberin" target="_blank" title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
            <a href="https://github.com/naberin" target="_blank" title="GitHub"><i class="fab fa-github"></i></a>
        </div>
    </section>
    `
});