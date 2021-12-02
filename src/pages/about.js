let About = Vue.component('About', {
    props: {
        info: Object
    },
    template: `
    <section class="page app-about">  
        <container class="padding-sm-top">
            <app-header :info="info" :title="info.handle"/>
        </container>
    </section>
    `
});