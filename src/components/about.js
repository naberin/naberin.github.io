Vue.component('app-about', {
    props: {
        info: Object
    },
    template: `
    <div class="app-about">
        <div class="summary container">
            <div class="">
                <span v-html="info.description"></span>
                           
            </div>
        </div>
    </div>
    `
});