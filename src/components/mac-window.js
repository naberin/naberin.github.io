Vue.component('mac-window', {
    props: {
    },
    template: `
    <div class="window flex flex-col">
        <div class="titlebar flex flex-row flex-justify-start">
            <div id="close" class="button"></div>
            <div id="minimize" class="button"></div>
            <div id="fullscreen" class="button"></div>
        </div>
        <div class="content">
            <slot></slot>
        </div>
    </div>
    `
});