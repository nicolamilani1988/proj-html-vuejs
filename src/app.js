function init(){
    new Vue ({
        el: "#home-page",

        data:{
            menuItems:['LANDING','PAGES','DOCS'],
            partners:['amazon','google','lenovo','paypal','shopify','spotify'],
            cards:[
                {
                    class:"fas fa-layer-group",
                    title: "Modular",
                },
                {
                    class:"fas fa-tv",
                    title: "Responsive",
                },
                {
                    class:"fas fa-bullseye",
                    title: "Customizable",
                },
                {
                    class:"fas fa-expand-arrows-alt",
                    title: "Scalable",
                },
            ],
            startItems:['npm','nuget','spm','github'],
        }, 
        methods:{
            getLogo: function(logo){
                const path = 'img/'+logo+'.svg';
                return path;
            },
        }    
            
    })   
}

document.addEventListener('DOMContentLoaded',init);
