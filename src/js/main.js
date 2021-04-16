'use strict';

// const { default: gsap } = require("gsap/gsap-core");

//import { gsap } from "gsap";


//COLORS SIMILAR TO SASS COLORS
const baseColor = 'rgb(21, 21, 21)';
const firstColor = 'rgb(29, 210, 198)';
const secondColor = 'rgb(208, 208, 23)';
const thirdColor = 'rgb(221, 26, 120)';

///GLOBAL VARIABLES
const wrapper = document.querySelector('.wrapper'); 
const baselayer = document.querySelector('.kalei-container');

//ANIMATE ALL THE INNER UL'S INSIDE THE THREE MAIN UL'S
function animateInnerLayer(layer,rotation){ 

    //LOOPING THROUGH THE LAYERS
    for(let x=1;x<=3;x++){
        const innerLayer = document.querySelectorAll(`${layer}${+ x}`);

        for(let i=0;i<innerLayer.length;i++){
            for(let j=0;j<innerLayer[i].children.length;j++){
                if(x === 1){
                    gsap.to(innerLayer[i].children[j],{
                        scrollTrigger:{
                            trigger: wrapper,
                            pin: baselayer,
                            scrub: 1,
                            markers: true
                        },
                        rotation: -rotation,
                        backgroundImage: 'linear-gradient(blue, green)'
                    });
                // }else if( x=== 2){
                //     gsap.to(innerLayer[i].children[j],{
                //         scrollTrigger:{
                //             trigger: wrapper,
                //             pin: baselayer,
                //             scrub: 1,
                //             //markers: true
                //         },
                //         //rotation: rotation,
                //         scale: .2,
                //         rotationY: 360,
                //         // backgroundImage: 'linear-gradient(pink, brown)'
                //     });
                // }else if(x===3){
                //     gsap.to(innerLayer[i].children[j],{
                //         scrollTrigger:{
                //             trigger: wrapper,
                //             pin: baselayer,
                //             scrub: 1,
                //             //markers: true
                //         },
                //         rotation: rotation,
                //         scaleX: .5,
                //         skewY: 45,
                //         rotationX: rotation,
                //         backgroundImage: 'linear-gradient(red, yellow)'
                //     });
                // }
                
            }  
        }
    }
}

//SCROLLTRIGGER FUNCTION TO REDUCE CODE
function scrollTrig(layer,color1,color2){
    gsap.to(layer,{
        scrollTrigger:{
            trigger: wrapper,
            pin: baselayer,
            scrub: 1,
            markers: true
        },
        //rotation: rot,
        backgroundImage: `linear-gradient(${color1}, ${color2})`
    });
}

//ANIMATE THE OUTER UL'S. FOR NOW ONLY COLOR CHANGE DUE TO BAD TRANSFORM ON THE STAR CLIP-PATH(inner-layer-1 li)
function animateOuterLayer(layer){

    for(let x=1;x<=3;x++){
        const outerLayer = document.querySelector(`${layer}${x}`);

        for(let i=0; i<outerLayer.children.length;i++){
            if(x===1){
                scrollTrig(outerLayer.children[i],thirdColor,secondColor);
            }else if(x===2){
                scrollTrig(outerLayer.children[i], secondColor, firstColor);
            }else if(x===3){
                scrollTrig(outerLayer.children[i],firstColor,thirdColor);
            }      
        }
        }
    }

//EXECUTE
//animateOuterLayer('.layer-');
animateInnerLayer('.inner-layer-', 360);





