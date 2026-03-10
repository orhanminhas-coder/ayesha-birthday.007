let count = 3;

let counter = document.getElementById("counter");

let timer = setInterval(function(){

count--;

counter.innerText = count;

if(count==0){

clearInterval(timer);

document.getElementById("countdown").style.display="none";

document.getElementById("main").classList.remove("hidden");

createHearts();

}

},1000);


function createHearts(){

let hearts=document.getElementById("hearts");

for(let i=0;i<200;i++){

let heart=document.createElement("span");

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"%";

heart.style.fontSize=Math.random()*12+8+"px";

heart.style.animationDuration=(Math.random()*3+2)+"s";

hearts.appendChild(heart);

}

}


document.getElementById("startBtn").onclick=function(){

document.getElementById("main").style.display="none";

document.getElementById("bookSection").classList.remove("hidden");

document.getElementById("music").play();

}


document.getElementById("letterBtn").onclick=function(){

document.getElementById("bookSection").style.display="none";

document.getElementById("letter").classList.remove("hidden");

typeMessage();

}


let text="Ayesha, you are the most beautiful part of my life. Happy Birthday ❤️";

let i=0;

function typeMessage(){

if(i<text.length){

document.getElementById("message").innerHTML+=text.charAt(i);

i++;

setTimeout(typeMessage,70);

}

}