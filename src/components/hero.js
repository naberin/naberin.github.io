Vue.component('app-hero', {
    props: {
        info: Object
    },
    template: `
    <div class="app-hero">
        <cover class="flex flex-col">
            <container class="padding-sm-top">
              
                <app-header :info="info" :title="info.handle"/>
            </container>
            <div class="wrapper max-height flex flex-col flex-justify-center">
                <container>
                    <app-introduction :info="info" class="flex-grow-9 flex flex-col flex-justify-center"/>

                </container>
                
                <app-social-links/>
               
            </div>
        </cover>
    </div>
    `
});