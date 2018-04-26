"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","c6a9c346adfd306d95835e7e08d8cb2c"],["/static/css/main.abaf7741.css","abaf7741b909ebb05fa0a9cb1db0a40e"],["/static/js/0.2c38516b.chunk.js","636732295503120ab60d37a7c608d196"],["/static/js/1.bdb7e8bc.chunk.js","995a2466f0be3720322bb53e3cf828e6"],["/static/js/10.8ce66c72.chunk.js","fcf7b6ad9e44a0f8309774fc873159ca"],["/static/js/2.2b5a66cc.chunk.js","4218a2cd399184c585db5bb261efedd7"],["/static/js/3.e848063d.chunk.js","3d55e441495be6930a9f3d22c738d3b8"],["/static/js/4.a6ad86f9.chunk.js","6e088d12d4ccc0684f54928626cd6d7e"],["/static/js/5.a0996239.chunk.js","be84293c7006930204c30720458b4ca4"],["/static/js/6.2cdc2392.chunk.js","ae5936c37d3ca98b47098218dddf3923"],["/static/js/7.eeea0721.chunk.js","a6fff13e1f2c5c82cfe8c943c12a56aa"],["/static/js/8.1c26cc27.chunk.js","8d8c0149b3eb3b3de8e1b5b29ff905bc"],["/static/js/9.866c0264.chunk.js","dfad289bf576831663de86d328d35056"],["/static/js/main.cbc56c42.js","85f3d0d88adf742d2111993e8e9d1e78"],["/static/media/GitterBig.2e5bfd67.svg","2e5bfd677ab165830462e9aa22f600de"],["/static/media/benefit.eb895651.png","eb895651de61cf3974354c8f4e25afb5"],["/static/media/contact_success.c3d173e6.png","c3d173e674eb73a6ba8069928e9f2fc6"],["/static/media/en.9f6d864d.png","9f6d864d314e7454f0d6d1ff922a1048"],["/static/media/home4.ef25f653.png","ef25f6531c63c628f419997ca930ec18"],["/static/media/home5.ae9d63e3.png","ae9d63e359dd74dde6f9aa0b2d310d6f"],["/static/media/okex.37933c90.png","37933c90d33332f37b5697eac3942c76"],["/static/media/overview.918d3832.png","918d38328b41c28f02eedf59736e45f9"],["/static/media/ripioCredit.7427f332.png","7427f3327b8f4266debfd79e42ce2a59"],["/static/media/step2.cc569461.png","cc56946148fa06d28db0bb1c6cc40143"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,n){var a=new URL(e);return n&&a.pathname.match(n)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],n=new URL(t,self.location),a=createCacheKey(n,hashParamName,c,/\.\w{8}\./);return[n.toString(),a]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var n=new Request(c,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});