'use strict';

// const { default: gsap } = require("gsap/gsap-core");

//import { gsap } from "gsap";

function animateLayer(layer,deg,sec){
    const innerLayer1 = document.querySelectorAll(layer);

    for(let i=0;i<innerLayer1.length;i++){
        for(let n=0;n<innerLayer1[i].children.length;n++){
            gsap.to(innerLayer1[i].children[n],{
                rotation: deg, 
                duration: sec,
                repeat: -1
            });
        } 
    }
}

// animateLayer('.inner-layer-1',360,5);
// animateLayer('.inner-layer-2',-360,3);
// animateLayer('.inner-layer-3',360,6);
// animateLayer('.inner-grid',-360,10);


const testLayer = document.querySelector('.layer-1');
const testLayer2 = document.querySelector('.inner-layer-1');
const baseLayer = document.querySelector('.kalei-container');

console.log(testLayer2.children[1]);


gsap.to(testLayer2.children[1],{
    scrollTrigger:{
        trigger: baseLayer,
        pin: true,
        scrub: true,
        markers: true
    },
    rotation: 45
});





