let looper = 0;
let degrees = 0;
let arrow = document.getElementById('img1');

function rotateAnimation(el,speed){
    console.log("hi there");
    
    arrow.style.transform = `rotate(${degrees}deg`;
    looper = setInterval(speed);
    degrees++;
    if(degrees >= 359){
        degrees = 1;
    }

   // document.getElementById("status").innerHTML = `rotate${degrees}deg`;
}

rotateAnimation("img1", 1);

