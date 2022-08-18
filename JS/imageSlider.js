const title = document.getElementById('page-title').textContent
const images = ["../images/gh_01.jpg", "../images/gh_02.jpg", "../images/gh_03.jpg" , "../images/gh_04.jpg", "../images/gh_05.jpg"]
const imagesHabbitBuddy = ["../images/Raad1.png", "../images/Raad2.png", "../images/Raad3.png", "../images/Raad1.png", "../images/Raad2.png"]
// const carousel = document.querySelector(".card-img-top");
const image = document.getElementById("image-slider")
const interval = setInterval(function() {
    startCarousel()
}, 5000)

var index = 1;

startCarousel = () =>{
    if(title === 'GHOST HUNTERS'){
        image.src = images[index++];
    }else{
        image.src = imagesHabbitBuddy[index++];
    }
    
    image.classList.remove("fade");
    void image.offsetWidth;
    image.classList.add("fade");
    if(index > images.length - 1) index = 0;
}
