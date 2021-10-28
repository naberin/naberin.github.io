let Projects = Vue.component('Projects', {
    props: {
        projects: Array
    },
    data() {
        return {
            projectName: "",
            projectDetails: ""
        }
    },
    },
    template: `
    <section class="page app-projects">
        <div class="container">
            <mac-window>
                <div class="list-app flex flex-row flexible">
                    <div class="projects-form flex-grow-4 flex flex-col ">
                        <div class="message flex flex-col centered">
                            <span class="title"><i class="fas fa-shapes"></i> Project List</span>
                            <span class="description">The list may be currently <strong>unavailable</strong>. Temporarily, here is a form and list for creating and managing Project entries.</span>
                        </div>
                        <div class="form-controls flex flex-col centered">
                            <input placeholder="Project Name" v-model="projectName">
                            <textarea placeholder="Details" v-model="projectDetails"></textarea>
                            <button class="button add"><i class="fas fa-plus"></i> Add</button>
                        </div>
                        
                    </div>  
                    <div class="flex-grow-6"></div>
                </div>
            </mac-window>
        </div>
    </section>
    `
});