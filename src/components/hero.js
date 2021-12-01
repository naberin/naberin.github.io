Vue.component('app-hero', {
    props: {
        info: Object
    },
    template: `
    <div class="app-hero">
        <cover class="flex flex-col">
            <container>
                <app-header :info="info" :title="info.handle"/>
            </container>
        </cover>
    </div>
    `
});