let Home = Vue.component('Home', {
    props: {
        info: Object
    },
    template: `
    <section class="page app-home flex flex-col">
        <section class="app-hero">
            <div class="cover">
                <div class="container flex flex-col">
                    <app-hero :info="info" class="flex-grow-4"> </app-hero>
                </div>
            </div>
        
        </section>
        <section class="summary">
        
        </section>
<!--        <div class="flex-grow-3">        -->

<!--            <app-about :info="info" class="flex-grow-2"></app-about>-->
<!--        </div>-->

<!--        <div class="flex flex-col flex-justify-end flex-grow-7">-->
<!--            <div class="contact-links flex flex-row flex-justify-center">-->
<!--                <a href="https://linkedin.com/in/norman-aberin" target="_blank" title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>-->
<!--                <a href="https://github.com/naberin" target="_blank" title="GitHub"><i class="fab fa-github"></i></a>-->
<!--            </div>-->
<!--        </div>-->


    </section>
    `
});