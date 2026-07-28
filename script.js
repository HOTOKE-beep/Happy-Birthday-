/* ===================================
   HOTOKE V2 - Jasmine Cinematic Website
   Main Script
=================================== */


/* =========================
   Sakura Petal Generator 🌸
========================= */

function createPetal() {

    const petal = document.createElement("div");

    petal.classList.add("petal");


    petal.style.left =
    Math.random() * 100 + "vw";


    petal.style.animationDuration =
    (Math.random() * 5 + 5) + "s";


    petal.style.opacity =
    Math.random();


    const size =
    Math.random() * 10 + 10;


    petal.style.width =
    size + "px";

    petal.style.height =
    size + "px";


    document.body.appendChild(petal);


    setTimeout(() => {

        petal.remove();

    },10000);

}


setInterval(createPetal,300);



/* =========================
   Surprise Message 💌
========================= */

function showMessage(){

    const message =
    document.querySelector(".message");


    if(message){

        message.classList.toggle("show");

    }

}



/* =========================
   Music Controller 🎵
========================= */


const music =
document.getElementById("music");


const musicBtn =
document.querySelector(".music-btn");


let playing = false;


if(musicBtn && music){


musicBtn.addEventListener("click",()=>{


    if(playing){

        music.pause();

        musicBtn.innerHTML="🎵";

        playing=false;

    }

    else{

        music.play();

        musicBtn.innerHTML="⏸️";

        playing=true;

    }


});


}



/* =========================
   Opening Screen Start 🌸
========================= */

function startExperience(){

    const music = document.getElementById("music");
    const opening = document.getElementById("opening-screen");


    // Hide opening screen
    if(opening){

        opening.classList.add("hide");

    }


    // Start music
    if(music){

        music.play()
        .then(()=>{

            console.log("Music started");

        })
        .catch(()=>{

            console.log("Music permission required");

        });

    }

}



/* =========================
   Smooth Entrance
========================= */


window.addEventListener("load",()=>{


    document.body.style.opacity="1";


});
