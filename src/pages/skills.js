let Skills = Vue.component('Skills', {
    props: {
        info: Object
    },
    template: `
    <section class="page app-skills">    

        <div class="skills-container">
            <div class="container flex flex-row">
                <div v-for="(skills, category) in info.skills" class="flex flex-col col-2">
                    <span class="marker centered"></span>
                    <div class="category center">{{category}}</div>
                    <ul class="flex flex-col">
                        <li v-for="skill in skills" class="skill center">{{skill}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    
    
    </section>
    `
});