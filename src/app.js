function init(){
    new Vue ({
        el: "#home-page",

        data:{
            menuItems:['LANDING','PAGES','DOCS'],
            partners:['amazon','google','lenovo','paypal','shopify','spotify'],
        }, 
        methods:{
            getLogo: function(logo){
                const path = 'img/'+logo+'.svg';
                return path;
            },
        },
    })   
}

document.addEventListener('DOMContentLoaded',init);
