Vue.component('app-about', {
    props: {
        info: Object
    },
    template: `
    <div class="app-about">
        <div class="summary container">
            <div class="flex flex-col">
                <span v-html="info.description"></span>
                <span class="hobbies">{{ info.hobbies }}</span>
            </div>
        </div>
    </div>
    `
});