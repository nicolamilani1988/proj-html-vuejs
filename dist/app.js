/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

function init() {
  new Vue({
    el: "#home-page",
    data: {
      scrollPosition: null,
      //change header color on scroll
      activeMenu: null,
      //header-dropdpown menu
      menuItems: [// links of header ddown menu
      {
        name: 'LANDING',
        columns: [['SAAS', 'CLASSIC SAAS', 'AGENCY', 'APPLICATION', 'CLASSIC APPLICATION', 'STUDIO', 'MARKETING', 'ENTERPRISE', 'SERVICE', 'PAYMENTS', 'CRYPTOCURRENCY'], ['IT SOLUTIONS', 'BUSINESS', 'MODERN BUSINESSES', 'CORPORATE BUSINESS', 'HOTEL', 'CONSTRUCTION', 'REAL ESTATE', 'DEVELOPER', 'SEO AGENCY', 'HOSPITAL', 'HOSTING & DOMAIN'], ['FINANCE', 'VIDEO CONFERENCE', 'IT SOLUTION TWO', 'FREELANCE', 'BLOCKCHAIN', 'CRYPTOCURRENCY TWO', 'INTEGRATION', 'TASK MANAGEMENT', 'EMAIL INBOX', 'TRAVEL', 'BLOG'], ['LANDING ONE', 'LANDING TWO', 'LANDING THREE', 'LANDING FOUR', 'SHOP', 'INSURANCE', 'ONLINE LEARNING', 'PERSONAL', 'COWORKING', 'COURSE', 'FORUM'], ['EVENT', 'PRODUCT', 'PORTFOLIO', 'JOB', 'SOCIAL MEDIA', 'DIGITAL AGENCY', 'CAR RIDE', 'CUSTOMER', 'SOFTWARE', 'E-BOOK', 'SAAS']]
      }, {
        name: 'PAGES',
        columns: [['COMPANY', 'ACCOUNT', 'SHOP', 'HELP CENTER', 'FORUMS', 'EMAIL-TEMPLATE', 'CAREERS', 'BLOG', 'CASE-STUDY', 'PORTFOLIO', 'AUTH-PAGES', 'UTILITY', 'SPECIAL', 'CONTACTS']]
      }, {
        name: 'DOCS',
        columns: [['DOCUMENTATION', 'CHANGELOG', 'COMPONENTS', 'WIDGET']]
      }],
      isSearchbarVisible: false,
      //show searchbar
      isModalVisible: false,
      // login/register form
      partners: ['amazon', 'google', 'lenovo', 'paypal', 'shopify', 'spotify'],
      //partners logo
      cards: [// key features cards
      {
        "class": "fas fa-layer-group",
        title: "Modular"
      }, {
        "class": "fas fa-tv",
        title: "Responsive"
      }, {
        "class": "fas fa-bullseye",
        title: "Customizable"
      }, {
        "class": "fas fa-expand-arrows-alt",
        title: "Scalable"
      }],
      startItems: [//host providers
      {
        name: 'npm',
        ready: true,
        features: [{
          symbol: '$',
          technology: 'npm install'
        }, {
          symbol: '-g',
          technology: 'claps.js'
        }]
      }, {
        name: 'nuget',
        ready: false
      }, {
        name: 'spm',
        ready: false
      }, {
        name: 'github',
        ready: false
      }],
      activeStartItem: 'npm',
      //clicked provider
      strengths: ['Digital Marketing Solutions for Tomorrow', 'Our Talented & Experienced Marketing Agency', 'Create your own skin to match your brand'],
      //strength points
      memberships: [//kinds of membership and fare
      {
        title: 'Basic',
        rate: '$9.00',
        period: 'Per Month',
        details: 'All the basics for businesses that are just getting started.',
        bulletPoints: ['Full Access', 'Enhanced Security', 'Source File', '1 Domain Free', 'Enhanced Security']
      }, {
        title: 'Business',
        rate: '$39.00',
        period: 'Per Month',
        details: 'Better for growing businesses that want more customers.',
        bulletPoints: ['Full Access', 'Enhanced Security', 'Source File', '1 Domain Free', 'Enhanced Security']
      }, {
        title: 'Enterprise',
        rate: '$79.00',
        period: 'Per Month',
        details: 'Advanced features for pros who need more customization.',
        bulletPoints: ['Full Access', 'Enhanced Security', 'Source File', '1 Domain Free', 'Enhanced Security']
      }],
      socials: ['fab fa-facebook-f', 'fab fa-instagram', 'fab fa-twitter', 'fab fa-linkedin-in'],
      //social-network icons
      utilities: [//footer helpful and info links
      {
        title: 'Company',
        links: ['About Us', 'Services', 'Team', 'Pricing', 'Project', 'Careers', 'Blog', 'Login'],
        width: 'small'
      }, {
        title: 'Useful Links',
        links: ['Terms of Services', 'Privacy Policy', 'Documentation', 'Changelog', 'Components'],
        width: 'medium'
      }],
      acceptedPayments: ['american-ex', 'discover', 'master-card', 'paypal', 'visa']
    },
    methods: {
      getImg: function getImg(logo, format) {
        //select image
        var path = 'img/' + logo + '.' + format;
        return path;
      },
      updateScroll: function updateScroll() {
        //change header color on scroll
        this.scrollPosition = window.scrollY;
      },
      showMenu: function showMenu(index) {
        //show dropdown-menu
        this.activeMenu = index;
      },
      selectItem: function selectItem(item) {
        //change active item in Quickstart section
        this.activeStartItem = item['name'];
      },
      scrollTop: function scrollTop() {
        //scroll to Top page
        var clock = setInterval(function () {
          if (window.pageYOffset === 0) {
            clearInterval(clock);
          }

          window.scrollTo(0, window.pageYOffset - 50);
        }, 20);
      }
    },
    mounted: function mounted() {
      window.addEventListener('scroll', this.updateScroll);
    }
  });
}

document.addEventListener('DOMContentLoaded', init);

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/app": 0,
/******/ 			"style": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkproj_html_vuejs"] = self["webpackChunkproj_html_vuejs"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["style"], () => (__webpack_require__("./src/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["style"], () => (__webpack_require__("./src/style.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;