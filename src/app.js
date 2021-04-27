function init(){
    new Vue ({
        el: "#home-page",

        data:{
            menuItems:['LANDING','PAGES','DOCS'],
        }, 
    })   
}

document.addEventListener('DOMContentLoaded',init);
