'use strict';

// const { default: gsap } = require("gsap/gsap-core");

//import { gsap } from "gsap";

// function animateLayer(layer,deg,sec){
//     const innerLayer1 = document.querySelectorAll(layer);

//     for(let i=0;i<innerLayer1.length;i++){
//         for(let n=0;n<innerLayer1[i].children.length;n++){
//             gsap.to(innerLayer1[i].children[n],{
//                 rotation: deg, 
//                 duration: sec,
//                 repeat: -1
//             });
//         } 
//     }
// }

// animateLayer('.inner-layer-1',360,5);
// animateLayer('.inner-layer-2',-360,3);
// animateLayer('.inner-layer-3',360,6);
// animateLayer('.inner-grid',-360,10);

// const baseLayer = document.querySelector('.kalei-container');
// const wrapper = document.querySelector('.wrapper');

// const layer1 = document.querySelector('.layer-1');
// const layer2 = document.querySelector('.layer-2');
// const layer3 = document.querySelector('.layer-3');

// const innerLayer1 = document.querySelectorAll('.inner-layer-1');
// const innerLayer2 = document.querySelectorAll('.inner-layer-2');
// const innerLayer3 = document.querySelectorAll('.inner-layer-3');





// for(let i=0;i<innerLayer1.length;i++){
//     for(let j=0;j<innerLayer1[i].children.length;j++){
//         gsap.to(innerLayer1[i].children[j],{
//             scrollTrigger:{
//                 trigger: wrapper,
//                 pin: true,
//                 scrub: 1,
//                 markers: true
//             },
//             rotation: 360
//         });
//     }  
// }


const baseColor = 'rgb(21, 21, 21)';
const firstColor = 'rgb(29, 210, 198)';
const secondColor = 'rgb(208, 208, 23)';
const thirdColor = 'rgb(221, 26, 120)';

function animateInnerLayer(layer,rotation){
   
    const wrapper = document.querySelector('.wrapper');

    for(let x=1;x<=3;x++){
        const innerLayer = document.querySelectorAll(`${layer}${+ x}`);

        for(let i=0;i<innerLayer.length;i++){
            for(let j=0;j<innerLayer[i].children.length;j++){
                if(x === 1){
                    gsap.to(innerLayer[i].children[j],{
                        scrollTrigger:{
                            trigger: wrapper,
                            pin: true,
                            scrub: 1,
                            markers: true
                        },
                        rotation: -rotation,
                        backgroundImage: 'linear-gradient(blue, green)'
                    });
                }else if( x=== 2){
                    gsap.to(innerLayer[i].children[j],{
                        scrollTrigger:{
                            trigger: wrapper,
                            pin: true,
                            scrub: 1,
                            //markers: true
                        },
                        //rotation: rotation,
                        scale: .2,
                        rotationY: 360,
                        // backgroundImage: 'linear-gradient(pink, brown)'
                    });
                }else if(x===3){
                    gsap.to(innerLayer[i].children[j],{
                        scrollTrigger:{
                            trigger: wrapper,
                            pin: true,
                            scrub: 1,
                            //markers: true
                        },
                        rotation: rotation,
                        scaleX: .5,
                        skewY: 45,
                        rotationX: rotation,
                        backgroundImage: 'linear-gradient(red, yellow)'
                    });
                }
                
            }  
        }
    }
}

function animateOuterLayer(layer){
    const wrapper = document.querySelector('.wrapper'); //2x..hoeft niet

    for(let x=1;x<=3;x++){
        const outerLayer = document.querySelector(`${layer}${x}`);

        for(let i=0; i<outerLayer.children.length;i++){
            if(x===1){
                gsap.to(outerLayer.children[i],{
                    scrollTrigger:{
                        trigger: wrapper,
                        pin: true,
                        scrub: 2,
                        markers: true
                    },
                    backgroundImage: `linear-gradient(${thirdColor}, ${secondColor})`
                });
            }else if(x===2){
                gsap.to(outerLayer.children[i],{
                    scrollTrigger:{
                        trigger: wrapper,
                        pin: true,
                        scrub: 2,
                        markers: true
                    },
                    backgroundImage: `linear-gradient(${secondColor}, ${firstColor})`,
                    rotation: 360
                });
            }else if(x===3){
                gsap.to(outerLayer.children[i],{
                    scrollTrigger:{
                        trigger: wrapper,
                        pin: true,
                        scrub: 2,
                        markers: true
                    },
                    backgroundImage: `linear-gradient(${firstColor}, ${thirdColor})`,
                    rotation: -360
                }); 
            }
            
        }
        }
    }

animateOuterLayer('.layer-');
animateInnerLayer('.inner-layer-', 360);





