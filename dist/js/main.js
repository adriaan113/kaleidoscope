"use strict";function animateLayer(e,a,n){var t=document.querySelectorAll(e);for(let r=0;r<t.length;r++)for(let e=0;e<t[r].children.length;e++)gsap.to(t[r].children[e],{rotation:a,duration:n,repeat:-1})}animateLayer(".inner-layer-1",360,5),animateLayer(".inner-layer-2",-360,3),animateLayer(".inner-layer-3",360,6),animateLayer(".inner-grid",-360,10);