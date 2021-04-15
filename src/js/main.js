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
const testLayer2 = document.querySelectorAll('.inner-layer-1');
const baseLayer = document.querySelector('.kalei-container');
const wrapper = document.querySelector('.wrapper');

//console.log(testLayer2.children[1]);


for(let i=0;i<testLayer2.length;i++){
    for(let j=0;j<testLayer2[i].children.length;j++){
        gsap.to(testLayer2[i].children[j],{
            scrollTrigger:{
                trigger: wrapper,
                pin: true,
                scrub: 1,
                markers: true
            },
            rotation: 360
        });

        //console.log(testLayer2[i].children[j]);
    }
    
}

// gsap.to(testLayer2.children[1],{
//     scrollTrigger:{
//         trigger: baseLayer,
//         pin: true,
//         scrub: 1,
//         markers: true
//     },
//     rotation: 360
// });





