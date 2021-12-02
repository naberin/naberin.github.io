let About = Vue.component('About', {
    props: {
        info: Object
    },
    template: `
    <section class="page app-about">    

        <div class="about-container">
            <div class="container flex flex-row flexible">
                <div v-for="(skills, category) in info.skills" class="flex flex-col flexible flex-grow-1">
                    <span class="marker centered"></span>
                    <div class="category center">{{category}}</div>
                    <ul class="flex flex-col flexible">
                        <li v-for="skill in skills" class="skill center">{{skill}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    
    
    </section>
    `
});