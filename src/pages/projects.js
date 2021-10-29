let Projects = Vue.component('Projects', {
    props: {
        projects: Array
    },
    data() {
        return {
            selected: null,
        }
    },
    mounted() {
    },
    template: `
    <section class="page app-projects">
        <div class="container">
            <mac-window>
            
                <div class="unavailable center">
                                The list of projects may be currently <strong>unavailable.</strong>
                </div>

            
            </mac-window>
        </div>
    </section>
    `
});