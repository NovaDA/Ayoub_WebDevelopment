const title = document.getElementById('page-title').textContent
const images = ["../images/gh_01.jpg", "../images/gh_02.jpg", "../images/gh_03.jpg" , "../images/gh_04.jpg", "../images/gh_05.jpg"]
const imagesBH = ["../images/Raad1.png", "../images/Raad2.png", "../images/Raad3.png", "../images/Raad1.png", "../images/Raad2.png"]
const imagesQR = ["../images/QuestionRoulette01.png", "../images/QuestionRoulette02.png", "../images/QuestionRoulette03.png", "../images/QuestionRoulette04.png", 
"../images/QuestionRoulette05.png", "../images/QuestionRoulette06.png"]
const imagesHM = ["../images/HappyMinds1.png", "../images/HappyMinds2.png", "../images/HappyMinds3.png", "../images/HappyMinds4.png", "../images/HappyMinds5.png", "../images/HappyMinds6.png"
, "../images/HappyMinds7.png", "../images/HappyMinds8.png", "../images/HappyMinds9.png", "../images/HappyMinds21.png", "../images/HappyMinds22.png", "../images/HappyMinds23.png", "../images/HappyMinds24.png", , "../images/HappyMinds25.png"]
const imagesPP = ["../images/gh_01.jpg", "../images/Raad1.png", "../images/QuestionRoulette01.png", "../images/HappyMinds1.png"]
// const carousel = document.querySelector(".card-img-top");
const image = document.getElementById("image-slider")
const interval = setInterval(function() {
    startCarousel()
}, 5000)

var index = 1;

startCarousel = () =>{
    if(title === 'GHOST HUNTERS'){
        if(index > images.length - 1) index = 0;
        image.src = images[index++];
    }else if(title === 'HABBIT BUDDY'){
        if(index > imagesBH.length - 1) index = 0;
        image.src = imagesBH[index++];
    }else if(title === 'QUESTION ROULETTE'){
        if(index > imagesQR.length - 1) index = 0;
        image.src = imagesQR[index++];
    }else if(title === 'AYOUB LAISSAOUI'){
        if(index > imagesPP.length - 1) index = 0;
        image.src = imagesPP[index++];
    }else{
        if(index > imagesHM.length - 1) index = 0;
        image.src = imagesHM[index++];
    }
    
    image.classList.remove("fade");
    void image.offsetWidth;
    image.classList.add("fade");
    if(index > images.length - 1) index = 0;
}
