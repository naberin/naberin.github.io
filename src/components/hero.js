Vue.component('app-hero', {
    props: {
        info: Object
    },
    template: `
    <div class="app-hero container">
        <div class="summary">
            <h1 class="center title"><span class="name">{{info.firstname}} {{info.lastname}}</span></h1>
            <aside class="current">
                <div class="flex-justify-center flex flex-row">
                    <span>{{info.jobTitle}}</span>
                </div>
            </aside>
        </div>
    </div>
    `
});