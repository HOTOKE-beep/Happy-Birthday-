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
/* =========================
   Wishes Scene 💌
========================= */

const wishes = [

    "Happy Birthday Jasmine 🌸 I hope your day is filled with joy and everything you have been wishing for.",

    "May every new chapter of your life bring happiness, peace and beautiful memories ✨",

    "Keep smiling, keep shining and always stay the amazing person you are 🖤",

    "May this year bring you endless reasons to smile 🌸"

];


let wishIndex = 0;



function showWishes(){

    const screen = document.getElementById("wishes-screen");

    const text = document.getElementById("wish-text");


    if(screen){

        screen.classList.add("show");

    }


    if(text){

        text.innerHTML = wishes[wishIndex];

    }

}



function nextWish(){

    wishIndex++;


    const text = document.getElementById("wish-text");


    if(wishIndex < wishes.length){

        text.innerHTML = wishes[wishIndex];

    }

    else{

    showFinalScene();

    }

}
/* =========================
   Final Scene Typewriter 🎬
========================= */

function showFinalScene(){

    const wishes =
    document.getElementById("wishes-screen");

    const final =
    document.getElementById("final-screen");


    if(wishes){

        wishes.style.display="none";

    }


    if(final){

        final.classList.add("show");

    }


    typeWriter(
        "final-title",
        "Happy Birthday Jasmine 🌸",
        100
    );


    setTimeout(()=>{

        typeWriter(
            "final-message",
            "May your life always be filled with happiness ✨\n\nOoh... Happy Birthday to your brother too 😄\n\nMade by HOTOKE 🖤",
            70
        );

    },2500);

}



function typeWriter(id,text,speed){

    let i = 0;

    const element =
    document.getElementById(id);


    element.innerHTML = "";


    function typing(){

        if(i < text.length){

            element.innerHTML += text.charAt(i);

            i++;

            setTimeout(typing,speed);

        }

    }


    typing();

}
