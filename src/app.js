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
            strengths:['Digital Marketing Solutions for Tomorrow','Our Talented & Experienced Marketing Agency','Create your own skin to match your brand'],
            memberships:[
                {
                    title:'Basic',
                    rate: '$9.00',
                    period: 'Per Month',
                    details: 'All the basics for businesses that are just getting started.',
                    bulletPoints: ['Full Access','Enhanced Security', 'Source File', '1 Domain Free','Enhanced Security'],
                },
                {
                    title:'Business',
                    rate: '$39.00',
                    period: 'Per Month',
                    details: 'Better for growing businesses that want more customers.',
                    bulletPoints: ['Full Access','Enhanced Security', 'Source File', '1 Domain Free','Enhanced Security'],
                },
                {
                    title:'Enterprise',
                    rate: '$79.00',
                    period: 'Per Month',
                    details: 'Advanced features for pros who need more customization.',
                    bulletPoints: ['Full Access','Enhanced Security', 'Source File', '1 Domain Free','Enhanced Security'],
                },
            ],
            socials:['fab fa-facebook-f','fab fa-instagram','fab fa-twitter','fab fa-linkedin-in'],
            
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
