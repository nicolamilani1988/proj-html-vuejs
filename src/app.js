function init(){
    new Vue ({
        el: "#home-page",

        data:{
            scrollPosition: null,
            scrollpx: 0,
            
            menuItems:[
                {
                    name:'LANDING',
                    class: 'multiple-columns',
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
                    class: 'single-column',
                    columns:[
                        [
                            'COMPANY','ACCOUNT','SHOP','HELP CENTER','FORUMS','EMAIL-TEMPLATE','CAREERS','BLOG','CASE-STUDY','PORTFOLIO','AUTH-PAGES','UTILITY','SPECIAL','CONTACTS'
                        ],
                    ]
                },
                {
                    name:'DOCS',
                    class: 'single-column',
                    columns:[
                        [
                            'DOCUMENTATION','CHANGELOG','COMPONENTS','WIDGET'
                        ],
                    ]
                },


            ],
            activeMenu: null,

            isSearchbarVisible: false,
            
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
            startItems:[
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
            activeStartItem : 'npm',

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

            utilities: [
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
            getImg: function(logo, format){
                const path = 'img/'+logo+'.' + format;
                return path;
            },
            updateScroll() {
                this.scrollPosition = window.scrollY;
            },
            selectItem: function(item){
                this.activeStartItem = item['name'];
            },
            scrollTop: function(){
                let clock = setInterval(() =>{
                    if(window.pageYOffset === 0){
                        clearInterval(clock);
                    }
                    window.scrollTo(0, window.pageYOffset - 50);
                }, 20)            
            },
            showMenu: function(index){
                this.activeMenu = index;
            },
        },
        mounted() {
            window.addEventListener('scroll', this.updateScroll);
        }
          
            
    })   
}

document.addEventListener('DOMContentLoaded',init);
