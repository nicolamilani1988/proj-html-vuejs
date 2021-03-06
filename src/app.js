function init(){
    new Vue ({
        el: "#home-page",

        data:{
            scrollPosition: null, //change header color on scroll
            
            activeMenu: null, //header-dropdpown menu
            menuItems:[ // links of header ddown menu
                {
                    name:'LANDING',
                    columns:[
                        [
                            'SAAS','CLASSIC SAAS','AGENCY','APPLICATION','CLASSIC APPLICATION','STUDIO','MARKETING','ENTERPRISE','SERVICE','PAYMENTS','CRYPTOCURRENCY'
                        ],
                        [
                            'IT SOLUTIONS','BUSINESS','MODERN BUSINESSES','CORPORATE BUSINESS','HOTEL','CONSTRUCTION','REAL ESTATE','DEVELOPER','SEO AGENCY','HOSPITAL','HOSTING & DOMAIN'
                        ],
                        [
                            'FINANCE','VIDEO CONFERENCE','IT SOLUTION TWO','FREELANCE','BLOCKCHAIN','CRYPTOCURRENCY TWO','INTEGRATION','TASK MANAGEMENT','EMAIL INBOX','TRAVEL','BLOG'
                        ],
                        [
                            'LANDING ONE','LANDING TWO','LANDING THREE','LANDING FOUR','SHOP','INSURANCE','ONLINE LEARNING','PERSONAL','COWORKING','COURSE','FORUM'
                        ],
                        [
                            'EVENT','PRODUCT','PORTFOLIO','JOB','SOCIAL MEDIA','DIGITAL AGENCY','CAR RIDE','CUSTOMER','SOFTWARE','E-BOOK','SAAS'
                        ]
                    ]
                },
                {
                    name:'PAGES',
                    columns:[
                        [
                            'COMPANY','ACCOUNT','SHOP','HELP CENTER','FORUMS','EMAIL-TEMPLATE','CAREERS','BLOG','CASE-STUDY','PORTFOLIO','AUTH-PAGES','UTILITY','SPECIAL','CONTACTS'
                        ],
                    ]
                },
                {
                    name:'DOCS',
                    columns:[
                        [
                            'DOCUMENTATION','CHANGELOG','COMPONENTS','WIDGET'
                        ],
                    ]
                },


            ],

            isSearchbarVisible: false, //show searchbar

            isModalVisible: false, // login/register form
            
            partners:['amazon','google','lenovo','paypal','shopify','spotify'], //partners logo

            cards:[ // key features cards
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

            startItems:[ //host providers
                {
                    name: 'npm',
                    ready: true,
                    features:[
                        {
                            symbol: '$',
                            technology: 'npm install'
                        },
                        {
                            symbol: '-g',
                            technology: 'claps.js'
                        },
                    ],            
                },
                {
                    name: 'nuget',
                    ready: false,           
                },
                {
                    name: 'spm',
                    ready: false,           
                },
                {
                    name: 'github',
                    ready: false,           
                },
            ],
            activeStartItem : 'npm', //clicked provider

            strengths:['Digital Marketing Solutions for Tomorrow','Our Talented & Experienced Marketing Agency','Create your own skin to match your brand'], //strength points

            memberships:[ //kinds of membership and fare
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

            socials:['fab fa-facebook-f','fab fa-instagram','fab fa-twitter','fab fa-linkedin-in'], //social-network icons

            utilities: [ //footer helpful and info links
                {
                    title: 'Company',
                    links: ['About Us','Services','Team','Pricing','Project','Careers','Blog','Login'],
                    width: 'small',
                },
                {
                    title: 'Useful Links',
                    links: ['Terms of Services','Privacy Policy','Documentation','Changelog','Components'],
                    width: 'medium',
                },
            ],

            acceptedPayments: ['american-ex','discover','master-card','paypal','visa'],
        }, 

        methods:{
            getImg: function(logo, format){ //select image
                const path = 'img/'+logo+'.' + format;
                return path;
            },
            updateScroll() { //change header color on scroll
                this.scrollPosition = window.scrollY;
            },
            showMenu: function(index){  //show dropdown-menu
                this.activeMenu = index;
            },
            selectItem: function(item){ //change active item in Quickstart section
                this.activeStartItem = item['name'];
            },
            scrollTop: function(){ //scroll to Top page
                let clock = setInterval(() =>{
                    if(window.pageYOffset === 0){
                        clearInterval(clock);
                    }
                    window.scrollTo(0, window.pageYOffset - 50);
                }, 20)            
            },
        },

        mounted() {
            window.addEventListener('scroll', this.updateScroll);
        }
            
    })   
}

document.addEventListener('DOMContentLoaded',init);
