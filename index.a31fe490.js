!function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(n,e,t){"use strict";t.r(e);t(1);function r(n,e){var t;if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(t=function(n,e){if(!n)return;if("string"==typeof n)return o(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return o(n,e)}(n))||e&&n&&"number"==typeof n.length){t&&(n=t);var r=0,c=function(){};return{s:c,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){t=n[Symbol.iterator]()},n:function(){var n=t.next();return a=n.done,n},e:function(n){s=!0,i=n},f:function(){try{a||null==t.return||t.return()}finally{if(s)throw i}}}}function o(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}fetch("https://api.github.com/users/Wirus006/repos?sort=created").then((function(n){return n.json()})).then((function(n){var e,t=r(n);try{for(t.s();!(e=t.n()).done;){var o=e.value,c=o.name,i=o.description,a=o.html_url,s=o.homepage,u=document.querySelector(".projects__list--js");null==i&&(i="Brak opisu.");var l='\n            <li class="projects__item">\n                <img\n                    class="projects__icon"\n                    src="public/project-icon.svg"\n                />\n                <div class="projects__grid">\n                    <p class="projects__indention">project:</p>\n                    <p class="projects__repo projects__repo--name">\n                        '.concat(c,'\n                    </p>\n                    <p class="projects__indention">description:</p>\n                    <p class="projects__repo projects__repo--describe">\n                        ').concat(i,'\n                    </p>\n                    <p class="projects__indention">demo:</p>\n                    <p class="projects__repo">\n                        <a\n                            class="projects__link"\n                            href="').concat(a,'"\n                            >&lt;see here&gt;</a\n                        >\n                    </p>\n                    <p class="projects__indention">github:</p>\n                    <p class="projects__repo">\n                        <a\n                            class="projects__link"\n                            href="').concat(s,'"\n                            >&lt;source code&gt;</a\n                        >\n                    </p>\n                </div>\n            </li>');u.innerHTML+=l}}catch(n){t.e(n)}finally{t.f()}})).catch((function(n){console.log("nie udało się pobrać danych: ".concat(n))}))},function(n,e,t){}]);